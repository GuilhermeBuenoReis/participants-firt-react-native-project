import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#131016',
  },

  text: {
    textAlign: 'center',   
    color: 'white',
    marginTop:42,
    fontSize: 22
  },
  textInformation: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop:4,
  },

  input: {
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
    borderRadius : 8,
    padding: 15,
    marginTop: 12,
    marginRight: 12,
  },
  btn: {
    marginTop: 15,
    backgroundColor: 'green',
    width: 56,
    height:56,
    alignItems: 'center',
    justifyContent:'center',
  },
  btnText: {
    fontSize: 24,
    color: '#fff'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 32,
    marginBottom: 32
  },
  textEmptyList: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8
  }
});

export { styles };