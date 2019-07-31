import React from 'react';
import { storiesOf } from '@storybook/react'

import TextInput from '../TextInput'
import TextInputLabel from '../TextInputLabel'

storiesOf('TextInput', module)
  .add('Normal', () => (
    <TextInput />
  ))
  .add('Label', ()=>
    (<TextInputLabel label="What's up" />)
  )