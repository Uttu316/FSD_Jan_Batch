import React, { Component } from "react";

class ClassBasedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      pokemons: [],
    };
    this.onAdd = this.onAdd.bind(this);
    this.onMinus = this.onMinus.bind(this);
  }

  //   static getDerivedStateFromProps(props) {
  //     return {
  //       count: props.count + 5,
  //     };
  //   }

  onAdd() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  onMinus() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  getPokemonData = async () => {
    try {
      const res = await fetch(
        "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
      );
      const data = await res.json();
      console.log(data);
      this.setState({
        pokemons: data[0].results,
      });
    } catch (e) {
      console.log(e);
    }
  };

  shouldComponentUpdate(nextProp, nextState) {
    console.log("Should Component Update");
    if (nextState.count > 10) {
      return false;
    }
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
  }

  componentDidUpdate() {
    console.log("State has been updated");
    if (this.state.count === 8) {
      this.props.closeComp(false);
    }
  }

  componentDidMount() {
    console.log("Did Mount");
    this.getPokemonData();
  }
  componentWillUnmount() {
    console.log("I am going to die");
  }
  render() {
    const { title } = this.props;
    const { count, pokemons } = this.state;
    console.log("render", pokemons);
    return (
      <div>
        <h1>Hello {title}</h1>
        <div>
          <button onClick={this.onAdd}>+</button>
          {count}
          <button onClick={this.onMinus}>-</button>
        </div>
        {Array.isArray(pokemons) &&
          !!pokemons.length &&
          pokemons.map((item, index) => <p key={index}>{item.name}</p>)}
      </div>
    );
  }
}

export default ClassBasedComponent;
