export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  progressState: 'Pendiente' | 'Jugando' | 'Completado';
  imageUrl?: string;
}

