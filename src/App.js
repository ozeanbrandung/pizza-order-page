import { Route, Switch } from 'react-router';
import { Header } from './components';
import { Home, Cart } from './pages';
import {useState} from 'react'

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false)

  return (
    <div className="wrapper">
      <Header cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen}/>
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact render={()=> <Cart setCartIsOpen={setCartIsOpen}/>}/>
          <Route render={() => <h1 style={{ textAlign: 'center' }}>404 not found</h1>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
