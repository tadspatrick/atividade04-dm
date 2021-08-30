import React from 'react'
import {View, Text, FlatList, Image} from 'react-native'

import styles from './styles'
import {contacts} from '../../utils'

class StatusList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                 <FlatList
                    data={contacts}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View style={styles.box}>
                            <View style={styles.boxLeft}>
                                <Image 
                                    style={styles.picture}
                                    source={{uri: item.picture.thumbnail}}
                                />
                            </View>
                            <View View style={styles.boxRight}>
                                <View style={styles.boxRightTop}>
                                    <View style={styles.boxRightTopName}>
                                        <Text style={styles.textName}>{item.name}</Text>
                                    </View>
                                    <View style={styles.boxRightTopHour}>
                                        <Text style={styles.textHour}>{item.hour}</Text>
                                    </View>
                                </View>
                                <View style={styles.boxRightBottom}>
                                    <Text style={styles.textMsg}>{item.msg}</Text>
                                </View>
                            </View>
                        </View>
                        )
                    }
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />

            </View>
        )
    }
}

export default StatusList