import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Initial data...',
    };
  }

  componentDidMount() {
    this.setState({ data: 'Data updated after mounting...' });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.data !== nextState.data;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Navbar component was updated.');
  }

  componentWillUnmount() {
    console.log('Navbar component will unmount.');
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}

export default Navbar;
