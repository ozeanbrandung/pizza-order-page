import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CategoriesContext = createContext({
  areCategoriesOpen: true,
  toggleCategories: () => {},
});

const CategoriesState = ({ children }) => {
  const [areCategoriesOpen, toggleCategories] = useState(false);

  function toggleCategoriesMode() {
    toggleCategories(!areCategoriesOpen);
  }

  return (
    <CategoriesContext.Provider value={{ areCategoriesOpen, toggleCategoriesMode }}>
        {children}
    </CategoriesContext.Provider>
  );
};

// CategoriesState.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default CategoriesState;