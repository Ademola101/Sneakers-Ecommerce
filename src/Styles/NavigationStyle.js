import styled from 'styled-components';

export const NavigationStyle = styled.nav`

display: flex;
flex-direction: column;
z-index: 1;
position: fixed;
background-color: white;
height: 100vh;
width: 65vw;

a {
  margin-left: 30px;

  text-decoration: none;
  font-size: 1.2em;
  margin-bottom: 10px;
  color: black;
  font-weight: bold;
  text-shadow: 0 0 1px hsl(220, 14%, 75%);
  &:hover {
    color: hsl(219, 9%, 45%);
  }
}


.close {
  margin-bottom: 50px;
  margin-left: 30px;
  margin-top: 30px;
  width: 20px;
  
}

@media (min-width:768px) {
  position: static;
  margin-top: 10px;
  
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 60%;
  height: auto;
  .close {
    display: none;
  }
  a {
    text-decoration: none;
    color: hsl(220, 14%, 75%);

    font-size: 0.8em;
    color: hsl(220, 14%, 75%);
    text-shadow: 0 0 1px hsl(220, 14%, 75%);
    font-weight: normal;
    margin-left: 10px;
    margin-bottom: 0;

    &:hover {
    color: hsl(219, 9%, 45%);
    border-bottom: #d77936 2px solid;
  }
  }
}

`;