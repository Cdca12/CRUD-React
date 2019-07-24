import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    titulo: 'CRUD React',
    index: 0,
    nombre: '',
    apellido: '',
    edad: '',
    infoPersonas: []
  }

  handleNombreChange = (evt) => {
    this.setState({ nombre: evt.target.value });
  }

  handleApellidoChange = (evt) => {
    this.setState({ apellido: evt.target.value });
  }

  handleEdadChange = (evt) => {
    this.setState({ edad: evt.target.value });
  }

  añadirPersona = () => {

    let { infoPersonas } = this.state;

    infoPersonas.push({
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      edad: this.state.edad
    });

    this.setState({
      infoPersonas,
      nombre: '',
      apellido: '',
      edad: ''
    });

    this.refs.nombreInput.focus();

    // Test
    console.log(this.state.infoPersonas);
  }

  eliminarPersona = (i) => {

    let { infoPersonas } = this.state;

    infoPersonas.splice(i, 1);

    this.setState(infoPersonas);
  }

  editarPersona = (i) => {

    let persona = this.state.infoPersonas[i];

    this.setState({
      index: i,
      nombre: persona.nombre,
      apellido: persona.apellido,
      edad: persona.edad
    });

    this.refs.nombreInput.select();

  }

  guardarPersona = () => {

    let { infoPersonas } = this.state;

    infoPersonas[this.state.index] = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      edad: this.state.edad
    }

    this.setState(infoPersonas);
  }

  componentDidMount = () => {
    this.refs.nombreInput.focus();
  }

  render() {
    return (
      <div className="App">
        <h2> {this.state.titulo} </h2>
        <form className="formDatos">
          <input type="text" ref="nombreInput" value={this.state.nombre} onChange={this.handleNombreChange} placeholder="Nombre" className="formField" />
          <input type="text" ref="apellidoInput" value={this.state.apellido} onChange={this.handleApellidoChange} placeholder="Apellido" className="formField" />
          <input type="text" ref="edadInput" value={this.state.edad} onChange={this.handleEdadChange} placeholder="Edad" className="formField" />
          <button type="button" onClick={this.añadirPersona} className="botonSubmit">Añadir</button>
          <button type="button" onClick={this.guardarPersona} className="botonSubmit">Guardar</button>
        </form>
        <pre>
          {this.state.infoPersonas.map((persona, i) =>
            <li key={i} className="myList">
              {i + 1}, {persona.nombre}, {persona.apellido}, {persona.edad}
              <button onClick={() => this.eliminarPersona(i)} className="myListButton">Eliminar</button>
              <button onClick={() => this.editarPersona(i)} className="myListButton">Editar</button>

            </li>
          )}
        </pre>
      </div >

    )

  }
}


