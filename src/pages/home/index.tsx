import React, { useState } from "react";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native";

import {
	Container,
	FloatButton,
	ListConteiner,
	CardConteiner,
	IconContainer
} from "./homeStyles";

const Home: React.FC = () => {
	const [data, setData] = useState<number[]>([1, 2, 3, 4, 5]);

	const handlerAddCard = (): void => {
		setData([...data, data.length + 1]);
	};

	return (
		<Container>
			<ListConteiner
				data={data}
				keyExtractor={({ index }) => index}
				renderItem={({ index }) => (
					<CardConteiner key={index}>
						<IconContainer>
							<FontAwesome5 name="map-marker-alt" size={42} color="#333" />
						</IconContainer>
						<Text>hahaha</Text>
					</CardConteiner>
				)}
			/>

			<FloatButton onPress={() => handlerAddCard()}>
				<Feather name="plus" size={32} color="black" />
			</FloatButton>
		</Container>
	);
};

export default Home;
