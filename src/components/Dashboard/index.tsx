import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Conteiner } from "./styles";

export function Dashboard(){
  return(
    <Conteiner>
      <Summary/>
      <TransactionTable/>
    </Conteiner>
  )
}