import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import osquery  from 'osquery';
import Err from './Err.js';
import Table from './Table.js';
import styles from './Os.css';

class Os extends Component {
  static propTypes = {
      changeQuery: PropTypes.func.isRequired,
      getResponse: PropTypes.func.isRequired,
      state: PropTypes.object.isRequired
  };

  constructor(props) {
   super(props);
  }

  shouldComponentUpdate(nextProps) {
      return nextProps.state.query !== this.props.state.query ? false : true ;
  }

  render() {
      const { changeQuery, getResponse, state } = this.props;
      var result = Object.keys(state).map(key => {
          if (key === 'query' && state[key] === '') {
              return;
          }
          else if (key === 'error' && state[key].length > 0 ) {
              return (
                  <Err error={state[key]} key={state.query}/>
              );
          }
          else if (key === 'response' && Object.keys(state[key]).length > 0 ) {
              return (
                  <Table response={state[key]} key={state.query}/>
              );
          }
      });

    return (
      <div>
          <Link to="/" className={styles.back}/>
          <div className={styles.textarea}>
              <textarea onChange={changeQuery}/>
          </div>
          <div className={styles.button}>
              <button onClick={getResponse}>Submit</button>
          </div>
          <div className={styles.result}>
              {result}
          </div>
      </div>
    );
  }
}

export default Os;
