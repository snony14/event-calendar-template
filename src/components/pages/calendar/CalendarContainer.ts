import {connect} from 'react-redux'
import { Dispatch } from 'redux'
import {Event} from 'react-big-calendar'

import { GlobalState } from 'types/Store'
import { SlotInfo } from 'types/calendar'
import { selectors, actions } from 'store'
import Calendar from './Calendar'

const mapStateToProps = (state:GlobalState)=>({
    showSidebar: selectors.ui.calendarPage.isSidebarOpen(state)
})

const mapDispatchToProps = (dispatch:Dispatch)=>({
    onEventClick: (event:Event)=>dispatch(actions.CalendarActions.startEdit(event)),
    onClickSlot: (slotInfo:SlotInfo)=> dispatch(actions.CalendarActions.startCreate(slotInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)