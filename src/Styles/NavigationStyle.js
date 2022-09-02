import styled from 'styled-components';

export const NavigationStyle = styled.nav`
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
    &:hover {
    color: hsl(219, 9%, 45%);
    border-bottom: #d77936 2px solid;
  }
  }
}

display: flex;
flex-direction: column;
z-index: 1;
position: fixed;
background-color: white;
height: 100vh;
width: 65vw;
a {

  text-decoration: none;
  
}


.close {
  margin-bottom: 50px;
}


`;