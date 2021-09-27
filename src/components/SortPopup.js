import React, { useState, useEffect, useRef } from 'react';

const SortPopup = React.memo(function SortPopup({ items, currentSorting, onSelectSorting }) {
  console.log(items)
  //--currentSorting: state.filters.sortBy
  //const currentSorting = useSelector(state => state.filters.sortBy)
  //const dispatch = useDispatch()
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();
  //--вместо: const sort = document.querySelector('.sort__popup');

  //const [currentSorting, setCurrentSorting] = useState(0);

  //const handleOptionClick = name => {
    //setCurrentSorting(name)
    //dispatch(setSorting(name))
    //console.log(currentSorting)
  //}

  const handleOutsideClick = (event) => {
    //console.log(event)
    //console.log(sortRef.current)
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    //return () => {
    //    cleanup
    //}
  //только при первом клике вешается на body обработчик событий!
  }, []);

  const sortingOptions = items && items.map((item, idx) => (
    <li className={`${currentSorting === item.type ? 'active' : ''}`} 
        key={`${item}_${idx}`}
        onClick={(event) => onSelectSorting(item.type)}
    >
      {item.name}
    </li>
  ));

  const popUp = (
    <div className="sort__popup">
      <ul>
        {sortingOptions}
      </ul>
    </div>
  );

  const toggleVisibility = () => {
    setVisiblePopup((visiblePopup) => !visiblePopup);
  };
  
  const activeSortingOption = items.find((item, idx) => item.type === currentSorting).name

  //ref={elem => sortRef.current = elem} или ref={sortRef}
  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          className={visiblePopup ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleVisibility}>
            {activeSortingOption}
        </span>
      </div>
      {visiblePopup && popUp}
    </div>
  );
})

//const mapStateToProps = state => ({
//  currentSorting: state.filters.sortBy
//})

//const mapDispatchToProps = dispatch => ({
  //присваиваем имени setCurrentSorting функцию которая диспатчит action а потом ее вызываем в компоненте
//  setCurrentSorting: name => dispatch(setSorting(name))
//})

//const SortPopupMemo = React.memo();

//export default connect(mapStateToProps, mapDispatchToProps)(SortPopup);
export default SortPopup;
