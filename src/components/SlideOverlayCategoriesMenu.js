import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { CategoriesContext } from '../helpers/categoriesContext';
import Cross from './ui/Cross';

const Menu = styled.ul`
  height: 110vh;
  //margin-bottom: 110px;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 414px;
  max-width: 100%;
  margin-top: 0px;
  //padding-top: 100px;
  padding-top: 10%;
  padding-right: 0px;
  align-items: stretch;
  background-color: #ffdf8c;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.li`
  @media (max-width: 360px) {
    padding-top: 10px;
  }
  @media (max-width: 280px){
    font-size: 28px;
  }
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 16%;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  //color: #fff;
  color: black;
  font-size: 32px;
  line-height: 120%;
  font-weight: 500;

  :hover {
    background-position: 90% 50%;
    color: #fe5f1e;
  }

  &.active {
    color: #fe5f1e;
  }
`;

export const SideOverlayCategoriesMenu = ({ categories, activeCategory, onSelectCategory }) => {
  
  
  const { areCategoriesOpen } = useContext(CategoriesContext);

  const categoriesList = categories && categories.map((category, idx) => (
                    <MenuLink key={`name_${idx}`}
                              onClick={(event) => onSelectCategory(idx)}
                              className={activeCategory === idx ? 'active' : ''}
                    >
                      {category}
                    </MenuLink>))

  return (
  <Menu open={areCategoriesOpen}>
      <Cross/>
      <MenuLink key='dfgdffdg' onClick={(event) => onSelectCategory(null)} className={activeCategory === null ? 'active' : ''}>Все</MenuLink>
      {categoriesList}
  </Menu>);
};
