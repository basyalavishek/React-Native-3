import { createContext, use, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavourites(id) {
    setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavourites(id) {
    setFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const values = {
    ids: favouriteMealIds,
    addFavourite: addFavourites,
    removeFavourite: removeFavourites,
  };

  return (
    <FavouriteContext.Provider value={values}>
      {children}
    </FavouriteContext.Provider>
  );
  //FavouriteContext.Provider is a special component that comes with every context created using createContext() in React.
}

export default FavouriteContextProvider;
