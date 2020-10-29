import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import data from "./service/api"; //eslint-disable-line

const App: React.FC = () => {
	const [router, setRouter] = useState({});

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					(async () => {
						const result = await data("OL084778211BR");
						setRouter(result);
					})();
				}}
			>
				<Text>Busca</Text>
			</TouchableOpacity>

			{router && router["0"].map(i => <Text>{i}</Text>)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});

export default App;
