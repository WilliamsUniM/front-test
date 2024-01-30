import React, { Component } from 'react';
import Header from './header';

export default class Poke extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nameSearch: "",
            cards: []
        }
    }

    searchPokes = () => {
        if (this.state.nameSearch.length > 2) {
            fetch('https://beta.pokeapi.co/graphql/v1beta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `\nquery samplePokeAPIquery {\n  pokename: pokemon_v2_pokemon(where: {name: {_iregex: "${this.state.nameSearch}"}}) {\n    name\n    id\n    pokemon_v2_pokemonsprites {\n      sprites(path: "front_default")\n    }\n    pokemon_v2_pokemontypes {\n      pokemon_v2_type {\n        name\n      }\n    }\n  }\n}\n`,
                    variables: null,
                    operationName: 'samplePokeAPIquery'
                }),
            })
                .then(r => r.json())
                .then(r => {
                    console.log(r)
                    this.setState({ nameSearch: "", cards: r.data.pokename })
                })
                .catch(err => {
                    console.log("ERROR: ", err)
                })
        } else {
            alert("Minimo 3 caracteres")
        }
    }

    render() {
        const cardsr = this.state.cards?.map(element => {
            let nameP = element.name
            let num = element.id
            let type = element.pokemon_v2_pokemontypes[0].pokemon_v2_type.name
            let image = element.pokemon_v2_pokemonsprites[0].sprites
            nameP = nameP.charAt(0).toUpperCase() + nameP.slice(1);
            type = type.charAt(0).toUpperCase() + type.slice(1);
            return <div class="col">
                <div class="card shadow-sm">
                    <img src={image} width="100%" height="200" alt={nameP} title={nameP} />
                    <div class="card-body">
                        <p class="card-text">{nameP}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-body-secondary">{type}</small>
                            <small class="text-body-secondary">Num {num}</small>
                        </div>
                    </div>
                </div>
            </div>
        });
        return (
            <div>
                <div className='py-5 text-center container'>
                    <div className='col-lg-6 col-md-8 mx-auto'>
                        <h2>BUSCA TU POKEMON</h2>
                        <input value={this.state.nameSearch} type="text" placeholder='Ingrese nombre pokemon' onChange={ev => this.setState({ nameSearch: ev.target.value })} />
                        <p></p>
                        <button className="btn btn-outline-secondary my-2" onClick={this.searchPokes}>BUSCAR</button>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 row-cols-md-5 g-3">
                    {cardsr}
                </div>
            </div>
        )
    }
}