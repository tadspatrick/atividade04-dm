import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    height: 100,
    backgroundColor: "#005200",
  },
  top: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  topLeft: {
    width: "75%",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  topRight: {
    width: "25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 12,
  },
  textWhats: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  bottom: {
    flexDirection: "row",
    height: 40,
  },
  bottomLeft: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomRight: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textMenu: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
  selected: {
    height: 39,
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#FFF',
  },
});

export default styles;
