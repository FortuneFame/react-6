import React from 'react';

class Content1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Content1 initial data...',
    };
  }

  componentDidMount() {
    this.setState({ data: 'Content1 data updated after mounting...' });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.data !== nextState.data;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Content1 component was updated.');
  }

  componentWillUnmount() {
    console.log('Content1 component will unmount.');
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}

export default Content1;
