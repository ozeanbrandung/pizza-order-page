import { Link } from 'react-router-dom';
import emptyCartImage from '../assets/img/empty-cart.png';
import Button from './ui/Button';

function EmptyCart({setCartIsOpen}) {
    return (
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Корзина пустая <span>😕</span></h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.<br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={emptyCartImage} alt="Empty cart" />
            <Link to='/' onClick={() => setCartIsOpen(false)}>
              <Button className='button--black'> 
                  
                      <span>Вернуться назад</span>
                  
              </Button>
            </Link>
          </div>
        </div>
    )
}

export default EmptyCart
