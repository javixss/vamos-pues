import React from 'react';

const PlaceDetailModal = ({ place, onClose, onLocateOnMap }) => {
  if (!place) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content pop-border" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className={`${place.color || 'bg-rosa'} pop-border-sm`} style={{ padding: '2rem 1.5rem 1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="badge-zone pop-shadow-static">
              📍 {place.zone || 'Medellín'}
            </span>
            <span className="badge-price pop-shadow-static">
              💰 {place.priceLabel || 'Consultar'}
            </span>
            {place.isAdultOnly && (
              <span className="badge-adult">
                🔞 SOLO MAYORES DE EDAD (+18)
              </span>
            )}
          </div>
          <h2 style={{ 
            fontSize: '2.2rem', 
            color: place.color === 'bg-rosa' || place.color === 'bg-morado' || place.color === 'bg-azul' ? '#FFF' : 'var(--violeta-dark)', 
            textShadow: place.color === 'bg-rosa' || place.color === 'bg-morado' || place.color === 'bg-azul' ? '3px 3px 0px var(--violeta-dark)' : 'none' 
          }}>
            {place.name}
          </h2>
          <p style={{ fontWeight: 'bold', fontSize: '1.1rem', opacity: 0.95, textTransform: 'uppercase' }}>
            {place.category} {place.subCategory ? `• ${place.subCategory}` : ''}
          </p>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {place.isAdultOnly && (
            <div style={{
              backgroundColor: '#FFEBEF',
              border: '3px solid var(--rojo-alerta)',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '2rem' }}>⚠️</span>
              <div>
                <strong style={{ color: 'var(--rojo-alerta)', fontSize: '1.1rem', display: 'block' }}>
                  Restricción de edad obligatoria (+18)
                </strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--violeta-dark)' }}>
                  Este establecimiento cuenta con expendio de licores y actividades nocturnas exclusivamente para mayores de edad. Se exige documento de identidad original para el ingreso.
                </p>
              </div>
            </div>
          )}

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--rosa)' }}>
              ¿De qué se trata?
            </h4>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              {place.description}
            </p>
          </div>

          {/* Details Box */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '3px solid var(--violeta-dark)',
            padding: '1.25rem',
            boxShadow: '4px 4px 0px var(--violeta-dark)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}>
            <div>
              <strong style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.85rem', color: 'var(--azul-majorelle)' }}>
                📍 Dirección exacta:
              </strong>
              <p style={{ fontWeight: '600' }}>{place.address}</p>
            </div>

            <div>
              <strong style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.85rem', color: 'var(--azul-majorelle)' }}>
                ⏰ Horarios de atención:
              </strong>
              <p style={{ fontWeight: '600' }}>{place.hours}</p>
            </div>

            <div>
              <strong style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.85rem', color: 'var(--azul-majorelle)' }}>
                🚇 ¿Cómo llegar en transporte público?
              </strong>
              <p style={{ fontWeight: '600' }}>{place.howToGet}</p>
            </div>

            <div>
              <strong style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.85rem', color: 'var(--azul-majorelle)' }}>
                💵 Presupuesto promedio:
              </strong>
              <p style={{ fontWeight: '700', color: 'var(--orange)' }}>
                {place.priceLabel} (Aprox. ${place.priceMin?.toLocaleString('es-CO')} - ${place.priceMax?.toLocaleString('es-CO')} COP)
              </p>
            </div>
          </div>

          {/* Tags */}
          {place.tags && place.tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {place.tags.map((tag, i) => (
                <span key={i} style={{ 
                  backgroundColor: 'var(--marfil)', 
                  border: '2px solid var(--violeta-dark)', 
                  padding: '0.2rem 0.6rem', 
                  fontSize: '0.85rem',
                  fontWeight: '700'
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Redes Sociales y Enlaces Oficiales */}
          <div style={{ marginTop: '0.5rem' }}>
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', marginBottom: '0.6rem', color: 'var(--azul-majorelle)' }}>
              🔗 Redes Sociales y Enlaces Oficiales:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {place.links?.instagram && (
                <a 
                  href={place.links.instagram} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="pop-btn pop-btn-sm bg-rosa"
                  style={{ color: '#fff' }}
                >
                  📸 Instagram
                </a>
              )}

              {place.links?.facebook && (
                <a 
                  href={place.links.facebook} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="pop-btn pop-btn-sm bg-azul"
                  style={{ color: '#fff' }}
                >
                  👥 Facebook
                </a>
              )}

              {place.links?.tiktok && (
                <a 
                  href={place.links.tiktok} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="pop-btn pop-btn-sm bg-dark"
                  style={{ color: '#fff' }}
                >
                  🎵 TikTok
                </a>
              )}

              {place.links?.youtube && (
                <a 
                  href={place.links.youtube} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="pop-btn pop-btn-sm bg-alerta"
                  style={{ color: '#fff' }}
                >
                  ▶️ YouTube
                </a>
              )}

              {place.links?.twitter && (
                <a 
                  href={place.links.twitter} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="pop-btn pop-btn-sm bg-dark"
                  style={{ color: '#fff' }}
                >
                  𝕏 Twitter
                </a>
              )}

              {place.links?.web && (
                <a 
                  href={place.links.web} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="pop-btn pop-btn-sm bg-marfil"
                >
                  🌐 Sitio Web
                </a>
              )}

              {place.links?.maps && (
                <a 
                  href={place.links.maps} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="pop-btn pop-btn-sm bg-chartreuse"
                >
                  📍 Google Maps
                </a>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.75rem', borderTop: '2px solid var(--violeta-dark)', paddingTop: '1rem' }}>
            {onLocateOnMap && place.coords && (
              <button 
                className="pop-btn bg-chartreuse"
                onClick={() => {
                  onLocateOnMap(place);
                  onClose();
                }}
              >
                🗺️ Ver en el mapa interactivo
              </button>
            )}

            <button 
              className="pop-btn bg-marfil"
              onClick={onClose}
            >
              Cerrar Ficha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailModal;
