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
overflow: auto;

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  font-size: 1.3em;
  font-weight: bold;
  color: #0000009e;
  text-shadow: 0 0 15px #6058581c;

}




.mulresult {
  color: black;
}

.header {
  font-weight: bold;
  font-size: 1.2em;
  border-bottom: 2px solid hsl(220deg 39% 87%);
  padding: 30px;
}

.cartcontent{
  padding: 20px;
  color: #87727299;
  font-weight: bold;
  display: inline-block;
}
.checkout {
    border: none;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background-color:  hsl(26, 100%, 55%);
    padding: 9px;
    color: white;
    font-size: small;
    border-radius: 4px;
    font-weight: 600;
  }

  
@media (min-width:768px) {

  left: 290px;
  bottom: 720px;
  width: 250px;
  height: 250px;

  .cartcontent{
    padding: 20px;
    font-size: 1em;
    padding: 100px;
  }

  .checkout {
    border: none;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background-color:  hsl(26, 100%, 55%);
    padding: 9px;
    color: white;
    font-size: small;
    border-radius: 4px;
    font-weight: 600;
  }
}

`;