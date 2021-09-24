import { Categories, SortPopup, PizzaCard } from '../components';

function Home({ pizzas }) {
  //вместо pizza={pizza} пишем {...pizza} так мы сразу сможем деструктурировать дальше props
  const pizzasList = pizzas && pizzas.map((pizza) => <PizzaCard key={pizza.id} {...pizza} />);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{pizzasList}</div>
    </div>
  );
}

export default Home;
