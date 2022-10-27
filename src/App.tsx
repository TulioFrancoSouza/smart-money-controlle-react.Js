import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import {NewTransactionModal} from "./components/NewTransactionModal"
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);
  
  function handleOpenTransactionModal(){
    setisNewTransactionModalOpen(true);
  }
  
  function handleCloseTransactionModal(){
    setisNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseTransactionModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}