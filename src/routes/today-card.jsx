import { useState, useEffect } from "react";
import axios from "axios";
import CardList from "../CardList";

const URL = "http://localhost:3000";

function TodayCard() {
  const [cardList, setCardList] = useState([]);

  const getCards = async () => {
    const { data: cards } = await axios.get(URL);
    setCardList(cards);
  };

  useEffect(() => {
    getCards();
  }, []);

  const deleteHandler = async (cardId) => {
    await axios.delete(`${URL}/cards/${cardId}`);
    getCards();
  };

  return (
    <>
      <h1>오늘 학습할 카드들</h1>
      <CardList cardList={cardList} onDelete={deleteHandler} />
    </>
  );
}

export default TodayCard;
