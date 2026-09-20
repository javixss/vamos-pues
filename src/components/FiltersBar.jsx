import React, { useState } from 'react';
import { categoriesList, zonesList } from '../data/places';

const FiltersBar = ({
  searchTerm,
  setSearchTerm,
  selectedCategories,
  setSelectedCategories,
  maxBudget,
  setMaxBudget,
  adultFilter,
  setAdultFilter,
  selectedZone,
  setSelectedZone,
  totalResults,
  onResetFilters,
  allPlaces,
  onSelectPlace
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter category toggle
  const toggleCategory = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(c => c !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  // Autocomplete matching names
  const suggestions = searchTerm.trim().length > 1
    ? allPlaces.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 5)
    : [];

  return (
    <section id="filtros-seccion" className="container" style={{ margin: '2.5rem auto 1.5rem auto' }}>
      <div 
        className="pop-border pop-shadow bg-marfil" 
        style={{ padding: '1.75rem', position: 'relative' }}
      >
        {/* Header Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--rosa)', textShadow: '2px 2px 0px var(--violeta-dark)' }}>
              🔎 BUSCA Y FILTRA TU PARCHE
            </h3>
            <p style={{ fontWeight: '700', fontSize: '0.95rem' }}>
              Mostrando <span style={{ backgroundColor: 'var(--chartreuse)', padding: '0.1rem 0.5rem', border: '2px solid var(--violeta-dark)' }}>{totalResults} lugares</span> según tus preferencias
            </p>
          </div>

          <button 
            className="pop-btn pop-btn-sm bg-orange"
            onClick={onResetFilters}
            title="Reiniciar todos los filtros"
          >
            🔄 Restablecer Filtros
          </button>
        </div>

        {/* 1. BUSCADOR CON AUTOCOMPLETADO */}
        <div style={{ position: 'relative', marginBottom: '1.75rem' }}>
          <label htmlFor="search-input" style={{ display: 'block', fontWeight: '900', marginBottom: '0.4rem', textTransform: 'uppercase', fontSize: '0.95rem' }}>
            Escribe el nombre del lugar o palabra clave:
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              id="search-input"
              type="text"
              className="pop-input"
              placeholder="Ej: Arkadia, Parque Explora, Jardín Botánico, Café, Rooftop..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="pop-btn bg-alerta"
                style={{ padding: '0 1rem' }}
                title="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>

          {/* Instant suggestions list */}
          {showSuggestions && suggestions.length > 0 && (
            <div 
              className="pop-border" 
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: '#FFF',
                zIndex: 50,
                boxShadow: '6px 6px 0px var(--violeta-dark)',
                marginTop: '4px'
              }}
            >
              <div style={{ padding: '0.5rem', backgroundColor: 'var(--chartreuse)', borderBottom: '2px solid var(--violeta-dark)', fontWeight: '900', fontSize: '0.85rem' }}>
                SUGERENCIAS DIRECTAS (Haz clic para ver su ficha completa):
              </div>
              {suggestions.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectPlace(p);
                    setShowSuggestions(false);
                  }}
                  style={{
                    padding: '0.75rem 1rem',
                    borderBottom: '1px solid #ddd',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--gris-suave)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                >
                  <div>
                    <strong>{p.name}</strong> <span style={{ fontSize: '0.85rem', color: '#666' }}>({p.category})</span>
                    {p.isAdultOnly && <span style={{ marginLeft: '0.5rem', color: 'red', fontWeight: 'bold' }}>[+18]</span>}
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--azul-majorelle)' }}>
                    {p.priceLabel}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. FILTRO POR CATEGORÍAS (SELECCIÓN MÚLTIPLE) */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '0.95rem' }}>
              🗂️ Categorías (Selecciona una o varias):
            </span>
            {selectedCategories.length > 0 && (
              <button 
                onClick={() => setSelectedCategories([])}
                style={{ background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem' }}
              >
                Limpiar categorías ({selectedCategories.length})
              </button>
            )}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {categoriesList.map((cat) => {
              const isActive = selectedCategories.includes(cat.id);
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-chip ${isActive ? 'active' : ''}`}
                  onClick={() => toggleCategory(cat.id)}
                  aria-pressed={isActive}
                >
                  {cat.name}
                  {isActive && <span style={{ fontWeight: 'bold' }}>✓</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENEDOR FLEXIBLE: PRECIO, ZONA Y MAYORES DE EDAD */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem',
          paddingTop: '1.25rem',
          borderTop: '3px dashed var(--violeta-dark)'
        }}>

          {/* 3. FILTRO POR PRECIO / PRESUPUESTO */}
          <div className="slider-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label htmlFor="price-slider" style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '0.95rem' }}>
                💰 Presupuesto:
              </label>
              <span style={{ 
                fontWeight: '900', 
                fontSize: '1rem', 
                backgroundColor: 'var(--chartreuse)', 
                padding: '0.2rem 0.6rem', 
                border: '2px solid var(--violeta-dark)'
              }}>
                {maxBudget === 0 
                  ? 'Solo Gratis ($0 COP)' 
                  : maxBudget >= 120000 
                  ? 'Todos los presupuestos (Desde $0)' 
                  : `De $0 a $${maxBudget.toLocaleString('es-CO')} COP (Incluye Gratis)`}
              </span>
            </div>

            <input
              id="price-slider"
              type="range"
              min="0"
              max="120000"
              step="5000"
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="pop-range"
            />

            <p style={{ fontSize: '0.8rem', color: '#555', fontWeight: 'bold' }}>
              * Los lugares gratuitos ($0) se incluyen en cualquier presupuesto seleccionado.
            </p>

            {/* Presupuestos rápidos */}
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginTop: '0.2rem' }}>
              <button 
                type="button" 
                onClick={() => setMaxBudget(0)}
                className={`pop-btn-sm ${maxBudget === 0 ? 'bg-chartreuse' : 'bg-marfil'}`}
                style={{ cursor: 'pointer' }}
              >
                Solo Gratis ($0)
              </button>
              <button 
                type="button" 
                onClick={() => setMaxBudget(10000)}
                className={`pop-btn-sm ${maxBudget === 10000 ? 'bg-chartreuse' : 'bg-marfil'}`}
                style={{ cursor: 'pointer' }}
              >
                Hasta $10.000
              </button>
              <button 
                type="button" 
                onClick={() => setMaxBudget(20000)}
                className={`pop-btn-sm ${maxBudget === 20000 ? 'bg-chartreuse' : 'bg-marfil'}`}
                style={{ cursor: 'pointer' }}
              >
                Hasta $20.000
              </button>
              <button 
                type="button" 
                onClick={() => setMaxBudget(50000)}
                className={`pop-btn-sm ${maxBudget === 50000 ? 'bg-chartreuse' : 'bg-marfil'}`}
                style={{ cursor: 'pointer' }}
              >
                Hasta $50.000
              </button>
              <button 
                type="button" 
                onClick={() => setMaxBudget(120000)}
                className={`pop-btn-sm ${maxBudget >= 120000 ? 'bg-chartreuse' : 'bg-marfil'}`}
                style={{ cursor: 'pointer' }}
              >
                Cualquier precio
              </button>
            </div>
          </div>

          {/* 4. FILTRO POR ZONA DEL VALLE DE ABURRÁ */}
          <div>
            <label htmlFor="zone-select" style={{ display: 'block', fontWeight: '900', textTransform: 'uppercase', fontSize: '0.95rem', marginBottom: '0.4rem' }}>
              📍 Zona del Área Metropolitana:
            </label>
            <select
              id="zone-select"
              className="pop-select"
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
            >
              {zonesList.map((zone) => (
                <option key={zone} value={zone}>{zone}</option>
              ))}
            </select>
          </div>

 {/* 5. SECCIÓN / FILTRO PARA MAYORES DE EDAD (+18) 🔞 */}
          <div style={{
            backgroundColor: adultFilter === 'adult-only' ? '#FFE4E8' : 'rgba(255,255,255,0.7)',
            border: '2px solid var(--violeta-dark)',
            padding: '0.6rem 0.8rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
            alignSelf: 'start'
          }}>
            <label htmlFor="adult-filter-select" style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              🔞 Restricción de Edad:
            </label>
            <select
              id="adult-filter-select"
              className="pop-select"
              value={adultFilter}
              onChange={(e) => setAdultFilter(e.target.value)}
              style={{ padding: '0.5rem 0.8rem' }}
            >
              <option value="all">Ver todos (Familiar y +18)</option>
              <option value="family-only">✅ Solo planes familiares (Apto todo público)</option>
              <option value="adult-only">🔞 Solo planes +18 (Bares y vida nocturna)</option>
            </select>
            {adultFilter === 'adult-only' && (
              <p style={{ fontSize: '0.8rem', color: 'var(--rojo-alerta)', fontWeight: 'bold', marginTop: '0.3rem' }}>
                * Exclusivo para mayores de 18 años. Requiere documento de identidad.
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FiltersBar;
