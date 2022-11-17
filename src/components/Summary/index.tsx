import { useContext } from 'react';
import { Conteiner } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {

  const { transactions } = useContext(TransactionsContext)

  const totalDeposit = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit'){
      return acc + transaction.amount;
    }

    return acc;
  }, 0)
  
  console.log(transactions)
  return (
    <Conteiner>

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="income icon" />
        </header>
        <strong>{totalDeposit}</strong>
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