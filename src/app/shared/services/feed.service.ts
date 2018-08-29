import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { HelpersService } from '../services/helpers.service';
import { PostItem } from '../dto/post.item.model';
import { Response } from '../dto/response.model';
import { catchError } from 'rxjs/operators';
import { Observable } from '../../../../node_modules/rxjs';
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
}
