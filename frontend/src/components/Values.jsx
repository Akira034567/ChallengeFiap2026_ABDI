import { Heart, Lightbulb, Scale, Users, Leaf, Star } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const values = [
  {
    icon: <Heart size={26} />,
    title: 'Vidas em Primeiro Lugar',
    description: 'Cada linha de código que escrevemos tem um propósito: salvar vidas. A segurança humana é nossa razão de existir e norteia cada decisão do projeto.',
    color: '#f44336',
  },
  {
    icon: <Lightbulb size={26} />,
    title: 'Inovação Contínua',
    description: 'Buscamos constantemente novas abordagens e tecnologias. Não nos contentamos com o estado da arte — queremos definir o próximo.',
    color: '#ffc107',
  },
  {
    icon: <Scale size={26} />,
    title: 'Integridade e Transparência',
    description: 'Métricas reais, resultados honestos. Reportamos nosso progresso com transparência total, incluindo desafios e limitações do sistema.',
    color: '#2196f3',
  },
  {
    icon: <Users size={26} />,
    title: 'Colaboração',
    description: 'A diversidade de perspectivas da nossa equipe é nossa maior força. Construímos juntos, aprendemos juntos e entregamos juntos.',
    color: '#7c4dff',
  },
  {
    icon: <Leaf size={26} />,
    title: 'Sustentabilidade',
    description: 'Desenvolvemos com eficiência energética em mente — modelos otimizados e hardware edge que consomem menos e entregam mais.',
    color: '#4caf50',
  },
  {
    icon: <Star size={26} />,
    title: 'Excelência Técnica',
    description: 'Código limpo, arquitetura sólida e testes rigorosos. Entregamos produtos que funcionam em produção com a robustez que a indústria exige.',
    color: '#00c8e8',
  },
]

export default function Values() {
  const [ref, visible] = useInView()

  return (
    <section id="valores" className="section" ref={ref}
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">O que nos guia</span>
          <h2 className="section-title">Nossos <span className="gradient-text">Valores</span></h2>
          <p className="section-subtitle">
            Os princípios que orientam cada decisão do projeto e definem a cultura do nosso time.
          </p>
        </div>

        <div className="grid-3">
          {values.map((v, i) => (
            <div key={i}
              className={`reveal reveal-delay-${Math.min(i % 3 + 1, 4)} ${visible ? 'visible' : ''}`}
              style={{
                display: 'flex', gap: 20, padding: '28px 24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                backdropFilter: 'blur(14px)',
                transition: 'var(--t)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${v.color}44`
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = `0 8px 32px ${v.color}18`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              <div style={{
                width: 52, height: 52, borderRadius: 13,
                background: `${v.color}18`,
                border: `1px solid ${v.color}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: v.color, flexShrink: 0,
              }}>{v.icon}</div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{v.title}</h3>
                <p style={{ color: 'var(--text-2)', fontSize: '0.88rem', lineHeight: 1.7 }}>{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
