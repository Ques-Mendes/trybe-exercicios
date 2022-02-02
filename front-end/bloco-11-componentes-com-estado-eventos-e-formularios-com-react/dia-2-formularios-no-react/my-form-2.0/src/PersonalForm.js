import React from 'react';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
class PersonalForm extends React.Component {
    render() {
        const { changeHandler, onBlurHandler, currentState } = this.props;
        return (
            <fieldset>
                <legend>Dados pessoais</legend>
                <div className="container">
                    Nome:
                    <input>
                    type="name"
                    name="name"
                    maxlength="40"
                    required  
                    onChange={ changeHandler }                  
                    </input>
                </div>
                <div className="container">
                    Email:
                    <input>
                    type="email"
                    name="email"
                    maxlength="50"
                    required
                    onChange={ changeHandler }      
                    </input>
                </div>
                <div className="container">
                    CPF:
                    <input>
                    type="text"
                    name="cpf"
                    maxlength="11"
                    required
                    onChange={ changeHandler }       
                    </input>
                </div>
                <div className="container">
                    Endereço:
                    <input>
                    type="text"
                    name="address"
                    maxlength="200"
                    required
                    onChange={ changeHandler }       
                    </input>
                </div>
                 <div className="container">
                    Cidade:
                    <input>
                    type="text"
                    name="city"
                    maxlength="28"
                    required
                    value={ currentState }
                    onBlur={ onBlurHandler }
                    onChange={ changeHandler }       
                    </input>
                </div>
                <div className="container">
                    Estado:
                    <select
                        name="countryState"
                        required
                        onChange={ changeHandler } 
                        defaultValue=""
                    >
                        <option value="">Selecione</option>
                        {
                            states.map((value, key) => (
                                <option key={ key }>{ value }</option>
                            ))
                        }
                    </select>
                </div>
                <div className="container">
                    <label htmlFor="house">
                        <input>
                        type="radio"
                        id="house"
                        name="addressType"
                        value="house"
                        onChange={ changeHandler } 
                        </input>
                        Casa
                    </label>
                    <label htmlFor="apart">
                        <input>
                        type="radio"
                        id="apart"
                        name="addressType"
                        value="apartment"
                        onChange={ changeHandler } 
                        </input>
                        Apartamento
                    </label>
                </div>
            </fieldset>
        )
    }
}
export default PersonalForm;