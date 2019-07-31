import React, {FC} from 'react'

import {styled} from 'theme'

const EditEventStyle = styled.div`
    width: 35rem;
    display: grid;
    grid-template-rows: auto 1fr auto;
`

const Header = styled.div`
    font-size: 1.8rem;
    height: 4rem;
`

const Content = styled.div`
    display: flex;
    flex-direction: columns;
`

const EditEvent:FC = ()=>{

    return (
        <EditEventStyle>
            <Header>Edit Events</Header>
            <Content>
                <div>Start Date:<input /></div>
                <div>End Date:<input /></div>
            </Content>
            <div><button>Click Me</button></div>
        </EditEventStyle>
    )
}

export default EditEvent