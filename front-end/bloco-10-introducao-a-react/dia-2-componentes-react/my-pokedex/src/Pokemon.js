import React from "react";
import Proptypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { pokemon: { name, type, averageWeight, image } } = this.props;
        return(
            <div className="pokemon">
                <p>{ name }</p>
                <p>{ type }</p>
                <p>{ `Average wheigt: ${averageWeight.value} ${averageWeight.measurementUnit}` }</p>
                <img src={ image } alt={ `${name}` } />
            </div>
        );
    }
}
Pokemon.propTypes = {
    pokemon: Proptypes.shape({
        name: Proptypes.string.isRequired,
        type: Proptypes.string.isRequired,
        averageWeight: Proptypes.shape({
            measurementUnit: Proptypes.string.isRequired,
            value: Proptypes.number.isRequired,
        }),
        image: Proptypes.string.isRequired,
    })
}
export default Pokemon;