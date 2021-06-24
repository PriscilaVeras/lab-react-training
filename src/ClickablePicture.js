import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    img: this.props.img,
    clicked: false,
  };
  changeImg = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <div>
        <img
          src={!this.state.clicked ? this.props.img : this.props.imgClicked}
          alt=""
          onClick={this.changeImg}
        />
      </div>
    );
  }
}

export default ClickablePicture;
