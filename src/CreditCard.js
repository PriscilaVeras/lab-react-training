function CreditCard(props) {
  let numberCard = `**** **** **** ${props.number.slice(-4)}`;

  return (
    <div>
      <div
        class="card"
        style={{ background: props.bgColor, color: props.color }}
      >
        <div class="container-cards">
          <p class="card-text-type">{props.type}</p>
          <p class="card-text">{numberCard}</p>
          <p class="card-text">
            Expires {props.expirationMonth} {props.expirationYear}
          </p>
          <p class="card-text"> {props.owner}</p>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
