import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;

  .input-block{
    display: flex;
    text-align: center;
    font-size: 18px;
    align-items: center;
    background-color: ${props => props.theme.colors.tertiary} ;
    border: 1px solid ${props => props.theme.colors.tertiary} ;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

    > label{
     margin-right: 5px;
     color: ${props => props.theme.colors.gray};
     font-weight: bold;
     cursor: pointer;
    }

    >input{
      cursor: pointer;
      
    }
    


  }


`;

