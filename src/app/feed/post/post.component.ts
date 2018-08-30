import { Component, OnInit } from '@angular/core';
import { PostItem } from '../../shared/dto/post.item.model';
import { FeedService } from '../../shared/services/feed.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bc-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
data:PostItem ;
  constructor(private feedService: FeedService,
  private route: ActivatedRoute,
private router:Router) { }

  ngOnInit() {
    this.getPost();
  }
  private getPost():void{
    const id = this.route.snapshot.paramMap.get('id');
    //this getPost function is located in services, in this case we have to change this function in services, to make that it expects arguments
    this.feedService.getPost(id).subscribe(
      (response)=>{
        this.data = response.payload; 
      });
  }

}
