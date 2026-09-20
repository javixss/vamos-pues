import React, { useState } from 'react';
import { categoriesList, zonesList } from '../data/places';

const AddPlaceModal = ({ isOpen, onClose, onPlaceAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Gastronomía',
    isFree: false,
    priceMin: 0,
    priceMax: 30000,
    priceLabel: '$15.000 - $30.000',
    isAdultOnly: false,
    address: '',
    zone: 'El Poblado',
    hours: '12:00pm a 9:00pm',
    howToGet: 'Cerca a estación de Metro',
    description: '',
    website: '',
    instagram: '',
    facebook: '',
    tiktok: '',
    youtube: '',
    maps: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [createdPlace, setCreatedPlace] = useState(null);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFreeToggle = (checked) => {
    setFormData(prev => ({
      ...prev,
      isFree: checked,
      priceMin: checked ? 0 : 15000,
      priceMax: checked ? 0 : 35000,
      priceLabel: checked ? 'Totalmente Gratis ($0 COP)' : '$15.000 - $35.000'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Default coordinates based on chosen zone
    const zoneCoordsFallback = {
      'El Poblado': [6.2088, -75.5670],
      'Laureles': [6.2440, -75.5920],
      'Centro': [6.2464, -75.5681],
      'Envigado': [6.1731, -75.5862],
      'Bello': [6.3382, -75.5451],
      'Belén': [6.2250, -75.5900],
      'Norte / Aranjuez': [6.2711, -75.5658],
      'Santa Elena': [6.2825, -75.5025]
    };

    const coords = zoneCoordsFallback[formData.zone] || [6.2442, -75.5812];
    // Slightly jitter coordinates so markers in same zone don't directly overlap
    const jitteredCoords = [
      coords[0] + (Math.random() - 0.5) * 0.008,
      coords[1] + (Math.random() - 0.5) * 0.008
    ];

    const colors = ['bg-rosa', 'bg-chartreuse', 'bg-orange', 'bg-azul', 'bg-morado'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newPlace = {
      id: Date.now(),
      name: formData.name.trim(),
      category: formData.category,
      subCategory: 'Sugerido por la comunidad',
      description: formData.description || 'Lugar recomendado por un usuario de la comunidad Vamos Pues.',
      priceMin: formData.isFree ? 0 : (Number(formData.priceMin) || 0),
      priceMax: formData.isFree ? 0 : (Number(formData.priceMax) || 30000),
      priceLabel: formData.isFree ? 'Totalmente Gratis ($0 COP)' : (formData.priceLabel || '$15.000 - $30.000'),
      isAdultOnly: Boolean(formData.isAdultOnly),
      address: formData.address || `${formData.zone}, Medellín`,
      zone: formData.zone,
      coords: jitteredCoords,
      hours: formData.hours || 'Horario regular',
      howToGet: formData.howToGet || 'Transporte público accesible en el Valle de Aburrá',
      links: {
        instagram: formData.instagram || '',
        facebook: formData.facebook || '',
        tiktok: formData.tiktok || '',
        youtube: formData.youtube || '',
        web: formData.website || '',
        maps: formData.maps || ''
      },
      color: randomColor,
      tags: ['comunidad', formData.category.toLowerCase()]
    };

    onPlaceAdded(newPlace);
    setCreatedPlace(newPlace);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div 
        className="modal-content pop-border" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '650px' }}
      >
        <button 
          className="modal-close-btn" 
          onClick={handleClose}
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-chartreuse pop-border-sm" style={{ padding: '2rem 1.5rem 1.25rem' }}>
          <span style={{ 
            backgroundColor: 'var(--violeta-dark)', 
            color: 'var(--chartreuse)', 
            fontSize: '0.8rem', 
            fontWeight: '900', 
            padding: '0.2rem 0.6rem'
          }}>
            COMUNIDAD VAMOS PUES
          </span>
          <h2 style={{ fontSize: '2rem', color: 'var(--violeta-dark)', marginTop: '0.4rem' }}>
            ➕ AGREGAR / SUGERIR UN LUGAR
          </h2>
          <p style={{ fontWeight: '700', fontSize: '0.95rem' }}>
            ¿Conoces un parche increíble que todavía no esté en la página? ¡Compártelo con toda la ciudad!
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: '1.75rem' }}>
          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>🙌</div>
              <h3 style={{ fontSize: '2rem', color: 'var(--rosa)', textShadow: '2px 2px 0px var(--violeta-dark)', marginBottom: '1rem' }}>
                ¡GRACIAS POR COMPARTIR ESTA INFORMACIÓN!
              </h3>
              <div style={{ 
                backgroundColor: 'var(--chartreuse)', 
                border: '3px solid var(--violeta-dark)', 
                padding: '1.25rem', 
                marginBottom: '1.5rem',
                boxShadow: '4px 4px 0px var(--violeta-dark)'
              }}>
                <p style={{ fontSize: '1.15rem', fontWeight: '800' }}>
                  Revisaremos tu sugerencia.
                </p>
                <p style={{ fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  Tu lugar <strong>"{createdPlace?.name}"</strong> ya ha sido agregado temporalmente a tu navegador para que puedas verlo en la lista y en el mapa.
                </p>
              </div>
              <button 
                className="pop-btn bg-dark" 
                onClick={handleClose}
                style={{ color: 'var(--chartreuse)' }}
              >
                Volver a la página
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              
              {/* Nombre */}
              <div>
                <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                  Nombre del lugar *
                </label>
                <input
                  type="text"
                  required
                  className="pop-input"
                  placeholder="Ej: Café Revolución, Mirador San Félix, Bar Berlín..."
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              </div>

              {/* Categoría y Zona */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                    Categoría *
                  </label>
                  <select
                    className="pop-select"
                    value={formData.category}
                    onChange={(e) => handleChange('category', e.target.value)}
                  >
                    {categoriesList.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                    Zona / Municipio *
                  </label>
                  <select
                    className="pop-select"
                    value={formData.zone}
                    onChange={(e) => handleChange('zone', e.target.value)}
                  >
                    {zonesList.filter(z => z !== 'Todas las zonas').map(z => (
                      <option key={z} value={z}>{z}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Restricción +18 */}
              <div style={{
                backgroundColor: formData.isAdultOnly ? '#FFEBEF' : 'var(--gris-suave)',
                border: '2px solid var(--violeta-dark)',
                padding: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <input
                  type="checkbox"
                  id="add-adult"
                  checked={formData.isAdultOnly}
                  onChange={(e) => handleChange('isAdultOnly', e.target.checked)}
                  style={{ width: '22px', height: '22px', accentColor: 'var(--rojo-alerta)', cursor: 'pointer' }}
                />
                <label htmlFor="add-adult" style={{ fontWeight: '800', cursor: 'pointer', fontSize: '0.95rem' }}>
                  🔞 ¿Es un lugar o plan exclusivo para mayores de 18 años? (Discoteca, bar, licor)
                </label>
              </div>

              {/* Presupuesto y si es Gratis */}
              <div style={{
                backgroundColor: formData.isFree ? '#E8F5E9' : '#FFFFFF',
                border: '3px solid var(--violeta-dark)',
                padding: '1.1rem',
                boxShadow: '4px 4px 0px var(--violeta-dark)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: formData.isFree ? '0.2rem' : '0.8rem' }}>
                  <input
                    type="checkbox"
                    id="add-free"
                    checked={formData.isFree}
                    onChange={(e) => handleFreeToggle(e.target.checked)}
                    style={{ width: '22px', height: '22px', accentColor: '#2E7D32', cursor: 'pointer' }}
                  />
                  <label htmlFor="add-free" style={{ fontWeight: '900', cursor: 'pointer', fontSize: '1rem', color: formData.isFree ? '#1B5E20' : 'var(--violeta-dark)' }}>
                    🟢 ¿Es un plan o lugar totalmente GRATIS ($0 COP)?
                  </label>
                </div>

                {!formData.isFree ? (
                  <div>
                    {/* Presupuestos rápidos sugeridos */}
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                      <button
                        type="button"
                        className="pop-btn-sm bg-marfil"
                        onClick={() => setFormData(p => ({ ...p, priceMin: 10000, priceMax: 20000, priceLabel: 'Hasta $10.000 - $20.000' }))}
                      >
                        Económico (Hasta $20.000)
                      </button>
                      <button
                        type="button"
                        className="pop-btn-sm bg-marfil"
                        onClick={() => setFormData(p => ({ ...p, priceMin: 20000, priceMax: 50000, priceLabel: '$20.000 - $50.000' }))}
                      >
                        Medio ($20.000 - $50.000)
                      </button>
                      <button
                        type="button"
                        className="pop-btn-sm bg-marfil"
                        onClick={() => setFormData(p => ({ ...p, priceMin: 50000, priceMax: 100000, priceLabel: '$50.000+' }))}
                      >
                        Experiencia ($50.000+)
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                          Etiqueta de precio / rango
                        </label>
                        <input
                          type="text"
                          className="pop-input"
                          placeholder="Ej: $15.000 - $35.000"
                          value={formData.priceLabel}
                          onChange={(e) => handleChange('priceLabel', e.target.value)}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                          Precio mínimo aproximado (COP)
                        </label>
                        <input
                          type="number"
                          step="1000"
                          min="0"
                          className="pop-input"
                          placeholder="15000"
                          value={formData.priceMin}
                          onChange={(e) => handleChange('priceMin', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <p style={{ fontSize: '0.9rem', color: '#2E7D32', fontWeight: 'bold' }}>
                    ✅ Registrado como lugar gratuito. Aparecerá en el filtro de $0 y en búsquedas de bajo presupuesto.
                  </p>
                )}
              </div>

              {/* Dirección y Horarios */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                    Dirección exacta
                  </label>
                  <input
                    type="text"
                    className="pop-input"
                    placeholder="Ej: Cra 43A # 10-25"
                    value={formData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                    Horarios de atención
                  </label>
                  <input
                    type="text"
                    className="pop-input"
                    placeholder="Ej: Mar-Dom 2pm a 10pm"
                    value={formData.hours}
                    onChange={(e) => handleChange('hours', e.target.value)}
                  />
                </div>
              </div>

              {/* Cómo llegar */}
              <div>
                <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                  ¿Cómo llegar en transporte público?
                </label>
                <input
                  type="text"
                  className="pop-input"
                  placeholder="Ej: Metro estación Poblado y bus ruta 130..."
                  value={formData.howToGet}
                  onChange={(e) => handleChange('howToGet', e.target.value)}
                />
              </div>

              {/* Descripción */}
              <div>
                <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                  ¿Por qué recomiendas este lugar? (Descripción) *
                </label>
                <textarea
                  required
                  rows={3}
                  className="pop-textarea"
                  placeholder="Cuéntanos qué hace especial a este sitio, el ambiente, qué pedir o qué hacer..."
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                />
              </div>

              {/* Redes y Enlaces */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                    📸 Instagram
                  </label>
                  <input
                    type="text"
                    className="pop-input"
                    placeholder="https://instagram.com/..."
                    value={formData.instagram}
                    onChange={(e) => handleChange('instagram', e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                    👥 Facebook
                  </label>
                  <input
                    type="text"
                    className="pop-input"
                    placeholder="https://facebook.com/..."
                    value={formData.facebook}
                    onChange={(e) => handleChange('facebook', e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                    🎵 TikTok
                  </label>
                  <input
                    type="text"
                    className="pop-input"
                    placeholder="https://tiktok.com/@..."
                    value={formData.tiktok}
                    onChange={(e) => handleChange('tiktok', e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                    ▶️ YouTube
                  </label>
                  <input
                    type="text"
                    className="pop-input"
                    placeholder="https://youtube.com/@..."
                    value={formData.youtube}
                    onChange={(e) => handleChange('youtube', e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                    🌐 Sitio web oficial (opcional)
                  </label>
                  <input
                    type="text"
                    className="pop-input"
                    placeholder="https://..."
                    value={formData.website}
                    onChange={(e) => handleChange('website', e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '900', marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                    📍 Enlace a Google Maps (opcional)
                  </label>
                  <input
                    type="text"
                    className="pop-input"
                    placeholder="https://maps.app.goo.gl/..."
                    value={formData.maps}
                    onChange={(e) => handleChange('maps', e.target.value)}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="pop-btn bg-rosa"
                style={{ color: '#fff', fontSize: '1.2rem', padding: '0.9rem', marginTop: '0.5rem' }}
              >
                🚀 Enviar Sugerencia
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddPlaceModal;
