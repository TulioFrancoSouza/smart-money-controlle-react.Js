import { useContext } from 'react';
import { Conteiner } from "./styles";
import incomeImg from '../../assets/up-arrow.png';
import outcomeImg from '../../assets/download.png';
import totalImg from '../../assets/money.png';
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {

  const transactions = useContext(TransactionsContext)
  
  console.log(transactions)
  return (
    <Conteiner>

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="income icon" />
        </header>
        <strong>R$1.000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="outocme icon" />
        </header>
        <strong>-R$1.000,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Resumo</p>
          <img src={totalImg} alt="total icon" />
        </header>
        <strong>R$8.000,00</strong>
      </div>
    </Conteiner >
  )
}