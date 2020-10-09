import styled from 'styled-components';

export const Container = styled.div`
width: 70%;
display: flex;
position: relative;
left: 0;
margin-left: 30px;
padding-right: 20px;
`;

export const  SearchForm = styled.form`
padding-left: 16px;
width: 100%;
input{

  background: ${props => props.theme.colors.gray};
  outline: 0;
  border-radius: 10px;
  padding: 7px 12px; 
  width: 100%;
  color: ${props => props.theme.colors.tertiary};
  transition: all  0.7s;
  &:focus{
    position: relative;
    left: -50%;
    width: 150%;
  }
  transition: width .2s ease-out, color ease-out ;
}
`;