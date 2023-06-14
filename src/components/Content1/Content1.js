import React, { Component } from 'react';
import styles from './Content1.module.css';

class Content1 extends Component {
  constructor(props) {
    super(props);
    this.state = { data: 'Initial Content1 data', timer: 0 };
  }

  componentDidMount() {
    this.setState({ data: 'Content1 data updated after mounting' });
    this.intervalID = setInterval(() => {
      this.setState({timer: this.state.timer + 1});
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.data !== this.state.data || nextState.timer !== this.state.timer;
  }

  componentDidUpdate() {
    console.log('Content1 has been updated');
  }

  componentWillUnmount() {
    console.log('Content1 will unmount');
    clearInterval(this.intervalID);
  }

  render() {
    return <div className={styles.container}>{`${this.state.data}. Timer: ${this.state.timer}`}</div>;
  }
}

export default Content1;
