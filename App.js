import * as React from 'react';
import { SearchBar,Icon,Header,ButtonGroup,Button } from 'react-native-elements';
import {View,Text,StyleSheet,ScrollView } from 'react-native';
import {Settings} from './Settings.js'

export default class App extends React.Component {
  constructor() {
      super()
      this.state = {
        search: '',
        selectedIndex: 2
      }
      this.updateIndex = this.updateIndex.bind(this)
  }

  updateSearch = search => {
        this.setState({ search });
      };
  updateIndex (selectedIndex) {
    this.setState({selectedIndex});
  }


  render() {
    const { search } = this.state;
    const buttons = ['Hello', 'World', 'Buttons'];
    const { selectedIndex } = this.state;
    return (
      <View style={{flex: 1}}>
          <View style={{flexDirection: 'row',backgroundColor:"#383d42",}}>
              <Icon
                 searchIcon = {null}
                 raised
                 name='home'
                 type='font-awesome'
                 color='black'
                 onPress={() => console.log('hello')}
                 underlayColor = "blue"
                 size = {15}
                 containerStyle={{alignItems:'center'}}
              />
              <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
                inputContainerStyle={{height:'5%'}}
                containerStyle={{width:'88%',height:'100%',borderBottomWidth:0,borderTopWidth:0}}
              />
          </View>
          <ScrollView>
            <Header
                leftComponent=<Icon
  name='menu'
  color='#fff'
  onPress={() => console.log('hello')}
  containerStyle={{height:30}}
  underlayColor = "transparent"
/>

                centerComponent={{ text: 'Customiz312321ed Feed', style: { color: 'rgb(0, 0, 255)',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Customize31232d Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Customized Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Custom3123213ized Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Cust312321omized Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Customized Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Cust333omized Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Custom3213ized Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Customized Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Customized Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Custo3123mized Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Customi321zed Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Custom312ized Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Custo32312mized Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Customi22zed Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Custom321321ized Feed', style: { color: '#fff',fontSize: 25}}}
                rightComponent={{ icon: '', color: '#fff' }}
                containerStyle={{ padding: 30,height:20}}
            />



          </ScrollView>

          <View style={{flex: 1,flexDirection: 'column-reverse'}}>
              <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{width:'95%',height:40,backgroundColor:'white',
                                         alignItems:'center',justifyContent:'center'}}
              />
                  <Icon
                   name='plus-circle'
                   type='font-awesome'
                   underlayColor = "transparent"
                   onPress={() => console.log('hello')}
                   size={30}
                   containerStyle={{width:'95%',height:30, alignItems:'flex-end'}}
                  />
          </View>
      </View>
    );
  }
}
