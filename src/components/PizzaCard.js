import {useState} from 'react';
import propTypes from 'prop-types'
import classNames from 'classnames';
import Button from './ui/Button';

function PizzaCard({ id, imageUrl, name, types, sizes, price, onAddToCart, pizzasInCartCount }) {

  const [activeType, setActiveType] = useState(types[0])
  const avalibaleTypes = ['тонкое', 'традиционное'];
  const onSelectType = idx => {
    setActiveType(idx)
  }
  

  const [activeSize, setActiveSize] = useState(sizes[0])
  const avalibleSizes = [26, 30, 40]
  const onSelectSize = size => {
    setActiveSize(size)
  }

  const handleAddOnClick = event => {
    const objForCart = {
      id, imageUrl, name, price, size: activeSize, type: activeType === 0 ? 'тонкое' : 'традиционное'
    }
    onAddToCart(objForCart)
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={name} />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types && avalibaleTypes.map((type, idx) => (
            <li key={`${id}_${type}`}
                className={classNames({
                  active: activeType === idx, 
                  disabled: !types.includes(idx)
                })}
                onClick={() => onSelectType(idx)}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizes && avalibleSizes.map((size, idx) => (
            <li key={`${id}_${size}`}
                className={classNames({
                  active: activeSize === size, 
                  disabled: !sizes.includes(size)
                })} 
                onClick={() => onSelectSize(size)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button className='button--add' outline onClick={handleAddOnClick}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {pizzasInCartCount && <i>{pizzasInCartCount}</i>}
        </Button>
      </div>
    </div>
  );
}

PizzaCard.propTypes = {
  name: propTypes.string.isRequired, 
  imageUrl: propTypes.string.isRequired, 
  price: propTypes.number.isRequired, 
  types: propTypes.arrayOf(propTypes.number).isRequired,
  sizes: propTypes.arrayOf(propTypes.number).isRequired,
}

PizzaCard.defaultProps = {
  name: '---',
  price: 0, 
  imageUrl: 'url картинки по умолчанию',
  types: [], 
  sizes: []
}

export default PizzaCard;
