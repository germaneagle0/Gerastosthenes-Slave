import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
	},
	G: {
		width: 40,
		height: 46,
	},
	header: {
		padding: 10,
		paddingLeft: '10%',
		paddingTop: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: '#FFBD59',
		gap: 10,
		borderBottomWidth: 8,
		borderBottomColor: '#FFDE59',
		borderBottomStyle: 'solid',
	},
	title: {
		fontSize: 20,
	},
	image: {
		width: '100%',
		flex: 1,
	},
	headerText: {
		height: 23,
		flex: 1,
	},
	body: {
		flex: 1,
		height: '100%',
		padding: 15,
	},
	card: {
		flex: 1,
		backgroundColor: '#FFBD59',
		height: '100%',
		padding: 20,
	},
	quote: {
		height: '25%',
		paddingBottom: 20,
		minHeight: 200,
	},
	question: {
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 30,
	},
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		width: '100%',
		backgroundColor: '#FFF',
		marginBottom: 10,
	},
	input: {
		fontSize: 30,
	},
	dot: {
		marginTop: 3,
		backgroundColor: '#000',
		width: 8,
		height: 8,
		borderRadius: 4,
	},
	button: {
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 4,
		backgroundColor: '#FFDE59',
		borderRadius: 10,
		width: 260,
	},
	buttonText: {
		fontSize: 30,
	},
	center: {
		height: 46,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
	faceContainer: {
		marginTop: 40,
		flexShrink: 0,
		flexGrow: 1,
		height: '100%',
		width: '100%',
	},
	cardInside: {
		flex: 1,
		height: '100%',
	},
	ballContainer: {
		height: 120,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	ball: {
		height: '100%',
		aspectRatio: 1,
		backgroundColor: '#fff',
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 30,
	},
	mouthContainer: {
		marginTop: 0,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		maxHeight: 100,
	},
	mouth: {
		backgroundColor: '#fff',
		width: 120,
		height: 60,
		borderTopLeftRadius: 60,
		borderTopRightRadius: 60,
		padding: 10,
	},
	empty: {
		backgroundColor: '#ffbd59',
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		width: '100%',
		height: 50,
	},
	ans: {
		fontSize: 17,
		height: 25,
	},
});

export default styles;
