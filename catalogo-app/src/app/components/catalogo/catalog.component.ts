import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';
import { GameCardComponent } from '../game-card/game-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  standalone: true,
  imports: [GameCardComponent, FormsModule]
})
export class CatalogComponent implements OnInit {

  // 1. Tu lista principal de juegos
  myGames: Game[] = [];

  // 2. Tu molde para el formulario de agregar
  newGame: Game = {
    id: '',
    title: '',
    description: '',
    category: '',
    progressState: 'Pendiente'
  };

  // --- AQUÍ VA LO DEL BUSCADOR ---
  searchText: string = '';

  get filteredGames(): Game[] {
    return this.myGames.filter(game =>
      game.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      game.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  // -------------------------------

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.myGames = this.gameService.getGames();
  }

  onAddGame() {
    if (!this.newGame.title) return;

    this.newGame.id = crypto.randomUUID();
    this.gameService.addGame({ ...this.newGame });

    this.myGames = this.gameService.getGames();

    // Aquí cerramos correctamente la limpieza del formulario
    this.newGame = {
      id: '',
      title: '',
      description: '',
      category: '',
      progressState: 'Pendiente'
    };
  }

  // --- FUNCIÓN PARA BORRAR YA SEPARADA ---
  onDeleteGame(id: string) {
    // 1. Le decimos al servicio que lo borre de los datos guardados
    this.gameService.deleteGame(id);

    // 2. Refrescamos la lista en pantalla para que la tarjeta desaparezca al instante
    this.myGames = this.gameService.getGames();
  }

}
