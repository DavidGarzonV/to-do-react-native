import React, { Component } from 'react';
import {
  Text, View, StyleSheet, FlatList,
} from 'react-native';
import Tarea from './Tarea';

class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.tareas}
          // se obtiene el atributo {item} del elemento (desctructuración)
          renderItem={({ item }) => <Tarea item={item} eliminar={this.props.eliminar} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#98FB98',
  },
});

export default Body;
