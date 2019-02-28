import { Component, OnInit, ViewChild } from '@angular/core';
import { NbSidebarComponent } from '@nebular/theme/components/sidebar/sidebar.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @ViewChild('sideBar') sideBar: NbSidebarComponent;

  constructor() { }

  ngOnInit() {
  }

}
