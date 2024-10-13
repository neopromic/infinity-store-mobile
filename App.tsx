import { Home } from "./src/app/home";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/app/colors";
import "@styles/global.css"
export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
}
