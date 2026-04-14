import { Shield, GitFork, Briefcase, ArrowUp } from 'lucide-react'

const navGroups = [
  {
    title: 'Projeto',
    links: [
      { label: 'Sobre Nós',    href: '#sobre'       },
      { label: 'Progresso',    href: '#progresso'   },
      { label: 'Pilares',      href: '#pilares'     },
      { label: 'Casos de Uso', href: '#casos'       },
    ],
  },
  {
    title: 'Tecnologia',
    links: [
      { label: 'Tecnologias',  href: '#tecnologias' },
      { label: 'Dashboard',    href: '#dashboard'   },
      { label: 'Benefícios',   href: '#beneficios'  },
      { label: 'Mercado',      href: '#mercado'     },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: 'Fale Conosco', href: '#contato'     },
      { label: 'GitHub',       href: 'https://github.com/', external: true },
      { label: 'LinkedIn',     href: 'https://linkedin.com/', external: true },
    ],
  },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollTo  = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{
      background: 'var(--bg-card-solid)',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="container" style={{ paddingTop: 64, paddingBottom: 40 }}>
        {/* Top row */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr repeat(3,auto)',
          gap: 48, alignItems: 'start', marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 9,
                background: 'linear-gradient(135deg,#1565c0,#00c8e8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 16px rgba(33,150,243,0.4)',
              }}>
                <Shield size={20} color="#fff" />
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
                Vigi<span style={{
                  background: 'linear-gradient(135deg,#42a5f5,#00c8e8)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>Safe</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 280 }}>
              Inteligência artificial para segurança industrial. Desenvolvido em parceria com a ABDI no contexto do FIAP Challenge 2026.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {[
                { icon: <GitFork size={16} />, href: 'https://github.com/' },
                { icon: <Briefcase size={16} />, href: 'https://linkedin.com/' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', transition: 'var(--t)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(33,150,243,0.15)'; e.currentTarget.style.borderColor = 'rgba(33,150,243,0.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((g, i) => (
            <div key={i}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 16 }}>
                {g.title}
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {g.links.map((l, j) => (
                  <li key={j}>
                    <a href={l.href}
                      target={l.external ? '_blank' : undefined}
                      rel={l.external ? 'noreferrer' : undefined}
                      onClick={!l.external ? e => scrollTo(e, l.href) : undefined}
                      style={{
                        fontSize: '0.9rem', color: 'var(--text-muted)',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: 28 }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem' }}>
            © 2026 VigiSafe — FIAP Challenge × ABDI. Todos os direitos reservados.
          </p>
          <button onClick={scrollTop}
            style={{
              display: 'flex', alignItems: 'center', gap: 7,
              color: 'var(--text-muted)', fontSize: '0.83rem', fontWeight: 600,
              padding: '8px 16px',
              background: 'rgba(33,150,243,0.08)',
              border: '1px solid rgba(33,150,243,0.18)',
              borderRadius: 8, transition: 'var(--t)', cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(33,150,243,0.16)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'rgba(33,150,243,0.08)' }}>
            <ArrowUp size={14} /> Voltar ao topo
          </button>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          footer div[style*="1fr repeat(3,auto)"]{
            grid-template-columns:1fr 1fr!important;
            gap:32px!important;
          }
          footer div[style*="1fr repeat(3,auto)"] > div:first-child{
            grid-column:1/-1;
          }
        }
        @media(max-width:480px){
          footer div[style*="1fr repeat(3,auto)"]{
            grid-template-columns:1fr!important;
          }
        }
      `}</style>
    </footer>
  )
}
