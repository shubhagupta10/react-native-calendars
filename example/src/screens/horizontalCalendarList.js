import React, {Component} from 'react';
import {View} from 'react-native';
import {CalendarList} from 'react-native-calendars';

const testIDs = require('../../../src/testIDs');


export default class HorizontalCalendarList extends Component {
  
  render() {
    return (
      <View testID={testIDs.horizontalList.CONTAINER}>
        <CalendarList
          current={'2012-05-16'}
          pastScrollRange={24}
          futureScrollRange={24}
          horizontal
          pagingEnabled
          style={{borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}
        />
      </View>
    );
  }
}
