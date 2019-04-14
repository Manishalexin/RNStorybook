import React from 'react'
import { Text } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-ondevice-notes'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { Users } from '../../data/users'

import List from './index'

storiesOf('Lists', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .addDecorator(
    withBackgrounds([
      { name: 'Light', value: '#f5f5f5', default: true },
      { name: 'Semi-Light', value: '#3e3543' },
      { name: 'Dark', value: '#0f0f0f' }
    ])
  )
  .add('Users List', () => <List data={Users} title={text('Label', 'Hello Lists')} />, {
    notes: 'List component with two line items'
  })
