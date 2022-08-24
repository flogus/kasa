import React, { Component } from 'react';
import Gridelement from './gridelement';
import locations from "../datas/logements.json";



class grid extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         data: []
    //     }
    //     console.log('constructor props', this.state.data);
    // }
    // getData(){
    //     return this.setState({data : JSON.stringify(locationsJson)})
    // }
    // componentDidMount(){
    //     this.getData()
    // }
    render() {
        return (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {Object.values(locations).map(({id, cover, title}) => {
                    return (
                        <Gridelement key={id} id={id} titre={title} />
                    );
                })}
            </div>
        );
    }
}

export default grid;