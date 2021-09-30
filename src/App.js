//import { useEffect, useCallback, useState } from 'react';
import { Route, Switch } from 'react-router';
import { Header } from './components';
import { Home, Cart } from './pages';
import {useState} from 'react'
//npm install axios
//import axios from 'axios';

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false)
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
