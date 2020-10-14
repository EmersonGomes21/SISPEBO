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
  width: 100%;
  color: ${props => props.theme.colors.white};
  height: 130%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease .7s;
  border-radius: 15px;

  .content{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto ;
    grid-gap: 10px;
    padding: 10px;
    
  }

   .close{
     display: flex;
     margin: 30px auto;
     background-color: transparent;
     outline: none;
     width: 32px;
     height: 32px;
     
     position: relative;
    cursor: pointer;

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
