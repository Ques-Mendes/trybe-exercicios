import React from 'react';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
class PersonalForm extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Dados pessoais</legend>
                <div>
                    Nome:
                    <input>
                    type="name"
                    name="name"
                    maxlength="40"
                    required                    
                    </input>
                </div>
                <div>
                    Email:
                    <input>
                    type="email"
                    name="email"
                    maxlength="50"
                    required       
                    </input>
                </div>
                <div>
                    CPF:
                    <input>
                    type="text"
                    name="cpf"
                    maxlength="11"
                    required       
                    </input>
                </div>
                <div>
                    Endereço:
                    <input>
                    type="text"
                    name="address"
                    maxlength="200"
                    required       
                    </input>
                </div>
                 <div>
                    Cidade:
                    <input>
                    type="text"
                    name="city"
                    maxlength="28"
                    required       
                    </input>
                </div>
                <div>
                    Estado:
                    <select
                        name="countryState"
                        required
                    >
                        <option>Selecione</option>
                        {
                            states.map((value, key) => (
                                <option key={ key }>{ value }</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="house">
                        <input>
                        type="radio"
                        id="house"
                        name="addressType"
                        value="house"
                        </input>
                        Casa
                    </label>
                    <label htmlFor="apart">
                        <input>
                        type="radio"
                        id="apart"
                        name="addressType"
                        value="apartment"
                        </input>
                        Apartamento
                    </label>
                </div>
            </fieldset>
        )
    }
}
export default PersonalForm;