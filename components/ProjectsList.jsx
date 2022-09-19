import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList
} from "react-native";
import React from "react";

function ProjectCard(p, navigation) {
	console.log(p);
	return (
		<View key={p.name} style={styles.ProjectCard}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigation.navigate("Project", { project: p });
				}}
			>
				<Text>{p.name}</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.button}>
				<Text>del</Text>
			</TouchableOpacity>
		</View>
	);
}
export default function ProjectsList({ projects, setProjects, navigation }) {
	return (
		<FlatList
			data={projects}
			renderItem={({ item }) => ProjectCard(item, navigation)}
			keyExtractor={(item) => item.name}
		/>
	);
}

const styles = StyleSheet.create({
	ProjectCard: {
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
		backgroundColor: "#6DFF6D",
	},
	button: {
		padding: 10,
	},
});
