import React, {FC} from 'react'
import {Event} from 'react-big-calendar'

import {Calendar} from 'components/molecule'
import CalendarSidebar from './CalendarSidebar'
import {CalendarPageStyle} from './Calendar.style'
import { SlotInfo } from 'types/calendar'

const events:Event[] = [
    {   
        title: 'Who was Moise Lubwimi',
        start:new Date(),
        end: new Date()
    }
]

export interface CalendarProps{
    showSidebar: boolean
}

export interface CalendarActions{
    onEventClick: (event:Event)=> void
    onClickSlot: (slotInfo:SlotInfo)=>void
}

type Props = CalendarProps & CalendarActions

const CalendarPage:FC<Props> = props =>{
    const {showSidebar, onEventClick, onClickSlot} = props

    return (<CalendarPageStyle>
        
        <Calendar events={events} onClickEvent={onEventClick} onSlotClick={onClickSlot}/>
        {showSidebar && <CalendarSidebar />}

    </CalendarPageStyle>)
}

export default CalendarPage