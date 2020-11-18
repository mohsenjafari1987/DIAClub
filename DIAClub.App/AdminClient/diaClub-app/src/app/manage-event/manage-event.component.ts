import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.scss']
})
export class ManageEventComponent implements OnInit {

  constructor(private postService: PostService) { }

  allEvents: { id: string; title: string; }[];

  ngOnInit(): void {
    this.postService.getAllEvents().then((data: any) => {
      this.allEvents = data;
    });
  }
}
