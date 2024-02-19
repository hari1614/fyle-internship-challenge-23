import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchProfile: any = 'johnpapa'; // 'johnpapa'
  profile: any= {};
  repositories: any = [];
  perPage: Number = 10;
  current: Number = 1;
  total: Number = 100;
  constructor(
    private apiService: ApiService
  ) {}

  search(){
    this.getProfile()
  }

  getProfile(){
    this.apiService.getUser(this.searchProfile).subscribe(data => {
      this.profile= data;
      this.getRepo()
    });
  }

  getRepo(){
    this.apiService.getRepo(this.searchProfile, this.perPage, this.current).subscribe(data => {
      this.repositories= data;
    });
  }

  currentPage(page: any){
    this.current = page
    this.getRepo()
  }

}
