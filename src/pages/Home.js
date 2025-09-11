import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="welcome-section">
          <h1>Olá, Bem-vindo ao WillBank! 👋</h1>
          <p>Gerencie sua conta bancária de forma simples e segura</p>
        </div>

        <div className="dashboard-grid">
          {/* Saldo */}
          <div className="dashboard-card saldo-card">
            <div className="card-header">
              <h3>💰 Saldo Disponível</h3>
              <span className="card-icon">👁️</span>
            </div>
            <div className="saldo-value">
              <span className="currency">R$</span>
              <span className="amount">2.847,50</span>
            </div>
            <div className="saldo-details">
              <span>Conta Corrente • 1234-5</span>
            </div>
          </div>

          {/* Cartão */}
          <div className="dashboard-card cartao-card">
            <div className="card-header">
              <h3>💳 Cartão</h3>
              <span className="card-icon">→</span>
            </div>
            <div className="cartao-info">
              <div className="cartao-number">**** **** **** 1234</div>
              <div className="cartao-details">
                <span>Fatura: R$ 1.250,00</span>
                <span>Vence em 15/02</span>
              </div>
            </div>
          </div>

          {/* Ações Rápidas */}
          <div className="dashboard-card acoes-card">
            <div className="card-header">
              <h3>⚡ Ações Rápidas</h3>
            </div>
            <div className="acoes-grid">
              <Link to="/historico" className="acao-item">
                <span className="acao-icon">📊</span>
                <span>Histórico</span>
              </Link>
              <Link to="/cartao" className="acao-item">
                <span className="acao-icon">💳</span>
                <span>Cartão</span>
              </Link>
              <div className="acao-item">
                <span className="acao-icon">💸</span>
                <span>Transferir</span>
              </div>
              <div className="acao-item">
                <span className="acao-icon">📱</span>
                <span>PIX</span>
              </div>
            </div>
          </div>

          {/* Transações Recentes */}
          <div className="dashboard-card transacoes-card">
            <div className="card-header">
              <h3>📋 Transações Recentes</h3>
              <Link to="/historico" className="ver-todas">Ver todas</Link>
            </div>
            <div className="transacoes-list">
              <div className="transacao-item">
                <div className="transacao-info">
                  <span className="transacao-desc">PIX Recebido</span>
                  <span className="transacao-data">Hoje, 14:30</span>
                </div>
                <span className="transacao-valor positivo">+R$ 500,00</span>
              </div>
              <div className="transacao-item">
                <div className="transacao-info">
                  <span className="transacao-desc">Compra no Supermercado</span>
                  <span className="transacao-data">Ontem, 18:45</span>
                </div>
                <span className="transacao-valor negativo">-R$ 89,50</span>
              </div>
              <div className="transacao-item">
                <div className="transacao-info">
                  <span className="transacao-desc">Transferência</span>
                  <span className="transacao-data">Ontem, 10:20</span>
                </div>
                <span className="transacao-valor negativo">-R$ 200,00</span>
              </div>
            </div>
          </div>

          {/* Ofertas */}
          <div className="dashboard-card ofertas-card">
            <div className="card-header">
              <h3>🎯 Ofertas para Você</h3>
            </div>
            <div className="oferta-item">
              <div className="oferta-content">
                <h4>Cartão de Crédito</h4>
                <p>Limite pré-aprovado de R$ 5.000</p>
              </div>
              <button className="oferta-btn">Solicitar</button>
            </div>
            <div className="oferta-item">
              <div className="oferta-content">
                <h4>Empréstimo Pessoal</h4>
                <p>Taxa especial de 1,99% ao mês</p>
              </div>
              <button className="oferta-btn">Simular</button>
            </div>
          </div>

          {/* Atalhos */}
          <div className="dashboard-card atalhos-card">
            <div className="card-header">
              <h3>🔗 Atalhos</h3>
            </div>
            <div className="atalhos-list">
              <Link to="/perfil" className="atalho-item">
                <span className="atalho-icon">👤</span>
                <span>Meu Perfil</span>
              </Link>
              <div className="atalho-item">
                <span className="atalho-icon">🔒</span>
                <span>Segurança</span>
              </div>
              <div className="atalho-item">
                <span className="atalho-icon">📞</span>
                <span>Suporte</span>
              </div>
              <div className="atalho-item">
                <span className="atalho-icon">⚙️</span>
                <span>Configurações</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
