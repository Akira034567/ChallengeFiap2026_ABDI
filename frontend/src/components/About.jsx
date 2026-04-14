import { useState } from 'react'
import { GitFork, Briefcase, Target, Handshake, Users } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { teamMembers } from '../data/teamData'

function TeamCard({ member, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      onClick={() => setFlipped(f => !f)}
      style={{
        perspective: 1000,
        height: 280,
        cursor: 'pointer',
      }}
      className={`reveal reveal-delay-${Math.min(index + 1, 4)}`}
    >
      <div style={{
        width: '100%', height: '100%',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.55s cubic-bezier(0.4,0,0.2,1)',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>
        {/* Front */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 16,
          padding: 28,
          backdropFilter: 'blur(14px)',
          transition: 'border-color 0.3s',
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: `linear-gradient(135deg, ${member.color}33, ${member.color}66)`,
            border: `2px solid ${member.color}55`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem', fontWeight: 800, color: member.color,
            boxShadow: `0 0 24px ${member.color}33`,
            overflow: 'hidden',
          }}>
            {member.photo
              ? <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : member.initials}
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 4 }}>{member.name}</div>
            <div style={{
              fontSize: '0.82rem', color: member.color, fontWeight: 600,
              background: `${member.color}18`,
              border: `1px solid ${member.color}33`,
              borderRadius: 'var(--radius-pill)',
              padding: '3px 12px', display: 'inline-block',
            }}>{member.role}</div>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            Clique para saber mais
          </div>
        </div>

        {/* Back */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: `linear-gradient(145deg, ${member.color}18, var(--bg-card-solid))`,
          border: `1px solid ${member.color}44`,
          borderRadius: 'var(--radius-lg)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 28,
          backdropFilter: 'blur(14px)',
        }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 6 }}>{member.name}</div>
            <div style={{ fontSize: '0.83rem', color: 'var(--text-2)', lineHeight: 1.6 }}>
              {member.description}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href={member.github} target="_blank" rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: '0.82rem', fontWeight: 600,
                color: 'var(--text-2)', padding: '8px 14px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8, transition: 'var(--t)',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}>
              <GitFork size={14} /> GitHub
            </a>
            <a href={member.linkedin} target="_blank" rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: '0.82rem', fontWeight: 600,
                color: 'var(--text-2)', padding: '8px 14px',
                background: 'rgba(0,120,215,0.12)',
                border: '1px solid rgba(0,120,215,0.25)',
                borderRadius: 8, transition: 'var(--t)',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(0,120,215,0.25)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'rgba(0,120,215,0.12)' }}>
              <Briefcase size={14} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section id="sobre" className="section" ref={ref} style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%)' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle,#1565c0,transparent)', top: '20%', left: '-15%' }} />

      <div className="container">
        {/* Missão + Sobre + Parceria */}
        <div className="section-header">
          <span className="section-tag"><Target size={12} /> Quem Somos</span>
          <h2 className="section-title">
            Nossa <span className="gradient-text">Missão</span> e Parceria
          </h2>
          <p className="section-subtitle">
            Um grupo de estudantes da FIAP desenvolvendo tecnologia de ponta em parceria com a ABDI para revolucionar a segurança industrial no Brasil.
          </p>
        </div>

        {/* Três blocos informativos */}
        <div className="grid-3" style={{ marginBottom: 80 }}>
          <div className={`card reveal ${visible ? 'visible' : ''}`}>
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: 'linear-gradient(135deg,#1565c0,#2196f3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20, boxShadow: 'var(--glow-sm)',
            }}>
              <Target size={22} color="#fff" />
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: 12 }}>Nossa Missão</h3>
            <p style={{ color: 'var(--text-2)', fontSize: '0.93rem', lineHeight: 1.7 }}>
              Democratizar o acesso à tecnologia de segurança industrial com inteligência artificial,
              reduzindo acidentes de trabalho e salvando vidas no chão de fábrica brasileiro.
              Acreditamos que toda empresa, de qualquer porte, merece proteção de nível mundial.
            </p>
          </div>

          <div className={`card reveal reveal-delay-1 ${visible ? 'visible' : ''}`}>
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: 'linear-gradient(135deg,#7c4dff,#00c8e8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20, boxShadow: '0 0 15px rgba(124,77,255,0.3)',
            }}>
              <Users size={22} color="#fff" />
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: 12 }}>Sobre Nós</h3>
            <p style={{ color: 'var(--text-2)', fontSize: '0.93rem', lineHeight: 1.7 }}>
              Somos um time multidisciplinar de alunos da FIAP apaixonados por inovação.
              Combinamos expertise em IA, engenharia de software, IoT e design para
              construir soluções que fazem diferença real na indústria nacional.
            </p>
          </div>

          <div className={`card reveal reveal-delay-2 ${visible ? 'visible' : ''}`}>
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: 'linear-gradient(135deg,#00c853,#00b4d8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20, boxShadow: '0 0 15px rgba(0,200,83,0.3)',
            }}>
              <Handshake size={22} color="#fff" />
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: 12 }}>Parceria ABDI</h3>
            <p style={{ color: 'var(--text-2)', fontSize: '0.93rem', lineHeight: 1.7 }}>
              A Agência Brasileira de Desenvolvimento Industrial (ABDI) apoia este projeto como parte
              da iniciativa Metaindústria — modernizando a indústria nacional com tecnologias de
              Indústria 4.0 e promovendo competitividade no mercado global.
            </p>
          </div>
        </div>

        {/* Divisor */}
        <div className="divider" style={{ marginBottom: 80 }} />

        {/* Time */}
        <div className="section-header">
          <span className="section-tag"><Users size={12} /> Nossa Equipe</span>
          <h2 className="section-title">
            Conheça o <span className="gradient-text">Time</span>
          </h2>
          <p className="section-subtitle">
            Clique nos cards para conhecer cada integrante, sua função e links de contato.
          </p>
        </div>

        <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {teamMembers.map((m, i) => (
            <TeamCard key={m.id} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
