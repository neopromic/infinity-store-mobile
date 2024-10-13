import { colors } from "@/app/colors";
import type { Business, Product } from "@/types/products";
import styled from "styled-components/native";

interface IShopCard {
	product?: Product;
	businessData: Business;
}

const ShopsCardContainer = styled.View`
  background-color: ${colors.background};
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  border-width: 1px;
  border-color: ${colors.border};
  margin-bottom: 10px;
`;

const CardInfoView = styled.View`
  padding: 8px;
`;

const CardFooter = styled.View`
  padding: 8px;

`;

const CardDescription = styled.Text.attrs({
	numberOfLines: 4,
})`
  color: ${colors.foregroud};
`;

const BusinessName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.foregroud};
`;

const BusinessLogo = styled.Image`
   width: 100%;
   height: 150px;
`;

export const ShopCard = ({ businessData }: IShopCard) => {
	return (
		<ShopsCardContainer>
			<BusinessLogo
				source={{ uri: businessData.businessLogo }}
				resizeMode="cover"
			/>
			<CardInfoView>
				<BusinessName>{businessData.businessName}</BusinessName>
			</CardInfoView>

			<CardFooter>
				<CardDescription>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et sunt
					fugiat quos quo nulla quidem nihil laborum quod odio, nisi totam quas
					vel soluta non? Dolore maxime inventore officiis.
				</CardDescription>
			</CardFooter>
		</ShopsCardContainer>
	);
};
