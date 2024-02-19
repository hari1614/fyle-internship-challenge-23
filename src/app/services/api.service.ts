import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  getRepo(githubUsername: string, perPage:any, current:any) {
    let headers = new HttpHeaders().set("X-GitHub-Api-Version", "2022-11-28");
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos?per_page=${perPage}&page=${current}`, );
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
