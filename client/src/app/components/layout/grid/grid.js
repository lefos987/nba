import React from 'react';

class Grid extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="column">
                    <div className="row">
                    </div>
                    <div className="row tall">
                        <div className="column">
                        </div>
                        <div className="column">
                        </div>
                        <div className="column">
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Grid;