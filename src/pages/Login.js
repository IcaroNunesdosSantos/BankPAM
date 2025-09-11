import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [dados, setDados] = useState({
    email: '',
    senha: ''
  });
  const navigate = useNavigate();

  function aoDigitar(e) {
    setDados({
      ...dados,
      [e.target.name]: e.target.value
    });
  }

  function aoEnviar(e) {
    e.preventDefault();
    
    // Simulação de login - em um app real, faria validação com backend
    if (dados.email && dados.senha) {
      alert('Login realizado com sucesso!');
      navigate('/home');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-header">
          <div className="logo">
            <span className="logo-text">BANK</span>
            <span className="logo-accent">HOME</span>
          </div>
          <h1>Entrar na Conta</h1>
          <p>Digite seus dados para acessar sua conta</p>
        </div>

        <form onSubmit={aoEnviar} className="login-form">
          <div className="form-group">
            <label>E-mail ou CPF</label>
            <input
              type="text"
              name="email"
              value={dados.email}
              onChange={aoDigitar}
              placeholder="Digite seu e-mail ou CPF"
              required
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              value={dados.senha}
              onChange={aoDigitar}
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Lembrar de mim</span>
            </label>
            <Link to="#" className="forgot-password">Esqueci minha senha</Link>
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <div className="login-footer">
          <p>Não tem uma conta? <Link to="/cadastro">Criar conta</Link></p>
          <Link to="/auth" className="back-button">← Voltar</Link>
        </div>
      </div>
    </div>
  );
}
