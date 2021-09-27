//import { useEffect, useCallback, useState } from 'react';
import { Route, Switch } from 'react-router';
import { Header } from './components';
import { Home, Cart } from './pages';
//npm install axios
//import axios from 'axios';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';

function App() {
  //const [pizzasData, setPizzasData] = useState([])

  // const request = useCallback(async() => {
  //FETCH:
  //const response = await fetch('http://localhost:3000/bd.json')
  //if (!response.ok) {
  //  throw new Error('Error fetching data!')
  //}
  //без json будет нечитабельно на человеческом языке!
  //const body = await response.json();
  //console.log(body)
  //setPizzasData(body.pizzas)

  //AXIOS:
  //const response = await axios.get('http://localhost:3000/bd.json')
  //console.log(response)
  //if (!response.statusText === 'OK') {
  //  throw new Error('Error fetching data!')
  //}
  //setPizzasData(response.data.pizzas)
  // }, [])

  // useEffect(()=>{
  //request()
  //}, [request])

  //console.log(pizzasData)



  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route render={() => <h1 style={{ textAlign: 'center' }}>404 not found</h1>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
