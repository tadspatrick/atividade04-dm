import React from 'react'
import {View} from 'react-native'

import Header from '../../components/Header'
import ContactList from '../../components/ContactList'
import styles from './styles'

function Talks() {
  return (
    <View style={styles.container}>
        <Header />
        <ContactList />
    </View>
  )
}

export default Talks