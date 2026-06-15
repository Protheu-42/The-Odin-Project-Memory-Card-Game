function Card({ url, clickEvent }) {
  return (
    <li>
      <img src={url} onClick={() => clickEvent()} />
    </li>
  );
}

export default Card;
