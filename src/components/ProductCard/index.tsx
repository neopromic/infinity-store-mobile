import styled from "styled-components/native";
import { colors } from "@/app/colors";
import type { Product } from "@/types/products";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"


const CardContainer = styled.TouchableOpacity` 
  background-color: ${colors.background};
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 248px;
  border-width: 1px;
  border-color: ${colors.border};
  margin: 1%;
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 150px;
`;

const ProductInfo = styled.View`
  padding: 10px;
`;

const ProductName = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.foregroud};
`;

const ProductPrice = styled.Text`
  font-size: 14px;
  color: ${colors.primary[600]};
  margin-top: 5px;
  font-weight: 500;
`;

interface IProductCard {
  product: Product;
}
type RootStackParamList = {
  viewProductPage?: { productId: number }; // Defina os parâmetros esperados pela tela de detalhes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'viewProductPage'>;

export function ProductCard({ product }: IProductCard) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <CardContainer
      onPress={() => navigation.navigate("viewProductPage")}
    >
      <ProductImage source={{ uri: product.image }} alt={product.name} resizeMode="cover" />

      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>R$ {product.price}</ProductPrice>
      </ProductInfo>
    </CardContainer>
  );
}
