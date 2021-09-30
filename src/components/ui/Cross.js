import React, { useContext } from 'react';
import styled from 'styled-components';
import { CategoriesContext } from '../../helpers/categoriesContext';

const CrossButton = styled.button`
        display: block;
        padding: 12px;
        background: none;
        border: 0;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 16%;
        
        span:nth-of-type(1) {
            transform: rotate(45deg) translate(-1px, 3px);
            width: 40px;
        }
    
        span:nth-of-type(2) {
            transform: rotate(-45deg) translate(6px, -9px);
            width: 40px;
        }
    `;

    const Bar = styled.span`
        display: block;
        width: 40px;
        height: 4px;
        margin-bottom: 7px;
        background-color: black;
    `;

function Cross() {

    const { toggleCategoriesMode } = useContext(CategoriesContext);

    const clickHandler = () => {
        toggleCategoriesMode();
    };
    return (
        <CrossButton
            aria-label="Закрыть главное меню"
            onClick={clickHandler}
        >
            <Bar/>
            <Bar/>
        </CrossButton>
    )
}

export default Cross
