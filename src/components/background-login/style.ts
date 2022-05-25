import styled from 'styled-components'

export const BgLoginStyle = styled.div`

    text-align: center;
    color: #e7e5eb;
    font-size: 1.2rem;
    margin-top: .5rem;
    position:relative;
    transition: 1s;
    
    button{
        border: 2px solid #e7e5eb;
        border-radius: 20px;
        font-size: 1.3rem;
        padding: .2rem .4rem;
        color: #e7e5eb;
        background: none;
        cursor: pointer;
    }

    @media (min-width:1024px){
        width: 50vw;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #e7e5eb;
        font-size: 2rem;
        
        button{
            font-size: 1.6rem;
            padding: .2rem .4rem;
            color: #e7e5eb;
            background: none;
            cursor: pointer;
            margin-top: 1rem;
        }
    }

`;