import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.http.get('https://pokeapi.co/api/v2/pokemon').subscribe(res => {
      let result =[];
      result = res['results'];
      this.pokemons = result;
      console.log(this.pokemons, result);
    });
  }

}
