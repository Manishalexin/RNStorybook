import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, FlatList, View, Image } from 'react-native'

export default function List({ data, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.h2text}>{title}</Text>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <Image style={styles.img} source={item.img} />
            <View style={styles.flatview}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 24,
    justifyContent: 'center'
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 'bold'
  },
  flatview: {
    borderRadius: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'gray'
  },
  img: {
    height: 64,
    width: 64,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8
  }
})

List.defaultProps = {}

List.propTypes = {}
