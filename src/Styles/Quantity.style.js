import styled from 'styled-components';

export const QuantityStyle = styled.div`
@media (min-width:768px) {
  position: relative;
    height: 20px;
    top: 350px;
    right: 300px;
}

display: flex;
flex-direction: row;
gap: 20px;
margin-top: 20px;
background-color: hsl(240deg 54% 95%);
padding: 13px;
width: 80%;
margin-left: auto;
margin-right: auto;
border-radius: 10px;


.minus {
  width: 10%
}

.plus {
  width: 10%
}
.number{
  width: 70%;
  text-align: center;
  font-weight: bold;
}

`;