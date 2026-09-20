import React from 'react';
import logoSvg from '../assets/logo.svg';

const Header = ({ onOpenAddModal }) => {
  return (
    <header style={{ 
      padding: '1rem', 
      borderBottom: '4px solid var(--violeta-dark)', 
      backgroundColor: 'var(--azul-majorelle)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 0px rgba(13,1,39,0.15)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        
        {/* Logo oficial integrado */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} title="Vamos Pues - Inicio">
          <img 
            src={logoSvg} 
            alt="Logo Vamos Pues" 
            style={{ 
              height: '46px', 
              width: 'auto',
              display: 'block'
            }} 
          />
        </a>

        {/* Navigation limpia (sin +18 ni encuesta según lo solicitado) */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
          <a 
            href="#filtros-seccion" 
            style={{ color: 'var(--marfil)', textDecoration: 'none', fontWeight: '800', fontSize: '1rem', padding: '0.3rem 0.6rem' }}
          >
            Explorar 🔎
          </a>

          <a 
            href="#que-hago-hoy" 
            style={{ color: 'var(--marfil)', textDecoration: 'none', fontWeight: '800', fontSize: '1rem', padding: '0.3rem 0.6rem' }}
          >
            ¿Qué hago hoy? 🎲
          </a>

          <a 
            href="#mapa-seccion" 
            style={{ color: 'var(--marfil)', textDecoration: 'none', fontWeight: '800', fontSize: '1rem', padding: '0.3rem 0.6rem' }}
          >
            Mapa 🗺️
          </a>

          <button
            type="button"
            onClick={onOpenAddModal}
            className="pop-btn pop-btn-sm bg-chartreuse"
            title="Sugerir o agregar un nuevo lugar a la plataforma"
          >
            ➕ Sugerir Lugar
          </button>
        </nav>

      </div>
    </header>
  );
};

export default Header;
