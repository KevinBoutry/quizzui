import type { Item } from "./Item";

export type CreateQuizz =  {
    items : Item[],
     user: number,
     name: string,
     timer: number,
     theme: string,
     type: string,
     description: string,
     thumbnail: Blob|undefined,
     textColor: string,
     backgroundColor: string,
     showTitle: boolean,
     public: boolean,
    }