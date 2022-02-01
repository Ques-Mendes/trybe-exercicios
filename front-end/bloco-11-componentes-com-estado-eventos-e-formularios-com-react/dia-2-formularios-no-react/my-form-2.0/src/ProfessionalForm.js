import React from "react";

class ProfessionalForm extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Dados Professionais</legend>
                <div>
                    Resumo do currículo:
                    <textarea
                    name="resume"
                    maxLength="1000"
                    required
                    />
                </div>
                <div>
                    Cargo:
                    <textarea                    
                    name="role"
                    maxLength="40"
                    required
                    onMouseEnter={() => {
                        alert('Preencha com cuidado esta informação');
                    }}
                    />
                </div>
                <div>
                    Descrição do cargo:
                    <textarea
                    name="roleDescription"
                    maxLength="500"
                    />                    
                </div>
            </fieldset>
        )
    }
}
export default ProfessionalForm;