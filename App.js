import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
import { Calendar, CalendarList, Arrow } from 'react-native-calendars';
import * as Font from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class App extends React.Component {

  state = {
    clickCount: 1,
    searchText: 'Text',
    fontLoaded: false
  };
  constructor() {
    super();
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Bold': require('./assets/Fonts/Biennale-Bold.otf'),
      'Medium': require('./assets/Fonts/Biennale-Medium.otf')
      // 'Biennale-Bold': require('./assets/Fonts/Biennale-Bold.otf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.lableText}>Click test</Text>
        <Pressable style={styles.clickButton} onPress={() => { this.setState({ clickCount: this.state.clickCount + 1 }) }}>
          <Text style={styles.whiteText}>Click me</Text>
        </Pressable>
        <View style={[styles.commonBox2]}>
          <View style={styles.dummyImage}></View>
          <View style={{ width: '75%' }}>
            <Text style={styles.commonText}>Number of button clicks</Text>
            <Text style={styles.grayText}>{this.state.clickCount}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.lableText}>Search Test</Text>
          <TextInput placeholder={'Search'} onChangeText={text => this.setState({ searchText: text })} style={[styles.commonBox2, { height: 52, padding: 6, marginTop: 0, fontSize: 18, color: '#ccc', fontFamily: 'Medium', letterSpacing: 1 }]}></TextInput>
        </View>

        <View style={[styles.commonBox2]}>
          <View style={styles.dummyImage}></View>
          <View style={{ width: '75%' }}>
            <Text style={styles.commonText}>Searched text</Text>
            <Text style={styles.grayText}>{this.state.searchText}</Text>
          </View>
        </View>

        <View >
          <Text style={styles.lableText}>Message Box</Text>
          <View style={styles.messageBox}>
            <View style={{ width: '70%' }}>
              <Text style={styles.commonText}>This is an empty state, to be used for messages and/or blog articles.</Text>
              <Text style={[styles.commonText, { color: '#ccc', lineHeight: 20, marginTop: 15 }]}>Four lines to describe the message/article to be highlighted. The text is accompanied by an illustration in the top right-hand corner.</Text>
              <Text style={[styles.lableText, { color: '#B4EDA0', textAlign: 'right', margin: 12 }]}>Not Now</Text>
            </View>
            <View style={{ width: '30%' }}>
              <Image source={require('./assets/Illustrations.png')} style={{ width: 130, height: 130 }} />
              <View>
                <Pressable style={[styles.clickButton, { width: '100%', margin: 5, backgroundColor: '#B4EDA0', marginTop: 32 }]} >
                  <Text style={styles.whiteText}>See message</Text>
                </Pressable>
              </View>
            </View>

          </View>

        </View>

        <Text style={styles.lableText}>Calendar test </Text>
        <View style={[styles.calenderBox]}>

          <Calendar
            currentMonth={'2022-04-26'}
            hideArrows={false}
            renderArrow={left => <View style={{ backgroundColor: '#cccccc70', height: 50, width: 50, borderRadius: 8, padding: 5 }}> <Ionicons name="md-arrow-forward-sharp" size={39} color='#000' /></View>}
            markingType={'period'}
            markedDates={{
              '2022-04-24': { color: '#3975FF', textColor: 'white', startingDay: true, },
              '2022-04-25': { color: '#3975FF', textColor: 'white' },
              '2022-04-26': { color: '#3975FF', textColor: 'white' },
              '2022-04-27': { color: '#3975FF', textColor: 'white' },
              '2022-04-28': { color: '#3975FF', textColor: 'white' },
              '2022-04-29': { color: '#3975FF', textColor: 'white' },
              '2022-04-30': { color: '#3975FF', textColor: 'white', endingDay: true, }
            }}
            removeClippedSubviews={false}
            scrollEnabled={true}
            selectedDate={'2015-08-15'}
            showControls={true}
            showEventIndicators={true}
            startDate={'2015-08-01'}
            titleFormat={'MMMM YYYY'}
            weekStart={1}
          />
          <View style={{ flexDirection: 'row' }}>
            <Pressable style={[styles.clickButton, { width: '46%', margin: 10 }]} onPress={() => { subtractMonth() }}>
              <Text style={styles.whiteText}>Previous week</Text>
            </Pressable>
            <Pressable style={[styles.clickButton, { width: '46%', margin: 10 }]} onPress={() => { addMonth() }}>
              <Text style={styles.whiteText}>Next week</Text>
            </Pressable>
          </View>
        </View>
        <Text style={[styles.lableText]}>List Test</Text>

        <View style={styles.listBox}>
          <Text style={[styles.grayText, { marginLeft: 25 }]}>Food</Text>
          <View style={styles.commonBox}>
            <View style={styles.dummyImage}></View>
            <View style={{ width: '75%' }}>
              <Text style={styles.commonText}>Bananas</Text>
              <Text style={styles.grayText}>Grocery Ape</Text>
            </View>
            <View>
              <Text style={styles.commonText}>2KG</Text>
            </View>
          </View>
          <View style={styles.commonBox}>
            <View style={styles.dummyImage}></View>
            <View style={{ width: '75%' }}>
              <Text style={styles.commonText}>Sugar</Text>
              <Text style={styles.grayText}>Candy shop</Text>
            </View>
            <View>
              <Text style={styles.commonText}>2KG</Text>
            </View>
          </View>
          <View style={styles.commonBox}>
            <View style={styles.dummyImage}></View>
            <View style={{ width: '75%' }}>
              <Text style={styles.commonText}>Tuna</Text>
              <Text style={styles.grayText}>Grocery Ape</Text>
            </View>
            <View>
              <Text style={styles.commonText}>2KG</Text>
            </View>
          </View>
          <Text style={[styles.grayText, { marginLeft: 25, marginTop: 15 }]}>Technology</Text>
          <View style={styles.commonBox}>
            <View style={styles.dummyImage}></View>
            <View style={{ width: '75%' }}>
              <Text style={styles.commonText}>Polystation</Text>
              <Text style={styles.grayText}>Stairsmart</Text>
            </View>
            <View>
              <Text style={styles.commonText}>2KG</Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  grayText: {
    fontSize: 18,
    color: '#ccc',
    fontFamily: 'Medium',
    letterSpacing: 1
  },
  dummyImage: {
    backgroundColor: '#ccc', borderRadius: 8, height: 38, width: 38, margin: 6, marginRight: 15
  },
  commonText: {
    fontSize: 18,
    color: '#333333',
    fontFamily: 'Medium',
    color: '#4A4A4A',
    letterSpacing: 1,
    justifyContent: 'center'
  },
  calenderBox: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8
  },
  commonBox: {
    height: 80, padding: 17,
    borderBottomColor: '#ccc', borderBottomWidth: 1,
    flexDirection: 'row'
  },
  commonBox2: {
    height: 70, borderColor: '#ccc', borderWidth: 1, padding: 12, borderRadius: 8, marginTop: 15, marginBottom: 15,
    flexDirection: 'row', fontSize: 25, letterSpacing: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  lableText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 30,
    fontFamily: 'Bold',
    color: '#4A4A4A',
    letterSpacing: 1
  },
  clickButton: {
    backgroundColor: '#FFA978',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: '#fff',
    fontSize: 19,
    fontFamily: 'Medium',
    letterSpacing: 1
  },
  messageBox: {
    backgroundColor: '#EAFFC9',
    // height: 250,
    borderRadius: 8,
    marginBottom: 15,
    padding: 15,
    maxWidth: '100%',
    flexDirection: 'row'
  },
  listBox: {
    height: 400,
    borderRadius: 8,
    marginBottom: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    paddingLeft: 0,
    paddingRight: 0
  }
});
