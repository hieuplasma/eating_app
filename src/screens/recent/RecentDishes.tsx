import { textSize, textStyle, viewStyle } from "@css";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const RecentDishes = React.memo(() => {
    return (
        <SafeAreaView style={[
            viewStyle.container,
            viewStyle.center
        ]}>
            <Text style={[textSize.big, textStyle.font_bold]}>
                {"Món ăn yêu thích"}
            </Text>
        </SafeAreaView>
    )
})

