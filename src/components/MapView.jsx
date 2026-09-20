import React, { useEffect, useRef, useState, useMemo } from 'react';
import L from 'leaflet';

// Category emoji icon map
const categoryIcons = {
  'Gastronomía': '🍔',
  'Entretenimiento': '🎮',
  'Cultura': '🎭',
  'Naturaleza': '🌿',
  'Vida nocturna': '🍸',
  'Planes al aire libre': '☀️',
  'Compras': '🛍️'
};

const categoryColors = {
  'Gastronomía': '#FE8616',
  'Entretenimiento': '#DFF800',
  'Cultura': '#7B46F8',
  'Naturaleza': '#00E676',
  'Vida nocturna': '#A609F0',
  'Planes al aire libre': '#DFF800',
  'Compras': '#FA05B8'
};

const mapCategories = [
  { id: 'Todas', label: 'Todas las categorías 🌈' },
  { id: 'Gastronomía', label: 'Gastronomía 🍔' },
  { id: 'Entretenimiento', label: 'Entretenimiento 🎮' },
  { id: 'Cultura', label: 'Cultura 🎭' },
  { id: 'Naturaleza', label: 'Naturaleza 🌿' },
  { id: 'Vida nocturna', label: 'Vida nocturna 🍸' },
  { id: 'Planes al aire libre', label: 'Aire libre ☀️' },
  { id: 'Compras', label: 'Compras 🛍️' }
];

const zonesCoords = {
  'todo': { center: [6.2476, -75.5700], zoom: 12, label: 'Todo el Valle' },
  'poblado': { center: [6.2088, -75.5670], zoom: 14, label: 'El Poblado' },
  'laureles': { center: [6.2440, -75.5920], zoom: 14, label: 'Laureles / Belén' },
  'centro': { center: [6.2464, -75.5681], zoom: 14, label: 'Centro' },
  'norte': { center: [6.2711, -75.5658], zoom: 14, label: 'Norte / Aranjuez' },
  'envigado': { center: [6.1731, -75.5862], zoom: 14, label: 'Envigado' },
  'bello': { center: [6.3382, -75.5451], zoom: 14, label: 'Bello' },
  'santa-elena': { center: [6.2825, -75.5025], zoom: 13, label: 'Santa Elena' }
};

const MapView = ({ places, onSelectPlace, focusedPlace }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const userMarkerRef = useRef(null);
  const [activeZone, setActiveZone] = useState('todo');
  const [selectedMapCategory, setSelectedMapCategory] = useState('Todas');
  const [geoStatus, setGeoStatus] = useState('');

  // Filter places based on selected category in map
  const displayedPlaces = useMemo(() => {
    if (selectedMapCategory === 'Todas') return places;
    return places.filter(p => p.category === selectedMapCategory);
  }, [places, selectedMapCategory]);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [6.2476, -75.5700],
        zoom: 12,
        scrollWheelZoom: false
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    return () => {
      // Clean up map when component unmounts
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Markers whenever displayedPlaces change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear previous markers
    markersRef.current.forEach(m => map.removeLayer(m));
    markersRef.current = [];

    // Add marker for each place that has valid coordinates
    displayedPlaces.forEach((place) => {
      if (!place.coords || !Array.isArray(place.coords) || place.coords.length !== 2) return;

      const iconEmoji = categoryIcons[place.category] || '📍';
      const bgColor = categoryColors[place.category] || '#DFF800';

      const customIcon = L.divIcon({
        className: 'custom-leaflet-pin',
        html: `
          <div style="
            width: 38px;
            height: 38px;
            background-color: ${bgColor};
            border: 3px solid #0D0127;
            box-shadow: 3px 3px 0px #0D0127;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            cursor: pointer;
            transition: transform 0.15s;
          ">
            ${iconEmoji}
          </div>
        `,
        iconSize: [38, 38],
        iconAnchor: [19, 19],
        popupAnchor: [0, -20]
      });

      const marker = L.marker(place.coords, { icon: customIcon }).addTo(map);

      const adultHtml = place.isAdultOnly ? `
        <div style="background-color: #FF1744; color: #FFF; font-size: 10px; font-weight: bold; padding: 2px 6px; border: 1px solid #0D0127; display: inline-block; margin-bottom: 4px;">
          🔞 +18 SOLAMENTE
        </div>
      ` : '';

      const popupHtml = `
        <div style="font-family: 'Outfit', sans-serif; min-width: 200px;">
          ${adultHtml}
          <h4 style="margin: 0 0 4px 0; font-size: 16px; font-weight: 900; color: #0D0127;">${place.name}</h4>
          <div style="font-size: 12px; font-weight: bold; color: #7B46F8; margin-bottom: 4px;">
            ${place.category} • ${place.zone || 'Medellín'}
          </div>
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #333; line-height: 1.3;">
            ${place.description.slice(0, 85)}...
          </p>
          <div style="font-size: 12px; font-weight: 800; color: #FE8616; margin-bottom: 8px;">
            ${place.priceLabel}
          </div>
          <button 
            id="map-btn-${place.id}" 
            style="
              width: 100%;
              background-color: #0D0127;
              color: #DFF800;
              border: 2px solid #0D0127;
              padding: 6px 10px;
              font-family: 'Outfit', sans-serif;
              font-weight: 900;
              font-size: 12px;
              cursor: pointer;
              box-shadow: 2px 2px 0px #7B46F8;
            "
          >
            VER FICHA COMPLETA ➔
          </button>
        </div>
      `;

      marker.bindPopup(popupHtml);

      marker.on('popupopen', () => {
        const btn = document.getElementById(`map-btn-${place.id}`);
        if (btn) {
          btn.onclick = () => onSelectPlace(place);
        }
      });

      // Keep reference
      marker.placeData = place;
      markersRef.current.push(marker);
    });
  }, [displayedPlaces, onSelectPlace]);

  // Handle focused place from external click
  useEffect(() => {
    if (!focusedPlace || !mapInstanceRef.current || !focusedPlace.coords) return;

    const map = mapInstanceRef.current;
    map.setView(focusedPlace.coords, 15, { animate: true });

    // Find marker and open popup
    const targetMarker = markersRef.current.find(m => m.placeData && m.placeData.id === focusedPlace.id);
    if (targetMarker) {
      targetMarker.openPopup();
    }
  }, [focusedPlace]);

  // Jump to specific zone
  const handleZoneSelect = (zoneKey) => {
    setActiveZone(zoneKey);
    const map = mapInstanceRef.current;
    if (!map) return;
    const config = zonesCoords[zoneKey];
    if (config) {
      map.setView(config.center, config.zoom, { animate: true });
    }
  };

  // Find User's Geolocation
  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      setGeoStatus('Tu navegador no soporta geolocalización.');
      return;
    }

    setGeoStatus('Detectando tu ubicación en Medellín...');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        const map = mapInstanceRef.current;
        if (!map) return;

        // Remove old user marker
        if (userMarkerRef.current) {
          map.removeLayer(userMarkerRef.current);
        }

        const userPin = L.circleMarker([userLat, userLng], {
          radius: 10,
          fillColor: '#FA05B8',
          color: '#0D0127',
          weight: 3,
          opacity: 1,
          fillOpacity: 0.9
        }).addTo(map);

        // Approximate 2km radius circle
        const radiusCircle = L.circle([userLat, userLng], {
          radius: 2000,
          color: '#7B46F8',
          fillColor: '#DFF800',
          fillOpacity: 0.15,
          weight: 2,
          dashArray: '5, 5'
        }).addTo(map);

        userMarkerRef.current = L.featureGroup([userPin, radiusCircle]).addTo(map);
        userPin.bindPopup('<strong>📍 ¡Estás aquí!</strong><br/>Círculo de ~2 km a la redonda.').openPopup();

        map.setView([userLat, userLng], 14, { animate: true });
        setGeoStatus('¡Ubicación encontrada! Mostrando parches cercanos a tu alrededor.');
      },
      (err) => {
        console.warn('Geolocation error:', err);
        setGeoStatus('No se pudo acceder a tu ubicación. Puedes explorar seleccionando las zonas de abajo.');
      },
      { timeout: 10000 }
    );
  };

  return (
    <section id="mapa-seccion" className="container" style={{ margin: '3.5rem auto' }}>
      <div className="pop-border pop-shadow bg-marfil" style={{ padding: '2rem 1.5rem' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--azul-majorelle)', textShadow: '2px 2px 0px var(--violeta-dark)' }}>
              🗺️ MAPA INTERACTIVO DE PARCHES
            </h2>
            <p style={{ fontWeight: '700', fontSize: '1rem' }}>
              Explora los lugares georreferenciados en el Valle de Aburrá. Haz clic en cualquier pin para ver detalles.
            </p>
          </div>

          <button
            onClick={handleLocateMe}
            className="pop-btn bg-chartreuse"
            title="Ubicar mi posición actual"
          >
            📍 Ver mi ubicación
          </button>
        </div>

        {geoStatus && (
          <div style={{ 
            backgroundColor: 'var(--chartreuse)', 
            border: '2px solid var(--violeta-dark)', 
            padding: '0.5rem 1rem', 
            fontWeight: '700', 
            fontSize: '0.9rem',
            marginBottom: '1rem'
          }}>
            {geoStatus}
          </div>
        )}

        {/* 1. Category Selector for Map */}
        <div style={{ marginBottom: '0.85rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
          <span style={{ fontWeight: '900', fontSize: '0.85rem', textTransform: 'uppercase' }}>
            Filtrar por categoría:
          </span>
          {mapCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-chip ${selectedMapCategory === cat.id ? 'active' : ''}`}
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.85rem' }}
              onClick={() => setSelectedMapCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2. Zone Selector Buttons */}
        <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
          <span style={{ fontWeight: '900', fontSize: '0.85rem', textTransform: 'uppercase' }}>
            Explorar por zona:
          </span>
          {Object.entries(zonesCoords).map(([key, item]) => (
            <button
              key={key}
              type="button"
              className={`filter-chip ${activeZone === key ? 'active' : ''}`}
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.85rem' }}
              onClick={() => handleZoneSelect(key)}
            >
              {item.label}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: '0.85rem', fontWeight: '800', backgroundColor: 'var(--chartreuse)', padding: '0.2rem 0.6rem', border: '2px solid var(--violeta-dark)' }}>
            Mostrando {displayedPlaces.length} pines
          </span>
        </div>

        {/* The Map Element */}
        <div 
          ref={mapContainerRef} 
          className="map-container"
          style={{ position: 'relative' }}
        />

       

      </div>
    </section>
  );
};

export default MapView;
