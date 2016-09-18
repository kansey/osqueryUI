import React, { Component, PropTypes } from 'react';
import styles from './Table.css';

const Table = ({ response }) => {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr key='headear'>
                        {
                            Object.keys(response[0]).map(key => {
                                return(
                                    <th key={key}>{key}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                        {
                            response.map(row => {
                                return (
                                    <tr>
                                    {
                                        Object.keys(row).map(key => {
                                            return (
                                                <td key={key}>
                                                    { row[key] }
                                                </td>
                                            )
                                        })
                                    }
                                    </tr>
                                );
                            })
                        }
                </tbody>
            </table>
        </div>
    );
 }

Table.propTypes = {
    response: PropTypes.array.isRequired
}

export default Table;
