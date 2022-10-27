import logo from '../../assets/cash-flow.png';
import { Conteiner, Content } from './styles';

interface HeaderProps{
  onOpenNewTransactionModal: ()=> void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){

   return(
    <Conteiner>
      <Content>
      <img src={logo} alt="pfc"/>
      <button type="button" onClick={onOpenNewTransactionModal}>
        Nova Transação
      </button>

      
      </Content>
    </Conteiner>
  )
}