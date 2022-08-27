import styled from 'styled-components';

export const PriceStyle = styled.div`

display: flex;
margin-top: 20px;
.discount {
  font-size: 2em;
  font-weight: bold;
  margin-right: 40px;
}

.percent {
  background-color: hsl(25, 100%, 94%);
  height: fit-content;
  padding: 5px;
  font-size: 1.2em;
  font-weight: bold;
  color: hsl(26, 100%, 55%);
  margin-right: 55px;
  margin-top: 7px;

}

/* .percent > div {
  background-color: red;
} */

.original {
  width: 30%;
  text-decoration: line-through;
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 10px;
  color: hsl(240deg 23% 74%);
  
}
`;