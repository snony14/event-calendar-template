import React, {FC} from 'react'

import {DatePicker} from 'components/atom'
import {CreateEventStyle} from './CreateEvent.style'

const CreateEvent:FC = ()=>{

    return (
        <CreateEventStyle>
            <DatePicker />
        </CreateEventStyle>
    )
}

export default CreateEvent