import React, {FC} from 'react'
import Datepicker from 'react-datepicker'

import {DatePickerStyle} from './DatePicker.style'

import 'react-datepicker/dist/react-datepicker.css'

const DatePicker:FC = ()=>{

    return (
        <DatePickerStyle>
            <Datepicker className='datePicker' onChange={(date:Date)=>console.log(date)} selected={new Date()}/>
        </DatePickerStyle>
    )
}

export default DatePicker