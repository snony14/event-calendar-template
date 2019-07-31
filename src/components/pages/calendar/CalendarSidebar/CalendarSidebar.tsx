import React,{FC} from 'react'

import CreateEvent from '../CreateEvent'
import EditEvent from '../EditEvent'

export interface CalendarSidebarProps{
    sidebarType: 'EDIT'| 'CREATE' | undefined
}

type Props = CalendarSidebarProps 

const CalendarSidebar:FC<Props> = ({sidebarType}) =>{

    switch(sidebarType){
        case 'CREATE':
            return <CreateEvent />
        case 'EDIT':
            return <EditEvent />
        default:
            return null
    }
}

export default CalendarSidebar