import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cadastro.css";

export default function Cadastro() {
  const [dados, setDados] = useState({
    // Dados Pessoais
    nomeCompleto: "",
    cpf: "",
    rg: "",
    dataNascimento: "",
    estadoCivil: "",
    sexo: "",
    telefone: "",
    email: "",

    // Endereço
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",

    // Dados Bancários
    rendaMensal: "",
    profissao: "",
    empresa: "",
    tempoTrabalho: "",

    // Dados de Acesso
    senha: "",
    confirmarSenha: "",

    // Termos
    aceitaTermos: false,
    aceitaMarketing: false,
  });

  const [imagem, setImagem] = useState("");

  function aoSelecionarArquivo(e) {
    const arquivo = e.target.files && e.target.files[0];
    if (!arquivo) {
      setImagem("");
      return;
    }
    const urlTemporaria = URL.createObjectURL(arquivo);
    setImagem(urlTemporaria);
  }

  function aoDigitar(e) {
    const { name, value, type, checked } = e.target;
    setDados({
      ...dados,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function formatarCPF(e) {
    let valor = e.target.value.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = valor;
    aoDigitar(e);
  }

  function formatarTelefone(e) {
    let valor = e.target.value.replace(/\D/g, "");
    valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
    valor = valor.replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3");
    e.target.value = valor;
    aoDigitar(e);
  }

  function formatarCEP(e) {
    let valor = e.target.value.replace(/\D/g, "");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    e.target.value = valor;
    aoDigitar(e);
  }

  function aoEnviar(e) {
    e.preventDefault();

    if (dados.senha !== dados.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    if (!dados.aceitaTermos) {
      alert("Você deve aceitar os termos de uso!");
      return;
    }

    console.log("Dados do cadastro:", dados);
    alert("Cadastro realizado com sucesso! Em breve entraremos em contato.");
  }

  return (
    <div className="cadastro-container">
      <div className="Form">
        <div className="form-header">
          <div className="logo">
            <span className="logo-text">WILL</span>
            <span className="logo-accent">BANK</span>
          </div>
          <h2>Cadastro - Conta Bancária Online</h2>
          <Link to="/auth" className="back-button">
            ← Voltar
          </Link>
        </div>

        <form onSubmit={aoEnviar}>
          {/* Dados Pessoais */}
          <div className="secao">
            <h3>📋 Dados Pessoais</h3>

            <div className="campo-duplo">
              <div className="campo">
                <label>Nome Completo *</label>
                <input
                  type="text"
                  name="nomeCompleto"
                  value={dados.nomeCompleto}
                  onChange={aoDigitar}
                  required
                />
              </div>

              <div className="campo">
                <label>CPF *</label>
                <input
                  type="text"
                  name="cpf"
                  value={dados.cpf}
                  onChange={formatarCPF}
                  maxLength="14"
                  placeholder="000.000.000-00"
                  required
                />
              </div>
            </div>

            <div className="campo-duplo">
              <div className="campo">
                <label>RG *</label>
                <input
                  type="text"
                  name="rg"
                  value={dados.rg}
                  onChange={aoDigitar}
                  required
                />
              </div>

              <div className="campo">
                <label>Data de Nascimento *</label>
                <input
                  type="date"
                  name="dataNascimento"
                  value={dados.dataNascimento}
                  onChange={aoDigitar}
                  required
                />
              </div>
            </div>

            <div className="campo-duplo">
              <div className="campo">
                <label>Estado Civil *</label>
                <select
                  name="estadoCivil"
                  value={dados.estadoCivil}
                  onChange={aoDigitar}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="solteiro">Solteiro(a)</option>
                  <option value="casado">Casado(a)</option>
                  <option value="divorciado">Divorciado(a)</option>
                  <option value="viuvo">Viúvo(a)</option>
                  <option value="uniao">União Estável</option>
                </select>
              </div>

              <div className="campo">
                <label>Sexo *</label>
                <select
                  name="sexo"
                  value={dados.sexo}
                  onChange={aoDigitar}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="campo-duplo">
              <div className="campo">
                <label>Telefone *</label>
                <input
                  type="text"
                  name="telefone"
                  value={dados.telefone}
                  onChange={formatarTelefone}
                  maxLength="15"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div className="campo">
                <label>E-mail *</label>
                <input
                  type="email"
                  name="email"
                  value={dados.email}
                  onChange={aoDigitar}
                  required
                />
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div className="secao">
            <h3>🏠 Endereço</h3>

            <div className="campo-duplo">
              <div className="campo">
                <label>CEP *</label>
                <input
                  type="text"
                  name="cep"
                  value={dados.cep}
                  onChange={formatarCEP}
                  maxLength="9"
                  placeholder="00000-000"
                  required
                />
              </div>

              <div className="campo">
                <label>Estado *</label>
                <select
                  name="estado"
                  value={dados.estado}
                  onChange={aoDigitar}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>
            </div>

            <div className="campo">
              <label>Endereço *</label>
              <input
                type="text"
                name="endereco"
                value={dados.endereco}
                onChange={aoDigitar}
                required
              />
            </div>

            <div className="campo-duplo">
              <div className="campo">
                <label>Número *</label>
                <input
                  type="text"
                  name="numero"
                  value={dados.numero}
                  onChange={aoDigitar}
                  required
                />
              </div>

              <div className="campo">
                <label>Complemento</label>
                <input
                  type="text"
                  name="complemento"
                  value={dados.complemento}
                  onChange={aoDigitar}
                />
              </div>
            </div>

            <div className="campo-duplo">
              <div className="campo">
                <label>Bairro *</label>
                <input
                  type="text"
                  name="bairro"
                  value={dados.bairro}
                  onChange={aoDigitar}
                  required
                />
              </div>

              <div className="campo">
                <label>Cidade *</label>
                <input
                  type="text"
                  name="cidade"
                  value={dados.cidade}
                  onChange={aoDigitar}
                  required
                />
              </div>
            </div>
          </div>

          {/* Dados Financeiros */}
          <div className="secao">
            <h3>💰 Dados Financeiros</h3>

            <div className="campo">
              <label>Renda Mensal *</label>
              <select
                name="rendaMensal"
                value={dados.rendaMensal}
                onChange={aoDigitar}
                required
              >
                <option value="">Selecione</option>
                <option value="ate-1000">Até R$ 1.000</option>
                <option value="1000-2000">R$ 1.000 - R$ 2.000</option>
                <option value="2000-3000">R$ 2.000 - R$ 3.000</option>
                <option value="3000-5000">R$ 3.000 - R$ 5.000</option>
                <option value="5000-10000">R$ 5.000 - R$ 10.000</option>
                <option value="acima-10000">Acima de R$ 10.000</option>
              </select>
            </div>

            <div className="campo-duplo">
              <div className="campo">
                <label>Profissão *</label>
                <input
                  type="text"
                  name="profissao"
                  value={dados.profissao}
                  onChange={aoDigitar}
                  required
                />
              </div>

              <div className="campo">
                <label>Empresa</label>
                <input
                  type="text"
                  name="empresa"
                  value={dados.empresa}
                  onChange={aoDigitar}
                />
              </div>
            </div>

            <div className="campo">
              <label>Tempo de Trabalho na Empresa Atual</label>
              <select
                name="tempoTrabalho"
                value={dados.tempoTrabalho}
                onChange={aoDigitar}
              >
                <option value="">Selecione</option>
                <option value="menos-6meses">Menos de 6 meses</option>
                <option value="6meses-1ano">6 meses a 1 ano</option>
                <option value="1-2anos">1 a 2 anos</option>
                <option value="2-5anos">2 a 5 anos</option>
                <option value="mais-5anos">Mais de 5 anos</option>
              </select>
            </div>
          </div>

          {/* Dados de Acesso */}
          <div className="secao">
            <h3>🔐 Dados de Acesso</h3>

            <div className="campo-duplo">
              <div className="campo">
                <label>Senha *</label>
                <input
                  type="password"
                  name="senha"
                  value={dados.senha}
                  onChange={aoDigitar}
                  minLength="6"
                  required
                />
              </div>

              <div className="campo">
                <label>Confirmar Senha *</label>
                <input
                  type="password"
                  name="confirmarSenha"
                  value={dados.confirmarSenha}
                  onChange={aoDigitar}
                  minLength="6"
                  required
                />
              </div>
            </div>
          </div>

          {/* Upload de Foto (Web) */}
          <div className="secao">
            <h3>🖼️ Foto do Documento ou Selfie</h3>
            <div className="campo">
              <label>Escolher imagem (ou usar câmera no celular)</label>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={aoSelecionarArquivo}
              />
            </div>
            {imagem && (
              <div className="preview-imagem" style={{ marginTop: 12 }}>
                <img
                  src={imagem}
                  alt="Pré-visualização"
                  style={{ maxWidth: "200px", borderRadius: 8 }}
                />
              </div>
            )}
          </div>

          {/* Termos */}
          <div className="secao">
            <h3>📄 Termos e Condições</h3>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="aceitaTermos"
                  checked={dados.aceitaTermos}
                  onChange={aoDigitar}
                  required
                />
                <span>
                  Li e aceito os{" "}
                  <a href="#" target="_blank">
                    Termos de Uso
                  </a>{" "}
                  e{" "}
                  <a href="#" target="_blank">
                    Política de Privacidade
                  </a>{" "}
                  *
                </span>
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="aceitaMarketing"
                  checked={dados.aceitaMarketing}
                  onChange={aoDigitar}
                />
                <span>Desejo receber ofertas e novidades por e-mail</span>
              </label>
            </div>
          </div>

          <button type="submit" className="btn-cadastrar">
            Criar Conta Bancária
          </button>
        </form>
      </div>
    </div>
  );
}
