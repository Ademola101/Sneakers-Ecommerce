import Header from './Components/Header';
import Item from './Components/Item';
import Company from './Components/Company';
import { CompanytemResStyle } from './Styles/CompanyItemRes.style';

function App() {
  return (
    <div>
      <Header />
      <CompanytemResStyle>
        <Item/>
        <Company/>
      </CompanytemResStyle>

    </div>
  );
}

export default App;
