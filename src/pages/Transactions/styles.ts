import styled, { css } from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  display: none;
  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  @media (min-width: 751px) {
    display: block;
  }
`

export const TransactionsCard = styled.div`
  width: 100%;
  border-radius: 6px;
  padding: 1.25rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-700']};

  span {
    &:first-child {
      color: ${(props) => props.theme['gray-300']};
    }
  }
  div {
    &:last-child {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${(props) => props.theme['gray-500']};
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
      }
    }
  }
  @media (min-width: 750px) {
    display: none;
  }
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
  parent?: 'table' | 'card'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  ${(props) =>
    props.parent === 'card' &&
    css`
      margin: 0.25rem 0 1.5rem;
      line-height: 160%;
    `};
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
