import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import CardList from "./CardList";
import "./App.css";

const URL = "http://localhost:3000";

function App() {
  const [cardList, setCardList] = useState([]);

  const getCards = async () => {
    const { data: cards } = await axios.get(URL);
    setCardList(cards);
  };

  useEffect(() => {
    getCards();
  }, []);

  const submitHandler = async ({ question, answer }) => {
    const newCard = { question, answer };
    await axios.post(`${URL}/cards`, newCard);
    getCards();
  };

  const deleteHandler = async (cardId) => {
    await axios.delete(`${URL}/cards/${cardId}`);
    getCards();
  };

  return (
    <>
      <Form onSubmit={submitHandler} />
      <CardList cardList={cardList} onDelete={deleteHandler} />
    </>
  );
}

export default App;
