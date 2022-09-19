import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function SongScreen({ route, navigation }) {
	return (
		<View>
			<Text style={styles.header}>{route.params.song.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		padding: 10,
		backgroundColor: "#6DFF6D",
		fontSize: 30,
	},
});