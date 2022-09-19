import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import ProjectScreen from "./components/ProjectScreen";
import SongScreen from "./components/SongScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Projects" component={HomeScreen} />
				<Stack.Screen
					name="Project"
					component={ProjectScreen}
					options={({ route }) => ({
						title: route.params.project.name,
					})}
				/>
				<Stack.Screen
					name="Song"
					component={SongScreen}
					options={({ route }) => ({
						title: route.params.song.name,
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
