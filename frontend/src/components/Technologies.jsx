import { Cpu, Database, Globe, Layers, Terminal, Wifi } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const categories = [
  {
    label: 'Visão Computacional & IA',
    icon: <Cpu size={18} />,
    color: '#7c4dff',
    techs: [
      { name: 'YOLOv8', desc: 'Detecção de objetos em tempo real' },
      { name: 'OpenCV', desc: 'Processamento de imagem e vídeo' },
      { name: 'PyTorch', desc: 'Framework de deep learning' },
      { name: 'CUDA', desc: 'Aceleração GPU NVIDIA' },
      { name: 'Roboflow', desc: 'Gestão e anotação de datasets' },
      { name: 'TensorRT', desc: 'Otimização de inferência' },
    ],
  },
  {
    label: 'Backend & API',
    icon: <Terminal size={18} />,
    color: '#2196f3',
    techs: [
      { name: 'Python / FastAPI', desc: 'API REST de alto desempenho' },
      { name: 'Node.js', desc: 'Servidor de eventos em tempo real' },
      { name: 'WebSockets', desc: 'Comunicação bidirecional' },
      { name: 'Redis', desc: 'Cache e pub/sub de mensagens' },
      { name: 'PostgreSQL', desc: 'Banco de dados relacional' },
      { name: 'Docker', desc: 'Containerização e deploy' },
    ],
  },
  {
    label: 'Frontend & Mobile',
    icon: <Globe size={18} />,
    color: '#00c8e8',
    techs: [
      { name: 'React', desc: 'Interface web responsiva' },
      { name: 'Vite', desc: 'Bundler e dev server' },
      { name: 'Recharts', desc: 'Visualização de dados' },
      { name: 'React Native', desc: 'App mobile multiplataforma' },
      { name: 'Firebase', desc: 'Notificações push (FCM)' },
    ],
  },
  {
    label: 'IoT & Automação',
    icon: <Wifi size={18} />,
    color: '#f44336',
    techs: [
      { name: 'MQTT', desc: 'Protocolo IoT leve' },
      { name: 'OPC-UA', desc: 'Padrão industrial de comunicação' },
      { name: 'ESP32', desc: 'Microcontrolador Wi-Fi/BT' },
      { name: 'Node-RED', desc: 'Orquestração de fluxos IoT' },
      { name: 'RTSP/FFmpeg', desc: 'Streaming de câmeras IP' },
    ],
  },
  {
    label: 'Infraestrutura & Cloud',
    icon: <Layers size={18} />,
    color: '#4caf50',
    techs: [
      { name: 'AWS / Azure', desc: 'Hospedagem em nuvem' },
      { name: 'GitHub Actions', desc: 'CI/CD automatizado' },
      { name: 'Kubernetes', desc: 'Orquestração de containers' },
      { name: 'Nginx', desc: 'Reverse proxy e load balancer' },
    ],
  },
  {
    label: 'Dados & Relatórios',
    icon: <Database size={18} />,
    color: '#ffc107',
    techs: [
      { name: 'Power BI', desc: 'BI corporativo' },
      { name: 'Pandas / NumPy', desc: 'Análise de dados' },
      { name: 'Grafana', desc: 'Dashboards de monitoramento' },
      { name: 'Jupyter', desc: 'Experimentos e análises' },
    ],
  },
]

export default function Technologies() {
  const [ref, visible] = useInView()

  return (
    <section id="tecnologias" className="section" ref={ref}
      style={{ background: 'var(--bg)' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle,#1565c0,transparent)', top: '30%', left: '-15%' }} />

      <div className="container">
        <div className="section-header">
          <span className="section-tag"><Cpu size={12} /> Stack</span>
          <h2 className="section-title">Nossas <span className="gradient-text">Tecnologias</span></h2>
          <p className="section-subtitle">
            Um ecossistema completo de ferramentas de ponta, do treinamento de modelos à interface do usuário.
          </p>
        </div>

        <div className="grid-3">
          {categories.map((cat, i) => (
            <div key={i}
              className={`card reveal reveal-delay-${Math.min(i % 3 + 1, 4)} ${visible ? 'visible' : ''}`}
              style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${cat.color}, transparent)` }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `${cat.color}20`, border: `1px solid ${cat.color}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: cat.color,
                }}>{cat.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem' }}>{cat.label}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {cat.techs.map((t, j) => (
                  <div key={j} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '8px 12px', borderRadius: 8,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'var(--t)',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${cat.color}12`; e.currentTarget.style.borderColor = `${cat.color}25` }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.88rem', color: '#fff' }}>{t.name}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{t.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
