import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles/app.scss'

export default function App() {

  return (
    <View className={`flex items-center justify-center bg-gray-950 h-full`}>
      <View className="bg-gray-800 w-5/6 rounded-lg h-4/6 flex items-center  gap-y-6">
        <TextInput className="w-3/4 h-10 bg-gray-700 rounded-md text-gray-50 border-gray-600  border p-2" placeholder='Ingrese su Email' />
        <TextInput />
        <TouchableOpacity>
          <Text>Ingresar</Text>
        </TouchableOpacity>
      </View>
      <View >
        <Text style={styles.container}>
          asdadadasda
        </Text>
      </View>
    </View>
  );
}


