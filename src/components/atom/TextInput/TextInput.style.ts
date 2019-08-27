import {styled} from 'theme'

const TextInputWrapper = styled.input`
outline-color: #4D90FE;//rgb(77, 144, 254); // #4D90FE
outline-offset: -2px;
outline-style: auto;
outline-width: 5px;
    &:focus{
        outline: none !important;
        border-color: #6eff9e;
        box-shadow: 0 0 10px #6eff9e;
    }
`

export {TextInputWrapper}