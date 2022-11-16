import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "../components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";



export function Transactions() {

    return (
        <div>
            <Header />
            <Summary />


            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transaction.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{ transaction.description   }</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                            {transaction.price}
                                        </PriceHighLight>
                                    </td>
                                    <td> { transaction.category} </td>
                                    <td>{ transaction.createdAt }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}

