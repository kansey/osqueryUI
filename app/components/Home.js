import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <h3>OsqueryUI a simple UI client<br></br>
              for the framework osquery Facebook</h3>
          <Link to="/os">to use osqueryUI</Link>
        </div>
      </div>
    );
  }
}
