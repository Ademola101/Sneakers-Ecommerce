import styled from 'styled-components';

export const AddCartStyle = styled.button`
border: none;




    @media (min-width:768px) {
    position: relative;
    top: 350px;
    right: 280px;
    width: 100%;
    min-width: 180px;
    &:hover {
      background-color: brown;
    }

    }

display: flex;
justify-content: center;
background-color:  hsl(26, 100%, 55%);
width: 80%;
margin-left: auto;
margin-right: auto;
height: 35px;
align-items: center;
border-radius: 10px;
color: white;
font-weight: bold;
gap: 15px;
margin-top: 20px;
svg {
  background-color: white;
}
`;