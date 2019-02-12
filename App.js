import React from 'react';
import {
  StyleSheet, Text, View, AsyncStorage, Button,
} from 'react-native';
import { stringify } from 'qs';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
      cargando: true,
    };
  }

  // Despues de que se monta el componente
  componentDidMount() {
    // Al cargar el render obtiene las tareas.
    this.recuperarDelTelefono();
  }

  // Function antes de render
  // componentWillMount();

  establecerTexto = (value) => {
    console.log(value);
    this.setState({ texto: value });
  }

  agregarTarea = () => {
    // los tres puntos hacen una iteración por cada elemento del array,
    // permitiendo añadir mas
    // el texto es el value que cambia
    // se crea un key para que React lo identifique

    const nuevasTareas = [...this.state.tareas, { texto: this.state.texto, key: Date.now() }];

    this.guardarEnTelefono(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
      texto: '',
    });
  }

  guardarEnTelefono = (tareas) => {
    // Asyncstorage solo recibe string
    AsyncStorage.setItem('@AppReactNative:tareas', JSON.stringify(tareas))
      .then((valor) => {
        console.log(valor);
      }).catch((err) => {
        console.log(err);
      });
  }

  recuperarDelTelefono = () => {
    AsyncStorage.getItem('@AppReactNative:tareas')
      .then((valor) => {
        console.log(JSON.parse(valor));

        if (valor !== null) {
          const nuevasTareas = JSON.parse(valor);
          this.setState({
            tareas: nuevasTareas,
          });
        }

        this.setState({ cargando: false });
      }).catch((err) => {
        console.log(err);
        this.setState({ cargando: false });
      });
  }

  eliminarTarea = (id) => {
    // Filtra las tareas diferentes al id(key)
    const nuevasTareas = this.state.tareas.filter(tarea => tarea.key !== id);
    this.guardarEnTelefono(nuevasTareas);
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
        <Body tareas={this.state.tareas} eliminar={this.eliminarTarea} cargando={this.state.cargando} />
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
