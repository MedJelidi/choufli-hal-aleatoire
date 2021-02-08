import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class YoutubeService {
  constructor(private httpClient: HttpClient) {
  }

  getVideo(q): Observable<any> {
    return this.httpClient.get<any>(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=${environment.YOUTUBE_KEY}`);
  }
}
