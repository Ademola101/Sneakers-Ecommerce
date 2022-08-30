import Header from './Components/Header';
import Item from './Components/Item';
import Company from './Components/Company';
import { CompanytemResStyle } from './Styles/CompanyItemRes.style';
import Quantity from './Components/Quantity';

function App() {
  return (
    <div>
      <Header />
      <CompanytemResStyle>
        <Item/>
        <Company/>
        <Quantity/>

      </CompanytemResStyle>

    </div>
  );
}

export default App;
