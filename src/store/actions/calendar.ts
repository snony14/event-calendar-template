import {Event} from 'react-big-calendar'

import {action, ActionUnion} from 'types/utils'
import { SlotInfo } from 'types/calendar'

export const CalendarActions = {
    displaySidebar: action<'CALENDAR/DISPLAY_SIDEBAR'>('CALENDAR/DISPLAY_SIDEBAR'),
    hideSidebar: action<'CALENDAR/HIDE_SIDEBAR'>('CALENDAR/HIDE_SIDEBAR'),
    startCreate: action<'CALENDAR/START_CREATE', SlotInfo>('CALENDAR/START_CREATE'),
    startEdit: action<'CALENDAR/START_EDIT', Event>('CALENDAR/START_EDIT'),
}

export type CalendarActions = ActionUnion<typeof CalendarActions>
