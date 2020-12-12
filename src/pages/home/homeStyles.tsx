import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const FloatButton = styled.TouchableOpacity`
	width: 85px;
	height: 85px;
	background-color: #0051ad;
	justify-content: center;
	align-items: center;
	border-radius: 50px;
	position: absolute;
	right: 30px;
	bottom: 30px;
`;

export const ListConteiner = styled.FlatList`
	flex: 11;
	width: 100%;
	background-color: #c9c9c9;
`;

export const CardConteiner = styled.View`
	height: 155px;
	padding: 0 20px;
`;

export const IconContainer = styled.View`
	width: 80px;
	height: 80px;
	background-color: #5ba5fa;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	border: 2px;
`;
