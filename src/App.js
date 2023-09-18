import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then((response) => setBeers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Punk API Beers</h1>
      <input
        type="text"
        placeholder="Search for a beer"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="beer-cards">
        {filteredBeers.map((beer) => (
          <div key={beer.id} className="beer-card">
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
