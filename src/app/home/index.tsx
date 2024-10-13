import { FlatList, ScrollView, StatusBar, View } from "react-native";
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
import { material } from "react-native-typography";
import { default as IconAntDesign } from "react-native-vector-icons/AntDesign";
import { default as IconIonicons } from "react-native-vector-icons/Ionicons";
import { ProductCard, type Product } from "@/components/ProductCard";

const products: Product[] = [
	{
		id: 0,
		name: "Produto 1",
		price: "29.99",
		image: "https://github.com/neopromic.png",
	},
	{
		id: 1,
		name: "Produto 2",
		price: "49.99",
		image: "https://github.com/neopromic.png",
	},
	{
		id: 2,
		name: "Produto 3",
		price: "19.99",
		image: "https://github.com/neopromic.png",
	},
	{
		id: 3,
		name: "Produto 4",
		price: "59.99",
		image: "https://github.com/neopromic.png",
	},
	{
		id: 4,
		name: "Produto 5",
		price: "59.99",
		image: "https://github.com/neopromic.png",
	},
	{
		id: 5,
		name: "Produto 6",
		price: "59.99",
		image: "https://github.com/neopromic.png",
	},
];

export function Home() {
	return (
		<Container>
			<StatusBar backgroundColor={colors.background} />
			<HeaderView>
				<SearchProductsView
					autoFocus={false}
					placeholder="Procure por produtos..."
				/>

				<Button>
					<ButtonText>
						<IconAntDesign name="shoppingcart" size={24} />
					</ButtonText>
				</Button>
			</HeaderView>
<ScrollView>
			<ProductSectionView>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						width: "100%",
						padding: 8,
						alignContent: "center",
						gap: 8,
					}}
				>
					<IconIonicons name="flame" size={24} color={colors.primary[700]} />
					<ProductSectionTitle style={material.headline}>
						Lojas recomendadas
					</ProductSectionTitle>
				</View>

				<FlatList
					data={products}
					keyExtractor={(item) => item.id.toString()}
					numColumns={2}
					renderItem={({ item }) => (
							<View style={{ flex: 1, margin: 8 }}>
								<ProductCard product={item} />
							</View>
					)}
					contentContainerStyle={{ paddingHorizontal: 8 }}
				/>
			</ProductSectionView>
			</ScrollView>
		</Container>
	);
}
