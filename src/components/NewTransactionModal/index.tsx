import Modal from 'react-modal';
import { Conteiner, TransactionTypeConteiner, RadioBox } from './styles';
import IncomeImg from '../../assets/up-arrow.png'
import OutcomeImg from '../../assets/download.png'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface newTransactionModalProps{
  isOpen: boolean;
  onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps){
  const [title,setTitle] = useState('');
  const [value,setValue] = useState(0);
  const [category,setCategory] = useState('');
  const [type, setType] = useState('deposit');
  
  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type
    };

    api.post('transactions', data)

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
      value = {value}
      onChange = {event => setValue(Number(event.target.value))}
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