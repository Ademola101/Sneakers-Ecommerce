import styled from 'styled-components';

export const NextStyleLeft = styled.div`
display: ${props => props.display};  

position: relative;
    left: 40px;
    bottom: 120px;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;


svg {
    left: 10px;
    position: relative;
    top: 8px;
    cursor: pointer;
}

@media screen and (min-width: 768px) {
  display: none;
}

`;