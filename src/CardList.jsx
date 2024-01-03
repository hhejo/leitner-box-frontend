function CardList(props) {
  const { cardList, onDelete } = props;

  return (
    <>
      <ul>
        {cardList.map((card) => (
          <li key={card._id}>
            <p>
              <span style={{ marginRight: "5px" }}>{card.question}</span>
              <span style={{ color: "tomato", fontWeight: "bold" }}>
                {card.level}
              </span>{" "}
              <span style={{ cursor: "pointer" }}>(수정)</span>
              <span
                onClick={() => onDelete(card._id)}
                style={{ cursor: "pointer" }}
              >
                (삭제)
              </span>
            </p>
            <p>{card.answer}</p>
            <p>{card.createdAt}</p>
            <p>{card.testAt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CardList;
