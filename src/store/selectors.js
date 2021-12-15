// example cross-slice selector
export const userFavsFullPizzas = (reduxState) => {
  const fav = reduxState.user.favorites;
  const listOfPizzas = reduxState.pizzas.list;

  const fullPizzas = fav.map((favId) =>
    listOfPizzas.find((p) => p.id === favId)
  );

  console.log(fav, fullPizzas);

  //obj: an array of fav pizzas
  return fullPizzas;
};
