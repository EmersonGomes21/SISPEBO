import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;


export const BotaoModal = styled.button`
    display: block;
    width: 40%;
    height: 30px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    font-size: 12px;
    text-transform: uppercase;
    background-color: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.tertiary};
    font-weight: bold;
    transition: all ease 0.5s;

    &:hover, &:focus{
     opacity: .7;
    }
   
`;



