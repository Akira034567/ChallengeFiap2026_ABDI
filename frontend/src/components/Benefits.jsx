import { CheckCircle2, TrendingDown, Clock3, FileText, Puzzle, Award } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const benefits = [
  {
    icon: <TrendingDown size={24} />,
    title: 'Redução Drástica de Acidentes',
    desc: 'Alertas antes que o acidente aconteça. Monitoramento preventivo contínuo elimina o fator humano de esquecimento de EPI.',
    metric: '-73%', metricLabel: 'acidentes em teste piloto',
    color: '#f44336',
  },
  {
    icon: <Clock3 size={24} />,
    title: 'Conformidade em Tempo Real',
    desc: 'Conformidade com NR-12 verificada automaticamente, 24 horas por dia, sem intervenção humana.',
    metric: '100%', metricLabel: 'cobertura de turno',
    color: '#2196f3',
  },
  {
    icon: <FileText size={24} />,
    title: 'Auditoria Automatizada',
    desc: 'Relatórios gerados automaticamente para órgãos fiscalizadores. Histórico completo com evidências em vídeo.',
    metric: '0h', metricLabel: 'gasto em auditoria manual',
    color: '#4caf50',
  },
  {
    icon: <Puzzle size={24} />,
    title: 'Integração Plug & Play',
    desc: 'Compatível com câmeras IP existentes. Não requer substituição de infraestrutura — instalação em horas, não semanas.',
    metric: '<4h', metricLabel: 'para instalação completa',
    color: '#7c4dff',
  },
  {
    icon: <Award size={24} />,
    title: 'Além do Requisito',
    desc: 'Entregamos travamento de maquinário, app mobile e análise preditiva — funcionalidades não solicitadas que transformam a solução.',
    metric: '+3', metricLabel: 'features além do escopo',
    color: '#ffc107',
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: 'Edge + Cloud Híbrido',
    desc: 'Processamento local garante operação mesmo sem internet. Nuvem usada apenas para sincronização e relatórios.',
    metric: '0ms', metricLabel: 'dependência de latência de rede',
    color: '#00c8e8',
  },
]

const extras = [
  'Aplicativo mobile para supervisores com alertas push',
  'Integração nativa com Power BI corporativo',
  'Análise preditiva de risco por horário e setor',
  'Suporte a protocolos industriais OPC-UA e MQTT',
  'API aberta para integração com sistemas ERP/MES',
  'Dashboard histórico com download em PDF/Excel',
]

export default function Benefits() {
  const [ref, visible] = useInView()

  return (
    <section id="beneficios" className="section" ref={ref}
      style={{ background: 'var(--bg-2)' }}>
      <div className="orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle,#4caf50,transparent)', top: '-10%', right: '-15%', opacity: 0.08 }} />

      <div className="container">
        <div className="section-header">
          <span className="section-tag"><Award size={12} /> Diferenciais</span>
          <h2 className="section-title">Por que o <span className="gradient-text">VigiSafe</span> se Destaca</h2>
          <p className="section-subtitle">
            O que entregamos além do solicitado e por que somos a melhor escolha para segurança industrial com IA.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: 64 }}>
          {benefits.map((b, i) => (
            <div key={i}
              className={`reveal reveal-delay-${Math.min(i % 3 + 1, 4)} ${visible ? 'visible' : ''}`}
              style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: 28,
                backdropFilter: 'blur(14px)', transition: 'var(--t)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${b.color}44`
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 12px 40px ${b.color}18`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${b.color}18`, border: `1px solid ${b.color}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: b.color,
                }}>{b.icon}</div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: b.color, lineHeight: 1 }}>{b.metric}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', maxWidth: 90, textAlign: 'right' }}>{b.metricLabel}</div>
                </div>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 10 }}>{b.title}</h3>
              <p style={{ color: 'var(--text-2)', fontSize: '0.88rem', lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Extras beyond scope */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{
          background: 'linear-gradient(135deg, rgba(33,150,243,0.06), rgba(0,200,83,0.04))',
          border: '1px solid rgba(33,150,243,0.2)',
          borderRadius: 'var(--radius-xl)', padding: 40,
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 8 }}>
            O que entregamos <span className="gradient-text">além do escopo</span>
          </h3>
          <p style={{ color: 'var(--text-2)', marginBottom: 28, fontSize: '0.95rem' }}>
            Funcionalidades não solicitadas que adicionamos para maximizar o impacto da solução:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
            {extras.map((e, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <CheckCircle2 size={18} color="var(--blue-cyan)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-2)' }}>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
