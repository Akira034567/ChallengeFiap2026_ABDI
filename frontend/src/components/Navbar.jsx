import { useState, useEffect } from 'react'
import { Menu, X, Shield } from 'lucide-react'

const links = [
  { href: '#sobre',       label: 'Sobre Nós'    },
  { href: '#progresso',   label: 'Progresso'    },
  { href: '#pilares',     label: 'Pilares'      },
  { href: '#tecnologias', label: 'Tecnologias'  },
  { href: '#beneficios',  label: 'Benefícios'   },
  { href: '#casos',       label: 'Casos de Uso' },
  { href: '#dashboard',   label: 'Dashboard'    },
  { href: '#contato',     label: 'Contato'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 'var(--nav-h)',
        background: scrolled
          ? 'rgba(3,11,26,0.92)'
          : 'transparent',
        borderBottom: scrolled
          ? '1px solid rgba(33,150,243,0.15)'
          : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', height: '100%',
        }}>
          {/* Logo */}
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: 'linear-gradient(135deg,#1565c0,#00c8e8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 16px rgba(33,150,243,0.45)',
            }}>
              <Shield size={20} color="#fff" />
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
              Vigi<span className="gradient-text">Safe</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: 4, alignItems: 'center' }}
            className="nav-desktop-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={e => scrollTo(e, l.href)}
                  style={{
                    padding: '8px 14px', borderRadius: 8, fontSize: '0.88rem',
                    fontWeight: 500, color: 'var(--text-2)', transition: 'var(--t)',
                    display: 'block',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(33,150,243,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'transparent' }}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contato" onClick={e => scrollTo(e, '#contato')}
                className="btn btn-primary" style={{ padding: '9px 22px', fontSize: '0.88rem' }}>
                Fale Conosco
              </a>
            </li>
          </ul>

          {/* Mobile burger */}
          <button onClick={() => setOpen(o => !o)}
            style={{ color: 'var(--text)', display: 'none' }}
            className="nav-burger"
            aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(3,11,26,0.97)',
          backdropFilter: 'blur(16px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 8,
          paddingTop: 'var(--nav-h)',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => scrollTo(e, l.href)}
              style={{
                fontSize: '1.3rem', fontWeight: 600,
                color: 'var(--text-2)', padding: '14px 32px',
                borderRadius: 12, width: '100%', maxWidth: 320,
                textAlign: 'center', transition: 'var(--t)',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(33,150,243,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'transparent' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          .nav-desktop-links{display:none!important}
          .nav-burger{display:flex!important}
        }
      `}</style>
    </>
  )
}
