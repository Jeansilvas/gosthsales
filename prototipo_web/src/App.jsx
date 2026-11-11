import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="login-page">
      {/* Lado esquerdo: imagem de fundo + texto */}
      <div className="login-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="logo">✦ MinhaMarca</div>
          <h1>
            Bem-vindo de volta<span>.</span>
          </h1>
          <p>
            Acesse sua conta para gerenciar projetos, acompanhar resultados e
            continuar de onde parou.
          </p>
          <div className="hero-stats">
            <div>
              <strong>+12k</strong>
              <span>usuários ativos</span>
            </div>
            <div>
              <strong>99.9%</strong>
              <span>de uptime</span>
            </div>
            <div>
              <strong>4.9★</strong>
              <span>avaliação média</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lado direito: caixa de login */}
      <div className="login-form-side">
        <form className="login-card" onSubmit={handleLogin}>
          <h2>Entrar</h2>
          <p className="subtitle">Digite suas credenciais para continuar</p>

          <label htmlFor="usuario">Usuário ou e-mail</label>
          <div className="input-group">
            <span className="icon">👤</span>
            <input
              id="usuario"
              type="text"
              placeholder="ex: maria@email.com"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              autoComplete="username"
            />
          </div>

          <label htmlFor="senha">Senha</label>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              id="senha"
              type={mostrarSenha ? 'text' : 'password'}
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="button"
              className="eye-btn"
              onClick={() => setMostrarSenha(!mostrarSenha)}
              aria-label="Mostrar senha"
            >
              {mostrarSenha ? '🙈' : '👁️'}
            </button>
          </div>

          <div className="form-row">
            <label className="remember">
              <input
                type="checkbox"
                checked={lembrar}
                onChange={(e) => setLembrar(e.target.checked)}
              />
              Lembrar de mim
            </label>
            <a href="#">Esqueci a senha</a>
          </div>

          <button type="submit" className="btn-primary" disabled={carregando}>
            {carregando ? 'Entrando...' : 'Entrar →'}
          </button>

          <div className="divider">
            <span>ou continue com</span>
          </div>

          <div className="social-row">
            <button type="button" className="btn-social">
              <span>G</span> Google
            </button>
            <button type="button" className="btn-social">
              <span>⌘</span> Apple
            </button>
          </div>

          <p className="signup">
            Não tem conta? <a href="#">Criar conta grátis</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default App
