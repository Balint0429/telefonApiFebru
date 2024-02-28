import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [tomegInedx, setTestTomegIndex] = useState('')

  function calcTestTomegIndex() {
    let heightM = height /100
    let res = weight / Math.pow(heightM, 2);
    res = res.toFixed(2);
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
        <Text style={styles.label}>Súly(kg)</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setWeight(text) }
        />
        <Text style={styles.label}>Magasság (cm)</Text>
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
          value={tomegInedx}
        />      
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Laczkó Bálint, 2024</Text>
      </View>
  
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 3,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
      color: 'white',
      fontSize: 14,
      textTransform: 'uppercase',
  },
  input: {
    backgroundColor: 'white',
    height: 30,
    width: '90%',
    fontSize: 18,
    paddingHorizontal: 8,
  },
  header: {
    backgroundColor: 'grey',
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
        
  },
  headerText: {
    fontSize: 28,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  label: {
    marginTop: 10,
    fontSize: 22,
  },
  footer: {
    backgroundColor: 'grey',
    width: '100%',
    padding: 5,
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
  },
});
