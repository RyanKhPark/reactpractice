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
      .then((data) => {
        const breedsData = data.message;
        const finalBreeds = [];

        for (const [breedType, subBreedsList] of Object.entries(breedsData)) {
          if (!subBreedsList.length) continue;
          
          const breed = {
            breedType,
            subBreedsList
          };

          finalBreeds.push(breed);
        }

        this.setState({ breeds: finalBreeds });
      })
  }

  // tricky stuff: render and show a page with each Dog breed type and for each breed type have a bullt point and names. Even this, if the breed type does not have sub type dont show the breed type.

  //--

  render() {
    const { breeds } = this.state;

    return (
      <div className="App">
        <h1>Dog's World</h1>
        {
          breeds.map((breed, idx) => (
            <ul key={`breed-${idx}`}>
              {breed.breedType}
              {
                breed.subBreedsList.map((subBreed, idx) => (
                  <li key={`subBreed-${idx}`}>{subBreed}</li>
                ))
              }
            </ul>
          ))
        }        
      </div>
    );
  }
}

export default App;
