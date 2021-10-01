import { Route, Switch } from 'react-router';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart}/>
          <Route render={() => <h1 style={{ textAlign: 'center' }}>404 not found</h1>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
