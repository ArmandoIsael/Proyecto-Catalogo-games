import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private storageKey = 'myGameCollection';

  constructor() {
    this.initDefaultData();
  }

  private initDefaultData() {
    const existingData = localStorage.getItem(this.storageKey);
    if (!existingData) {
      const initialGames: Game[] = [
        {
          id: crypto.randomUUID(),
          title: 'Resident Evil Village',
          description: 'Supervivencia, terror y lycans en un pueblo remoto.',
          category: 'Survival Horror',
          progressState: 'Completado'
        },
        {
          id: crypto.randomUUID(),
          title: 'Dark Souls',
          description: 'Fantasía oscura y mecánicas de castigo implacable.',
          category: 'Soulslike',
          progressState: 'Jugando'
        },
        {
          id: crypto.randomUUID(),
          title: 'Blasphemous',
          description: 'Acción y plataformas con un denso lore en Cvstodia.',
          category: 'Metroidvania',
          progressState: 'Pendiente'
        }
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(initialGames));
    }
  }

  getGames(): Game[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addGame(newGame: Game): void {
    const games = this.getGames();
    games.push(newGame);
    localStorage.setItem(this.storageKey, JSON.stringify(games));
  }

  deleteGame(id: string): void {
    const games = this.getGames();

    const updatedGames = games.filter(game => game.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedGames));
  }
}
