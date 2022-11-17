import Modal from 'react-modal';
import { Conteiner, TransactionTypeConteiner, RadioBox } from './styles';
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState, useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

interface newTransactionModalProps{
  isOpen: boolean;
  onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps){
  const [title,setTitle] = useState('');
  const [amount ,setAmount] = useState(0);
  const [category,setCategory] = useState('');
  const [type, setType] = useState('deposit');
  const { createTransaction } = useContext(TransactionsContext)
  
  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
  }

  return (

    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName = "new-transaction-modal"
      className = "new-transaction-modal-content"
      >
      
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        X
      </button>
      
      <Conteiner onSubmit={handleCreateNewTransaction}
      >
      <h2>Cadastrar transação</h2>
      <input 
      placeholder = "Title"
      value = {title}
      onChange = {event => setTitle(event.target.value)}
      />

      <input 
      type = "number"
      placeholder = "Value"
      value = {amount}
      onChange = {event => setAmount(Number(event.target.value))}
      />

      <TransactionTypeConteiner>
        <RadioBox
          type = "button"
          onClick = {()=>{setType('deposit');}}
          isActive = {type === 'deposit'}
          activeColor = "green"
        >
          <img src={IncomeImg} alt="Income"/>
          <span>Entrada</span>
        </RadioBox>

        <RadioBox
          type = "button"
          onClick = {()=>{setType('withdraw');}}
          isActive = {type === 'withdraw'}
          activeColor = "red"
        >
          <img src={OutcomeImg} alt="Income"/>
          <span>Saída</span>
        </RadioBox>


      </TransactionTypeConteiner>

      <input
      placeholder = "Category"
      value = {category}
      onChange = {event => setCategory(event.target.value)}
      />

      <button 
      type="submit"
      >
        Cadastrar
      </button>

      </Conteiner>
    </Modal>

  )
}