import styled from 'styled-components';



export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0, .8);
   position: absolute;
   top: 0;
   left: 0;
   z-index: 10;
   display: flex;
   justify-content: center;
   transition: all ease .7s;
`;

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  margin: auto;
  width: 90%;
  color: ${props => props.theme.colors.white};
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease .7s;
  border-radius: 15px;

  .content{
    width: 100%;
    height: 100%;
    .button{
    display: flex;
    position: relative;
    background-color: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.tertiary};
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
    padding: 8px;
    margin-left: 20px;
    top: -50px;cd

    &:hover{
      opacity: .7;
    }
    }
    .todos{
      width: 10%;
      height: 10%;
      display: flex;
      position: relative;
      left: 0;
    }
   .no-select{
      display: none;
    }
    .selectd{
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-gap: 10px;
      list-style: none;
      max-width: 1200px;
      margin: 30px auto;
      > li{
        margin-bottom: 20px;
      }
    }

    .container-as{
     display: flex;
     justify-content: space-around;
      width: 100%;

     > li{
      width: 80%;
      margin: 30px;
      list-style: none;
      cursor: pointer;

       &:hover{
        opacity: .8;
      } 

      > a{
        color: ${props => props.theme.colors.gray};
      }

      > a.select {
        padding-bottom: 5px;
        border-bottom: 1px solid ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.white};
      }

     }

    }

      
  }

   .close{
     display: flex;
     margin: 30px auto;
     background-color: transparent;
     outline: none;
     width: 32px;
     height: 32px;
     position: relative;
    &:before,
    &:after{
      content: '';
      position: absolute;
      width: 2.5px;
      height: 24px;
      background-color: ${props => props.theme.colors.white};
        
    }
    &:before{
      transform: rotate(45deg);
    }
    &:after{
      transform: rotate(-45deg);
    }

  }
`;
