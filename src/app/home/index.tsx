import { StatusBar, Text, View } from "react-native";
import { Button, ButtonText, Container, HeaderView, SearchProductsView } from "./styles";
import { colors } from "@/app/colors";
import { ShoppingCart } from "phosphor-react-native";

export function Home() {
	return (
		<Container>
			<StatusBar backgroundColor={colors.background} />
			<HeaderView>
				<SearchProductsView placeholder="Procure por produtos..." />
        <Button>
          <ButtonText>
            <ShoppingCart />
          </ButtonText>
        </Button>
			</HeaderView>
			<View>
				<Text>Test</Text>
			</View>
		</Container>
	);
}
