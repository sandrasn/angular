import { Component, OnInit } from '@angular/core';
import { PostItem } from '../../shared/dto/post.item.model';
import { FeedService } from '../../shared/services/feed.service';
import { HelpersService } from '../../shared/services/helpers.service';
import { Router } from '@angular/router';

// injected by routing
@Component({
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  items:PostItem[];

  constructor(private feedService:FeedService,
  private helpersService: HelpersService,
private router:Router) { }

  ngOnInit():void {
    this.getFeed();
  }
  private getFeed():void{
    this.feedService.getFeed().subscribe(
      (response)=>{
        this.items = response.payload; 
      });
  }
}
