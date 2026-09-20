import React from 'react';

const PlaceCard = ({ place, onSelectPlace, onLocateOnMap }) => {
  return (
    <article 
      className={`pop-border pop-shadow ${place.color || 'bg-rosa'} flex flex-col`} 
      style={{ 
        padding: '1.5rem', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        position: 'relative'
      }}
    >
      {/* Top Badges */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ 
            fontSize: '0.8rem', 
            fontWeight: '900', 
            textTransform: 'uppercase',
            backgroundColor: 'rgba(255,255,255,0.9)',
            color: 'var(--violeta-dark)',
            padding: '0.2rem 0.5rem',
            border: '2px solid var(--violeta-dark)'
          }}>
            {place.category}
          </span>

          <span className="badge-price">
            💰 {place.priceLabel}
          </span>
        </div>

        {/* Prominent Adult-Only Warning */}
        {place.isAdultOnly && (
          <div style={{ marginBottom: '0.75rem' }}>
            <span className="badge-adult">
              🔞 PLAN +18 (EXCLUSIVO MAYORES)
            </span>
          </div>
        )}

        <h3 style={{ 
          fontSize: '1.6rem', 
          marginBottom: '0.5rem', 
          lineHeight: '1.2',
          color: place.color === 'bg-rosa' || place.color === 'bg-morado' || place.color === 'bg-azul' ? '#FFFFFF' : 'var(--violeta-dark)',
          textShadow: place.color === 'bg-rosa' || place.color === 'bg-morado' || place.color === 'bg-azul' ? '2px 2px 0px var(--violeta-dark)' : 'none'
        }}>
          {place.name}
        </h3>

        <p style={{ 
          fontSize: '0.98rem', 
          lineHeight: '1.4', 
          marginBottom: '1rem',
          color: place.color === 'bg-rosa' || place.color === 'bg-morado' || place.color === 'bg-azul' ? '#FDFDFD' : 'var(--violeta-dark)'
        }}>
          {place.description}
        </p>
      </div>

      {/* Info Box */}
      <div>
        <div style={{ 
          marginTop: '0.5rem', 
          padding: '0.85rem', 
          backgroundColor: 'rgba(255,255,255,0.85)', 
          color: 'var(--violeta-dark)',
          border: '2px solid var(--violeta-dark)',
          fontSize: '0.88rem'
        }}>
          <p style={{ marginBottom: '0.3rem' }}>
            <strong>📍 Zona:</strong> {place.zone || 'Medellín'} ({place.address})
          </p>
          <p style={{ marginBottom: '0.3rem' }}>
            <strong>⏰ Horario:</strong> {place.hours}
          </p>
          <p>
            <strong>🚇 Metro/Bus:</strong> {place.howToGet}
          </p>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <button 
            type="button"
            className="pop-btn pop-btn-sm bg-dark"
            onClick={() => onSelectPlace(place)}
            style={{ color: 'var(--chartreuse)', flex: '1 1 auto' }}
          >
            🔎 VER FICHA COMPLETA
          </button>

          {onLocateOnMap && place.coords && (
            <button 
              type="button"
              className="pop-btn pop-btn-sm bg-chartreuse"
              onClick={() => onLocateOnMap(place)}
              title="Ver en el mapa"
            >
              🗺️
            </button>
          )}

          {place.links?.instagram && (
            <a 
              href={place.links.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="pop-btn pop-btn-sm bg-marfil"
              title="Instagram"
            >
              📸
            </a>
          )}

          {place.links?.facebook && (
            <a 
              href={place.links.facebook} 
              target="_blank" 
              rel="noreferrer" 
              className="pop-btn pop-btn-sm bg-marfil"
              title="Facebook"
            >
              👥
            </a>
          )}

          {place.links?.tiktok && (
            <a 
              href={place.links.tiktok} 
              target="_blank" 
              rel="noreferrer" 
              className="pop-btn pop-btn-sm bg-marfil"
              title="TikTok"
            >
              🎵
            </a>
          )}

          {place.links?.youtube && (
            <a 
              href={place.links.youtube} 
              target="_blank" 
              rel="noreferrer" 
              className="pop-btn pop-btn-sm bg-marfil"
              title="YouTube"
            >
              ▶️
            </a>
          )}

          {place.links?.web && (
            <a 
              href={place.links.web} 
              target="_blank" 
              rel="noreferrer" 
              className="pop-btn pop-btn-sm bg-marfil"
              title="Sitio Web Oficial"
            >
              🌐
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default PlaceCard;
