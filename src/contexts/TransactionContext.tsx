import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../lib/axois"


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
    fetchTransactions: (query?: string) => Promise<void>
}

interface ITransactionProviderProps {
    children: ReactNode
}

export const TransactionContext = createContext({} as ITransactionsType)

export function TransactionsProvider({ children }: ITransactionProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
  
    async function fetchTransactions(query?: string) {
      const response = await api.get('/transactions', {
        params: {
          q: query
        }
      })
  
      setTransactions(response.data)
    }
  
    useEffect(() => {
      fetchTransactions()
    }, []);
  
    return (
      <TransactionContext.Provider value={{ 
        transactions,
        fetchTransactions
         }}>
        {children}
      </TransactionContext.Provider>
    );
  }