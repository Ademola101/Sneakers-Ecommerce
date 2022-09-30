import styled from 'styled-components';

export const ThumbnailStyle = styled.div`
display: none;

@media (min-width:768px) {
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 400px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;


  .img {
    width: 75px;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
    }

  }

  
}

`;