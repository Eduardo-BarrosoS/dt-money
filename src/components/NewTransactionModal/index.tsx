import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';

import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as  Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";

const newTransactionFormSchema = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    type: zod.enum(['income', 'outcome'])
})

type NewTransactionType = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<NewTransactionType>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    function handleCreateNewTransaction(data: NewTransactionType) {
        console.log(data)
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <CloseButton>
                    <X size={24} />
                </ CloseButton>
                <Dialog.Title> Nova Transação</Dialog.Title>

                <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        {...register('description')}
                        placeholder="Descrição" required />
                    <input
                        type="number"
                        {...register('price', { valueAsNumber: true })}
                        placeholder="Preço" name="" id="" />
                    <input
                        type="text"
                        {...register('category')}
                        placeholder="Categoria" required />

                    <TransactionType>
                        <TransactionTypeButton variant="income" value="income">
                            <ArrowCircleDown size={24} />
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant="outcome" value="outcome">
                            <ArrowCircleUp size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit" disabled={ isSubmitting }>
                        Cadastrar
                    </button>
                </form>

            </Content>
        </Dialog.Portal>

    )
}

