import { ListItem } from 'react-native-elements'
import {FlatList} from 'react-native'
import React from 'react'
export class Settings extends React.Component {
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={{
          source: item.avatar_url && { uri: item.avatar_url },
          title: item.name[0]
        }}
        bottomDivider
        chevron
      />
    )
    render () {

      return (
        <FlatList
              keyExtractor={this.keyExtractor}
              data={list}
              renderItem={this.renderItem}
            />
      )
    }
}
list = [
          {
            name: 'Amy Farha',
            subtitle: 'Vice President'
          },
          {
            name: 'Artin Kim',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Kool Kid'
          }
        ]