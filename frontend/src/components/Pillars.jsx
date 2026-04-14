import { ShieldCheck, Eye, Cpu, Zap, Lock, Activity } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const pillars = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'Segurança Zero Acidente',
    description: 'Monitoramento contínuo 24/7 de todos os operadores em zonas de risco, garantindo conformidade com NR-12 e reduzindo acidentes a zero.',
    color: '#2196f3',
    gradient: 'linear-gradient(135deg,#1565c0,#2196f3)',
  },
  {
    icon: <Eye size={28} />,
    title: 'Visão Computacional',
    description: 'Modelos de IA treinados com datasets industriais reais para detecção precisa de EPIs em condições adversas de iluminação e ângulo.',
    color: '#00c8e8',
    gradient: 'linear-gradient(135deg,#0097a7,#00c8e8)',
  },
  {
    icon: <Cpu size={28} />,
    title: 'IA de Ponta',
    description: 'Arquitetura YOLOv8 otimizada com aceleração de hardware (CUDA/TensorRT) para inferência em tempo real com máxima eficiência energética.',
    color: '#7c4dff',
    gradient: 'linear-gradient(135deg,#512da8,#7c4dff)',
  },
  {
    icon: <Zap size={28} />,
    title: 'Alertas Instantâneos',
    description: 'Sistema de notificação multicanal com latência sub-100ms: painel web, app mobile, e-mail e alarme sonoro no ponto de risco.',
    color: '#ffc107',
    gradient: 'linear-gradient(135deg,#f57c00,#ffc107)',
  },
  {
    icon: <Lock size={28} />,
    title: 'Travamento Preventivo',
    description: 'Integração direta com CLPs industriais para desligar automaticamente máquinas quando operadores sem EPI são detectados na zona de risco.',
    color: '#f44336',
    gradient: 'linear-gradient(135deg,#c62828,#f44336)',
  },
  {
    icon: <Activity size={28} />,
    title: 'Dados e Relatórios',
    description: 'Dashboard gerencial em tempo real com KPIs de segurança, histórico de incidentes e relatórios automáticos para auditoria de conformidade.',
    color: '#4caf50',
    gradient: 'linear-gradient(135deg,#2e7d32,#4caf50)',
  },
]

export default function Pillars() {
  const [ref, visible] = useInView()

  return (
    <section id="pilares" className="section" ref={ref}
      style={{ background: 'linear-gradient(180deg,var(--bg-2) 0%, var(--bg) 100%)' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle,#7c4dff,transparent)', bottom: '0%', right: '-10%', opacity: 0.1 }} />

      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nossos Pilares</span>
          <h2 className="section-title">Os Pilares do <span className="gradient-text">VigiSafe</span></h2>
          <p className="section-subtitle">
            Seis dimensões fundamentais que sustentam nossa solução e garantem eficácia real no ambiente industrial.
          </p>
        </div>

        <div className="grid-3">
          {pillars.map((p, i) => (
            <div key={i}
              className={`reveal reveal-delay-${Math.min(i % 3 + 1, 4)} ${visible ? 'visible' : ''}`}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 32,
                backdropFilter: 'blur(14px)',
                transition: 'var(--t)',
                position: 'relative', overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${p.color}44`
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 12px 40px ${p.color}22, var(--shadow-card)`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: p.gradient }} />

              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: p.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20, color: '#fff',
                boxShadow: `0 6px 20px ${p.color}44`,
              }}>{p.icon}</div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12 }}>{p.title}</h3>
              <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
