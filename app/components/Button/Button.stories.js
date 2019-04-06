import React from 'react'
import { Text } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import Button from './index'
import CenterView from '../CenterView'

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Primary', () => <Button onPress={action('clicked-text')} title='Hello Button' type='PRIMARY' />)
  .add('Secondary', () => <Button onPress={action('clicked-text')} title='Hello Button' type='SECONDARY' />)
  .add('Tertiary', () => <Button onPress={action('clicked-text')} title='Hello Button' type='TERTIARY' />)
  .add('with some emoji', () => <Button onPress={action('clicked-emoji')} title='😀 😎 👍 💯' />)
