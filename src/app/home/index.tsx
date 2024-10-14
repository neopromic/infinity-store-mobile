import { FlatList, ScrollView, StatusBar, View, Text } from "react-native";
import {
	Button,
	ButtonText,
	Container,
	DefaultText,
	HeaderView,
	SearchProductsView,
	SectionTitle,
	SectionView,
} from "./styles";
import { colors } from "@/app/colors";
import { material } from "react-native-typography";
import { default as IconAntDesign } from "react-native-vector-icons/AntDesign";
import { default as IconIonicons } from "react-native-vector-icons/Ionicons";
import { ProductCard } from "@/components/ProductCard";
import { ShopCard } from "@/components/ShopsCard";
import type { Business, Product } from "@/types/products";

const products: Product[] = [
	{
		id: 0,
		image: "https://github.com/neopromic.png",
		name: "Ferrari",
		price: "200",
	},
	{
		id: 1,
		image: "https://github.com/neopromic.png",
		name: "Ferrari",
		price: "200",
	},
	{
		id: 2,
		image: "https://github.com/neopromic.png",
		name: "Ferrari",
		price: "200",
	},
	{
		id: 3,
		image: "https://github.com/neopromic.png",
		name: "Ferrari",
		price: "200",
	},
	{
		id: 4,
		image: "https://github.com/neopromic.png",
		name: "Ferrari",
		price: "200",
	},
];

const recommendedStores: Business[] = [
	{
		id: 0,
		businessName: "BikeShop",
		businessLogo: "https://github.com/neopromic.png",
	},
	{
		id: 1,
		businessName: "Barber for Mens",
		businessLogo: "https://github.com/neopromic.png",
	},
	{
		id: 2,
		businessName: "Test",
		businessLogo: "https://github.com/neopromic.png",
	},
];

export function Home() {
	return (
		<Container>
			<StatusBar
				backgroundColor={colors.background}
				animated
				barStyle={"dark-content"}
			/>
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
				{/* Seção Mais Vendidos */}
				<SectionView>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							width: "100%",
							padding: 8,
							gap: 8,
						}}
					>
						<IconIonicons name="flame" size={24} color={colors.primary[700]} />
						<SectionTitle style={material.headline}>Mais vendidos</SectionTitle>
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
						scrollEnabled={false} // Para garantir que o FlatList não tente rolar
						contentContainerStyle={{ paddingHorizontal: 8 }}
					/>
				</SectionView>

				{/* Seção Lojas Recomendadas */}
				<SectionView>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							width: "100%",
							padding: 8,
							gap: 8,
						}}
					>
						<IconIonicons
							name="storefront"
							size={24}
							color={colors.primary[700]}
						/>
						<SectionTitle style={material.headline}>
							Lojas recomendadas
						</SectionTitle>
					</View>

					<FlatList
						data={recommendedStores}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => (
							<View style={{ flex: 1, margin: 8, width: 200 }}>
								<ShopCard businessData={item} />
							</View>
						)}
						horizontal={true}
						showsHorizontalScrollIndicator
						contentContainerStyle={{ paddingHorizontal: 8, paddingVertical: 16 }}
					/>
				</SectionView>
			</ScrollView>
		</Container>
	);
}
