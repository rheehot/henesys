import React from 'react'
import moment from 'moment'
import chunk from 'lodash/chunk'
import {
  View,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
} from 'react-native'
import {
  Text,
  Button,
  Divider,
} from 'src/components'
import { typography, palette } from 'src/styles'

const DEVICE_WIDTH = Dimensions.get('window').width
const ITEM_SIZE = (DEVICE_WIDTH - 32) / 7

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  horizontal: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    color: palette.primary.default,
  },
  background: {
    position: 'absolute',
    height: 4,
    bottom: ITEM_SIZE / 12,
    left: ITEM_SIZE / 6,
    right: ITEM_SIZE / 6,
    zIndex: -1,
    borderRadius: 2,
    backgroundColor: palette.primary.default,
  },
})

export interface CalendarProps {
  current?: string,
  progressList: number[],
  changeDate: (date: string) => void,
  style?: StyleProp<ViewStyle>,
}

class Calendar extends React.PureComponent<CalendarProps> {
  static defaultProps = {
    current: moment().format('YYYY-MM-DD'),
    progressList: [],
  }

  _onSelect = (date: number) => () => {
    const { current, changeDate } = this.props
    const nextDate = moment(current).startOf('month').add(date - 1, 'days').format('YYYY-MM-DD')
    changeDate(nextDate)
  }

  _days = () => {
    const { current } = this.props
    const startWeekday = moment(current).startOf('month').weekday()
    const daysInMonth = moment(current).daysInMonth()
    return [
      ...Array(startWeekday),
      ...Array(daysInMonth),
    ].map((_, i) => Math.max(0, i - startWeekday + 1))
  }

  _renderDay = (day: string) => (
    <View
      key={`calendar-day-${day}`}
      style={styles.item}
    >
      <Text style={typography.tiny[1].gray}>
        {day}
      </Text>
    </View>
  )

  _renderDate = (date: number, index: number) => {
    const { current, progressList } = this.props
    const opacity = progressList[date - 1] || 0
    const selected = moment(current).date() === date

    return (
      <Button
        key={`calendar-date-${index}`}
        onPress={this._onSelect(date)}
        round
      >
        <View style={styles.item}>
          {!!date && (
            <Text style={[typography.body[2].black, selected && styles.selected]}>
              {date}
            </Text>
          )}
          <View style={[styles.background, { opacity }]} />
        </View>
      </Button>
    )
  }

  _renderDates = (days: number[], index: number) => (
    <View
      key={`calendar-row-${index}`}
      style={styles.horizontal}
    >
      {days.map(this._renderDate)}
    </View>
  )

  render() {
    const { style } = this.props
    return (
      <View style={[styles.container, style]}>
        <Divider />
        <View style={styles.horizontal}>
          {moment.weekdaysMin().map(this._renderDay)}
        </View>
        {chunk(this._days(), 7).map(this._renderDates)}
      </View>
    )
  }
}

export default Calendar
