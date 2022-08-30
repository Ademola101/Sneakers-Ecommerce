import styled from 'styled-components';

export const SelectedProductStyle = styled.div`

background-color: white;
height: 300px;
width: 345px;
bottom: 400px;
margin-right: auto;
margin-left: auto;
box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
border-radius: 10px;
position: relative;
bottom: 800px;

.header {
  font-weight: bold;
  font-size: 1.2em;
  border-bottom: 2px solid hsl(220deg 39% 87%);
  padding: 30px;
}

.cartcontent{
  padding: 100px;
  color: #87727299;
  font-weight: bold;
  font-size: 1.1em;
  white-space: nowrap;
}

@media (min-width:768px) {

  left: 290px;
  bottom: 720px;
  width: 250px;
  height: 200px;

  .cartcontent{
    padding: 40px;
    font-size: 1em;
  }
}

`;