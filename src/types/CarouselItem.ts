import type { Quizz } from "./Quizz";

// export interface CarouselItem extends Quizz{
//        index: number
// }

export type CarouselItem = Quizz & {index: number}