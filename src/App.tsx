import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const App: React.FC = () => {
	const [number, setNumber] = useState(0);

	useEffect(() => {
		const i = setInterval(() => {
			setNumber(prevNumber => prevNumber + 1);
		}, 1000);

		return () => clearInterval(i);
	}, []);

	return (
		<View style={styles.container}>
			<Text>{number}</Text>
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
