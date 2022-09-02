import styled from 'styled-components';

export const ItemStyle = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;

.image {
  width: 100vh;
  height: 300px;
}


@media (min-width:768px) {
  .image {
  border-radius: 10px;
  width: 400px;
  &:hover {
    cursor: pointer;
  }
  
}
flex-direction: column;

}



`;