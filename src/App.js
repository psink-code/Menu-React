
import './App.css';
import NavBar from './components/navbar';
import Card from './components/card';
import React, { Component } from 'react';
import ravioli from './components/img/primi/ravioli.jpg';
import tagliolini from './img/primi/tagliolini-cinesi.webp';
import spagetti from './img/primi/spaghetti-di-soia-verdure.jpg';
import gnocchi from './img/primi/gnocchi.jpg';

// import { render } from '@testing-library/react';
class App extends Component {

  state = {
    cards: [
      { id: 0, name: 'Ravioli al vapore con verdure e carne', prezzo: 5.40, img: ravioli, q:0 },
      { id: 1, name: 'Gniocchi di riso', prezzo: 4.40, img: gnocchi, q:0 },
      { id: 2, name: 'Tagliolini con verdure e gamebri', prezzo: 3.50, img: tagliolini, q:0 },
      { id: 3, name: 'Spagetti di soia con verdure', prezzo: 6.40, img: spagetti, q:0 },
      // {id:4, name: 'ravioli al vapore con verdure e carne',prezzo: 5.40, img: ravioli.png},
      // {id:5, name: 'ravioli al vapore con verdure e carne',prezzo: 5.40, img: ravioli.png},
      // {id:6, name: 'ravioli al vapore con verdure e carne',prezzo: 5.40, img: ravioli.png},
      // {id:7, name: 'ravioli al vapore con verdure e carne',prezzo: 5.40, img: ravioli.png},
      // {id:8, name: 'ravioli al vapore con verdure e carne',prezzo: 5.40, img: ravioli.png},
    ],
       
  }
  Fmeno = card =>{
    const cards =[...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].q--;
    this.setState({cards});
  }
  Fpiu = card =>{
    const cards =[...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].q++;
    this.setState({cards});
  }
  render() {
    return (
      <>
        <NavBar />
        <div className="container ">
          <h1>Cosa vuoi ordinare?</h1>
          <p className="fs-1">Sushi</p>
          
          <p className="fs-1">Primi</p>
          <div className="row">
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                card={card}
                q={card.q}
                meno={this.Fmeno}
                piu={this.Fpiu} 
                />
            ))}
          
          </div>
        </div>
      </>
    );
  }
}

export default App;
