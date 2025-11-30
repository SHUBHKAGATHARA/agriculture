import { createContext, useContext, useState } from 'react';

const CompareContext = createContext();

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within CompareProvider');
  }
  return context;
};

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]);

  const addToCompare = (product) => {
    if (compareList.length >= 3) {
      return { success: false, message: 'તમે માત્ર 3 પ્રોડક્ટ સરખામણી કરી શકો છો' };
    }
    if (compareList.find(p => p.id === product.id)) {
      return { success: false, message: 'આ પ્રોડક્ટ પહેલેથી જ સરખામણી યાદીમાં છે' };
    }
    setCompareList(prev => [...prev, product]);
    return { success: true, message: 'સરખામણી યાદીમાં ઉમેરાયું' };
  };

  const removeFromCompare = (productId) => {
    setCompareList(prev => prev.filter(p => p.id !== productId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare, clearCompare }}>
      {children}
    </CompareContext.Provider>
  );
};
