import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from "react";

const buttonTextSize = 60;
const buttonSize = 80;

const row1 = 1;

const row2 = 91;

const row3 = 182;

const row4 = 273;

export default function App() {
	
	let [textNumber, changeText] = useState("");

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={[styles.numberView, {wordWrap: "break-word"}]}>
				<Text style={styles.numberText}> {textNumber} </Text>
			</View>

			<View style={styles.buttonView}>
				<TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row1, left: 15} ]}
					onPress={() => changeText(textNumber + "0")}>
					<Text style={styles.buttonTextStyle}> 0 </Text>
				</TouchableOpacity>
				
				<TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row1, left: 105,
					backgroundColor: "orange"}]}
					onPress={() => textNumber === "" 
						 || textNumber.endsWith(".")
						 || textNumber.endsWith("+") 
						 || textNumber.endsWith("/")
						 || textNumber.endsWith("*")
						 || textNumber.endsWith("-")
						? changeText(textNumber) : changeText(textNumber + ".")}>
					<Text style={styles.buttonTextStyle}> . </Text> 
				</TouchableOpacity>

				<TouchableOpacity 
				style={[styles.buttonStyle, {bottom: row1, left: 195,
					backgroundColor: "orange"}]}
				onPress={
					() => textNumber === "" 
					|| textNumber.endsWith("+")
					|| textNumber.endsWith("-")
					|| textNumber.endsWith("/")
					|| textNumber.endsWith(".")
					? changeText(textNumber) : changeText(textNumber += "+")}>
					<Text style={styles.buttonTextStyle}> + </Text>
				</TouchableOpacity>

				<TouchableOpacity 
				style={[styles.buttonStyle, {bottom: row1, left: 285,
					backgroundColor: "blue"}]}
				onPress={() => {textNumber === "" 
						|| textNumber.endsWith(".")
						|| textNumber.endsWith("*")
						|| textNumber.endsWith("/")
						|| textNumber.endsWith("+")
						|| textNumber.endsWith("-") ? 
						changeText(textNumber) : changeText(new String(eval(textNumber)))}}>
					<Text style={styles.buttonTextStyle}> = </Text>
				</TouchableOpacity>

				{/* second row of buttons */}
				<TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row2, left: 15}]}
					onPress={() => changeText(textNumber += "1")}>
					<Text style={styles.buttonTextStyle}> 1 </Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row2, left: 105}]}
					onPress={() => changeText(textNumber += "2")}>
					<Text style={styles.buttonTextStyle}> 2 </Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row2, left: 195}]}
					onPress={() => changeText(textNumber += "3")}>
					<Text style={styles.buttonTextStyle}> 3 </Text>
				</TouchableOpacity>
				
				<TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row2, left: 285,
					backgroundColor: "orange"}]}
					onPress={
						() => textNumber === "" || textNumber.endsWith("-")
						|| textNumber.endsWith("+") || textNumber.endsWith("*") ||
						textNumber.endsWith("/") || textNumber.endsWith(".") ?  
						changeText(textNumber) : changeText(textNumber += "-")
					}>
                                        <Text style={styles.buttonTextStyle}> - </Text>
                                </TouchableOpacity>
				
				{/* third row of buttons */}
                                <TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row3, left: 15}]}
					onPress={() => changeText(textNumber += "4")}>
                                        <Text style={styles.buttonTextStyle}> 4 </Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row3, left: 105}]}
					onPress={() => changeText(textNumber += "5")}>
                                        <Text style={styles.buttonTextStyle}> 5 </Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row3, left: 195}]}
					onPress={() => changeText(textNumber += "6")}>
                                        <Text style={styles.buttonTextStyle}> 6 </Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row3, left: 285,
				backgroundColor: "orange"}]}
					onPress={
					        () => { 
						textNumber === "" || textNumber.endsWith("*")
						|| textNumber.endsWith("-") || textNumber.endsWith("/") ||
						textNumber.endsWith("+") || textNumber.endsWith(".") ? 
						changeText(textNumber) : changeText(textNumber += "*")
						}
					}>
                                        <Text style={styles.buttonTextStyle}> x </Text>
                                </TouchableOpacity>


				{/* forth row of buttons */}
                                <TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row4, left: 15}]}
					onPress={() => changeText(textNumber += "7")}>
                                        <Text style={styles.buttonTextStyle}> 7 </Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row4, left: 105}]}
					onPress={() => changeText(textNumber += "8")}>
                                        <Text style={styles.buttonTextStyle}> 8 </Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row4, left: 195}]}
					onPress={() => changeText(textNumber += "9")}>
                                        <Text style={styles.buttonTextStyle}> 9 </Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
				style={[styles.buttonStyle, {bottom: row4, left: 285,
					backgroundColor: "orange"}]}
				onPress={
					() => textNumber === "" 
					|| textNumber.endsWith("+")
					|| textNumber.endsWith("-")
					|| textNumber.endsWith("*")
					|| textNumber.endsWith("/") 
					|| textNumber.endsWith(".") 
					? changeText(textNumber) : changeText(textNumber + "/")}>
                                        <Text style={styles.buttonTextStyle}> / </Text>
                                </TouchableOpacity>

				<TouchableOpacity 
				style={
					[
						styles.buttonStyle, {
							bottom: row4 + 91,
							left : 15, 
							right: 20,
							width: "68%"
						}
					]
				}
				onPress={() => changeText("")}>
					<Text style={styles.buttonTextStyle}> C </Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style={[styles.buttonStyle, {bottom: row4 + 91, right: 20}]}
					onPress={() => {
						changeText(textNumber.substring(0, textNumber.length - 1));
					} 
					}>
					<Text style={styles.buttonTextStyle}> {"<"} </Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', },

	numberView: { backgroundColor: "white", width: "100%", height: "20%", position: "absolute", top: 20},

	numberText: { position: "absolute", left: 0, fontWeight: "light", fontSize: 60, color: "black", fontFamily: "sans-serif"},

	buttonView: { flex: 1, width: "100%"},

	buttonStyle: { alignItems: "center", borderColor: "rgba(255, 255, 255, 0.2)",
	borderStyle: "solid", borderWidth: 1, borderRadius: 5, position: "absolute", width: buttonSize,
	height: buttonSize },

	buttonTextStyle: { color: "white", fontSize: buttonTextSize, fontFamily: "sans-serif"},
});
