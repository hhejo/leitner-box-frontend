import { useState } from "react";
import Form from "./Form";
import CardList from "./CardList";
import "./App.css";

function App() {
  const [cardList, setCardList] = useState([]);
  const submitHandler = ({ question, answer }) => {
    setCardList((prev) => {
      return [...prev, { question, answer }];
    });
  };
  return (
    <>
      <Form onSubmit={submitHandler} />
      <CardList cardList={cardList} />
    </>
  );
}

export default App;
