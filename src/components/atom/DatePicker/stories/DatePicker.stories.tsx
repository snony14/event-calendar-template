import React from 'react';
import { storiesOf } from '@storybook/react'

import DatePicker from '../DatePicker'

storiesOf('Date Picker', module)
  .add('Normal', () => (
    <DatePicker />
  ))