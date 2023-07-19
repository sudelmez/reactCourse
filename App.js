import React from "react"
import { View ,StyleSheet } from "react-native"
import CurrentWeather from "./src/components/currentweather.js"
import { QueryClient, QueryClientProvider } from 'react-query';
import Example from '/Users/sudeolmez/Desktop/reactCourse/src/components/reactquery/query.js';

const queryClient = new QueryClient()

const App = () =>{
  return (
    <QueryClientProvider client={queryClient}>
    <View style={styles.container}>
      <Example/>
    </View>
    </QueryClientProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App
