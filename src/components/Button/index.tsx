import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../app/colors';


// Estilizando o botão com TouchableOpacity
export const Button = styled(TouchableOpacity)`
  background-color: ${colors.primary[950]};
  border-radius: 8px;
  justify-content: center;
  width: fit-content;
`;

// Estilizando o texto do botão
export const ButtonText = styled.Text`
  color: ${colors.foregroud};
  font-size: 16px;
  font-weight: bold;
`;

