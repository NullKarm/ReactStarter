import React from "react";
import Table from "./Table";
import Form from "./Form";

class App extends React.Component {
  state = {
    characters: [],
  };
  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    // basicamente com o spread operator permite que sempre que se submeta nova info, essa seja adicionada a um novo array que contem TODA a info previamente inserida, seguida pela nova info.
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter} /*passar a func removeCharacter como prop para a table. Pk foi def no App, classe Mae*/
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
