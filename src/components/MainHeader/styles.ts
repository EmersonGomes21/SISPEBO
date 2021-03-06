import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    
    background-color: ${props => props.theme.colors.secondary};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;

    border-bottom: 1px solid ${props => props.theme.colors.gray};
    >h2{
        color: ${props => props.theme.colors.white}; 
        font-size: 18px;
        text-transform: uppercase ;
    }
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;