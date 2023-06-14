import React, { Component } from 'react';
import styles from './Navbar.module.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { data: 'Initial Navbar data', count: 0 };
  }

  componentDidMount() {
    this.setState({ data: 'Navbar data updated after mounting', count: this.state.count + 1 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.data !== this.state.data || nextState.count !== this.state.count;
  }

  componentDidUpdate() {
    if (this.state.count < 5) {
      this.setState({data: `Navbar has been updated ${this.state.count} times`, count: this.state.count + 1})
    }
  }

  componentWillUnmount() {
    console.log('Navbar will unmount');
  }

  render() {
    return <div className={styles.container}>{this.state.data}</div>;
  }
}

export default Navbar;
