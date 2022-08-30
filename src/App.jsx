import Header from './Components/Header';
import Item from './Components/Item';
import Company from './Components/Company';
import { CompanytemResStyle } from './Styles/CompanyItemRes.style';
import Quantity from './Components/Quantity';
import AddCart from './Components/AddCart';
import SelectedProduct from './Components/SelectedProduct';
import { useSelector } from 'react-redux';

function App() {
  const showCartState = useSelector(state => state.showCart);
  return (
    <div>
      <Header />

      <CompanytemResStyle>
        <Item/>
        <Company/>
        <Quantity/>
        <AddCart/>

      </CompanytemResStyle>
      {showCartState && <SelectedProduct />}
    </div>
  );
}

export default App;
