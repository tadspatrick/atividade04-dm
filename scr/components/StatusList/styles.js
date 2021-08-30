import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#FFF',
    },
    box: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
    },
    boxLeft: {
        flex: 1,
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxRight: {
        flex: 4,
        padding: 5,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    picture: {
        flex: 1,
        aspectRatio: 1,     // não permite que React redimensione a imagem
        borderRadius: 36,
        margin : 3,
        borderWidth: 4,
        borderColor: '#005200',
    },
    mypicture: {
        flex: 1,
        aspectRatio: 1,     // não permite que React redimensione a imagem
        borderRadius: 36,
        margin : 3,
    },
    boxRightTop: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
    },
    boxRightBottom: {
        width: '100%',
        height: 40,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    boxRightTopName: {
        flex: 1,
        justifyContent: 'center',
    },
    textName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    boxRightTopHour: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    textHour: {
        fontSize: 12,
        color: '#999',
    },
    textMsg: {
        fontSize: 15,
        color: '#999',
    },
    circle: {
        width: 25,
        height: 25,
        backgroundColor: '#005200',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 15,
        bottom: 6,
        borderWidth: 2,
        borderColor: 'white',
      },
})

export default styles