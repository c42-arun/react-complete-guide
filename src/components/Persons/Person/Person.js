import React from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import cssClasses from './Person.css';
import {Component} from "react/cjs/react.production.min";

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    
    render()
    {
        return (
            <Aux>
                <p onClick={this.props.clicked}>I'm {this.props.name} and am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElementRef}
                    type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )
    }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  clicked: PropTypes.func,
  changed: PropTypes.func  
};

export default withClass(Person, cssClasses.Person);