import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { StyleSheet } from 'react-native'
import {
  Header,
} from 'src/components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class MissionScreen extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="별빛뒤로" />
      </SafeAreaView>
    )
  }
}

export default MissionScreen
