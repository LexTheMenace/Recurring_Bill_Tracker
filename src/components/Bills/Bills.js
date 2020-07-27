import React, { Component } from 'react'
import { Consumer } from '../../GlobalContext'
import Bill from './Bill'

class Bills extends Component {
    render() {
     return (
        <Consumer>
         {value => {
            const { bill_list, heading } = value;
            return (
                <React.Fragment>
                   <h3 className='text-center mb-4'>{heading}</h3>
                     <div className='row'>
                     {bill_list.map(bill => (
                     <Bill key={bill.id} bill={bill}/>
                     ))}
                     </div>
                </React.Fragment>
               ) 
         }}
        </Consumer>
        )}}
    

export default Bills
