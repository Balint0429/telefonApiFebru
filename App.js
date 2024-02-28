import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setTestTomegIndex] = useState('')

  function calcTestTomegIndex() {
    let heightM = height /10
    let res = weight / Math.pow(heightM, );
    setTestTomegIndex(res)
    setWeight('')
    setHeight('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>        
        <Text style={styles.headerText}>Testtömegindex</Text>
      </View>


      <View style={styles.body}>
        <Text style={styles.label}>Súly</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setWeight(text) }
        />
        <Text style={styles.label}>Magasság</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setHeight(text) }
        />
        <Pressable onPress={calcTestTomegIndex} style={styles.button}>
          <Text style={styles.buttonText}>Számít</Text>
        </Pressable>
        <Text style={styles.label}>Testtömegindex</Text>
        <TextInput
          style={styles.input}
          value={result}
        />      
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Sallai András, 2024</Text>
      </View>
  
    </View> //gyökér záró
  );
}


