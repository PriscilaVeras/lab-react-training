function Rating(props) {
  let stars = Math.round(props.children);
  let result = '';

  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      result += `★`;
    } else {
      result += `	☆`;
    }
  }
  return (
    <div className="m-3">
      <span>{result} </span>
    </div>
  );
}

export default Rating;
