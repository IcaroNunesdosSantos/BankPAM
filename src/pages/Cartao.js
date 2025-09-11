import "./Cartao.css";
import { Link } from "react-router-dom";
import bola from "../imagens/bola.png";
import cartao from "../imagens/image-removebg-preview (1).png";
import seta from "../imagens/seta-esquerda.png";

export default function Cartao() {
  return (
    <div className="cartao-container">
     
      <img src={bola} alt="Bola" className="Bola" />
      <img src={cartao} alt="Carto" className="Cartao" />
      
      
    </div>
  );
}
