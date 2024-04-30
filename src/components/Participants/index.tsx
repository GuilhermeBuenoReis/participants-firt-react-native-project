import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style';

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participants ({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>
        {name}
      </Text>
      <TouchableOpacity 
          style={styles.btn}
          onPress={onRemove}
        >
        <Text style={styles.btnText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
};