import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Os from '../components/Os';
import * as QueryActions from '../actions/query';

function mapStateToProps(state) {
  return {
    state: state.query
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(QueryActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Os);
