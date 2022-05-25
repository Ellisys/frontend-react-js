import styled from 'styled-components'

export const BtnForm = styled.button`
    background-color: #7d7784;
    border: none;
    border-radius: 10px;
    padding: .2rem 0;
    color: white;
    font-size: 1.4rem;
    width: 90%;
    margin: .5rem auto;
    text-transform: uppercase;
    cursor:pointer;

    @media (min-width:1024px){
        width:55%
    }
`;