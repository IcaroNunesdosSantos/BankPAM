import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Loading from "./pages/Loading";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Historico from "./pages/Historico";
import Cartao from "./pages/Cartao";
import Perfil from "./pages/Perfil";
import './App.css';

// Componente interno para usar useNavigate
function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [showDecision, setShowDecision] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simula carregamento inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowDecision(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowDecision(true);
  };

  const handleDecision = (choice) => {
    setShowDecision(false);
    // Aqui você pode adicionar lógica para verificar se o usuário está logado
    // Por enquanto, vamos simular que se escolher "home" está logado
    if (choice === 'home') {
      // Redirecionar para home (usuário logado)
      navigate('/home');
    } else {
      // Redirecionar para cadastro (novo usuário)
      navigate('/cadastro');
    }
  };

  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  if (showDecision) {
    return (
      <div className="decision-container">
        <div className="decision-content">
          <div className="decision-header">
            <div className="logo">
              <span className="logo-text">WILL</span>
              <span className="logo-accent">BANK</span>
            </div>
            <h1>Bem-vindo ao WillBank! 👋</h1>
            <p>Escolha como deseja continuar:</p>
          </div>

          <div className="decision-options">
            <button 
              className="decision-button home-button"
              onClick={() => handleDecision('home')}
            >
              <div className="button-icon">🏠</div>
              <div className="button-content">
                <h3>Já tenho conta</h3>
                <p>Acessar minha conta bancária</p>
              </div>
            </button>

            <button 
              className="decision-button register-button"
              onClick={() => handleDecision('cadastro')}
            >
              <div className="button-icon">📝</div>
              <div className="button-content">
                <h3>Sou novo por aqui</h3>
                <p>Criar minha conta bancária</p>
              </div>
            </button>
          </div>

          <div className="decision-features">
            <h3>Por que escolher o WillBank?</h3>
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

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cartao" element={<Cartao />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


