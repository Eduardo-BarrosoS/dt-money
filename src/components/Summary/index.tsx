import { SummeryCard, SummeryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export function Summary() {

    return (
        <SummeryContainer>
            <SummeryCard >
                <header>
                    <span> Entradas </span>

                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>R$ 17.400,00</strong>
            </SummeryCard>
            <SummeryCard >
                <header>
                    <span> Saída </span>

                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>R$ 17.400,00</strong>

            </SummeryCard>
            <SummeryCard variant="green">
                <header>
                    <span> Total </span>

                    <CurrencyDollar size={32} color="#FFF" />
                </header>
                <strong>R$ 17.400,00</strong>

            </SummeryCard>

        </SummeryContainer>
    )
}

