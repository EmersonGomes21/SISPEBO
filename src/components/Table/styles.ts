import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: auto;
  
  .scroll-touch {
  align-items: center;
  text-align: justify;
   width: 200%;
  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
  
  > table{
    margin: 20px 2px;
    width: 100%;
   
    > thead{
     
      
      > tr{

        > th{
          padding-bottom: 15px;
        }
      }
     
      
    }
    > tbody{
      
      text-align: justify;
    }

    }
  }

 
`;

export const  ContainerRows = styled.div`

`;
