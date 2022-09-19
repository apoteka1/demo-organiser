import { View, Text, StyleSheet } from "react-native";
import SongsList from "./SongsList";
import React from "react";

export default function ProjectScreen({ route, navigation }) {
	return (
		<View>
			<Text style={styles.header}>{route.params.project.name}</Text>
			{/* <Text style={{marginTop:10}}>{route.params.project.description}</Text> */}
			<SongsList
				songs={route.params.project.songs}
				navigation={navigation}
			/>
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
