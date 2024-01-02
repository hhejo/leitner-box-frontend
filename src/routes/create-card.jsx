import Form from "../Form";
import axios from "axios";

function CreateCard() {
  const submitHandler = async ({ question, answer }) => {
    const newCard = { question, answer };
    await axios.post(`${URL}/cards`, newCard);
  };

  return (
    <>
      <h1>카드 생성하기</h1>
      <Form onSubmit={submitHandler} />
    </>
  );
}

export default CreateCard;
