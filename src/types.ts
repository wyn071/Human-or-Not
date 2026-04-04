export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type GameMode = 'Standard' | 'Timed';
export type ExhibitType = 'text' | 'image';
export type Origin = 'human' | 'ai';

export interface Exhibit {
  id: string;
  type: ExhibitType;
  origin: Origin;
  content: string; // text content or image URL
  headline: string;
  deskNote: string;
  source: string;
  hint: string;
  difficulty: Difficulty;
}

export interface GameState {
  screen: 'landing' | 'playing' | 'feedback' | 'results';
  difficulty: Difficulty;
  mode: GameMode;
  currentExhibitIndex: number;
  score: number;
  correctCount: number;
  history: { exhibitId: string; guess: Origin; correct: boolean }[];
  timeLeft: number;
  isGameOver: boolean;
}

export type Rank = {
  title: string;
  description: string;
  minScore: number;
};
