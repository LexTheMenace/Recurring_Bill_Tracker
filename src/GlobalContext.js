import React, { Component } from 'react'
import data from './components/Bills/data.json'
const Context = React.createContext();

export class Provider extends Component {
   
    state = {
        bill_list: data.bills,
        heading: 'All Bills'
    }
    
    render() { 
       return (
            <Context.Provider value={ this.state }>
                { this.props.children }
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
