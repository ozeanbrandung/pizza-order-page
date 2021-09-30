import { Categories, SortPopup, PizzaCard } from '../components';
//connect
import { useSelector, useDispatch } from 'react-redux';
//actions
import Preloader from '../components/ui/Preloader';
import ErrorIndicator from '../components/ui/ErrorIndicator';
import { addPizzaToCart, setCategory } from '../redux/actions';
import React, { useEffect } from 'react';
import { sendRequest, setSorting } from '../redux/actions';
import CategoriesMenu from '../components/CategoriesMenu';
import CategoriesState from '../helpers/categoriesContext';

//чтобы не было перерендера категорий
const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const popupSortingCategories = [
  { name: 'популярности', type: 'rating' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' },
];

const Home = () => {
  //const statePiece = useSelector(({fetch, filters}) => ({
  const { pizzas, requesting, failure, sortBy, category } = useSelector(({ fetch, filters }) => ({
    pizzas: fetch.data,
    requesting: fetch.requesting,
    failure: fetch.failure,
    sortBy: filters.sortBy,
    category: filters.category,
  }));

  const cartItems = useSelector(({cart}) => cart.items)
  //console.log(statePiece)
  //const {pizzas, requesting, failure, sortBy} = statePiece;
  //console.log(sortBy, category)
  const dispatch = useDispatch();

  useEffect(() => {
    //компонент при переходе в корзину в отличие от app уничтожается
    //и чтобы каждый раз запрос на сервак не делать за пиццами, проверим
    //сохранен ли у нас в redux список пицц
    //if (!pizzas.length) {
    //dispatch(request())
    dispatch(sendRequest(category, sortBy));
    //}
    //sendRequestToBase()
  }, [dispatch, category, sortBy]);

  const dispatchPizzaToStore = pizzaObj => {
    dispatch(addPizzaToCart(pizzaObj))
  }

  //вместо pizza={pizza} пишем {...pizza} так мы сразу сможем деструктурировать дальше props
  const pizzasList = pizzas && pizzas.map((pizza) => { 
                  return <PizzaCard key={pizza.id} 
                            onAddToCart={dispatchPizzaToStore} 
                            pizzasInCartCount={cartItems && cartItems[pizza.id] && cartItems[pizza.id].length }
                            {...pizza} /> 
                  }
  );

  //if (requesting) {
  //  return <Preloader/>
  //}

  // if (failure) {
  //   return <ErrorIndicator/>
  // }

  //чтобы категории не менялись опять-таки
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
      {/* <div className="content__top"> */}
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
        {/* <Categories
          //чтобы не было постоянного ререндера из-за посступления новой функции
          onSelectCategory={selectCategory}
          //onSelectCategory={(idx) => dispatch(setCategory(idx))}
          items={categories}
          activeCategory={category}
        /> */}
        {/* <SortPopup
          items={popupSortingCategories}
          currentSorting={sortBy}
          onSelectSorting={selectSorting}
        /> */}
      {/* </div> */}
      <div className='container'>
        <h2 className="content__title">Все пиццы</h2>
        {requesting ? loadingBlock : content}
        {failure && <ErrorIndicator />}
      </div>
      
    </div>
  );
};

// const mapStateToProps = state => ({
//   pizzas: state.fetch.data,
//   requesting: state.fetch.requesting,
//   failure: state.fetch.failure
// })

// const mapDispatchToProps = dispatch => ({
//   //sendRequest c ()! не забывай
//   //и не забвай оформить как анонимную функцию с параметром или без!
//   //потому что в компоненте идентефикатор sendRequestToBase заменяется
//   //именно на эту функцию!
//   sendRequestToBase: () => dispatch(sendRequest())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
