import { Button, SafeAreaView, Text, View } from "react-native"

export const BottomUI = () => {
    return (
        <SafeAreaView edges={"bottom"}>
            <View style={bottomUIStyles.bottomUIView}>
                <Text>Hello World!</Text>
                <Button title="Press Me" />
            </View>
        </SafeAreaView>
    )
}

const bottomUIStyles = {
    bottomUIView: {
        padding:20
    },
}