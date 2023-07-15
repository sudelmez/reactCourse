import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>hello</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name='sun' size={40}></Feather> 
        <Text style={styles.temp}>Current Weather</Text>
        <Text>20</Text>
        <Text style={styles.feels}>feels like 23</Text>
        <View style={styles.highlowrapper}>
          <Text> like 23</Text>
          <Text> but 20</Text>
        </View>
        <View style={styles.bodywrapper}>
          <Text> good</Text>
          <Text> bad</Text>
        </View>
      </View>
      <View style={styles.highlowrapper}>
        <Text style={styles.temp}> good</Text>
        <Text style={styles.temp}> bad</Text>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink', //this only colors the background od the component
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'black',
    fontSize: 50
  },
  feels: {
    color: 'orange',
    fontSize: 30
  },
  highlowrapper: { //shows as row
    flexDirection: 'row',
  },
  bodywrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft:25,
    marginBottom:40,
  }
});

export default CurrentWeather
