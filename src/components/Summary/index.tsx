import { SummeryCard, SummeryContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <SummeryContainer>
      <SummeryCard>
        <header>
          <span> Entradas </span>

          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummeryCard>
      <SummeryCard>
        <header>
          <span> Saída </span>

          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummeryCard>
      <SummeryCard variant={summary.total > 0 ? 'green' : 'red'}>
        <header>
          <span> Total </span>

          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummeryCard>
    </SummeryContainer>
  )
}
