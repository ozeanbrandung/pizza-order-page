import React from 'react';

const Categories = React.memo(function Categories({ activeCategory, items, onSelectCategory }){
  
  const categories =
    items &&
    items.map((item, index) => (
      <li
        onClick={(event) => onSelectCategory(index)}
        key={`name_${index}`}
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

export default Categories;
