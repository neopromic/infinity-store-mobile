import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/app/home";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/app/colors";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
}
