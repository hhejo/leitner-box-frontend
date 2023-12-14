import { useState, useEffect } from "react";
import Form from "./Form";
import CardList from "./CardList";
import "./App.css";

const URL = "http://localhost:3000";

function App() {
  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(URL, { method: "GET" });
      const json = await res.json();
      console.log(json);
    })();
  }, []);
  const submitHandler = ({ question, answer }) => {
    setCardList((prev) => {
      return [...prev, { question, answer }];
    });
    (async () => {
      const res = await fetch(`${URL}/cards`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // 안 쓰면 백엔드에서 {} 로 나옴
        body: JSON.stringify({
          question,
          answer,
        }),
      });
      console.log(res);
    })();
  };
  return (
    <>
      <Form onSubmit={submitHandler} />
      <CardList cardList={cardList} />
    </>
  );
}

export default App;
