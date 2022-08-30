import Header from './Components/Header';
import Item from './Components/Item';
import Company from './Components/Company';
import { CompanytemResStyle } from './Styles/CompanyItemRes.style';
import Quantity from './Components/Quantity';
import AddCart from './Components/AddCart';

function App() {
  return (
    <div>
      <Header />
      <CompanytemResStyle>
        <Item/>
        <Company/>
        <Quantity/>
        <AddCart/>

      </CompanytemResStyle>

    </div>
  );
}

export default App;
