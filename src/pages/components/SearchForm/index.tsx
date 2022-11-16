import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useContext } from "react";
import { TransactionContext } from "../../../contexts/TransactionContext";


const searchFormSchema = zod.object({
    query: zod.string()
})

type searchFormType =  zod.infer<typeof searchFormSchema>

export function SearchForm() {
    const { fetchTransactions  } = useContext(TransactionContext)

    const { 
        register,
         handleSubmit, 
         formState: { isSubmitting },
        } = useForm<searchFormType>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchTransaction(data:  searchFormType) {
        await fetchTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
            <input
                type="text"
                {...register('query')}
                placeholder="Busque por transações"
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}

