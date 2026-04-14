import { useState } from 'react'
import { Mail, MessageSquare, Send, GitFork, Briefcase, CheckCircle2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [ref, visible] = useInView()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const inputStyle = {
    width: '100%', padding: '13px 16px',
    background: 'rgba(10,25,55,0.7)',
    border: '1px solid rgba(33,150,243,0.2)',
    borderRadius: 10, color: '#fff',
    fontSize: '0.93rem', fontFamily: 'inherit',
    outline: 'none', transition: 'border-color 0.2s',
  }

  const focusStyle = (e) => e.target.style.borderColor = 'rgba(33,150,243,0.6)'
  const blurStyle  = (e) => e.target.style.borderColor = 'rgba(33,150,243,0.2)'

  return (
    <section id="contato" className="section" ref={ref}
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%)' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle,#1565c0,transparent)', bottom: '0%', left: '-10%', opacity: 0.12 }} />

      <div className="container">
        <div className="section-header">
          <span className="section-tag"><MessageSquare size={12} /> Fale Conosco</span>
          <h2 className="section-title">Entre em <span className="gradient-text">Contato</span></h2>
          <p className="section-subtitle">
            Quer saber mais sobre o projeto, propor uma parceria ou tirar dúvidas? Estamos à disposição.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Info side */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="card" style={{ padding: '28px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'linear-gradient(135deg,#1565c0,#2196f3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Mail size={22} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 2 }}>E-mail</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-2)' }}>contato@vigisafe.com.br</div>
                </div>
              </div>
              <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                Respondemos em até 24 horas úteis. Para demonstrações e parcerias empresariais,
                use o formulário ao lado com o assunto adequado.
              </p>
            </div>

            <div className="card" style={{ padding: '28px 28px' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 16 }}>Conecte-se ao Time</h3>
              <div style={{ display: 'flex', gap: 12 }}>
                <a href="https://github.com/" target="_blank" rel="noreferrer"
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '12px', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10, fontWeight: 600, fontSize: '0.9rem',
                    color: 'var(--text-2)', transition: 'var(--t)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}>
                  <GitFork size={18} /> GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '12px', background: 'rgba(0,120,215,0.1)',
                    border: '1px solid rgba(0,120,215,0.25)',
                    borderRadius: 10, fontWeight: 600, fontSize: '0.9rem',
                    color: 'var(--text-2)', transition: 'var(--t)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(0,120,215,0.2)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'rgba(0,120,215,0.1)' }}>
                  <Briefcase size={18} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="card" style={{ padding: '28px 28px', background: 'linear-gradient(135deg, rgba(33,150,243,0.08), rgba(0,200,83,0.04))', borderColor: 'rgba(33,150,243,0.2)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: 4 }} className="gradient-text">FIAP × ABDI</div>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>Challenge 2026 – Metaindústria</div>
              <p style={{ color: 'var(--text-2)', fontSize: '0.87rem', lineHeight: 1.65 }}>
                Projeto desenvolvido no contexto do FIAP Challenge 2026 em parceria com a
                Agência Brasileira de Desenvolvimento Industrial (ABDI).
              </p>
            </div>
          </div>

          {/* Form side */}
          <div className={`card reveal reveal-delay-1 ${visible ? 'visible' : ''}`} style={{ padding: 36 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle2 size={48} color="var(--green)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>Mensagem enviada!</h3>
                <p style={{ color: 'var(--text-2)', fontSize: '0.93rem' }}>Retornaremos em breve. Obrigado pelo contato.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 4 }}>Envie uma mensagem</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 8 }}>Todos os campos são obrigatórios.</p>

                <div className="grid-2" style={{ gap: 14 }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: 6 }}>Nome</label>
                    <input name="name" value={form.name} onChange={handle} required
                      placeholder="Seu nome completo"
                      style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: 6 }}>E-mail</label>
                    <input name="email" type="email" value={form.email} onChange={handle} required
                      placeholder="seu@email.com"
                      style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: 6 }}>Assunto</label>
                  <select name="subject" value={form.subject} onChange={handle} required
                    style={{ ...inputStyle, cursor: 'pointer' }} onFocus={focusStyle} onBlur={blurStyle}>
                    <option value="" disabled>Selecione um assunto</option>
                    <option value="parceria">Proposta de Parceria</option>
                    <option value="demo">Solicitar Demonstração</option>
                    <option value="info">Informações do Projeto</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: 6 }}>Mensagem</label>
                  <textarea name="message" value={form.message} onChange={handle} required
                    placeholder="Escreva sua mensagem..."
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={focusStyle} onBlur={blurStyle} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-end', padding: '13px 28px' }}>
                  <Send size={16} /> Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
