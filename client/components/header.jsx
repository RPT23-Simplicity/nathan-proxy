import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: []
        };
    }

    render () {
        return (
            <div>Hello from Header!</div>
        )
    }
}

export default Header;