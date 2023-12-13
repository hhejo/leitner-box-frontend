function CardList({ cardList }) {
  return (
    <>
      <ul>
        {cardList.map((card, idx) => (
          <li key={idx}>
            <p>{card.question}</p>
            <p>{card.answer}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CardList;
