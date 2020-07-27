import React from 'react'
//import './style.css'
const Bill = (props) => {
const {bill} = props;

// Assign Names to Card numbers (Optional)
const accNum = (card) => {
    switch(card){
        case 8362:
            return 'VISA DEBIT'
        case 4395:
            return 'MASTERCARD CREDIT'
        case 4869:
            return 'COMPANY CARD'
        default: 
            return 'UNKNOWN CARD'
    }
}
// Assigning Color by category (Optional)
const sign = (category) => {
    switch(category){
        case 'Gym':
            return 'card-text yellow'
        case 'Entertainment':
            return 'card-text red'
        case 'Rent':
            return 'card-text blue'
        default: 
            return 'card-text grey'
    }
}



    return (
        <div className='col-md-6'>
            <div className='card mb-4 shadow-sm'>
                <div className='card-body'>
                    <h2>{bill.merchant}</h2>
                    <p className={sign(bill.cat)}>
                        Cost: <strong>${bill.amt}</strong>
                        <br/>
                        Due on the: <strong>{bill.due}{/* function to change suffix based on date ending # */}</strong>
                        <br/>
                       Bill Category: <strong>{bill.cat}</strong>
                       <br/>
                        Payment Card: {accNum(bill.cardNum)} <small>Ending In: {bill.cardNum}</small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Bill;
