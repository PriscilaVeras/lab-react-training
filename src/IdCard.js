function IdCard(props) {
  return (
    <div>
      <div className="card mb-3  ">
        <div className="row ">
          <div className="col-md-1 ">
            <img src={props.picture} className=" img-idCard" />
          </div>
          <div className="person col">
            <div className="container-card.text">
              <p className="card-text">First name: {props.firstName} </p>
              <p className="card-text">Last name: {props.lastName} </p>
              <p className="card-text">Gender: {props.gender} </p>
              <p className="card-text">Height: {props.height} </p>
              <p className="card-text">
                Birth: {props.birth.toLocaleString()}{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
