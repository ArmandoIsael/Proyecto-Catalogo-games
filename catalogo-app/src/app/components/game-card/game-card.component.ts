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

  @Output() deleteGameEvent = new EventEmitter<string>();

  onDelete() {
    this.deleteGameEvent.emit(this.game.id);
  }
}
