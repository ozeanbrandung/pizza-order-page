import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../helpers/onClickOutSide';
import { CategoriesContext } from '../helpers/categoriesContext';
import HamburgerButton from './ui/HamburgerButton';
import { SideOverlayCategoriesMenu } from './SlideOverlayCategoriesMenu';
import { Categories } from '.';

const Navbar = styled.div`
  display: flex;
  //position: fixed;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: #ffdf8c none repeat scroll 0% 0%;
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
    //justify-content: flex-start;
    justify-content: space-between;
  //padding: 6px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  //box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 0px;
  //box-shadow: 0px 8px 8px -8px rgba(34, 60, 80, 0.6);
  //box-shadow: 0px 6px 15px -10px rgba(34, 60, 80, 0.6);
  z-index: 500;
  padding: 0 4%
`;

const CategoriesMenu = ({children, categories, activeCategory, onSelectCategory}) => {
  const node = useRef();
  const { areCategoriesOpen, toggleCategoriesMode } = useContext(CategoriesContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (areCategoriesOpen) {
        toggleCategoriesMode();
    }
  });

  return (
    <div ref={node} style={{width:'100%'}}>
      <Navbar>
        <Categories items={categories} activeCategory={activeCategory} onSelectCategory={onSelectCategory} className='bigscreen-media'/>
        <HamburgerButton/>
        {children}
        
      </Navbar>
      <SideOverlayCategoriesMenu categories={categories} activeCategory={activeCategory} onSelectCategory={onSelectCategory}/>
    </div>
  );
};

export default CategoriesMenu;