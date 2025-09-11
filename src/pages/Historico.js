import React, { useState } from 'react';
import './Historico.css';

export default function Historico() {
  const [transacoes, setTransacoes] = useState([
    { id: 1, descricao: 'Compra no supermercado', valor: -150.00, data: '2024-01-15', tipo: 'gasto' },
    { id: 2, descricao: 'Salário', valor: 3000.00, data: '2024-01-10', tipo: 'receita' },
    { id: 3, descricao: 'Transferência para poupança', valor: -500.00, data: '2024-01-08', tipo: 'transferencia' }
  ]);

  const [novaTransacao, setNovaTransacao] = useState({
    descricao: '',
    valor: '',
    tipo: 'gasto'
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const adicionarTransacao = () => {
    if (novaTransacao.descricao && novaTransacao.valor) {
      const transacao = {
        id: Date.now(),
        descricao: novaTransacao.descricao,
        valor: parseFloat(novaTransacao.valor),
        data: new Date().toISOString().split('T')[0],
        tipo: novaTransacao.tipo
      };
      
      setTransacoes([transacao, ...transacoes]);
      setNovaTransacao({ descricao: '', valor: '', tipo: 'gasto' });
      setMostrarFormulario(false);
    }
  };

  const removerTransacao = (id) => {
    setTransacoes(transacoes.filter(transacao => transacao.id !== id));
  };

  const formatarValor = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  return (
    <div className="historico-container">
      <h1>Histórico de Transações</h1>
      
      <div className="botoes-container">
        <button 
          className="btn-adicionar"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          + Adicionar Gasto
        </button>
      </div>

      {mostrarFormulario && (
        <div className="formulario-container">
          <h3>Nova Transação</h3>
          <div className="form-group">
            <label>Descrição:</label>
            <input
              type="text"
              value={novaTransacao.descricao}
              onChange={(e) => setNovaTransacao({...novaTransacao, descricao: e.target.value})}
              placeholder="Ex: Compra no supermercado"
            />
          </div>
          <div className="form-group">
            <label>Valor:</label>
            <input
              type="number"
              step="0.01"
              value={novaTransacao.valor}
              onChange={(e) => setNovaTransacao({...novaTransacao, valor: e.target.value})}
              placeholder="0.00"
            />
          </div>
          <div className="form-group">
            <label>Tipo:</label>
            <select
              value={novaTransacao.tipo}
              onChange={(e) => setNovaTransacao({...novaTransacao, tipo: e.target.value})}
            >
              <option value="gasto">Gasto</option>
              <option value="receita">Receita</option>
              <option value="transferencia">Transferência</option>
            </select>
          </div>
          <div className="botoes-formulario">
            <button className="btn-salvar" onClick={adicionarTransacao}>
              Salvar
            </button>
            <button className="btn-cancelar" onClick={() => setMostrarFormulario(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="lista-transacoes">
        {transacoes.length === 0 ? (
          <p className="sem-transacoes">Nenhuma transação encontrada</p>
        ) : (
          transacoes.map(transacao => (
            <div key={transacao.id} className="transacao-item">
              <div className="transacao-info">
                <div className="transacao-descricao">
                  <h4>{transacao.descricao}</h4>
                  <span className="transacao-data">{formatarData(transacao.data)}</span>
                </div>
                <div className="transacao-valor">
                  <span className={`valor ${transacao.valor < 0 ? 'negativo' : 'positivo'}`}>
                    {formatarValor(transacao.valor)}
                  </span>
                  <span className="tipo-transacao">{transacao.tipo}</span>
                </div>
              </div>
              <button 
                className="btn-remover"
                onClick={() => removerTransacao(transacao.id)}
                title="Remover transação"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}