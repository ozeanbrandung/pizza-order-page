import { Categories, SortPopup, PizzaCard } from '../components';
//connect
import { useSelector } from 'react-redux';
//actions
import Preloader from '../components/ui/Preloader';
import ErrorIndicator from '../components/ui/ErrorIndicator';

const Home = () => {
  //const statePiece = useSelector(({fetch, filters}) => ({
  const { pizzas, requesting, failure, sortBy } = useSelector(({ fetch, filters }) => ({
    pizzas: fetch.data,
    requesting: fetch.requesting,
    failure: fetch.failure,
    sortBy: filters.sortBy,
  }));
  //console.log(statePiece)
  //const {pizzas, requesting, failure, sortBy} = statePiece;

  //вместо pizza={pizza} пишем {...pizza} так мы сразу сможем деструктурировать дальше props
  const pizzasList = pizzas && pizzas.map((pizza) => <PizzaCard key={pizza.id} {...pizza} />);

  //if (requesting) {
  //  return <Preloader/>
  //}

  // if (failure) {
  //   return <ErrorIndicator/>
  // }

  const content = !requesting && !failure && <div className="content__items">{pizzasList}</div>;

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {requesting ? <Preloader /> : content}
      {failure && <ErrorIndicator />}
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
