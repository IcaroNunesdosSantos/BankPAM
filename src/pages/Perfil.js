import { Link } from "react-router-dom";
import './Perfil.css';
import Olho from "../imagens/olho.png";
import seta from "../imagens/seta-esquerda.png";
import certo from "../imagens/check.png";
import carta from "../imagens/mail.png";
import pessoas from "../imagens/pessoas.png";

export default function Perfil() {
  return (
    <div className="perfil-container">
      <div className="CoisasNavPerfil">
          
      

      <div className="ola">
        <Link className="voltar" to="/Home"><spam >←</spam></Link>
        
        <spam>Olá, Neguinho</spam>
      </div>
      </div>
      <div className="tudo">
        <h1 className="quadrado"></h1>
      </div>
        <div className="Dados">
          <div className="cima">
            <div className="quadrado1">
              
                  ­ ­ Conta Digital  ­ ­ ­ ­­­­ ­ ­ ­ ­­ &gt;
              <br></br><br></br>
              ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ­­­­ ­­­ ­ ­ ­ ­ ­
              <br></br>
              <spam className="conta">­ ­ Em breve uma<br></br> ­ ­ conta para você </spam>ㅤ­­­­
              <br></br> ­ ­ ­ ­  <br></br>

            </div>
            <div className="quadrado2">
              <Link className="Linkss" to="/Cartao" >
                  ­ ­ Cartão ㅤㅤㅤ­ ­ ­ ­ ­  ­ ­­­­ ­ ­  &gt;
                <br></br><br></br><br></br>
                <spam className="fatu"> ­ ­ Fatura Aberta</spam>
                <br></br>
                <spam className="saldoFatu">  ­ R$ 0,00</spam>
                <br></br>
                <spam className="fecha"> ­ ­  Fecha em 23/08</spam>
                <br></br>
                ­
              </Link>

            </div>
          </div>
          <br></br>
          <div className="quadrado3">
            <br></br>
            ­ ­ ­­­ Limite do Cartão
            <br></br><br></br>
            ­ ­­­ ­­  Saldo Disponivel: ㅤㅤㅤㅤㅤ<spam className="saldo">R$ 2.200,00</spam>
            <br></br><br></br>
          </div>
        </div>
        
        <div className="gerenciarCart">
          <div className="titutoCart">
             <spam className="ttlCart"> <br></br> ­ ­­­ ­­ ­ ­­­ ­­  Gerenciar cartões ㅤㅤㅤㅤㅤㅤㅤㅤㅤ&gt;</spam>
          </div>
          <div className="amigos">
            <div className="virtual">
              ­­ 
              <img src={certo} alt="certo" className="certo" />
              <spam className="Virt">­­ Virtual</spam>
              <spam className="liberado"> ­ ­­­ ­­ Liberado para compras</spam>
            </div>

            <div className="fisico">
              ­­ 
              <img src={carta} alt="carta" className="carta" />
              <spam className="Fisic">­­ Fisico</spam>
              <spam className="entrega"> ­ ­­­ ­­ ­­ Acompanhe a entrega</spam>
              
            </div>
            <br></br>
          </div>
        </div>

        <div className="Convidar">
            <spam className="tituloConv"> <br></br> ­ ­­­ ­­ ­ ­­­ ­­  Convidar Amigos</spam>
          <div className="pessoass">
            <spam className="Convide">
               ­ ­­­ ­­ ­ Chame todo <br></br>­ ­­­ ­­ ­ mundo para ser will <br></br>­ ­­­ ­ ­  tambem
            </spam>
            <img src={pessoas} alt="pessoas" className="pessoas" />
          </div>
        </div>

      </div>
  );
}
