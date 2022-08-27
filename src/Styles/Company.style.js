import styled from 'styled-components';

export const CompanyStyle = styled.div`
margin-left: 20px;
margin-right: 20px;
@media (min-width:768px) {
margin-top: 100px;
}

.header{
  font-weight: bold;
  color:  hsl(26, 100%, 55%);
  letter-spacing: 2px;
  font-size: large;
}

.fall {
  font-weight: 900;
  font-size: 35px;
  line-height: 40px;
  margin-top: 30px;

}

.text {
  color: hsl(220, 14%, 75%);
  font-size: 16px;
}

.price {
  display: flex;
}

@media (min-width:768px) {
  margin-top: 20px;
}

`;