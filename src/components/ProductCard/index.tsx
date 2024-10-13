import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "@/app/colors";
import type { Product } from "@/types/products";

const CardContainer = styled.View`
  background-color: ${colors.background};
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  border-width: 1px;
  border-color: ${colors.border};
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 150px;
`;

const ProductInfo = styled.View`
  padding: 10px;
`;

const ProductName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.foregroud};
`;

const ProductPrice = styled.Text`
  font-size: 14px;
  color: ${colors.primary[600]};
  margin-top: 5px;
`;

const AddToCartButton = styled.TouchableOpacity.attrs({
	activeOpacity: 0.7,
})`
  background-color: ${colors.primary[700]};
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  align-items: center;
`;

const AddToCartButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

interface IProductCard {
	product: Product;
}

export function ProductCard({ product }: IProductCard) {
	return (
		<CardContainer>
			<ProductImage source={{ uri: product.image }} resizeMode="cover" />

			<ProductInfo>
				<ProductName>{product.name}</ProductName>
				<ProductPrice>R$ {product.price}</ProductPrice>

				<AddToCartButton>
					<AddToCartButtonText>Adicionar ao Carrinho</AddToCartButtonText>
				</AddToCartButton>
			</ProductInfo>
		</CardContainer>
	);
}
