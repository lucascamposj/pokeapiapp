import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-content: center;
  padding: 32px 24px 16px;
`;
export const MainCard = styled.View`
  width: 100%;
`;
export const XPContainer = styled.View``;
export const XPText = styled.Text`
  font-size: 25px;
  font-family: 'RobotoMono-Light';
`;
export const SpritesContainer = styled.View`
  align-items: center;
  width: 100%;
  height: 200px;
  margin: 0 auto;
  margin-top: -40px;
  z-index: 998;
  elevation: 18;
`;

export const Sprite = styled.Image`
  height: 100%;
  width: 100%;
`;
export const SpriteSelector = styled.View``;
export const NameContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const NameText = styled.Text`
  margin-right: 5px;
  font-size: 30px;
  text-transform: capitalize;
  font-family: 'RobotoMono-Bold';
`;
export const IdText = styled.Text`
  font-size: 15px;
  color: #999;
`;
export const HeightAndWeightContainer = styled.View`
  padding: 20px 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const HeightContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const HeightText = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  font-family: 'RobotoMono-Light';
`;

export const WeightContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const WeightText = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  font-family: 'RobotoMono-Light';
`;
export const SpeciesContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
export const SpeciesText = styled.Text``;
export const TypesContainer = styled.View``;
export const Type = styled.View``;
export const Stats = styled.View``;
export const Separator = styled.View`
  background-color: #bbb;
  height: 2px;
  width: 100%;
  margin: 10px 0;
`;
export const SectionTitle = styled.Text`
  text-align: center;
  font-family: 'RobotoMono-Bold';
  font-size: 18px;
`;
export const Abilities = styled.View``;
export const Forms = styled.View``;

interface HeaderProps {
  color: string;
}
export const Header = styled.View<HeaderProps>`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background-color: ${({ color, theme }) => color || theme.colors.common.white};
  height: 170px;
  z-index: 998;
  align-items: flex-start;
  shadow-color: ${({ color, theme }) => color || theme.colors.common.white};
  shadow-offset: 0 10px;
  shadow-opacity: 0.9;
  shadow-radius: 18px;

  elevation: 17;
`;

export const HeaderBar = styled.View`
  width: 100%;
  z-index: 999;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary.contrastText};
  font-size: 24px;
  font-weight: bold;
  font-family: 'RobotoMono-Regular';
  line-height: 28px;
  text-transform: capitalize;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 15px;
  z-index: 999;

  elevation: 20;
`;
