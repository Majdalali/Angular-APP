import { Component, OnInit } from '@angular/core';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PAGENOTFOUNDComponent implements OnInit {
  faRobot = faRobot;
  constructor() { }

  ngOnInit() {
  }

}
