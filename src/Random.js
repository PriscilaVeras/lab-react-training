function Random(props) {
  let numRandom = Math.round(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <div className="container-random">
      <p className="text-random">
        Random value between {props.min} and {props.max} => {numRandom}
      </p>
    </div>
  );
}

export default Random;
