import {Event as CalendarEvent} from 'react-big-calendar'

import { SlotInfo } from 'types/calendar'
import {CalendarActions} from 'store/actions/calendar'

export interface CalendarPageState{
    showSidePanel: boolean
    sidebarType: 'CREATE' | 'EDIT' | undefined
    editedEvent: CalendarEvent | undefined
    eventSlot: SlotInfo | undefined
} 

export const initialState: CalendarPageState = {
    showSidePanel: false,
    sidebarType: undefined,
    editedEvent: undefined,
    eventSlot: undefined
}


const displaySidebar = (state:CalendarPageState):CalendarPageState=>({
    ...state,
    showSidePanel: true
})

const hideSidebar = (state:CalendarPageState):CalendarPageState=>({
    ...state,
    showSidePanel: false
})

const startCreate = (state:CalendarPageState, action:ReturnType<typeof CalendarActions.startCreate>):CalendarPageState=>({
    ...state,
    showSidePanel:true,
    sidebarType:'CREATE',
    eventSlot: action.payload
})

const startEdit = (state:CalendarPageState, action:ReturnType<typeof CalendarActions.startEdit>):CalendarPageState=>({
    ...state,
    showSidePanel:true,
    sidebarType: 'EDIT',
    editedEvent:action.payload
})

export default (state=initialState, action:CalendarActions)=>{
    switch(action.type){
        case 'CALENDAR/DISPLAY_SIDEBAR':
            return displaySidebar(state)
        case 'CALENDAR/HIDE_SIDEBAR':
            return hideSidebar(state)
        case 'CALENDAR/START_CREATE':
            return startCreate(state, action)
        case 'CALENDAR/START_EDIT':
            return startEdit(state, action)
        default:
            return state
    }

}