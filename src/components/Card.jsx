import "../styles/card.css";

function Card({ url, clickEvent }) {
  return (
    <li className="card">
      <img src={url} onClick={() => clickEvent()} />
    </li>
  );
}

export default Card;
