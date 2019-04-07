import React from 'react'
import { Text } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withNotes } from '@storybook/addon-ondevice-notes'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import Button from './Button'
import CenterView from './CenterView'
import Welcome from './Welcome'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    withBackgrounds([
      { name: 'Light', value: '#f5f5f5', default: true },
      { name: 'secondary', value: '#76aa22' },
      { name: 'Dark', value: '#0f0f0f' }
    ])
  )
  .add(
    'with text',
    () => (
      <Button onPress={action('clicked-text')} isDisabled={boolean('Disabled', false)}>
        <Text>{text('Label', 'Hello Button!')}</Text>
      </Button>
    ),
    {
      notes: 'A very simple example of addon notes'
    }
  )
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ))
