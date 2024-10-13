import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "@/app/colors"; // Defina suas cores globais

// Container principal do card
const CardContainer = styled.View`
  background-color: ${colors.background};
  border-radius: 8px;
  overflow: hidden;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 3;
  width: 100%;
`;

// Imagem do produto
const ProductImage = styled.Image`
  width: 100%;
  height: 150px;
`;

// Seção de texto do produto
const ProductInfo = styled.View`
  padding: 10px;
`;

// Nome do produto
const ProductName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.foregroud};
`;

// Preço do produto
const ProductPrice = styled.Text`
  font-size: 14px;
  color: ${colors.primary[600]};
  margin-top: 5px;
`;

// Botão de ação (adicionar ao carrinho, por exemplo)
const AddToCartButton = styled.TouchableOpacity`
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

export interface Product {
	id: number;
	name: string;
	price: string;
	image: string;
}

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
