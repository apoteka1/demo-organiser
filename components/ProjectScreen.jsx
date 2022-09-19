import { View, Text } from "react-native";
import React from "react";

export default function ProjectScreen({ route, navigation }) {
	return (
		<View>
			<Text>{route.params.project.name}</Text>
			<Text>{route.params.project.description}</Text>
		</View>
	);
}
