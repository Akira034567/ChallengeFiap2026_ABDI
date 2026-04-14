import { Check, X, Globe } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const features = [
  { label: 'Detecção de EPI em tempo real' },
  { label: 'Travamento automático de máquinas' },
  { label: 'Alertas multicanal (web + mobile)' },
  { label: 'Relatórios automáticos para auditoria' },
  { label: 'Dashboard com análise preditiva' },
  { label: 'Operação offline (edge computing)' },
  { label: 'API aberta para integração' },
  { label: 'Compatível com câmeras existentes' },
  { label: 'Custo acessível para PMEs' },
  { label: 'Conformidade NR-12 automatizada' },
]

const columns = [
  {
    label: 'VigiSafe',
    highlight: true,
    values: [true, true, true, true, true, true, true, true, true, true],
  },
  {
    label: 'Inspeção Manual',
    highlight: false,
    values: [false, false, false, false, false, true, false, true, true, false],
  },
  {
    label: 'Concorrentes Tradicionais',
    highlight: false,
    values: [true, false, true, true, false, false, false, false, false, true],
  },
  {
    label: 'CFTV Convencional',
    highlight: false,
    values: [false, false, false, false, false, true, false, true, true, false],
  },
]

const marketCards = [
  {
    title: '750 mil',
    subtitle: 'acidentes de trabalho/ano no Brasil',
    desc: 'Segundo o INSS, o Brasil registra cerca de 750 mil acidentes anuais — mercado enorme a ser transformado por IA.',
    color: '#f44336',
  },
  {
    title: 'R$ 20 bi',
    subtitle: 'custo anual para a economia',
    desc: 'Acidentes de trabalho custam mais de R$ 20 bilhões por ano ao Brasil em afastamentos, tratamentos e processos.',
    color: '#ffc107',
  },
  {
    title: '12 mil',
    subtitle: 'empresas no segmento alvo',
    desc: 'Metalúrgicas, construtoras e indústrias químicas formam o mercado inicial de mais de 12.000 empresas no Brasil.',
    color: '#2196f3',
  },
]

export default function Competition() {
  const [ref, visible] = useInView()

  return (
    <section id="mercado" className="section" ref={ref}
      style={{ background: 'linear-gradient(180deg, var(--bg-2) 0%, var(--bg) 100%)' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle,#f44336,transparent)', bottom: '0%', left: '-10%', opacity: 0.07 }} />

      <div className="container">
        <div className="section-header">
          <span className="section-tag"><Globe size={12} /> Mercado</span>
          <h2 className="section-title">Nossa <span className="gradient-text">Vantagem</span> Competitiva</h2>
          <p className="section-subtitle">
            Comparativo honesto: onde o VigiSafe supera as abordagens tradicionais e soluções existentes.
          </p>
        </div>

        {/* Market cards */}
        <div className="grid-3" style={{ marginBottom: 64 }}>
          {marketCards.map((m, i) => (
            <div key={i}
              className={`card reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''}`}
              style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: m.color, marginBottom: 6 }}>{m.title}</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>{m.subtitle}</div>
              <p style={{ color: 'var(--text-2)', fontSize: '0.87rem', lineHeight: 1.65 }}>{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 640 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '16px 20px', color: 'var(--text-muted)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: 1 }}>
                  FUNCIONALIDADE
                </th>
                {columns.map((c, i) => (
                  <th key={i} style={{
                    padding: '16px 16px',
                    background: c.highlight ? 'rgba(33,150,243,0.12)' : 'transparent',
                    borderTop: c.highlight ? '2px solid rgba(33,150,243,0.4)' : '1px solid var(--border)',
                    borderLeft: c.highlight ? '1px solid rgba(33,150,243,0.25)' : '1px solid var(--border)',
                    borderRight: c.highlight ? '1px solid rgba(33,150,243,0.25)' : '1px solid var(--border)',
                    borderRadius: c.highlight ? '14px 14px 0 0' : 0,
                    textAlign: 'center',
                    fontSize: '0.88rem', fontWeight: 700,
                    color: c.highlight ? 'var(--blue-bright)' : 'var(--text-2)',
                    whiteSpace: 'nowrap',
                  }}>
                    {c.highlight && <div style={{ fontSize: '0.7rem', color: 'var(--blue-cyan)', letterSpacing: 1, marginBottom: 4 }}>NOSSA SOLUÇÃO</div>}
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, ri) => (
                <tr key={ri}>
                  <td style={{
                    padding: '13px 20px',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    fontSize: '0.9rem', color: 'var(--text-2)',
                  }}>
                    {f.label}
                  </td>
                  {columns.map((c, ci) => (
                    <td key={ci} style={{
                      padding: '13px 16px', textAlign: 'center',
                      background: c.highlight ? 'rgba(33,150,243,0.06)' : 'transparent',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      borderLeft: c.highlight ? '1px solid rgba(33,150,243,0.18)' : 'none',
                      borderRight: c.highlight ? '1px solid rgba(33,150,243,0.18)' : 'none',
                    }}>
                      {c.values[ri]
                        ? <Check size={18} color="var(--green)" />
                        : <X size={18} color="var(--text-muted)" />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
