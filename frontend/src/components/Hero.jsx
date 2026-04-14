import { ArrowRight, ShieldCheck, Eye, Zap } from 'lucide-react'

const stats = [
  { value: '94%', label: 'Precisão de detecção' },
  { value: '<50ms', label: 'Latência em tempo real' },
  { value: '8+', label: 'Câmeras simultâneas' },
  { value: 'NR-12', label: 'Conformidade garantida' },
]

const badges = [
  { icon: <ShieldCheck size={14} />, text: 'Segurança Industrial' },
  { icon: <Eye size={14} />,        text: 'Visão Computacional' },
  { icon: <Zap size={14} />,        text: 'Alertas em Tempo Real' },
]

export default function Hero() {
  const scrollTo = href => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      paddingTop: 'var(--nav-h)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background orbs */}
      <div className="orb" style={{
        width: 600, height: 600,
        background: 'radial-gradient(circle,#1565c0,transparent)',
        top: '-10%', right: '-10%', opacity: 0.18,
      }} />
      <div className="orb" style={{
        width: 400, height: 400,
        background: 'radial-gradient(circle,#00c8e8,transparent)',
        bottom: '10%', left: '-5%', opacity: 0.12,
      }} />

      {/* Grid lines overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(33,150,243,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(33,150,243,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>

          {/* Partnership badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(33,150,243,0.08)',
            border: '1px solid rgba(33,150,243,0.2)',
            borderRadius: 'var(--radius-pill)',
            padding: '8px 20px', marginBottom: 32,
          }}>
            <img src="/logo.jpg" alt="FIAP" style={{ width: 24, height: 24, borderRadius: 4, objectFit: 'cover' }} />
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-2)', letterSpacing: '1px' }}>
              FIAP × ABDI — Challenge 2026
            </span>
          </div>

          {/* Main title */}
          <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 900, lineHeight: 1.08, marginBottom: 24 }}>
            Segurança Industrial{' '}
            <span className="gradient-text">com Inteligência</span>
            {' '}Artificial
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 40, maxWidth: 640, margin: '0 auto 40px' }}>
            Câmeras inteligentes que identificam EPIs em tempo real, emitem alertas automáticos
            e travam maquinários — transformando a segurança do chão de fábrica com visão computacional.
          </p>

          {/* Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 40 }}>
            {badges.map((b, i) => (
              <span key={i} style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(33,150,243,0.1)',
                border: '1px solid rgba(33,150,243,0.25)',
                borderRadius: 'var(--radius-pill)',
                padding: '7px 16px',
                fontSize: '0.85rem', fontWeight: 500, color: 'var(--blue-bright)',
              }}>
                {b.icon}{b.text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 80 }}>
            <button className="btn btn-primary" onClick={() => scrollTo('#sobre')} style={{ fontSize: '1rem', padding: '15px 34px' }}>
              Conheça o Projeto <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('#progresso')} style={{ fontSize: '1rem', padding: '15px 34px' }}>
              Ver Progresso
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1,
            background: 'var(--border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                padding: '24px 16px', textAlign: 'center',
                backdropFilter: 'blur(12px)',
              }}>
                <div style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800, marginBottom: 4 }}
                  className="gradient-text">{s.value}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          div[style*="repeat(4,1fr)"]{grid-template-columns:repeat(2,1fr)!important}
        }
      `}</style>
    </section>
  )
}
