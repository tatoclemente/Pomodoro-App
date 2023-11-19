import { Text, TouchableOpacity, View } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Brack"]

export default function Header() {
    return (
        <View>
            {options.map((item, index) => {
                <TouchableOpacity key={index}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            })}
        </View>
    )
}