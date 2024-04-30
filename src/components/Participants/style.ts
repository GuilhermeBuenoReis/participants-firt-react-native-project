import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16
  },

  textName: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    marginLeft: 16
  },
  btn: {
    backgroundColor: '#E23C44',
    width: 56,
    height:56,
    alignItems: 'center',
    justifyContent:'center',
    
  },
  btnText: {
    fontSize: 24,
    color: '#fff'
  },
});

export { styles };