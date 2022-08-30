import styled from 'styled-components';

export const ItemStyle = styled.div`
display: flex;
flex-direction: row;


@media (min-width:768px) {
  .image {
  border-radius: 10px;
  width: 400px;
  &:hover {
    background-color: red;
  }
  
}
width: 700px;
flex-direction: column;

}



`;