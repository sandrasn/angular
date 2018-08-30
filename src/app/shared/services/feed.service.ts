import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { HelpersService } from './helpers.service';
import { PostItem } from '../dto/post.item.model';
import { Response } from '../DTO/response.model';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(//private userService: UserService,
    private http: HttpClient,
    private helpersService: HelpersService,
  ) { }
    getFeed():Observable<Response<PostItem[]>> {
      return this.http.get<Response<PostItem[]>>( environment.getFeedUrl)
        .pipe(
          catchError(this.helpersService.handleError('get feed'))
        );
    }
    getPost(id):Observable<Response<PostItem>> {
      return this.http.get<Response<PostItem>>( environment.getPostUrl+ id)
        .pipe(
          catchError(this.helpersService.handleError('get feed item'))
        );
      }
}
