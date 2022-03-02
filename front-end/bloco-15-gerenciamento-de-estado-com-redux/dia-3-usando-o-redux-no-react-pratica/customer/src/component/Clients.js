
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clients extends React.Component {
  render() {
    const { registered, userLogin } = this.props;
    if (!userLogin.email) return <div>Login not done!</div>;
    if (registered.length < 1)
      return (
        <div>
          <div>No customer registered</div>
          <Link to="/register" >Register now!</Link>
        </div>
      );
    return (
      <div>
        <Link to="/register" >Register another customer</Link>
        <div>
          {registered.map((register, index) => {
            return (
              <div key={ register.email }>
                <p>Register ID: { index + 1 }</p>
                <p>Name: { register.name }</p>
                <p>Age: { register.age }</p>
                <p>Email: { register.email }</p>
              </div>
            );
          })}
        </div>
      </div>
    ); 
  }
}
const mapStateToProps = (state) => ({
  registered: state.registerReducer,
  userLogin: state.loginReducer,
});

export default connect(mapStateToProps)(Clients);