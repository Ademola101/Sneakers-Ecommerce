import styled from 'styled-components';

export const NavigationStyle = styled.nav`
@media (min-width:768px) {
  margin-top: 10px;
  display: flex;
  gap: 20px;
  width: 60%;
  a {
    text-decoration: none;
    color: hsl(220, 14%, 75%);
    &:hover {
    color: hsl(219, 9%, 45%);
    border-bottom: #d77936 2px solid;
  }
  }
}

display: none;


`;