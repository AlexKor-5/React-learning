import React, {Component} from "react";

class TextP extends Component{
    render() {
        return(
            <p>{this.props.textProp}</p>
        );
    }
}

export default TextP;