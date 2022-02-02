import React from 'react';
import Form from './Form';
import FormError from './FormError';
import FormDisplay from './FormDisplay';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
      formError: {},
      submitted: false,
    }
  }

    changeHandler = event => {
      let { name, value } = event.target;
      if (name === 'name') value = value.toUpperCase;
      if (name === 'address') value = this.validateAddress(value);
      this.updateState(name, value);
    }

    onBlurHandler = event => {
      let { name, value } = event.target;
      if (name === 'city') value = value.match(/^\d/) ? '' : value;
      this.updateState(name, value);
    }

    updateState(name, value){
      this.setState((state) => ({
        [name]: value,
        formError: {
          ...state.formError,
          [name]: this.vailidateField(name, value)
        }
      }));
    }

    validateAddress = address => address.replace(/[^\w\s]/gi, '')

    handleSubmit = event => {
      event.preventDefult();
    }

    vailidateField(fieldName, value){
      switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

    resetForm = () => { this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
      formError: {},
      submitted: false,
    }) };

    sendForm = () => { this.setState({ submitted: true }) };
    
    render() {
      const { submitted } = this.state;
    return (
      <main>
         <Form
          sendForm={this.sendForm}
          resetForm={this.resetForm}
          changeHandler={this.changeHandler}
          currentState={ this.state }
          onBlurHandler={ this.onBlurHandler }
        />
        <div className="container">
          <FormError formError={this.state.formError} />
        </div>
        { submitted && <FormDisplay currentState={ this.state } /> }
      </main>
    );
  }
}    

 export default App;
