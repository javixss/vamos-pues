import React, { useState } from 'react';

const RandomPlanner = ({ places, onSelectPlace }) => {
  const [budgetInput, setBudgetInput] = useState('20000');
  const [allowAdult, setAllowAdult] = useState(false);
  const [chosenPlan, setChosenPlan] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const [surpriseCount, setSurpriseCount] = useState(0);

  const handleRoll = () => {
    const budgetNum = Number(budgetInput) || 0;
    setIsRolling(true);

    // Filter candidate places that fit within the user's budget
    // We allow places whose priceMin <= budgetNum (even if priceMax is slightly higher, it's accessible)
    let candidates = places.filter(p => {
      // If adult plan is not allowed and place is adult only, skip it
      if (!allowAdult && p.isAdultOnly) return false;
      // Fits budget: either it's free (priceMin === 0) or min price is within budget
      return p.priceMin <= budgetNum;
    });

    // If no candidate (e.g. budget too low), fallback to free places
    if (candidates.length === 0) {
      candidates = places.filter(p => p.priceMin === 0 && (!allowAdult ? !p.isAdultOnly : true));
    }

    // Micro-animation delay
    setTimeout(() => {
      if (candidates.length > 0) {
        // If we already have a chosen plan, pick a different one if possible
        const filtered = candidates.filter(p => chosenPlan ? p.id !== chosenPlan.id : true);
        const pool = filtered.length > 0 ? filtered : candidates;
        const randomItem = pool[Math.floor(Math.random() * pool.length)];
        setChosenPlan(randomItem);
        setSurpriseCount(prev => prev + 1);
      }
      setIsRolling(false);
    }, 400);
  };

  const budgetNum = Number(budgetInput) || 0;
  const savings = chosenPlan ? Math.max(0, budgetNum - chosenPlan.priceMin) : 0;

  return (
    <section id="que-hago-hoy" className="container" style={{ margin: '3.5rem auto' }}>
      <div 
        className="pop-border pop-shadow bg-chartreuse" 
        style={{ padding: '2.5rem 1.75rem', position: 'relative' }}
      >
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2rem auto' }}>
          <span style={{ 
            backgroundColor: 'var(--rosa)', 
            color: '#fff', 
            padding: '0.3rem 0.8rem', 
            fontWeight: '900', 
            fontSize: '0.9rem',
            border: '2px solid var(--violeta-dark)',
            boxShadow: '3px 3px 0px var(--violeta-dark)'
          }}>
            🎲 GENERADOR DE PLANES ALEATORIOS
          </span>

          <h2 style={{ 
            fontSize: '2.8rem', 
            color: 'var(--violeta-dark)', 
            marginTop: '0.75rem', 
            lineHeight: 1.1 
          }}>
            ¿QUÉ HAGO HOY?
          </h2>
          <p style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '0.5rem' }}>
            ¿No sabes a dónde ir? Dinos cuánto tienes en el bolsillo y te descubrimos un parche inesperado en cualquier rincón del Valle de Aburrá.
          </p>
        </div>

        {/* Input box */}
        <div 
          className="pop-border bg-marfil" 
          style={{ 
            maxWidth: '680px', 
            margin: '0 auto', 
            padding: '1.5rem',
            boxShadow: '6px 6px 0px var(--violeta-dark)'
          }}
        >
          <div style={{ marginBottom: '1.25rem' }}>
            <label htmlFor="budget-random-input" style={{ display: 'block', fontWeight: '900', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              💵 ¿Cuánto dinero tienes para el plan? (COP)
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: '900' }}>$</span>
              <input
                id="budget-random-input"
                type="number"
                step="1000"
                min="0"
                className="pop-input"
                value={budgetInput}
                onChange={(e) => setBudgetInput(e.target.value)}
                placeholder="Ej: 20000"
                style={{ fontSize: '1.25rem', fontWeight: '900' }}
              />
            </div>

            {/* Quick buttons */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.6rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 'bold', alignSelf: 'center' }}>Atajos:</span>
              <button type="button" onClick={() => setBudgetInput('0')} className="pop-btn-sm bg-marfil">
                $0 (Gratis)
              </button>
              <button type="button" onClick={() => setBudgetInput('15000')} className="pop-btn-sm bg-marfil">
                $15.000
              </button>
              <button type="button" onClick={() => setBudgetInput('25000')} className="pop-btn-sm bg-marfil">
                $25.000
              </button>
              <button type="button" onClick={() => setBudgetInput('50000')} className="pop-btn-sm bg-marfil">
                $50.000
              </button>
            </div>
          </div>

          {/* Age toggle */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <input
              id="adult-checkbox"
              type="checkbox"
              checked={allowAdult}
              onChange={(e) => setAllowAdult(e.target.checked)}
              style={{ width: '22px', height: '22px', accentColor: 'var(--rosa)', cursor: 'pointer' }}
            />
            <label htmlFor="adult-checkbox" style={{ fontWeight: '800', cursor: 'pointer', fontSize: '0.95rem' }}>
              🔞 Incluir planes de vida nocturna exclusivos para mayores de edad (+18)
            </label>
          </div>

          {/* Roll Button */}
          <button
            type="button"
            className="pop-btn bg-rosa"
            onClick={handleRoll}
            disabled={isRolling}
            style={{ 
              width: '100%', 
              fontSize: '1.35rem', 
              padding: '1rem',
              color: '#FFF',
              cursor: isRolling ? 'wait' : 'pointer'
            }}
          >
            {isRolling ? '🎲 BARAJEANDO PLANES...' : '🎲 ¡SORPRÉNDEME! BUSCAR PARCHE'}
          </button>
        </div>

        {/* Surprise Result Card */}
        {chosenPlan && (
          <div 
            className="pop-border bg-marfil pop-shadow-lg"
            style={{ 
              maxWidth: '750px', 
              margin: '2.5rem auto 0 auto', 
              padding: '2rem',
              animation: 'modal-pop 0.3s ease-out'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge-zone">📍 {chosenPlan.zone}</span>
                <span className="badge-price">💰 {chosenPlan.priceLabel}</span>
                {chosenPlan.isAdultOnly && <span className="badge-adult">🔞 PLAN +18</span>}
              </div>
              <span style={{ 
                backgroundColor: 'var(--rosa)', 
                color: '#fff', 
                fontSize: '0.85rem', 
                fontWeight: '900', 
                padding: '0.2rem 0.6rem',
                border: '2px solid var(--violeta-dark)'
              }}>
                ✨ PLAN DESCUBIERTO #{surpriseCount}
              </span>
            </div>

            <h3 style={{ fontSize: '2.2rem', color: 'var(--azul-majorelle)', textShadow: '2px 2px 0px var(--violeta-dark)', marginBottom: '0.5rem' }}>
              {chosenPlan.name}
            </h3>

            <p style={{ fontSize: '1.1rem', marginBottom: '1.25rem', lineHeight: '1.5' }}>
              {chosenPlan.description}
            </p>

            {/* Budget calculation advice */}
            <div style={{ 
              backgroundColor: 'var(--chartreuse)', 
              border: '3px solid var(--violeta-dark)', 
              padding: '1rem', 
              marginBottom: '1.25rem',
              fontWeight: '700'
            }}>
              💡 <strong>Análisis de tu bolsillo:</strong> Con tus <strong>${budgetNum.toLocaleString('es-CO')} COP</strong> {chosenPlan.priceMin === 0 ? (
                <span>disfrutas de este parche <strong>totalmente gratis</strong> y te sobra todo para pasajes o refrigerio en el Metro.</span>
              ) : savings > 0 ? (
                <span>cubres este plan (aprox. ${chosenPlan.priceMin.toLocaleString('es-CO')}) y <strong>te sobran ${savings.toLocaleString('es-CO')} COP</strong> para una empanada o el pasaje integrado.</span>
              ) : (
                <span>te ajustas perfecto a este plan accesible. ¡Aprovéchalo al máximo!</span>
              )}
            </div>

            <div style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              <strong>🚇 Cómo llegar:</strong> {chosenPlan.howToGet}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                className="pop-btn bg-azul"
                onClick={() => onSelectPlace(chosenPlan)}
                style={{ color: '#fff' }}
              >
                🔎 Ver Ficha Completa
              </button>

              <button
                className="pop-btn bg-orange"
                onClick={handleRoll}
              >
                🔄 Dame otra opción
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default RandomPlanner;
