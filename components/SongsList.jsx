import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React from "react";

function SongCard(s, navigation) {
	return (
		<View key={s.name} style={styles.SongCard}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigation.navigate("Song", { song: s });
				}}
			>
				<Text style={{ fontSize: 20 }}>{s.name}</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.button}>
				<Text style={{ fontSize: 20 }}>del</Text>
			</TouchableOpacity>
		</View>
	);
}
export default function SongsList({ songs, navigation }) {
	return (
		<FlatList
			data={songs}
			renderItem={({ item }) => SongCard(item, navigation)}
			keyExtractor={(item) => item.name}
		/>
	);
}

const styles = StyleSheet.create({
	SongCard: {
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
		backgroundColor: "#9eff9e",
        
	},
	button: {
		padding: 10,
	},
});
