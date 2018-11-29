import React from 'react'
import {
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Platform,
} from 'react-native'
import {
  Text,
  Button,
} from 'src/components'
import { typography, palette } from 'src/styles'

const OFFSET = (Platform.OS === 'android') ? -300 : 0

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 24,
    justifyContent: 'center',
    backgroundColor: palette.white.default,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 8,
  },
  content: {
    marginTop: 24,
  },
  background: {
    width: 100,
    height: 100,
  },
  avatar: {
    width: 48,
    height: 48,
  },
  name: {
    width: 240,
    padding: 8,
    textAlign: 'center',
    backgroundColor: palette.white.default,
  },
  button: {
    margin: 24,
    paddingVertical: 12,
    borderRadius: 24,
    backgroundColor: palette.primary.default,
  },
})

export interface AddCharacterViewProps {
  imageUrl?: string,
}

class AddCharacterView extends React.PureComponent<AddCharacterViewProps> {
  render() {
    const { imageUrl } = this.props
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={ OFFSET }
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={[typography.heading[1].black.bold, styles.title]}>
            캐릭터 추가
          </Text>
          <Text style={typography.body[2].gray}>
            새로운 캐릭터를 등록합니다.
            캐릭터 이름을 입력하면 자동으로 정보를 가져옵니다.
            공식 홈페이지 랭킹에 표시되지 않는 캐릭터는 가져올 수 없습니다.
          </Text>
        </View>
        <View style={[styles.content, styles.center]}>
          <ImageBackground
            source={{ uri: 'character_bg' }}
            style={[styles.background, styles.center]}
          >
            <Image
              source={Object.assign({}, imageUrl ? { uri: imageUrl } : {})}
              style={styles.avatar}
            />
          </ImageBackground>
          <TextInput
            placeholder="추가할 캐릭터의 이름을 입력하세요"
            style={[typography.body[1].black, styles.name]}
          />
        </View>
        <Button onPress={() => {}} style={[styles.button, styles.center]}>
          <Text style={typography.body[1].white}>
            확인
          </Text>
        </Button>
      </KeyboardAvoidingView>
    )
  }
}

export default AddCharacterView
