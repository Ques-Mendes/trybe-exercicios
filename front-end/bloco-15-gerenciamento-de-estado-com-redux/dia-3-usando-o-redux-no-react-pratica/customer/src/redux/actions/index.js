/* const ADD_REGISTER = 'ADD_REGISTER';
const LOGIN = 'LOGIN';

export const actionTypes = {
  ADD_REGISTER,
  LOGIN,
}

const addRegister = value => ({
  type: 'ADD_REGISTER',
  data: value
});

const login = value => ({
  type: 'LOGIN',
  value
});

export const actionCreators = {
  addRegister,
  login,
};
 */
export const addRegister = value => ({ type: 'ADD_REGISTER', data: value });
export const login = value => ({ type: 'LOGIN', value });