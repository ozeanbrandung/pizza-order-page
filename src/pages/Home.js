import { SortPopup, PizzaCard } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import Preloader from '../components/ui/Preloader';
import ErrorIndicator from '../components/ui/ErrorIndicator';
import { addPizzaToCart, setCategory } from '../redux/actions';
import React, { useEffect } from 'react';
import { sendRequest, setSorting } from '../redux/actions';
import CategoriesMenu from '../components/CategoriesMenu';
import CategoriesState from '../helpers/categoriesContext';


const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const popupSortingCategories = [
  { name: 'популярности', type: 'rating' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' },
];

const Home = () => {

  const { pizzas, requesting, failure, sortBy, category } = useSelector(({ fetch, filters }) => ({
    pizzas: fetch.data,
    requesting: fetch.requesting,
    failure: fetch.failure,
    sortBy: filters.sortBy,
    category: filters.category,
  }));

  const cartItems = useSelector(({cart}) => cart.items)

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(sendRequest(category, sortBy));

  }, [dispatch, category, sortBy]);

  const dispatchPizzaToStore = pizzaObj => {
    dispatch(addPizzaToCart(pizzaObj))
  }

  const pizzasList = pizzas && pizzas.map((pizza) => { 
                  return <PizzaCard key={pizza.id} 
                            onAddToCart={dispatchPizzaToStore} 
                            pizzasInCartCount={cartItems && cartItems[pizza.id] && cartItems[pizza.id].length }
                            {...pizza} /> 
                  }
  );

  const selectCategory = React.useCallback(
    (idx) => {
      dispatch(setCategory(idx));
    },
    [dispatch],
  );

  const selectSorting = React.useCallback(
    (name) => {
      dispatch(setSorting(name));
    },
    [dispatch],
  );

  const content = !requesting && !failure && <div className="content__items">{pizzasList}</div>;
  const loadingBlock = Array(12)
    .fill(0)
    .map((_, idx) => <Preloader key={idx} />);
  return (
    <div >
      <CategoriesState>
        <CategoriesMenu 
                      onSelectCategory={selectCategory}
                      categories={categories}
                      activeCategory={category}
        >
          <SortPopup
            items={popupSortingCategories}
            currentSorting={sortBy}
            onSelectSorting={selectSorting}
          /> 
        </CategoriesMenu>
      </CategoriesState>

      <div className='container'>
        <h2 className="content__title">{category === null ? 'Все пиццы' : categories[category]}</h2>
        {requesting ? loadingBlock : content}
        {failure && <ErrorIndicator />}
      </div>
      
    </div>
  );
};

export default Home;
