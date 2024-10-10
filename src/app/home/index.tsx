import { StatusBar, View } from "react-native";
import {
	Button,
	ButtonText,
	Container,
	DefaultText,
	HeaderView,
	ProductSectionTitle,
	ProductSectionView,
	SearchProductsView,
} from "./styles";
import { colors } from "@/app/colors";
import { Flame, ShoppingCart } from "phosphor-react-native";
import { material } from "react-native-typography";

export function Home() {
	return (
		<Container>
			{/* Status bar configurada para combinar com o background */}
			<StatusBar backgroundColor={colors.background} />
			<HeaderView>
				{/* Campo de busca */}
				<SearchProductsView
					autoFocus={false}
					placeholder="Procure por produtos..."
				/>

				{/* Botão do carrinho de compras */}
				<Button>
					<ButtonText>
						<ShoppingCart />
					</ButtonText>
				</Button>
			</HeaderView>

			{/* Seção de produtos */}
			<ProductSectionView>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						width: "100%",
						padding: 8,
						alignContent: "center",
					}}
				>
					<Flame
						size={32}
						style={{ marginRight: 8 }}
						color={colors.primary[700]}
					/>
					<ProductSectionTitle style={material.headline}>
						Lojas recomendadas
					</ProductSectionTitle>
				</View>
			</ProductSectionView>
		</Container>
	);
}
