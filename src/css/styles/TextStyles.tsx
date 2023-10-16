import { StyleSheet } from "react-native";

const pureStyle = StyleSheet.create({
    pureText: {
        color: 'black',
        fontSize: 14
        // define fontfamily here
    }
})

export const textSize = StyleSheet.create({
    heading: {
        ...pureStyle.pureText,
        fontSize: 20
    },
    big: {
        ...pureStyle.pureText,
        fontSize: 18
    },
    medium: {
        ...pureStyle.pureText,
        fontSize: 14
    },
    small: {
        ...pureStyle.pureText,
        fontSize: 12
    },
    tiny: {
        ...pureStyle.pureText,
        fontSize: 10
    }
})

export const textStyle = StyleSheet.create({
    font_bold: {
        ...pureStyle.pureText,
        fontWeight: 'bold' // replace by font family if use custom
    },
    font_italic: {
        ...pureStyle.pureText,
        fontStyle: 'italic' // replace by font family if use custom
    },
    bold_italic: {
        ...pureStyle.pureText,
        fontWeight: 'bold', // replace by font family if use custom
        fontStyle: 'italic'
    }
})

export const textDeco = StyleSheet.create({
    underline: {
        textDecorationLine: 'underline'
    }
})