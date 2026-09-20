import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FiltersBar from './components/FiltersBar';
import PlaceList from './components/PlaceList';
import RandomPlanner from './components/RandomPlanner';
import MapView from './components/MapView';
import PlaceDetailModal from './components/PlaceDetailModal';
import AddPlaceModal from './components/AddPlaceModal';
import SurveyModal from './components/SurveyModal';
import { getStoredPlaces, saveUserPlace } from './data/places';
import './index.css';

function App() {
  // Places state (combines hardcoded and user submitted places from localStorage)
  const [places, setPlaces] = useState(() => getStoredPlaces());

  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxBudget, setMaxBudget] = useState(120000); // 120000 means "Sin límite"
  const [adultFilter, setAdultFilter] = useState('all'); // 'all', 'family-only', 'adult-only'
  const [selectedZone, setSelectedZone] = useState('Todas las zonas');

  // Modals & Navigation States
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [focusedPlaceForMap, setFocusedPlaceForMap] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSurveyExplicitOpen, setIsSurveyExplicitOpen] = useState(false);

  // Filter computation
  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      // 1. Text search
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesName = place.name.toLowerCase().includes(query);
        const matchesDesc = place.description.toLowerCase().includes(query);
        const matchesCat = place.category.toLowerCase().includes(query);
        const matchesZone = place.zone?.toLowerCase().includes(query);
        const matchesTags = place.tags?.some(tag => tag.toLowerCase().includes(query));

        if (!matchesName && !matchesDesc && !matchesCat && !matchesZone && !matchesTags) {
          return false;
        }
      }

      // 2. Categories (multi-select)
      if (selectedCategories.length > 0) {
        if (!selectedCategories.includes(place.category)) {
          return false;
        }
      }

      // 3. Price / Budget
      if (maxBudget === 0) {
        // Solo lugares gratuitos ($0 COP)
        const isFree = place.priceMin === 0 || place.priceLabel?.toLowerCase().includes('gratis');
        if (!isFree) {
          return false;
        }
      } else if (maxBudget < 120000) {
        // Los lugares gratis ($0 COP) siempre se incluyen dentro del rango de $0 a maxBudget
        const isFree = place.priceMin === 0 || place.priceLabel?.toLowerCase().includes('gratis');
        if (!isFree && place.priceMin > maxBudget) {
          return false;
        }
      }

      // 4. Adult restriction (+18)
      if (adultFilter === 'family-only' && place.isAdultOnly) {
        return false;
      }
      if (adultFilter === 'adult-only' && !place.isAdultOnly) {
        return false;
      }

      // 5. Zone
      if (selectedZone !== 'Todas las zonas') {
        if (!place.zone || !place.zone.toLowerCase().includes(selectedZone.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [places, searchTerm, selectedCategories, maxBudget, adultFilter, selectedZone]);

  // Handler to add a new suggested place
  const handlePlaceAdded = (newPlace) => {
    const updated = saveUserPlace(newPlace);
    setPlaces(updated);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setMaxBudget(120000);
    setAdultFilter('all');
    setSelectedZone('Todas las zonas');
  };

  // Locate place on the map
  const handleLocateOnMap = (place) => {
    setFocusedPlaceForMap(place);
    const mapEl = document.getElementById('mapa-seccion');
    if (mapEl) {
      mapEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Encabezado y Navegación con Logo oficial */}
      <Header 
        onOpenAddModal={() => setIsAddModalOpen(true)}
      />

      <main style={{ flex: '1 0 auto' }}>
        
        {/* 2. Sección Hero con llamado a la acción */}
        <Hero 
          totalPlaces={places.length} 
          onExploreClick={() => {
            const el = document.getElementById('filtros-seccion');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Sección "¿Qué hago hoy?" (Recomendador Aleatorio por Presupuesto) */}
        <RandomPlanner 
          places={places} 
          onSelectPlace={(place) => setSelectedPlace(place)} 
        />

        {/* 4. Buscador y Filtros Completos (Precio, Categorías Múltiples, +18, Zonas) */}
        <FiltersBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          maxBudget={maxBudget}
          setMaxBudget={setMaxBudget}
          adultFilter={adultFilter}
          setAdultFilter={setAdultFilter}
          selectedZone={selectedZone}
          setSelectedZone={setSelectedZone}
          totalResults={filteredPlaces.length}
          onResetFilters={handleResetFilters}
          allPlaces={places}
          onSelectPlace={(place) => setSelectedPlace(place)}
        />

        {/* 5. Listado de Lugares Filtrados */}
        <PlaceList 
          places={filteredPlaces} 
          onSelectPlace={(place) => setSelectedPlace(place)}
          onLocateOnMap={handleLocateOnMap}
          onResetFilters={handleResetFilters}
        />

        {/* 6. Mapa Interactivo de Parches con Pines y Zonas */}
        <MapView 
          places={filteredPlaces.length > 0 ? filteredPlaces : places}
          onSelectPlace={(place) => setSelectedPlace(place)}
          focusedPlace={focusedPlaceForMap}
        />

      </main>

      {/* 7. Modal de Ficha Detallada del Lugar */}
      <PlaceDetailModal 
        place={selectedPlace} 
        onClose={() => setSelectedPlace(null)}
        onLocateOnMap={handleLocateOnMap}
      />

      {/* 8. Modal de Formulario "Agregar un lugar" */}
      <AddPlaceModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)}
        onPlaceAdded={handlePlaceAdded}
      />

      {/* 9. Pop-up / Widget no invasivo de Encuesta de Opinión */}
      <SurveyModal 
        isOpenExplicitly={isSurveyExplicitOpen}
        onCloseExplicit={() => setIsSurveyExplicitOpen(false)}
      />

      {/* 10. Footer */}
      <footer style={{ 
        backgroundColor: 'var(--violeta-dark)', 
        color: 'var(--marfil)', 
        padding: '3rem 1.5rem', 
        textAlign: 'center',
        marginTop: '4rem',
        borderTop: '4px solid var(--chartreuse)'
      }}>
        <div className="container">
          <p style={{ fontWeight: '900', fontSize: '1.6rem', color: 'var(--chartreuse)', textShadow: '2px 2px 0px var(--rosa)' }}>
            VAMOS PUES ⚡ MEDELLÍN
          </p>
          <p style={{ fontSize: '1.1rem', margin: '0.5rem 0 1.5rem 0' }}>
            Encuentra tu próximo parche en el Valle de Aburrá sin complicaciones.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="pop-btn pop-btn-sm bg-chartreuse"
            >
              ➕ Sugerir un lugar
            </button>
            <button 
              onClick={() => setIsSurveyExplicitOpen(true)}
              className="pop-btn pop-btn-sm bg-rosa"
              style={{ color: '#fff' }}
            >
              📝 Dejar comentario / Encuesta
            </button>
          </div>

          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            &copy; {new Date().getFullYear()} Vamos Pues. Hecho con ❤️ para la comunidad de Medellín y el Valle de Aburrá.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
