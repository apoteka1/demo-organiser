import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import ProjectScreen from "./components/ProjectScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Projects" component={HomeScreen} />
				<Stack.Screen
					name="Project"
					component={ProjectScreen}
					options={({ route }) => ({ title: route.params.title })}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
