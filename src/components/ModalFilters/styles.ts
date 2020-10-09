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
  margin-top: 7%;
  background-color: #fff;
  width: 60%;
  color: #000;
  height: 60%;
  display: flex;
  justify-content: center;
  transition: all ease .7s;
  border-radius: 15px;

   .close{
    background-color: transparent;
    outline: none;
    width: 32px;
    height: 32px;
    background-color: red;
    &:before, &:after{
      content: '';
      position: absolute;
      width: 2.5px;
      height: 24px;
      background-color: #000;
      
    }
  }
`;
