import React from "react";
import { View, Text, FlatList, Image } from "react-native";

import styles from "./styles";
import { contactsStatus, meuStatus } from "../../utils";

class StatusList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={meuStatus}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.box}>
                <View style={styles.boxLeft}>
                  <Image
                    style={styles.mypicture}
                    source={{ uri: item.picture.thumbnail }}
                  />
                  <View style={styles.circle}>
                      <Text style={{color: 'white', fontSize: 20}}>+</Text>
                  </View>
                </View>
                <View View style={styles.boxRight}>
                  <View style={styles.boxRightTop}>
                    <View style={styles.boxRightTopName}>
                      <Text style={styles.textName}>{item.name}</Text>
                    </View>
                  </View>
                  <View style={styles.boxRightBottom}>
                    <Text style={styles.textMsg}>{item.hour}</Text>
                  </View>
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
        <View>
          <Text style={{ color: "grey", fontWeight: "bold", paddingLeft: 20 }}>
            Atualizações recentes
          </Text>
        </View>
        <FlatList
          data={contactsStatus}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <View style={styles.boxLeft}>
                <Image
                  style={styles.picture}
                  source={{ uri: item.picture.thumbnail }}
                />
              </View>
              <View View style={styles.boxRight}>
                <View style={styles.boxRightTop}>
                  <View style={styles.boxRightTopName}>
                    <Text style={styles.textName}>{item.name}</Text>
                  </View>
                </View>
                <View style={styles.boxRightBottom}>
                  <Text style={styles.textMsg}>{item.hour}</Text>
                </View>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default StatusList;
