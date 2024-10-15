import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@/app/home";
import { default as Icon } from "react-native-vector-icons/Feather";
import { colors } from "@/app/colors";

const Tabs = createBottomTabNavigator();

export function TabsRoutes() {
	return (
		<Tabs.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: colors.primary[700],
			}}
		>
			<Tabs.Screen
				name="home"
				component={Home}
				options={{
					title: "Inicio",
					tabBarIcon: ({ color, size }) => (
						<Icon name="home" color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen name="profile" component={Home} />
		</Tabs.Navigator>
	);
}
