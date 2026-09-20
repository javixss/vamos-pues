import React from 'react';

const Hero = ({ totalPlaces, onExploreClick }) => {
  return (
    <section className="bg-chartreuse pop-border pop-shadow" style={{ 
      margin: '2rem auto', 
      padding: '3.5rem 1.5rem', 
      textAlign: 'center',
      maxWidth: '1240px'
    }}>
      <div style={{ display: 'inline-block', marginBottom: '1rem' }}>
        <span style={{ 
          backgroundColor: 'var(--violeta-dark)', 
          color: 'var(--chartreuse)', 
          padding: '0.4rem 1rem', 
          fontWeight: '900', 
          fontSize: '1rem',
          letterSpacing: '1px'
        }}>
          🇨🇴 MEDELLÍN Y ÁREA METROPOLITANA
        </span>
      </div>

      <h2 style={{ 
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
        color: 'var(--rosa)', 
        textShadow: '5px 5px 0px var(--violeta-dark)',
        marginBottom: '1rem',
        lineHeight: 1.05
      }}>
        DESCUBRE LA CIUDAD<br/>A TU MANERA
      </h2>

      <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', maxWidth: '850px', margin: '0 auto 2rem auto', fontWeight: 'bold', lineHeight: 1.4 }}>
        Planes culturales, gastronómicos, centros comerciales y vida nocturna al alcance de tu bolsillo. ¡No te quedes sin parche este fin de semana!
      </p>

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        <a 
          href="#filtros-seccion" 
          className="pop-btn bg-orange"
          style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}
          onClick={onExploreClick}
        >
          🔎 EXPLORAR PLANES ({totalPlaces})
        </a>

        <a 
          href="#que-hago-hoy" 
          className="pop-btn bg-rosa"
          style={{ fontSize: '1.25rem', padding: '1rem 2rem', color: '#fff' }}
        >
          🎲 ¿QUÉ HAGO HOY? (CON MI PRESUPUESTO)
        </a>
      </div>

      {/* Quick stats strip */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        gap: '1.5rem', 
        paddingTop: '1.5rem',
        borderTop: '3px solid var(--violeta-dark)',
        fontSize: '1rem',
        fontWeight: '900'
      }}>
        <span>📍 +{totalPlaces} Lugares en el Valle</span>
        <span>•</span>
        <span>💵 Planes desde $0 COP</span>
        <span>•</span>
        <span>🗺️ Mapa Interactivo en vivo</span>
        <span>•</span>
        <span>🔞 Sección Exclusiva +18</span>
      </div>
    </section>
  );
};

export default Hero;
