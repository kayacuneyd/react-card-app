import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();

    this.state = {
      showContent: false,
    };

    /*  this.showMore = () => {
          console.log(this);
        }
    */

    /* this.showMore = this.showMore.bind(this); */
  }

  /* showMore() {
    this.setState({ showContent: true });
    //console.log(this);
  } */

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  render() {
    return (
      <div className="m-2">
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {/* {this.props.children.props.cardTitle} */}
          {React.Children.map(
            this.props.children,
            (children) => children.props.cardTitle
          )}
        </button>

        {this.state.showContent ? (
          <div className="collapse show">
            {/* {this.props.children} */}
            {React.Children.map(this.props.children, (children) => children)}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
