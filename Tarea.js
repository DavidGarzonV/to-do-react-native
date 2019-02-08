import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Tarea extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{this.props.item.texto}</Text>
        {/* al poner una función flecha ()=>{} se pone global para que la funcion no se autoejecute */}
        <TouchableOpacity onPress={() => { this.props.eliminar(this.props.item.key); }}>
          <Ionicons
            name="md-trash"
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  texto: {
    fontSize: 24,
  },
});

export default Tarea;