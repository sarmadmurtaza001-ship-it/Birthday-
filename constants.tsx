
import { Question, Memory } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Where did we first start talking?",
    options: ["TikTok", "WhatsApp", "Through a Game", "Dating App"],
    correctAnswer: "TikTok"
  },
  {
    id: 2,
    question: "What's my favorite thing about you?",
    options: ["Your Voice", "Your Kindness", "Your Intelligence", "Everything"],
    correctAnswer: "Everything"
  },
  {
    id: 3,
    question: "What are we doing first when we finally meet?",
    options: ["A Long Hug", "Coffee Date", "Walk in the Park", "Just Staring at You"],
    correctAnswer: "A Long Hug"
  }
];

export const MEMORIES: Memory[] = [
  { url: "https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?auto=format&fit=crop&q=80&w=600", caption: "Our very first video call." },
  { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600", caption: "The countless hours spent texting." },
  { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600", caption: "Sending you songs that remind me of you." },
  { url: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=600", caption: "Planning our future together." },
  { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600", caption: "Late night talks until sunrise." },
  { url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=600", caption: "The day we count down to." }
];
