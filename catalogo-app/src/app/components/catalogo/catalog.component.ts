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

  myGames: Game[] = [];

  newGame: Game = {
    id: '',
    title: '',
    description: '',
    category: '',
    progressState: 'Pendiente'
  };

  searchText: string = '';

  get filteredGames(): Game[] {
    return this.myGames.filter(game =>
      game.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      game.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.myGames = this.gameService.getGames();
  }

  onAddGame() {
    if (!this.newGame.title) return;

    this.newGame.id = crypto.randomUUID();
    this.gameService.addGame({ ...this.newGame });

    this.myGames = this.gameService.getGames();

    this.newGame = {
      id: '',
      title: '',
      description: '',
      category: '',
      progressState: 'Pendiente'
    };
  }


  onDeleteGame(id: string) {

    this.gameService.deleteGame(id);

  
    this.myGames = this.gameService.getGames();
  }

}
