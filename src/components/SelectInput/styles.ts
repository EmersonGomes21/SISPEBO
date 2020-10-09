import styled from 'styled-components';

export const Container = styled.div`

    > select {
        background-color: ${props => props.theme.colors.gray};;
        padding: 7px 10px;
        border-radius: 5px;
        margin-left: 7px;
        color: ${props => props.theme.colors.tertiary};
        font-weight: bold;
    }
`;