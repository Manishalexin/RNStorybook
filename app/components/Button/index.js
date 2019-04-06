import React from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, StyleSheet, Text } from 'react-native'

export default function Button({ onPress, title, type, disabled }) {
  let buttonStyle
  let buttonTextStyle
  switch (type) {
    case 'PRIMARY':
      buttonStyle = styles.primary
      buttonTextStyle = styles.textLight
      break
    case 'SECONDARY':
      buttonStyle = styles.secondary
      buttonTextStyle = styles.textDark
      break
    case 'TERTIARY':
      buttonStyle = styles.tertiary
      buttonTextStyle = styles.textDark
      break
    default:
      buttonStyle = styles.primary
      break
  }
  return (
    <TouchableHighlight
      underlayColor={disabled ? 'transparent' : '#00B6B61A'}
      style={disabled ? styles.disabled : buttonStyle}
      onPress={disabled ? null : onPress}
    >
      <Text style={buttonTextStyle}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  primary: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00B6B6',
    minWidth: 196,
    height: 48,
    borderRadius: 24
  },
  secondary: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00B6B61A',
    minWidth: 196,
    height: 48,
    borderRadius: 24,
    borderColor: '#00B6B6',
    borderWidth: 1
  },
  tertiary: {
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  disabled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    minWidth: 196,
    height: 48,
    borderRadius: 24
  },
  textDark: {
    color: '#00B6B6'
  },
  textLight: {
    color: 'white'
  }
})

Button.defaultProps = {
  children: null,
  onPress: () => {}
}

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func
}
