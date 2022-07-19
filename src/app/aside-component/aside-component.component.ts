import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogsServiceService } from '../blogs-service.service';


@Component({
  selector: 'app-aside-component',
  templateUrl: './aside-component.component.html',
  styleUrls: ['./aside-component.component.css']
})
export class AsideComponentComponent implements OnInit {

  status: any = '';
  value: any = '';
  total: any;
  tech: any;
  life: any;
  food: any;
  entertainment: any;
  sports: any;
  fitness: any;
  music: any;
  travel: any;

  constructor(private httpService: BlogsServiceService) { }

  ngOnInit(): void {

    this.httpService.getBlog().subscribe(data => {

      this.status = data;
      this.status.reverse();
      // this.status;

      this.total = this.status.length;
      this.tech = this.status.filter(x => x.category === 'Technology').length;
      this.life = this.status.filter(x => x.category === 'Lifestyle').length;
      this.food = this.status.filter(x => x.category === 'Food').length;
      this.entertainment = this.status.filter(x => x.category === 'Entertainment').length;
      this.sports = this.status.filter(x => x.category === 'Sports').length;
      this.fitness = this.status.filter(x => x.category === 'Fitness').length;
      this.music = this.status.filter(x => x.category === 'Music').length;
      this.travel = this.status.filter(x => x.category === 'Travel').length;

      // console.log('Number of required:', filtered);
      // this.status.splice(0, 2)
    })

  }

}

