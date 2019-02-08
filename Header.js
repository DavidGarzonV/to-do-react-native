import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TextInput,
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Escribe tu texto..."
          style={styles.texto}
          onChangeText={this.props.cambiarTexto}
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 36,
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  texto: {
    paddingHorizontal: 36,
    fontSize: 24,
  },
});

export default Header;
