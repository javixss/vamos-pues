import React, { useState, useEffect } from 'react';

const STORAGE_SURVEY_KEY = 'vamos_pues_survey_completed';

const SurveyModal = ({ isOpenExplicitly, onCloseExplicit }) => {
  const [isSoftOpen, setIsSoftOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [q1, setQ1] = useState(null); // true / false
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Only schedule soft prompt if not already answered
    const completed = localStorage.getItem(STORAGE_SURVEY_KEY);
    if (!completed) {
      const timer = setTimeout(() => {
        setIsSoftOpen(true);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, []);

  const isOpen = (isOpenExplicitly || isSoftOpen) && !isDismissed;

  const handleClose = () => {
    setIsDismissed(true);
    setIsSoftOpen(false);
    if (onCloseExplicit) onCloseExplicit();
  };

  const handleOpenManually = () => {
    setIsDismissed(false);
    setIsSoftOpen(true);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const surveyData = {
      q1,
      q2,
      q3,
      comments,
      date: new Date().toISOString()
    };
    try {
      localStorage.setItem(STORAGE_SURVEY_KEY, JSON.stringify(surveyData));
    } catch (err) {
      console.error(err);
    }
    setSubmitted(true);
  };

  return (
    <>
      {/* Floating button trigger if modal is closed */}
      {!isOpen && (
        <button
          className="survey-floating-btn"
          onClick={handleOpenManually}
          aria-label="Abrir encuesta de opinión"
        >
          <span>📝</span>
          <span>¿Nos ayudas con tu opinión?</span>
        </button>
      )}

      {/* Survey Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <div 
            className="modal-content pop-border" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '540px' }}
          >
            <button 
              className="modal-close-btn" 
              onClick={handleClose}
              aria-label="Cerrar encuesta"
            >
              ✕
            </button>

            {/* Header */}
            <div className="bg-azul pop-border-sm" style={{ padding: '1.75rem 1.5rem 1.25rem' }}>
              <span style={{ 
                backgroundColor: 'var(--chartreuse)', 
                color: 'var(--violeta-dark)', 
                fontSize: '0.8rem', 
                fontWeight: '900', 
                padding: '0.2rem 0.6rem',
                border: '2px solid var(--violeta-dark)'
              }}>
                ENCUESTA RÁPIDA (30 SEGUNDOS)
              </span>
              <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginTop: '0.5rem', textShadow: '2px 2px 0px var(--violeta-dark)' }}>
                ¡Hola! ¿Nos ayudas con esta pequeña encuesta?
              </h3>
              <p style={{ color: 'var(--marfil)', fontWeight: '600', fontSize: '0.95rem' }}>
                Tu opinión nos ayuda a construir la mejor guía para salir en Medellín.
              </p>
            </div>

            {/* Content / Questions */}
            <div style={{ padding: '1.5rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>🎉</div>
                  <h4 style={{ fontSize: '1.8rem', color: 'var(--rosa)', marginBottom: '0.5rem' }}>
                    ¡GRACIAS TOTALES, PARCE!
                  </h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                    Tus respuestas han sido recibidas con éxito. Nos motivan muchísimo a seguir llenando la ciudad de buenos parches.
                  </p>
                  <button 
                    type="button"
                    className="pop-btn bg-chartreuse" 
                    onClick={handleClose}
                  >
                    Seguir explorando
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  {/* Pregunta 1 */}
                  <div style={{ backgroundColor: '#FFF', padding: '1rem', border: '2px solid var(--violeta-dark)', boxShadow: '3px 3px 0px var(--violeta-dark)' }}>
                    <p style={{ fontWeight: '800', marginBottom: '0.5rem' }}>
                      1. ¿Encontraste algún plan o lugar interesante hoy?
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button
                        type="button"
                        className={`pop-btn pop-btn-sm ${q1 === true ? 'bg-chartreuse' : 'bg-marfil'}`}
                        onClick={() => setQ1(true)}
                        style={{ flex: 1 }}
                      >
                        👍 ¡Sí, total!
                      </button>
                      <button
                        type="button"
                        className={`pop-btn pop-btn-sm ${q1 === false ? 'bg-chartreuse' : 'bg-marfil'}`}
                        onClick={() => setQ1(false)}
                        style={{ flex: 1 }}
                      >
                        👎 Aún no
                      </button>
                    </div>
                  </div>

                  {/* Pregunta 2 */}
                  <div style={{ backgroundColor: '#FFF', padding: '1rem', border: '2px solid var(--violeta-dark)', boxShadow: '3px 3px 0px var(--violeta-dark)' }}>
                    <p style={{ fontWeight: '800', marginBottom: '0.5rem' }}>
                      2. ¿La información de precios y rutas en Metro te resultó útil?
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button
                        type="button"
                        className={`pop-btn pop-btn-sm ${q2 === true ? 'bg-chartreuse' : 'bg-marfil'}`}
                        onClick={() => setQ2(true)}
                        style={{ flex: 1 }}
                      >
                        👍 Sí, muy clara
                      </button>
                      <button
                        type="button"
                        className={`pop-btn pop-btn-sm ${q2 === false ? 'bg-chartreuse' : 'bg-marfil'}`}
                        onClick={() => setQ2(false)}
                        style={{ flex: 1 }}
                      >
                        👎 Podría mejorar
                      </button>
                    </div>
                  </div>

                  {/* Pregunta 3 */}
                  <div style={{ backgroundColor: '#FFF', padding: '1rem', border: '2px solid var(--violeta-dark)', boxShadow: '3px 3px 0px var(--violeta-dark)' }}>
                    <p style={{ fontWeight: '800', marginBottom: '0.5rem' }}>
                      3. ¿Recomendarías 'Vamos Pues' a tus parceros?
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button
                        type="button"
                        className={`pop-btn pop-btn-sm ${q3 === true ? 'bg-chartreuse' : 'bg-marfil'}`}
                        onClick={() => setQ3(true)}
                        style={{ flex: 1 }}
                      >
                        🔥 ¡De una!
                      </button>
                      <button
                        type="button"
                        className={`pop-btn pop-btn-sm ${q3 === false ? 'bg-chartreuse' : 'bg-marfil'}`}
                        onClick={() => setQ3(false)}
                        style={{ flex: 1 }}
                      >
                        🤔 Tal vez luego
                      </button>
                    </div>
                  </div>

                  {/* Comentarios */}
                  <div>
                    <label htmlFor="survey-comment" style={{ display: 'block', fontWeight: '800', marginBottom: '0.4rem' }}>
                      💬 Comentario u opinión adicional (opcional):
                    </label>
                    <textarea
                      id="survey-comment"
                      className="pop-textarea"
                      rows={3}
                      placeholder="Cuéntanos qué te gustaría ver, sugerencias de diseño o mejoras..."
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                    <button
                      type="submit"
                      className="pop-btn bg-rosa"
                      style={{ flex: 2, color: '#fff' }}
                    >
                      Enviar Respuestas ✨
                    </button>
                    <button
                      type="button"
                      className="pop-btn bg-marfil"
                      onClick={handleClose}
                      style={{ flex: 1 }}
                    >
                      Quizá después
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default SurveyModal;
