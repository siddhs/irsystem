import React from "react";

class AnnotationComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.location.state.data
        }
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }

}

export default AnnotationComponent;