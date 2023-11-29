import type { AlreadyPlayed } from '@/types/AlreadyPlayed';
import type { CreateQuizz } from '@/types/CreateQuizz';
import { HttpClient } from '@/services/HttpClient';
import type { Score } from '@/types/Score';
import type { UpdateScore } from '@/types/UpdateScore';
import type { UpdateStars } from '@/types/UpdateStars';

export class QuizzService {
  private http: HttpClient;

  constructor() {
    this.http = new HttpClient();
  }

  public createQuizz = async (data: CreateQuizz) => {
    const formData = new FormData();
    if (data.thumbnail) {
      formData.append('image', data.thumbnail, 'thumbnail.png');
    }
    const dataCopy = { ...data };
    delete dataCopy.thumbnail;
    formData.append('data', JSON.stringify(dataCopy));
    const quizz = await this.http.instance.post('/quizz/create', formData, {
      headers: { ContentType: 'multipart/form-data' },
    });
    return quizz;
  };

  public getAll = async (filter: any) => {
    return await this.http.instance.get('/quizz', { params: filter });
  };

  public getByTheme = async (theme: string) => {
    return await this.http.instance.get(`/quizz/themes/${theme}`);
  };

  public getById = async (id: number) => {
    return await this.http.instance.get(`/quizz/${id}`);
  };

  public getByRecent = async () => {
    return await this.http.instance.get('/quizz/recent');
  };

  public getTrending = async () => {
    return await this.http.instance.get('/quizz/trending');
  };

  public publishScore = async (data: Score) => {
    console.log(data)
    return await this.http.instance.post('score/publish', data);
  };

  public updateScore = async (data: UpdateScore) => {
    console.log(data)
    return await this.http.instance.put('score/update', data);
  };

  public updateStars = async (data: UpdateStars) => {
    return await this.http.instance.put('score/stars', data);
  };

  public alreadyPlayed = async (data: AlreadyPlayed) => {
  console.log(data)
    return await this.http.instance.get(
      `score/played/${data.quizz}/${data.user}`
    );
  };

  public getScoresByUserId = async (id: number) => {
    return await this.http.instance.get(`/score/id/${id}`);
  };
}
