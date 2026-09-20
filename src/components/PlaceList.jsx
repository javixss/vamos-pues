import React from 'react';
import PlaceCard from './PlaceCard';

const PlaceList = ({ places, onSelectPlace, onLocateOnMap, onResetFilters }) => {
  return (
    <section id="lista-lugares" className="container" style={{ margin: '2rem auto 4rem auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--rosa)', textShadow: '2px 2px 0px var(--violeta-dark)' }}>
            EXPLORA LOS PLANES EN MEDELLÍN
          </h2>
          <p style={{ fontWeight: '700', fontSize: '1.05rem' }}>
            Descubre opciones accesibles, parques, cultura y centros comerciales en el Valle de Aburrá.
          </p>
        </div>
      </div>

      {places.length === 0 ? (
        <div 
          className="pop-border pop-shadow bg-marfil" 
          style={{ padding: '3rem 1.5rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--rosa)', marginBottom: '0.75rem' }}>
            ¡NO ENCONTRAMOS PARCHES CON ESTOS CRITERIOS!
          </h3>
          <p style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '1.5rem' }}>
            Intenta aumentar tu presupuesto, seleccionar más categorías o restablecer los filtros para ver todos los lugares disponibles.
          </p>
          <button 
            type="button" 
            className="pop-btn bg-chartreuse" 
            onClick={onResetFilters}
          >
            🔄 Restablecer todos los filtros
          </button>
        </div>
      ) : (
        <div className="places-grid">
          {places.map((place) => (
            <PlaceCard 
              key={place.id} 
              place={place} 
              onSelectPlace={onSelectPlace}
              onLocateOnMap={onLocateOnMap}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PlaceList;
