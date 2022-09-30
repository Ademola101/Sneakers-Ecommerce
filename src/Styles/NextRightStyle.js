import styled from 'styled-components';

export const NextStyleRight = styled.div`
display: ${props => props.display};  
    height: 40px;
    position: relative;
    width: 40px;
    top: -180px;
    right: -310px;
    background-color: white;
    border-radius: 50%;
  
svg {
  position: relative;
    top: 10px;
    left: 14px;
    cursor: pointer;


}

@media screen and (min-width: 768px) {
  display: none;
}


`;