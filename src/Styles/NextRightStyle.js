import styled from 'styled-components';

export const NextStyleRight = styled.div`
display: ${props => props.display  };
    height: 40px;
    position: relative;
    width: 40px;
    bottom: 180px;
    left: 300px;
    background-color: white;
    border-radius: 50%;
svg {
  position: relative;
    top: 10px;
    left: 14px;

}

@media screen and (min-width: 768px) {
  display: none;
}


`;