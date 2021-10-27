import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ojasRestorent } from 'src/ojasRestorent';
import { RestorentService } from '../restorent.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css'],
})
export class ViewItemsComponent implements OnInit {
  items: Observable<ojasRestorent[]> | undefined;
  RestorentService: ojasRestorent[] = [];
  constructor(
    private restorentService: RestorentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.items = this.restorentService.getItems();
  }
  deleteItems(id: number) {
    this.restorentService.deleteItems(id).subscribe(
      (data: any) => {
        console.log(data);
        this.reloadData();
      },
      (error: any) => console.log(error)
    );
  }
}

