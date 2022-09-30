import styled from 'styled-components';

export const CompanyStyle = styled.div`
margin-left: 20px;
margin-right: 20px;
margin-top: ${props => props.marginTop  };
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
  font-size: small;
  margin-top: 20px;
}

.price {
  display: flex;
}

@media (min-width:768px) {
  margin-top: 50px;
  margin-top: 50px;
  width: 300px;

  .fall {
    margin-top: 10px;
  }
}

`;