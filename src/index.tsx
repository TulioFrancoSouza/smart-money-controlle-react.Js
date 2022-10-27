import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App'
import {createServer, Model} from 'miragejs';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer',
          type: 'deposit',
          category: 'Development',
          amount: 6000,
          createdAt: new Date('2022-02-12 09:00:00'),
        },

        {
          id: 2,
          title: 'Website',
          type: 'deposit',
          category: 'Development',
          amount: 12000,
          createdAt: new Date('2022-02-18 11:00:00')
        },

        {
          id: 3,
          title: 'Designer',
          type: 'withdraw',
          category: 'Design',
          amount: 1200,
          createdAt: new Date('2022-02-20 08:00:00')
        }
      ],
    })
  },

  
 
  routes(){
    this.namespace = 'api';

    this.get('transactions', () =>{
      return[
        this.schema.all('transaction')  
      ] 
    });

    this.post('transactions', (schema, request) =>{
     const data = JSON.parse(request.requestBody)

     return schema.create('transaction', data)
    });
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);