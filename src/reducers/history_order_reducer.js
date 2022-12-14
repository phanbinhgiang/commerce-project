import {
  ADD_NEW_ORDER,
  UPDATE_HISTORY_ORDER,
  REMOVE_HISTORY_ORDER,
  CLEAR_HISTORY_ORDER,
} from '../actions';

const history_order_reducer = (state, action) => {
  if (action.type === ADD_NEW_ORDER) {
    return { ...state, order: { ...action.payload } };
  }
  if (action.type === UPDATE_HISTORY_ORDER) {
    let order = action.payload;

    const today = new Date();
    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const dateTime = date + ' at ' + time;
    order = { ...order, dateTime };
    return { ...state, orders: [...state.orders, order], order: {} };
  }
  if (action.type === REMOVE_HISTORY_ORDER) {
    const tempOrders = state.orders.filter((order) => {
      return order.dateTime !== action.payload;
    });
    return { ...state, orders: tempOrders };
  }

  if (action.type === CLEAR_HISTORY_ORDER) {
    return { ...state, orders: [], order: {} };
  }
};

export default history_order_reducer;
