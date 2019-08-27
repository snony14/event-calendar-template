import React,{FC, Ref} from 'react'

import TextInput from './TextInput'
import {styled} from 'theme'

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 1rem;
`

export interface TextInputLabelProps{
    label?:string
    ref?: Ref<HTMLInputElement>
}

export interface TextInputLabelActions{
    onChange?:(v:string)=>void
}

type Props = TextInputLabelProps & TextInputLabelActions

const TextInputLabel: FC<Props> = props=>{
    const {onChange, label, ref} = props

    return (
    <Wrapper>
        <div>{label}</div>
        <TextInput onChange={onChange} ref={ref}/>
    </Wrapper>)
}

export default TextInputLabel