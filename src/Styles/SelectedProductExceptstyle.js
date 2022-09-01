import styled from 'styled-components';

export const SeletedExceptStyle = styled.div`

display: flex;
flex-direction: row;
gap: 20px;
margin-left: 20px;
margin-right: 20px;
width: 100%;
margin-top: 20px;



img {
    display: inline;
    width: 50px;
    border-radius: 8px;
  }

  .icon {
  

}

.bold-result {
  font-weight: bold;
  color: black;
}

.product-text {
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2em;
  color: hsl(220,14%,75%);

}


.product {
  width: 60%;
  color: hsl(220,14%,75%);

}



`;