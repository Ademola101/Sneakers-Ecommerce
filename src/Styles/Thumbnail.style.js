import styled from 'styled-components';

export const ThumbnailStyle = styled.div`
display: none;

@media (min-width:768px) {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 400px;
  margin: auto;

  .img {
    width: 90px;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
    }
  }

  
}

`;