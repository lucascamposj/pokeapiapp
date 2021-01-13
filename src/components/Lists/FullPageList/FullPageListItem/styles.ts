import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.common.gray};
`;

export const ItemText = styled.Text`
  text-transform: capitalize;
  font-family: 'RobotoMono-Medium';
  font-size: 19px;
`;
