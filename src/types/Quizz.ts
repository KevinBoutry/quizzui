import type { Category } from "./Category"

export type Quizz = {
    backgroundColor: string,
    categories: Category[],
    createdAt: Date,
    description: string,
    downvote: number,
    id: number,
    maxScore: number,
    name: string,
    public: boolean,
    showTitle: boolean,
    textColor: string,
    theme: string,
    timeplayed: number,
    timer: number,
    type: string,
    upvote: number,
    rating: number,
    averageScore : string
    thumbnail: Blob|undefined
}

