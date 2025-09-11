import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function Auth() {
  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-header">
          <div className="logo">
            <span className="logo-text">BANK</span>
            <span className="logo-accent">HOME</span>
          </div>
          <h1>Bem-vindo ao BankHome</h1>
          <p>Sua conta bancária digital completa</p>
        </div>

        <div className="auth-options">
          <Link to="/login" className="auth-button login-button">
            <div className="button-icon">🔑</div>
            <div className="button-content">
              <h3>Entrar na Conta</h3>
              <p>Acesse sua conta existente</p>
            </div>
          </Link>

          <Link to="/cadastro" className="auth-button register-button">
            <div className="button-icon">📝</div>
            <div className="button-content">
              <h3>Criar Conta</h3>
              <p>Abra sua conta bancária online</p>
            </div>
          </Link>
        </div>

        <div className="auth-features">
          <h3>Por que escolher o BankHome?</h3>
          <div className="features-grid">
            <div className="feature">
              <span className="feature-icon">💳</span>
              <span>Cartão sem anuidade</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📱</span>
              <span>App mobile completo</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🔒</span>
              <span>Segurança garantida</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <span>Transferências instantâneas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
