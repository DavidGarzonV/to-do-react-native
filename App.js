import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  establecerTexto = (value) => {
    console.log(value);
    this.setState({ texto: value });
  }

  agregarTarea = () => {
    this.setState({
      // los tres puntos hacen una iteración por cada elemento del array,
      // permitiendo añadir mas
      // el texto es el value que cambia
      // se crea un key para que React lo identifique
      tareas: [...this.state.tareas,
        {
          texto: this.state.texto,
          key: Date.now(),
        },
      ],
      texto: '',
    });
  }

  eliminarTarea = (id) => {
    // Filtra las tareas diferentes al id(key)
    const nuevasTareas = this.state.tareas.filter(tarea => tarea.key !== id);
    this.setState({
      tareas: nuevasTareas,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
          texto={this.state.texto}
        />
        {/* permite imprimir un state, incluso en tiempo real */}
        {/* <Text style={styles.texto}>{this.state.texto}</Text> */}
        <Body tareas={this.state.tareas} eliminar={this.eliminarTarea} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  texto: {
    paddingHorizontal: 16,
  },
});
