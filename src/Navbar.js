import { Link } from "react-router-dom";
import './Navbar.css';
import PerfilImg from "./imagens/image-removebg-preview.png";

export default function Navbar() {
  return (
    <nav>
      <Link className="Perfil" to="/perfil" >
        <img src={PerfilImg} alt="Perfil" className="Perfil" />
      </Link>
      <Link className="Links" to="/home" >Home</Link>
      <Link className="Links" to="/cartao" >Cartão</Link>
      <Link className="Links" to="/historico" >Histórico</Link>
    </nav>
  );
}

