function IdCard(props) {
  return (
    <div>
      <div className="card mb-3 container-idCard ">
        <div className="row g-0">
          <div className="col-md-1">
            <img
              src={props.picture}
              className="img-fluid rounded-start img-idCard"
            />
          </div>
          <div className="Person col-md-2">
            <div className="card-body">
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
