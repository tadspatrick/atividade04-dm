import React from 'react'
import {View, Text} from 'react-native'

import Header from '../../components/Header'
import StatusList from '../../components/StatusList'
import styles from './styles'

function Status() {
  return (
    <View style={styles.container}>
        <Header />
        <StatusList />
    </View>
  )
}

export default Status