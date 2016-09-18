import React, { Component, PropTypes } from 'react';
import styles from './Err.css';

const Err = ({ error }) => {
    return (
        <div className={styles.err}>
            {error}
        </div>
    );
 }

Err.propTypes = {
    error: PropTypes.string.isRequired
}

export default Err;
