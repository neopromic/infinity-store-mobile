import { Text, View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";

interface ProductsPageProps {
  bannerUrl?: string;
}

const PageContainer = styled.View`
  background-color: ${colors.background};
  flex: 1;
`;

const HeaderContainer = styled.View`
  height: 300px;
  border-bottom-width: 1px;
  border-color: ${colors.border};
`;

const Banner = styled.Image`
  height: 100%;
  width: 100%;
`;

export const ViewProductPage = ({ bannerUrl }: ProductsPageProps) => {
  return (
    <PageContainer>
      <HeaderContainer>
        <Banner 
          source={{ uri: bannerUrl ? bannerUrl : "https://via.placeholder.com/300" }} 
          resizeMode="cover" 
        />
      </HeaderContainer>
    </PageContainer>
  );
};
