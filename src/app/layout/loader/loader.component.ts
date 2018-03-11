import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  private isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }

  ngOnInit() {
  }

}
