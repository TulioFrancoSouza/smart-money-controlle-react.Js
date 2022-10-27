import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Conteiner } from "./styles";

export function TransactionTable(){
  const transactions = useContext(TransactionsContext)

    return(
    <Conteiner>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return(
              <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt))}
              </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </Conteiner>
  )
}