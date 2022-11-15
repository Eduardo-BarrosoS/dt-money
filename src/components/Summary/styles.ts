import styled, { css } from "styled-components";

export const SummeryContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;
    
`

interface SummeryCardProps {
    variant?: 'green';
}

export const SummeryCard = styled.div<SummeryCardProps>`

    background: ${props => props.theme["gray-600"]};
    border-radius: 6px;
    padding: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: ${props => props.theme["gray-300"]};
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props => props.variant === 'green' && css`
    background: ${props.theme["green-700"]};
    `}
`