import styled from 'styled-components';

export const HeaderStyle = styled.header`
display: flex;
flex-direction: row;
margin: 0;

.svg {
  margin: 15px;
  cursor: pointer;
}
.amount {
  color: white;
  background-color: hsl(26, 100%, 55%);
  width: 20px;
  font-size: small;
  position: relative;
  bottom: 34px;
  text-align: center;
  left: 8px;
  border-radius: 50%;
}
.sneakers {
  width: 65vw;
  font-size: 2em;
  display: flex;
  justify-content: left;
  padding-left: 30px;

  
}


.profile {
  width: 5vw;
  margin-top: 15px;
  margin-bottom: 10px;
}

.profile > img {
  width: 30px;
}
.cart {
  width: 10vw;
  margin-top: 15px;
  cursor: pointer;
}

@media (min-width:768px) {
  height: 60px;
  border-bottom: 2px solid hsl(220deg 39% 87%);
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  .sneakers{
    width: 15vw;
    padding-left: 0;
    font-size: 1.6em;
  }

  .svg {
  display: none;
  
}
.profile {
  width: 3vw;
}

}

`;