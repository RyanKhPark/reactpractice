import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      breeds: []
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState(() => {
        const strData = data.message
        return { breeds: strData }
      })
      )
  }

  // tricky stuff: render and show a page with each Dog breed type and for each breed type have a bullt point and names. Even this, if the breed type does not have sub type dont show the breed type.

  //--

  render() {
    const breeds = this.state.breeds
    // for (const [key, value] of Object.entries(breeds)) {
    //   console.log(`${key} and ${value}`)
    // }
    return (
      <div className="App">

        "Hello World!"
        {Object.entries(breeds).map((breed) => { return console.log(breed[1]) })}
        {Object.entries(breeds).map((breed) => {
          return breed[1].length > 0 ?
            <div>
              <h2 key={breed[0]}>{breed[0]}</h2>
              {breed[1].map((subBreed) => { return <li>{subBreed}</li> })}
            </div> : ''
        })}
      </div>
    );
  }
}

export default App;
