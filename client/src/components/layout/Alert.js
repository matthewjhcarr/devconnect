import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Pulls alerts out of props and defines layout for alert
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

// Adds to props
Alert.propTypes = {
  // Adds state alerts to prop
  alerts: PropTypes.array.isRequired
};

// Creates the prop alerts from the state 'alert'
const mapStateToProps = (state) => ({
  alerts: state.alert
});

// provides Alert component with state from store
export default connect(mapStateToProps)(Alert);
