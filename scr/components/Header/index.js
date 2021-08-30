import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Text style={styles.textWhats}>WhatsApp</Text>
        </View>
        <View style={styles.topRight}>
          <Image
            style={{ width: 24, height: 24, marginRight: 25 }}
            source={require("../../assets/search.png")}
          />
          <Image
            style={{ width: 4, height: 16 }}
            source={require("../../assets/menu.png")}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <Image
            style={{ width: 21, height: 16, opacity: 0.7 }}
            source={require("../../assets/cam.png")}
          />
        </View>
        <View style={styles.bottomRight}>
          <TouchableOpacity onPress={() => navigation.navigate("Conversas")}>
            <View>
              <Text style={styles.textMenu}>CONVERSAS</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Status")}>
            <View style={styles.selected}>
              <Text style={styles.textMenu}>STATUS</Text>
            </View>
          </TouchableOpacity>

          <View style>
            <TouchableOpacity>
              <Text style={styles.textMenu}>CHAMADAS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Header;
