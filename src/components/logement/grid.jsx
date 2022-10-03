import React, { Component } from 'react';
import locations from "../../datas/logements.json";
import LogementFactory from '.';
class grid extends Component {
    render() {
        return (
            <div className="grid p-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 rounded-lg" style={{backgroundColor: '#e2e8f0'}}>
                {Object.values(locations).map(({id, title, description, pictures}) => {
                    return (
                        <LogementFactory key={id} id={id} title={title} description={description} pictures={pictures} type='vignette' />
                    )
                })}
            </div>
        );
    }
}

export default grid;