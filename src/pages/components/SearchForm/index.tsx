import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";


const searchFormSchema = zod.object({
    query: zod.string()
})

type searchFormType =  zod.infer<typeof searchFormSchema>

export function SearchForm() {

    const { 
        register,
         handleSubmit, 
         formState: { isSubmitting },
        } = useForm<searchFormType>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchTransaction(data:  searchFormType) {
        // await new Promise(resolve => setTimeout(() => resolve, 200))
        console.log(data)
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

