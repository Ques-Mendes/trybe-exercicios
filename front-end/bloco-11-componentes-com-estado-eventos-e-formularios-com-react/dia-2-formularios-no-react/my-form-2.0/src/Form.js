import React from "react";
import PersonalForm from "./PersonalForm";
import ProfessionalForm from "./ProfessionalForm";

class Form extends React.Component {
    render() {
        const { sendForm, resetForm, changeHandler, onBlurHandler, currentState } = this.props;
        return (
            <form>
                <PersonalForm
                changeHandler={ changeHandler }
                onBlurHandler={ onBlurHandler }
                currentState={ currentState }
                />
                <ProfessionalForm changeHandler={ changeHandler } />
                <input
                type="button"
                onClick={ sendForm }
                value="Enviar"
                />
                <input
                type="reset"
                onClick={ resetForm }
                value="Limpar"
                />
            </form>
        );
    }
}
export default Form;