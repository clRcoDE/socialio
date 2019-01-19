/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableHighlight
} from "react-native";
import MainScroller from "./src/Components/MainScroller";


const diviceHeight = Dimensions.get("window").height;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.logoWrapper}>
            <Image source={require("./src/Assets/Images/net.png")} />
            <Text
              style={{
                paddingLeft: 12,
                color: "#222",
                fontWeight: "600",
                fontSize: 20
              }}
            >
              Socialio
            </Text>
          </View>
          <View style={styles.inputWrapper}>
            <Image source={require("./src/Assets/Images/search.png")} />
            <TextInput
              placeholder={"search"}
              style={{ flex: 1, paddingLeft: 12 }}
            />
          </View>
        </View>
        <View style={styles.bodyWrapper}>
          <View
            style={[styles.navMenuWrapper,]}
          >
            <View style={styles.navSectionOne}>
              <View style={styles.navHeaderWrapper}>
                <Text style={styles.headerText}>MENU</Text>
              </View>

              <View style={styles.sectionOneOptions}>
                <View style={styles.sectionOneElement}>
                  <Text style={styles.sectionOneElementText}>Home</Text>
                </View>

                <View style={styles.sectionOneElement}>
                  <Text style={styles.sectionOneElementText}>Discussion</Text>
                </View>

                <View style={styles.sectionOneElement}>
                  <Text style={styles.sectionOneElementText}>Friends</Text>
                </View>

                <View style={styles.sectionOneElementSelected}>
                  <Text style={styles.sectionOneElementTextSelected}>
                    Events
                  </Text>
                </View>

                <View style={styles.sectionOneElement}>
                  <Text style={styles.sectionOneElementText}>Photos</Text>
                </View>

                <View style={styles.sectionOneElement}>
                  <Text style={styles.sectionOneElementText}>Files</Text>
                </View>
              </View>
            </View>

            <View style={styles.navSectionTwo}>
              <View style={styles.navHeaderWrapper}>
                <Text style={styles.headerText}>YOUR FAVORITES</Text>
              </View>

              <View style={styles.sectionTwoOptions}>
                <View style={styles.sectionTwoElement}>
                  <Image source={require("./src/Assets/Images/railways.png")} />
                  <Text style={styles.sectionTwoElementText}>
                    Railway Deals
                  </Text>
                </View>

                <View style={styles.sectionTwoElement}>
                  <Image source={require("./src/Assets/Images/hockey.png")} />

                  <Text style={styles.sectionTwoElementText}>Hockey</Text>
                </View>

                <View style={styles.sectionTwoElement}>
                  <Image
                    source={require("./src/Assets/Images/basketball.png")}
                  />

                  <Text style={styles.sectionTwoElementText}>
                    Basketball UK
                  </Text>
                </View>

                <View style={styles.sectionTwoElement}>
                  <Image source={require("./src/Assets/Images/snowman.png")} />

                  <Text style={styles.sectionTwoElementText}>
                    Winter Sports
                  </Text>
                </View>

                <View style={styles.sectionTwoElement}>
                  <Image source={require("./src/Assets/Images/monkey.png")} />

                  <Text style={styles.sectionTwoElementText}>
                    Ha ! The best Jokes
                  </Text>
                </View>

                <View style={styles.sectionTwoElement}>
                  <Image source={require("./src/Assets/Images/laughing.png")} />

                  <Text style={styles.sectionTwoElementText}>9 Gag</Text>
                </View>

                <View style={styles.sectionTwoElement}>
                  <Image source={require("./src/Assets/Images/gem.png")} />

                  <Text style={styles.sectionTwoElementText}>Mentors</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.eventsMenuWrapper}>
            <ScrollView style={styles.scrollMenuWrapper}>
            <MainScroller/>
            
            </ScrollView>
            <View style={styles.ExploreMenuWrapper}>
              <View style={styles.exploreHeader}>
                <Text
                  style={{ fontSize: 18, color: "#444", fontWeight: "600" }}
                >
                  Explore Events
                </Text>
              </View>
              <View style={styles.exploreBigUiButtons}>
                <View style={styles.exploreBigUiButtonsWrapper}>
                <View style={[styles.BigUiButton,{backgroundColor:'#1198f0'}]}>
                <Image source={require('./src/Assets/Images/today.png')}/>
                <Text style={styles.BigUiButtonsText}>Today</Text>
                
                </View>
                  <View style={[styles.BigUiButton,{backgroundColor:'#6655ee'}]}>
                  <Image source={require('./src/Assets/Images/calendardate.png')}/>
                <Text style={styles.BigUiButtonsText}>This Week</Text>
                
                  </View>
                  <View style={[styles.BigUiButton,{backgroundColor:'#ffaa33'}]}>
                  <Image source={require('./src/Assets/Images/tommorrow.png')}/>
                <Text style={styles.BigUiButtonsText}>Tomorrow</Text>
                
                  </View>

                  <View style={[styles.BigUiButton,{backgroundColor:'#bbbbdd'}]}>
                  <Image source={require('./src/Assets/Images/datepicker.png')}/>
                <Text style={styles.BigUiButtonsText}>Choose Date</Text>
                
                  </View>
                </View>
              </View>
              <View style={styles.explorerNavigate}>
                <View style={styles.exploreNavigateElement}>
                <Image source={require('./src/Assets/Images/joy.png')} style={{marginLeft:10}}/>

                  <Text style={{fontSize:13,fontWeight:'600',color:'#555',paddingLeft:18}}> Nerd Parties</Text>
                </View>
                <View style={styles.exploreNavigateElement}>
                <Image source={require('./src/Assets/Images/partyshot.png')}  style={{marginLeft:10}}/>

                  <Text style={{fontSize:13,fontWeight:'600',color:'#555',paddingLeft:18}}> Party</Text>
                </View>
                <View style={styles.exploreNavigateElement}>
                <Image source={require('./src/Assets/Images/craft.png')}  style={{marginLeft:10}}/>

                  <Text style={{fontSize:13,fontWeight:'600',color:'#555',paddingLeft:18}}>Crafts</Text>
                </View>
                <View style={styles.exploreNavigateElement}>
                <Image source={require('./src/Assets/Images/sportball.png')}  style={{marginLeft:10}}/>

                  <Text style={{fontSize:13,fontWeight:'600',color:'#555',paddingLeft:18}}>Sports</Text>
                </View>
                <View style={styles.exploreNavigateElement}>
                <Image source={require('./src/Assets/Images/musicplayer.png')}  style={{marginLeft:10}}/>

                  <Text style={{fontSize:13,fontWeight:'600',color:'#555',paddingLeft:18}}>Dance</Text>
                </View>
                <TouchableHighlight
                  onPress={() => {}}
                  style={styles.touchMoreEvents}
                >
                  <Text>More Events</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000"
  },
  headerWrapper: {
    // borderColor: "royalblue",
    // backgroundColor:'royalblue',
    // borderWidth: 2,
    flexDirection: "row",
    // paddingLeft:18,
    // paddingVertical:17,
    borderBottomWidth: 1,
    borderBottomColor:'#ccc',
    // backgroundColor:'red'
  },
  navHeaderWrapper: {
    borderColor: "red",
    // borderWidth:4,
    flexDirection: "row",
    paddingLeft: 18,
    paddingVertical: 1,
    // backgroundColor:"red"
  },
  bodyWrapper: {
    backgroundColor: "#ddd",
    flex: 1,
    flexDirection: "row",
    borderColor: "lime",
    // borderWidth: 4
  },
  logoWrapper: {
    // backgroundColor: "green",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRightColor: "#ddd",
    borderRightWidth: 1,
    marginVertical: 4
  },
  inputWrapper: {
    // backgroundColor: "purple",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 18
  },
  eventsMenuWrapper: {
    flex: 4,
    backgroundColor: "rgba( 245,245,240,1.0)",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  scrollMenuWrapper: {
    width:370,
    backgroundColor: "#fff",
    marginLeft: 32,
    marginRight: 18,
    marginTop: 25
    // marginBottom:32,
  },
  ExploreMenuWrapper: {
    flex: 3,
    backgroundColor: "#fff",
    marginLeft: 18,
    marginRight: 32,
    marginTop:25,
    borderColor:'#777',
    // borderWidth:2,
    // marginBottom:32,
  },
  exploreHeader: {
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 15,
    borderColor:'#ddd',
    borderWidth:1
  },
  exploreBigUiButtons: {
    minHeight:280,
    flexWrap: "wrap",
    // backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
    borderColor:'#ddd',
    borderWidth:1
  },
  exploreBigUiButtonsWrapper:{

    flexWrap: "wrap",
    // borderColor:'red',
    // borderWidth:2,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical:6,
    maxHeight: 600,
    marginHorizontal:6
  },
  BigUiButton: {
    minWidth:160,
    maxWidth:250,
    minHeight:115,
    // height:125,
    maxHeight:200,
    // borderWidth: 2,
    marginHorizontal:6,
    marginVertical:5,
    borderRadius:6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BigUiButtonsText:{

    color:'#eee',
    fontWeight: '600',
    fontSize:18,
    paddingTop:10
  },
  exploreNavigateElement: {
    // justifyContent: "center",
    paddingVertical:14,
    flexDirection: 'row',
    paddingHorizontal:10,
    borderColor:'#eee',
    borderWidth:1
  },
  touchMoreEvents: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    borderColor:'#eee',
    borderWidth:1
  },

  navMenuWrapper: {
    flex:1.25,
    paddingTop:34,
    backgroundColor: "#fff",
    // marginRight:100
    // paddingLeft:30
  },
  navSectionOne: {
    // borderWidth:3,
    borderColor: "purple",
    height: 285
  },
  navSectionTwo: {
    // borderWidth:3,
    borderColor: "orange"
  },
  sectionOneElement: {
    // borderWidth:3,
    borderColor: "red",
    paddingVertical: 10,
    paddingLeft: 18
  },

  sectionOneElementSelected: {
    // borderWidth:1,
    // borderColor:'#e8f3ff',
    borderRightColor: "#afd5ff",
    borderTopColor: "#afd5ff",
    borderBottomColor: "#afd5ff",

    borderWidth: 1,

    paddingVertical: 10,
    paddingLeft: 15,
    borderLeftColor: "#1c88ff",
    borderLeftWidth: 3,
    backgroundColor: "#d6e9ff"
    // borderColor:'#ccc',
  },
  sectionTwoElement: {
    // borderWidth:3,
    borderColor: "red",
    flexDirection: "row",

    paddingVertical: 10,
    paddingLeft: 18
  },
  sectionTwoElementText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#333",
    paddingLeft: 10
  },
  sectionOneElementText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#333"
  },
  sectionOneElementTextSelected: {
    fontWeight: "600",
    fontSize: 14,
    color: "#0077ff"
  },
  headerText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#999",
    marginBottom:10
  }
});
