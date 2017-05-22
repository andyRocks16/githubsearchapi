import React, { PropTypes } from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default App;
