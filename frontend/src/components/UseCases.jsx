import { Factory, HardHat, Beaker, Building2, ChevronRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const cases = [
  {
    icon: <Factory size={28} />,
    sector: 'Metalurgia & Siderurgia',
    scenario: 'Chão de fábrica com altos fornos e prensas industriais',
    problem: 'Operadores frequentemente esquecem capacetes e protetores faciais ao transitar entre zonas frias e quentes da planta.',
    solution: 'Câmeras monitoram cada corredor de acesso aos fornos. Ao detectar operador sem EPI, o sistema emite alerta sonoro local e trava a porta de acesso ao setor de risco.',
    impact: 'Redução de 68% nos registros de inconformidade de EPI em período de 30 dias.',
    color: '#f44336',
    gradient: 'linear-gradient(135deg, #c62828, #f44336)',
    tags: ['Capacete', 'Protetor Facial', 'Travamento de Acesso'],
  },
  {
    icon: <Building2 size={28} />,
    sector: 'Construção Civil',
    scenario: 'Obras de grande porte com múltiplos andares e zonas de risco variáveis',
    problem: 'Fiscalização manual é impossível em obras com centenas de trabalhadores em diferentes pavimentos simultaneamente.',
    solution: 'Rede de câmeras por pavimento detecta colete, capacete e botina em tempo real. Supervisor recebe mapa de calor com zonas de inconformidade no app mobile.',
    impact: 'Cobertura de 100% da obra com 6 câmeras, substituindo equipe de 4 fiscais.',
    color: '#ff6d00',
    gradient: 'linear-gradient(135deg, #e65100, #ff6d00)',
    tags: ['Colete', 'Capacete', 'Botina', 'Mapa de Calor'],
  },
  {
    icon: <Beaker size={28} />,
    sector: 'Indústria Química',
    scenario: 'Laboratórios e áreas de manipulação de substâncias perigosas',
    problem: 'Exposição a gases e produtos químicos sem óculos e luvas adequados causa intoxicações e queimaduras recorrentes.',
    solution: 'Detecção de óculos de proteção e luvas com identificação por tipo (nitrila, látex). Integração com sistema de exaustão — ventilação acionada automaticamente quando inconformidade é detectada.',
    impact: 'Zero acidentes por exposição química nos 60 dias de piloto.',
    color: '#7c4dff',
    gradient: 'linear-gradient(135deg, #4a148c, #7c4dff)',
    tags: ['Óculos', 'Luvas', 'Máscara', 'Integração HVAC'],
  },
  {
    icon: <HardHat size={28} />,
    sector: 'Mineração',
    scenario: 'Operações em superfície e subsolo com maquinário pesado',
    problem: 'Áreas de detonação e escavação exigem EPIs específicos e restrição de acesso a pessoal não autorizado.',
    solution: 'Sistema combina detecção de EPI com reconhecimento de crachá (badge) para controle de acesso. Máquinas de escavação só desbloqueiam ao confirmar operador com EPI completo.',
    impact: 'Tempo de verificação de EPI reduzido de 8 minutos (manual) para <1 segundo.',
    color: '#00c8e8',
    gradient: 'linear-gradient(135deg, #006064, #00c8e8)',
    tags: ['EPI Completo', 'Controle de Acesso', 'Desbloqueio de Máquina'],
  },
]

export default function UseCases() {
  const [ref, visible] = useInView()

  return (
    <section id="casos" className="section" ref={ref}
      style={{ background: 'var(--bg)' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle,#7c4dff,transparent)', top: '20%', right: '-15%', opacity: 0.09 }} />

      <div className="container">
        <div className="section-header">
          <span className="section-tag">Aplicações</span>
          <h2 className="section-title">Casos de <span className="gradient-text">Uso</span></h2>
          <p className="section-subtitle">
            Como o VigiSafe se adapta a diferentes setores industriais e resolve problemas reais de segurança.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {cases.map((c, i) => (
            <div key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} ${visible ? 'visible' : ''}`}
              style={{
                display: 'grid', gridTemplateColumns: '220px 1fr',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backdropFilter: 'blur(14px)',
                transition: 'var(--t)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${c.color}44`; e.currentTarget.style.boxShadow = `0 12px 40px ${c.color}15` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}>

              {/* Left accent panel */}
              <div style={{
                background: c.gradient,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 14,
                padding: 32, textAlign: 'center',
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff',
                }}>{c.icon}</div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: '#fff', lineHeight: 1.3 }}>{c.sector}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>{c.scenario}</div>
              </div>

              {/* Right content */}
              <div style={{ padding: '32px 36px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 20 }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 8 }}>
                      Problema
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.65 }}>{c.problem}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 8 }}>
                      Solução
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.65 }}>{c.solution}</p>
                  </div>
                </div>

                <div style={{
                  background: `${c.color}12`, border: `1px solid ${c.color}25`,
                  borderRadius: 10, padding: '12px 16px',
                  display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16,
                }}>
                  <ChevronRight size={16} color={c.color} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: c.color }}>{c.impact}</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {c.tags.map((t, j) => (
                    <span key={j} style={{
                      fontSize: '0.77rem', fontWeight: 600,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 'var(--radius-pill)',
                      padding: '3px 12px', color: 'var(--text-2)',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          div[style*="220px 1fr"]{grid-template-columns:1fr!important}
          div[style*="1fr 1fr"]{grid-template-columns:1fr!important}
        }
      `}</style>
    </section>
  )
}
