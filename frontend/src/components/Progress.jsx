import { useState } from 'react'
import { CheckCircle2, Clock, Circle, TrendingUp, ChevronRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { sprints } from '../data/progressData'

const statusMap = {
  completed:   { label: 'Concluído',     badge: 'badge-green',  icon: <CheckCircle2 size={14} /> },
  'in-progress': { label: 'Em Andamento', badge: 'badge-yellow', icon: <Clock size={14} /> },
  planned:     { label: 'Planejado',     badge: 'badge-blue',   icon: <Circle size={14} /> },
}

export default function Progress() {
  const [active, setActive] = useState(1)
  const [ref, visible] = useInView()
  const sprint = sprints.find(s => s.id === active)

  return (
    <section id="progresso" className="section" ref={ref}
      style={{ background: 'var(--bg-2)' }}>
      <div className="orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle,#00c8e8,transparent)', top: '10%', right: '-20%', opacity: 0.08 }} />

      <div className="container">
        <div className="section-header">
          <span className="section-tag"><TrendingUp size={12} /> Entregas</span>
          <h2 className="section-title">Progresso do <span className="gradient-text">Projeto</span></h2>
          <p className="section-subtitle">
            Acompanhe o desenvolvimento sprint a sprint, com tecnologias, features entregues e visões para o futuro.
          </p>
        </div>

        {/* Progress bar overview */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-2)', fontWeight: 600 }}>Progresso geral</span>
            <span style={{ fontSize: '0.88rem', color: 'var(--blue-bright)', fontWeight: 700 }}>
              {sprints.filter(s => s.status === 'completed').length}/{sprints.length} sprints concluídas
            </span>
          </div>
          <div style={{ height: 8, borderRadius: 4, background: 'rgba(33,150,243,0.12)', overflow: 'hidden' }}>
            <div style={{
              height: '100%', borderRadius: 4,
              background: 'linear-gradient(90deg,#1565c0,#00c8e8)',
              width: `${(sprints.filter(s => s.status === 'completed').length / sprints.length) * 100}%`,
              transition: 'width 1s ease',
              boxShadow: '0 0 12px rgba(33,150,243,0.5)',
            }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 28 }}>
          {/* Sidebar */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: 12,
            backdropFilter: 'blur(14px)',
            height: 'fit-content',
          }}>
            {sprints.map(s => {
              const st = statusMap[s.status]
              const isActive = s.id === active
              return (
                <button key={s.id} onClick={() => setActive(s.id)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '14px 16px', borderRadius: 12,
                    background: isActive ? 'rgba(33,150,243,0.12)' : 'transparent',
                    border: isActive ? '1px solid rgba(33,150,243,0.3)' : '1px solid transparent',
                    transition: 'var(--t)', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    gap: 8, marginBottom: 4,
                  }}>
                  <div>
                    <div style={{
                      fontSize: '0.82rem', color: isActive ? 'var(--blue-bright)' : 'var(--text-muted)',
                      fontWeight: 600, marginBottom: 3, letterSpacing: '0.5px',
                    }}>{s.title}</div>
                    <div style={{
                      fontSize: '0.88rem', fontWeight: 600,
                      color: isActive ? '#fff' : 'var(--text-2)',
                    }}>{s.subtitle}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
                    <span className={`badge ${st.badge}`} style={{ padding: '2px 8px', fontSize: '0.72rem' }}>
                      {st.icon}{st.label}
                    </span>
                    {isActive && <ChevronRight size={14} color="var(--blue-bright)" />}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Content */}
          <div className={`reveal reveal-delay-1 ${visible ? 'visible' : ''}`}
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: 36,
              backdropFilter: 'blur(14px)',
            }}>
            {sprint && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                  <div style={{
                    background: 'linear-gradient(135deg,#1565c0,#2196f3)',
                    borderRadius: 10, padding: '8px 16px',
                    fontSize: '0.8rem', fontWeight: 700, color: '#fff', letterSpacing: 1,
                  }}>{sprint.title}</div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 2 }}>{sprint.subtitle}</h3>
                    <span className={`badge ${statusMap[sprint.status].badge}`}>
                      {statusMap[sprint.status].icon}{statusMap[sprint.status].label}
                    </span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 32, fontSize: '0.95rem' }}>
                  {sprint.description}
                </p>

                {/* Technologies */}
                <div style={{ marginBottom: 28 }}>
                  <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 12 }}>
                    Tecnologias Implementadas
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {sprint.technologies.map(t => (
                      <span key={t} className="tech-chip">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div style={{ marginBottom: 28 }}>
                  <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 14 }}>
                    Features Entregues
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {sprint.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: '0.93rem', color: 'var(--text-2)' }}>
                        <CheckCircle2 size={16} color="var(--green)" style={{ flexShrink: 0, marginTop: 2 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Future */}
                <div style={{
                  background: 'rgba(33,150,243,0.06)',
                  border: '1px solid rgba(33,150,243,0.15)',
                  borderRadius: 12, padding: 20,
                }}>
                  <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--blue-bright)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 10 }}>
                    Visões Futuras
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.7 }}>{sprint.future}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          div[style*="280px 1fr"]{grid-template-columns:1fr!important}
        }
      `}</style>
    </section>
  )
}
