import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableHighlight,
  Image
} from "react-native";

export default class MainScroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchdata: [],
      photos: [],
      flatlistPhotos:[]
    };
  }

  loadUpcomming = (count) => {
    fetch(`https://randomuser.me/api/?results=${count}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ fetchdata: data.results });
        // console.warn(data)
      })
      .catch(e => alert("cant connect"));
  };

  loadPhotos = () => {
    fetch(`https://randomuser.me/api/?results=3`)
      .then(res => res.json())
      .then(data => {
        this.setState({ photos: data.results }, () => {
          this.setState({
            photos: this.state.photos.map(item => item.picture.medium)
          });
        });
      })
      .catch(e => alert("cant get photos"));
  };

  eventsPhoto =(count)=>{
      fetch(`https://randomuser.me/api/?inc=picture&results=${count}`)
      .then(res=>res.json())
      .then(data=>this.setState({flatlistPhotos:data.results}))
      .catch(e=>alert('oppps'))
  }

  componentDidMount() {
    this.loadUpcomming(4);
    this.loadPhotos();
    this.eventsPhoto(6)
  }

  calWeekDays = () => {
    //   let d = new Date();
    let weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return weekDay[Math.floor(Math.random() * (7 - 1)) + 1];
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.UpcommingFlatlistWrapper}>
          <View style={styles.UpcommingHeaderText}>
            <Text style={styles.HeadersFontStyles}>Upcomming Events</Text>
          </View>
          <View>
          <ScrollView style={{height:380}}>
          <FlatList
            data={this.state.fetchdata}
            keyExtractor={item => item.phone}
            renderItem={({ item }) => {
              return (
                <View style={styles.eventsCard}>
                  <View style={styles.eventCardHeader}>
                    <View style={styles.dateWrapper}>
                      <Text style={{ fontSize: 14, color: "#777" }}>
                        {this.calWeekDays()}
                      </Text>
                      <Text
                        style={{
                          fontSize: 40,
                          color: "#222",
                          letterSpacing: -4
                        }}
                      >
                        {item.registered.age}
                      </Text>
                    </View>
                    <View style={styles.detailsWrapper}>
                      <View style={styles.eventHeader}>
                        <Text style={styles.HeadersFontStyles}>
                          {item.location.city}
                        </Text>
                      </View>
                      <View style={styles.eventDateLocation}>
                        <Text style={styles.eventDateDetails}>
                          {this.calWeekDays()}  {item.registered.age}  Jun  {item.location.timezone.offset}  {item.location.timezone.description}
                        </Text>
                      </View>
                      <View style={styles.eventMembers}>
                        {this.state.photos.map(item => (
                          <Image
                            source={{ uri: item }}
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: 50,
                              marginHorizontal: 3
                            }}
                          />
                        ))}
                      </View>
                    </View>
                  </View>
                  <View style={styles.eventCardNav}>
                    <View style={styles.cardNavElement}>
                    
                      <Image source={require('../Assets/Images/tick.png')} style={{marginRight:14,marginLeft:10}}/>
                      <Text  style={{marginRight:6}}>Going</Text>
                     
                    </View>

                    <View style={styles.cardNavElement}>
                      <Image source={require('../Assets/Images/question.png')} style={{marginRight:14,marginLeft:10}}/>
                      <Text  style={{marginRight:6}}>Maybe</Text>
                    </View>

                    <View style={styles.cardNavElement}>
                      <Image source={require('../Assets/Images/close.png')} style={{marginRight:14,marginLeft:10}}/>
                      <Text  style={{marginRight:6}}>Cant Go</Text>
                    </View>

                    <View style={[styles.cardNavElement,{marginLeft:10}]}>
                    <Text  style={{marginLeft:10}}>Share</Text>
                      <Image source={require('../Assets/Images/drop-down.png')} style={{marginRight:10,marginLeft:14}}/>
                      
                    </View>
                  </View>
                </View>
              );
            }}
          />
          </ScrollView>
          </View>
          <TouchableHighlight
            onPress={() => {}}
            underlayColor="rgba(100,100,100,0.05)"
            style={styles.touchableMoreEvents}
          >
            <Text style={{ fontSize: 12, color: "#888", fontWeight: "600" }}>
              SEE ALL UPCOMMING EVENTS
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.EventsFlatlistWrapper}>
        <View style={{height: 65,
    justifyContent: "center",
    paddingLeft: 25,alignItems:'flex-start',borderBottomWidth:1,borderBottomColor:'#ddd'}}><Text style={styles.HeadersFontStyles}>Events You May Like</Text></View>
          <FlatList 
          horizontal={true}
          data={this.state.flatlistPhotos}
          keyExtractor={item=>item.picture.large}
          renderItem={ ({item})=> 
        <View 
        style={{justifyContent: 'center',alignItems: 'center',}}
        >
             {/* {console.warn(item.picture.large)}
             {console.warn( `from state :${this.state.flatlistPhotos}`)} */}
<View style={{justifyContent: 'center',borderColor:'#eee',borderWidth:2,borderRadius:10,alignItems: 'center',padding:15,marginHorizontal:15}}>
             <Image source={{uri:item.picture.large}} style={{width:600,height:300,borderRadius:10}}/>
             </View>
        {/* {item.picture.large.map(item => {return(
            // console.warn(item)
            <Image source={{uri:item}} style={{width:200,height:150}}/>

          )})} */}

           </View>
        }


          
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1
  },
  eventsCard: {
    minHeight: 190,
    // backgroundColor: "gold",
    borderWidth: 1,
    borderColor:'#eee'
    // justifyContent: 'center',
  },
  eventHeader:{

    borderColor:'blue',
    // borderWidth:3,
    alignItems:'flex-start'
  },
  eventCardHeader: {
    height: 110,
    flexDirection: "row",
    borderColor: "royalblue",
    // borderWidth: 4
  },
  detailsWrapper: {
    // backgroundColor: "lime",
    flex: 12,
    justifyContent: "space-evenly",
    paddingLeft: 25
  },
  UpcommingHeaderText: {
    height: 65,
    justifyContent: "center",
    paddingLeft: 25
  },
  touchableMoreEvents: {
    height: 55,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  HeadersFontStyles: {
    fontSize: 18,
    fontWeight: "600",
    color: "#444",
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'red',
    // borderWidth:3
  },
  eventDateDetails: {
    fontSize: 12,
    fontWeight: "600",
    color: "#aaa"
  },
  dateWrapper: {
    // backgroundColor: "red",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRightColor:'#ddd',
    borderRightWidth: 2,
    marginVertical:12
  },
  eventMembers: {
    flexDirection: "row"
  },
  eventCardNav: {
    height:60,
    // backgroundColor: "gold",
    borderColor:'red',
    // borderWidth:3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  cardNavElement:{
      flexDirection: 'row',
      borderColor:'#bbb',
      borderWidth:1,
      borderColor:'#ddd',
      justifyContent: 'center',
      padding:7,
      width:105,
      alignItems: 'center',
    //   elevation:1,
      borderRadius:2
  },
  EventsFlatlistWrapper:{
      height:500,
      borderColor:'#ddd',
      borderWidth:1,
      alignContent: 'center',
      justifyContent: 'center',
  }
});
