import { v4 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert =
  (msg, alertType, timeout = 5000) =>
  (dispatch) => {
    // Create alert id
    const id = uuid();

    // Send alert with message, alert type (colour), and id
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id }
    });

    // Dismiss alert after 5 seconds
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };
