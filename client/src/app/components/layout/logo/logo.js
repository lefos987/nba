import React from 'react';

class Logo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {src, alt} = this.props.logo;

        return (
            <div className="logo">
                <img src={src} alt={alt} className="logo-img"/>
            </div>
        );
    }
}

export default Logo;