import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class GameCardComponent {
  @Input() game!: Game;

  // Esto es lo que faltaba: El emisor de eventos que envía texto (string)
  @Output() deleteGameEvent = new EventEmitter<string>();

  // Esta es la función que se dispara al presionar la 'X'
  onDelete() {
    this.deleteGameEvent.emit(this.game.id);
  }
}
