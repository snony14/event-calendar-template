import React, {FC, useCallback, memo, Ref} from 'react'

import {TextInputWrapper} from './TextInput.style'

export interface TextInputProps{
    placeHolder?:string
    value?: string
    ref?:Ref<HTMLInputElement>

}

export interface TextInputActions{
    onChange?: (value:string)=>void
}

type Props = TextInputProps & TextInputActions

const TextInput: FC<Props> = props=>{
    const {onChange, value, placeHolder, ref} = props

    const onInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>)=>{
        if(onChange){
            onChange(event.target.value)
        }
    },[onChange])

    return (
        <TextInputWrapper placeholder={placeHolder} onChange={onInputChange} defaultValue={value} ref={ref}/>
    )
}

export default memo(TextInput)