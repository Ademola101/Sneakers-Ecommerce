import styled from 'styled-components';

export const QuantityStyle = styled.div`
@media (min-width:768px) {
  
    height: 20px;
    width: 110px;
    position: relative;
    left: 150px;
    bottom: 90px
}

display: flex;
flex-direction: row;
gap: 20px;
margin-top: 20px;
background-color: hsl(240deg 54% 95%);
padding: 13px;
width: 85%;
margin-left: auto;
margin-right: auto;
border-radius: 10px;


.minus {
  width: 10%;
  &:hover {
    cursor: pointer;
  }
}

.plus {
  width: 10%;
  &:hover {
    cursor: pointer;
  }
}
.number{
  width: 70%;
  text-align: center;
  font-weight: bold;
}

`;