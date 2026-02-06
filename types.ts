
export enum AppStage {
  INTRO = 'INTRO',
  QUIZ = 'QUIZ',
  CAKE = 'CAKE',
  GALLERY = 'GALLERY',
  QUOTES = 'QUOTES'
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Memory {
  url: string;
  caption: string;
}
