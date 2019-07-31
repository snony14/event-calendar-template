import React, {FC, useCallback} from 'react'
import {Calendar, momentLocalizer, Event as CalendarEvent} from 'react-big-calendar'
import moment from 'moment'

import { SlotInfo } from 'types/calendar'
import {CalendarWrapper} from './Calendar.style'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

export interface CalendarProps{
    events?: CalendarEvent[]
}

export interface CalendarActions{
    onClickEvent?: (event:CalendarEvent)=> void
    onSlotClick?: (slotInfo:SlotInfo)=> void 
}

type Props = CalendarProps & CalendarActions

const MyCalendar:FC<Props> = ({events, onClickEvent, onSlotClick}) => {
  const eventFoo = useCallback((e:CalendarEvent,l:React.SyntheticEvent<HTMLElement, Event>)=>{
    if(onClickEvent){
      onClickEvent(e)
    }
  }, [onClickEvent])

  const onSlotSelect = useCallback((slotInfo:SlotInfo)=>{
    if(onSlotClick){
      onSlotClick(slotInfo)
    }
  },[onSlotClick])

  return (
  <CalendarWrapper>
    <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent = {eventFoo}
        onSelectSlot = {onSlotSelect}
        selectable
    />
  </CalendarWrapper>
)}

export default MyCalendar