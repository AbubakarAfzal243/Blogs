import { Component, OnInit , Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() searchcriteria = new EventEmitter<String>();

  searchword;
  
  searchtt : any ="HEllonasdc a";

  constructor() { }

  ngOnInit(): void {
  }

}
