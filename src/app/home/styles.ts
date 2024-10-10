import styled from "styled-components/native";
import { colors, theme } from "../colors";
import { TouchableOpacity } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  color: ${colors.foregroud};
  background-color: ${colors.background};
`;

export const DefaultText = styled.Text`
  color: ${colors.foregroud};
  font-size: 18px;
`;

export const HeaderView = styled.View`
  width: 100%;
  height: 64px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: sticky;
`;
export const Button = styled(TouchableOpacity)`
  background-color: transparent;
  border-radius: 8px;
  justify-content: center;
  border: 1px solid ${colors.border};
  width: 64px;
  height: fit-content;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: centers;
`;

// Estilizando o texto do botão
export const ButtonText = styled.Text`
  color: ${colors.foregroud};
  font-size: 16px;
  font-weight: bold;
`;

export const SearchProductsView = styled.TextInput.attrs({
  selectionColor: colors.primary[600],
})`
  outline: none;
  border: 2px solid ${colors.border};
  border-radius: 8px;
  padding: 4px 8px;
  accent-color: ${theme.colors.accent};
  width: 80%;
`;

export const ProductSectionView = styled.View`
  padding: 8px;
`;

export const ProductSectionTitle = styled.Text`
`;
