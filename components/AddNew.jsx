import { View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

export default function AddNew({ setProjects }) {
	const [value, onChangeText] = useState(null);

	const onSubmit = (e) => {
		setProjects((curr) => [value, ...curr]);
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
		flex: 1,
		margin: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "flex-end",
		flexWrap: "wrap",
		borderWidth: 5,
		borderColor: "black",
	},
	input: {
		backgroundColor: "white",
		padding: 10,
		width: "100%",
	},
});
