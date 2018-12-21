import React from 'react'
import moment from 'moment'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  withNavigation,
  NavigationInjectedProps,
} from 'react-navigation'
import {
  Text,
  Button,
} from 'src/components'
import { palette, typography } from 'src/styles'
import { Article } from 'src/store/selectors'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    borderBottomWidth: 1,
    borderBottomColor: palette.gray[30],
  },
  content: {
    flex: 1,
    paddingVertical: 12,
    paddingRight: 12,
    justifyContent: 'center',
  },
  comment: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.gray[10],
  },
})

export interface ArticleItemProps extends Partial<NavigationInjectedProps> {
  article: Article,
}

class ArticleItem extends React.PureComponent<ArticleItemProps> {
  onClick = () => {
    const {
      article: { id },
      navigation,
    } = this.props

    if (navigation) {
      navigation.push('PostView', { id })
    }
  }

  render() {
    const {
      article: {
        title,
        author,
        commentCount,
        createdAt,
      },
    } = this.props

    return (
      <Button onPress={this.onClick}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={typography.body[1].black}>
              {title}
            </Text>
            <Text style={typography.body[3].lightGray}>
              {moment(createdAt).fromNow()}, {author}
            </Text>
          </View>
          <View style={styles.comment}>
            <Text style={typography.body[1].black}>
              {commentCount}
            </Text>
            <Text style={typography.tiny[1].lightGray}>
              댓글
            </Text>
          </View>
        </View>
      </Button>
    )
  }
}

export default withNavigation(React.memo(ArticleItem))