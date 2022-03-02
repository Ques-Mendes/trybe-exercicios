import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../redux/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <input
          type="text"
          placeholder="Email"
          onChange={ e => this.setState({ email: e.target.value }) }
          />
          <input 
          type="password"
          placeholder="Password"
          onChange= { e => this.setState({ password: e.target.value })}
          />
        </div>
        <Link
          to="/clients"
          onClick={ () => this.props.login({ email, password })}>  
          Sign in
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    login: e => dispatch(login(e))
});

export default connect(null, mapDispatchToProps)(Login);
