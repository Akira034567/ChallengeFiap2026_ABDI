import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import { BarChart2, TrendingUp } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const incidentData = [
  { mes: 'Jan', semEPI: 24, comEPI: 3 },
  { mes: 'Fev', semEPI: 18, comEPI: 2 },
  { mes: 'Mar', semEPI: 29, comEPI: 4 },
  { mes: 'Abr', semEPI: 12, comEPI: 1 },
  { mes: 'Mai', semEPI: 8,  comEPI: 1 },
  { mes: 'Jun', semEPI: 5,  comEPI: 0 },
]

const accuracyData = [
  { sprint: 'S1', capacete: 0,  colete: 0,  oculos: 0  },
  { sprint: 'S2', capacete: 94, colete: 92, oculos: 89 },
  { sprint: 'S3', capacete: 95, colete: 93, oculos: 91 },
  { sprint: 'S4', capacete: 96, colete: 94, oculos: 92 },
]

const epiData = [
  { name: 'Em conformidade', value: 78 },
  { name: 'Sem capacete',    value: 10 },
  { name: 'Sem colete',      value: 7  },
  { name: 'Sem óculos',      value: 5  },
]

const PIE_COLORS = ['#2196f3', '#f44336', '#ffc107', '#ff6d00']

const kpis = [
  { label: 'Alertas Gerados',   value: '1.247', sub: 'últimos 30 dias',  color: '#2196f3' },
  { label: 'Conformidade Média', value: '78%',  sub: '+12% vs. sem IA',  color: '#4caf50' },
  { label: 'Máquinas Travadas',  value: '34',   sub: 'acionamentos mês', color: '#f44336' },
  { label: 'Câmeras Ativas',     value: '8',    sub: 'online agora',     color: '#7c4dff' },
]

const tooltipStyle = {
  background: '#0d1f3a',
  border: '1px solid rgba(33,150,243,0.25)',
  borderRadius: 10,
  color: '#fff',
  fontSize: '0.85rem',
}

export default function Dashboards() {
  const [ref, visible] = useInView()

  return (
    <section id="dashboard" className="section" ref={ref}
      style={{ background: 'var(--bg-2)' }}>
      <div className="orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle,#2196f3,transparent)', top: '-20%', right: '-15%', opacity: 0.09 }} />

      <div className="container">
        <div className="section-header">
          <span className="section-tag"><BarChart2 size={12} /> Analytics</span>
          <h2 className="section-title"><span className="gradient-text">Dashboard</span> de Segurança</h2>
          <p className="section-subtitle">
            Visão em tempo real das métricas de conformidade, detecção e desempenho do sistema.
          </p>
        </div>

        {/* KPI cards */}
        <div className="grid-4" style={{ marginBottom: 40 }}>
          {kpis.map((k, i) => (
            <div key={i}
              className={`card reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''}`}
              style={{ textAlign: 'center', padding: '24px 20px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: k.color, marginBottom: 4 }}>{k.value}</div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 4 }}>{k.label}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{k.sub}</div>
            </div>
          ))}
        </div>

        {/* Charts row 1 */}
        <div className="grid-2" style={{ marginBottom: 32 }}>
          {/* Bar chart */}
          <div className={`card reveal ${visible ? 'visible' : ''}`}>
            <h3 style={{ fontWeight: 700, marginBottom: 6, fontSize: '1rem' }}>
              Incidentes por Mês
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: 20 }}>
              Antes vs. depois da implantação do VigiSafe
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={incidentData} barSize={14} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="mes" tick={{ fill: '#4a6c8a', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#4a6c8a', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(33,150,243,0.07)' }} />
                <Legend wrapperStyle={{ fontSize: '0.82rem', color: 'var(--text-2)' }} />
                <Bar dataKey="semEPI" name="Sem VigiSafe" fill="#f44336" radius={[4, 4, 0, 0]} />
                <Bar dataKey="comEPI" name="Com VigiSafe" fill="#2196f3" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie chart */}
          <div className={`card reveal reveal-delay-1 ${visible ? 'visible' : ''}`}>
            <h3 style={{ fontWeight: 700, marginBottom: 6, fontSize: '1rem' }}>
              Distribuição de Inconformidades
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: 20 }}>
              Percentual por tipo de EPI ausente
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={epiData} cx="50%" cy="50%"
                  innerRadius={55} outerRadius={85}
                  paddingAngle={4} dataKey="value"
                  label={({ name, value }) => `${value}%`}
                  labelLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                >
                  {epiData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`]} />
                <Legend wrapperStyle={{ fontSize: '0.82rem', color: 'var(--text-2)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line chart – accuracy */}
        <div className={`card reveal ${visible ? 'visible' : ''}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <TrendingUp size={18} color="var(--blue-bright)" />
            <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>Evolução da Precisão do Modelo (mAP %)</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: 20 }}>
            Performance por tipo de EPI ao longo das sprints de treinamento
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="sprint" tick={{ fill: '#4a6c8a', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} tick={{ fill: '#4a6c8a', fontSize: 12 }} axisLine={false} tickLine={false} unit="%" />
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`]} />
              <Legend wrapperStyle={{ fontSize: '0.82rem', color: 'var(--text-2)' }} />
              <Line type="monotone" dataKey="capacete" name="Capacete" stroke="#2196f3" strokeWidth={2.5} dot={{ r: 4, fill: '#2196f3' }} />
              <Line type="monotone" dataKey="colete"   name="Colete"   stroke="#00c8e8" strokeWidth={2.5} dot={{ r: 4, fill: '#00c8e8' }} />
              <Line type="monotone" dataKey="oculos"   name="Óculos"   stroke="#7c4dff" strokeWidth={2.5} dot={{ r: 4, fill: '#7c4dff' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}
