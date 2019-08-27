import React, {FC} from 'react'

export interface PrimaryBtnProps{
    btnLabel?: string
}

type Props = PrimaryBtnProps 

const PrimaryBtn:FC<Props> = props=>{
    const {btnLabel} = props
    
    return (
        <button>{btnLabel}</button>
    )
}

export default PrimaryBtn