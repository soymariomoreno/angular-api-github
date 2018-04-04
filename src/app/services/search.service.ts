import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface Search {};

@Injectable()
export class SearchService
{
   /**
    * Url service Api Github
    */
    public api = 'https://api.github.com/users';

    /**
     * 
     * @param http 
     */
    constructor( private http: HttpClient ) {
        console.log('Api github services');
    }

    /**
     * 
     * @param search 
     */
    getSearch(search): Observable<Search[]>{
        return this.http.get<Search[]>(`${this.api}/${search}/repos`);
    }
    
}
