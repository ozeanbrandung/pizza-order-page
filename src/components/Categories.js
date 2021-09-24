//activeStyle or activeClassName exposed by react-router
//но только если через <Link> ссылка
//import activeClassName from 'react-router';

import { useState } from 'react';

const Categories = ({ items, onClick }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const selectCategory = idx => {
    //как и в setState можно передать функцию:
    //setActiveCategory(idx => ++idx)
    //это обеспечит актуальное состояние в случае если state зависит от 
    //паредыдущего значения
    setActiveCategory(idx)
  }

  //const categories = items.map((item, index) => <li key={index}> {item} </li>) - не оч уникальный key
  //если есть items будем мапиться по ним
  const categories = items && items.map((item, index) => (
    <li
      onClick={() => selectCategory(index)}
      key={`name_${index}`}
      className={activeCategory === index ? 'active' : ''}>
      {item}
    </li>
  ));

  return (
    <div className="categories">
      <ul>{categories}</ul>
    </div>
  );
};

export default Categories;
