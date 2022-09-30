import styled from 'styled-components';

export const SeletedExceptStyle = styled.div`

display: flex;
flex-direction: row;
gap: 20px;
margin-left: 20px;
margin-right: 20px;
width: 100%;
margin-top: 20px;




.delete {
  cursor: pointer;
}

img {
    display: inline;
    width: 50px;
    border-radius: 8px;
  }

  .icon {
    margin-top: 15px
}

.bold-result {
  font-weight: bold;
  color: black;
  font-size: 0.8em;
}

.product-text {
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.8em;
  color: hsl(220,14%,75%);

}


.product {
  width: 60%;
  color: hsl(220,14%,75%);

}

@media (min-width: 768px) {

  width: auto;
  gap: 10px;
  
}

`;