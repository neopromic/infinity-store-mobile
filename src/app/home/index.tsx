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
		image:
			"https://http2.mlstatic.com/D_NQ_NP_702077-MLA46545885288_062021-O.webp",
		name: "Apple iPhone XR 128 GB - Branco",
		price: "1.799",
	},
	{
		id: 1,
		image:
			"https://http2.mlstatic.com/D_NQ_NP_999878-MLU72827092602_112023-O.webp",
		name: "Smart Tv Led 32 S5400af Tcl Fhd Android Tv",
		price: "1.001",
	},
	{
		id: 2,
		image:
			"https://http2.mlstatic.com/D_NQ_NP_918171-MLU78330700182_082024-O.webp",
		name: "Samsung Galaxy A05s 128 GB Dual SIM Tela Infinita de 6,7'' Cor Violeta 6 GB RAM",
		price: "799",
	},
	{
		id: 3,
		image:
			"https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hzn21-bl116120v3216.jpg",
		name: "Monitor Gamer Mancer Horizon Z21, 21.45 Pol, VA, FHD, 1ms, 75Hz, VGA/HDMI, MCR-HZN21-BL1",
		price: "499,99",
	},
	{
		id: 4,
		image:
			"https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages0.kabum.com.br%2Fprodutos%2Ffotos%2F437590%2Fplaca-de-video-rtx-4090-rog-strix-asus-nvidia-geforce-24-gb-gddr6x-argb-dlss-ray-tracing-branco-rog-strix-rtx4090-24g-white_1682338329_g.jpg&w=640&q=100",
		name: "Placa de Vídeo RTX 4090 ROG Strix Asus NVIDIA GeForce, 24 GB GDDR6X, ARGB, DLSS, Ray Tracing, Branco - ROG-STRIX-RTX4090-24G-WHITE",
		price: "11.949,99",
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
						contentContainerStyle={{
							paddingHorizontal: 8,
							paddingVertical: 16,
						}}
					/>
				</SectionView>
			</ScrollView>
		</Container>
	);
}
