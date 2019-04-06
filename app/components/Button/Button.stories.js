import React from 'react'
import { Text } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-ondevice-notes'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Button from './index'
import CenterView from '../CenterView'

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    withBackgrounds([
      { name: 'Light', value: '#f5f5f5', default: true },
      { name: 'Semi-Light', value: '#3e3543' },
      { name: 'Dark', value: '#0f0f0f' }
    ])
  )
  .add(
    'Primary',
    () => (
      <Button
        onPress={action('clicked-text')}
        disabled={boolean('Disabled', false)}
        title={text('Label', 'Hello Button!')}
        type='PRIMARY'
      />
    ),
    {
      notes: 'A sample note for button component'
    }
  )
  .add('Secondary', () => <Button onPress={action('clicked-text')} title='Hello Button' type='SECONDARY' />)
  .add('Tertiary', () => <Button onPress={action('clicked-text')} title='Hello Button' type='TERTIARY' />)
  .add('with some emoji', () => <Button onPress={action('clicked-emoji')} title='😀 😎 👍 💯' />)
