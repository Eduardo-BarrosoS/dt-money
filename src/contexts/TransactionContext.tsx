import { createContext, ReactNode, useEffect, useState } from "react"


interface ITransaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    category: string,
    price: number,
    createdAt: string
}

interface ITransactionsType {
    transactions: ITransaction[]
}

interface ITransactionProviderProps {
    children: ReactNode
}

export const TransactionContext = createContext({} as ITransactionsType)

export function TransactionsProvider({ children }: ITransactionProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
  
    async function loadTransactions() {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()
  
      setTransactions(data)
    }
  
    useEffect(() => {
      loadTransactions()
    }, []);
  
    return (
      <TransactionContext.Provider value={{ transactions }}>
        {children}
      </TransactionContext.Provider>
    );
  }