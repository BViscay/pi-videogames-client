import { useState } from "react";

const usePagination = (videogames, cardsInPage = 15) => {
  const [actualPage, setActualPage] = useState(1);

  const indexOfLastCard = actualPage * cardsInPage;
  const indexOfFirstCard = indexOfLastCard - cardsInPage;
  const currentCards = videogames.slice(indexOfFirstCard, indexOfLastCard);

  const nextPage = () => {
    setActualPage(actualPage + 1);
  };

  const prevPage = () => {
    setActualPage(actualPage - 1);
  };

  return {
    currentCards,
    nextPage,
    prevPage,
    hasPreviousPage: actualPage > 1,
    hasNextPage: indexOfLastCard < videogames.length,
  };
};

export default usePagination;
