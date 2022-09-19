import { StyleSheet, KeyboardAvoidingView, SafeAreaView } from "react-native";

import ProjectsList from "./ProjectsList";
import AddNew from "./AddNew";
import React, { useState } from "react";
import { data } from "../data";

export default function HomeScreen({ navigation }) {
	const [projects, setProjects] = useState(data);

	return (
		<KeyboardAvoidingView style={styles.container} behavior={"padding"}>
			<AddNew projects={projects} setProjects={setProjects} />
			<ProjectsList
				projects={projects}
				setProjects={setProjects}
				navigation={navigation}
			/>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
	},
});
