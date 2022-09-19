import { View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

export default function AddNew({ setProjects }) {
	const [value, onChangeText] = useState(null);

	const onSubmit = () => {
		const newProject = {
			name: value,
			description: "",
			songs: [],
		};
		setProjects((curr) => [newProject, ...curr]);
		onChangeText(null);
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="new project"
				placeholderTextColor="gray"
				onChangeText={onChangeText}
				value={value}
				onSubmitEditing={onSubmit}
			></TextInput>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},
	input: {
		backgroundColor: "white",
		padding: 10,
		width: "100%",
		fontSize: 20,
	},
});
