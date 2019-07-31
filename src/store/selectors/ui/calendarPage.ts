import { createSelector } from 'reselect'

import { GlobalState } from 'types/Store'

const getDomain = (state:GlobalState)=> state.ui.calendar

export const isSidebarOpen = createSelector(
    [getDomain],
    ({showSidePanel}) => showSidePanel,
)

export const getSidebarType = createSelector(
    [getDomain],
    ({sidebarType})=> sidebarType
)