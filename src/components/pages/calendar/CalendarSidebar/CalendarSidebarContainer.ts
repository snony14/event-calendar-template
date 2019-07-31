import {connect} from 'react-redux'

import { GlobalState } from 'types/Store'
import {selectors} from 'store'
import CalendarSidebar,{CalendarSidebarProps} from './CalendarSidebar'

const mapStateToProps = (state:GlobalState):CalendarSidebarProps=>({
    sidebarType: selectors.ui.calendarPage.getSidebarType(state)

})

export default connect(mapStateToProps)(CalendarSidebar)