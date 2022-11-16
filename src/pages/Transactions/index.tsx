import { TagSimple } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from '../components/SearchForm'
import {
  PriceHighLight,
  TransactionsCard,
  TransactionsContainer,
  TransactionsTable,
  TransactionsTableContainer,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        {transactions.map((transaction) => {
          return (
            <TransactionsCard key={transaction.id}>
              <span>{transaction.description}</span>

              <PriceHighLight parent="card" variant={transaction.type}>
                {transaction.type === 'outcome' && '- '}
                {priceFormatter.format(transaction.price)}
              </PriceHighLight>

              <div>
                <div>
                  <TagSimple size={16} />
                  <span>{transaction.category}</span>
                </div>
                <span>
                  {dateFormatter.format(new Date(transaction.createdAt))}
                </span>
              </div>
            </TransactionsCard>
          )
        })}
        <TransactionsTableContainer>
          <TransactionsTable>
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighLight variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighLight>
                    </td>
                    <td> {transaction.category} </td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </TransactionsTable>
        </TransactionsTableContainer>
      </TransactionsContainer>
    </div>
  )
}
