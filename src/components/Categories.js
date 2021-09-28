//activeStyle or activeClassName exposed by react-router
//но только если через <Link> ссылка
//import activeClassName from 'react-router';
import React from 'react';
//import propTypes from 'prop-types';


const Categories = React.memo(function Categories({ activeCategory, items, onSelectCategory }){
  //const [activeCategory, setActiveCategory] = useState(0);
  //console.log('render')
  //const selectCategory = (idx) => {
    //как и в setState можно передать функцию:
    //setActiveCategory(idx => ++idx)
    //это обеспечит актуальное состояние в случае если state зависит от
    //паредыдущего значения
    //setActiveCategory(idx);
    //onSelectCategory(idx)
  //};

  //const categories = items.map((item, index) => <li key={index}> {item} </li>) - не оч уникальный key
  //если есть items будем мапиться по ним
  const categories =
    items &&
    items.map((item, index) => (
      <li
        // эта запись будет вызывать постоянный ререндер из-за изменения массива пицц
        // поскольку создается каждый раз новая функция с одинаковым содержимым при перерисовке
        onClick={(event) => onSelectCategory(index)}
        key={`name_${index}`}
        //className={classNames({
        //  active: activeCategory === index,
        //})}
        className={activeCategory === index ? 'active' : ''}>
        {item}
      </li>
    ));

  return (
    <div className="categories">
      <ul>
        <li onClick={(event) => onSelectCategory(null)} className={activeCategory === null ? 'active' : ''}>Все</li>
        {categories}
      </ul>
    </div>
  );
})

//Categories.propTypes = {
  //activeCategory: propTypes.number.isRequired,
  //items: propTypes.arrayOf(propTypes.object).isRequired,
  //onSelectCategory: propTypes.func
//}

//Categories.defaultProps = {activeCategory: 0, items: []}

export default Categories;
