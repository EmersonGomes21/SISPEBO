import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0px auto;
  justify-content: center;

  .input-block{
    max-width: 200px;
    max-height: 50px;
    display: flex;
    text-align: center;
    font-size: 12px;
    align-items: center;
    background-color: ${props => props.theme.colors.gray} ;
    border: 1px solid ${props => props.theme.colors.tertiary} ;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease .5s;

    &:hover{
    opacity: .7;

    }

    > label{
     margin-right: 5px;
     color: ${props => props.theme.colors.tertiary};
     font-weight: bold;
     cursor: pointer;
     text-transform: uppercase;
    }

    > input{
      cursor: pointer;
      
    }
    


  }


`;

