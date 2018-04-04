import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SearchService } from './../services/search.service';

@Component({
  selector: 'app-search-repositories',
  templateUrl: './search-repositories.component.html',
  styleUrls: ['./search-repositories.component.css']
})
export class SearchRepositoriesComponent implements OnInit {

  ngOnInit() {
  }

   /**
   * Variables 
   * @var username // Variable de control de NgModel
   * @var status // Variable de estado para mostrar contenido de count y repositories
   * @var countRepositories //Variable de conteo total de repositorios
   * @var respositories //Variable de objeto para asignar los repositorios del usuario
   */
  username: FormControl;
  status = false;
  countRepositories = 0;
  repositories = [];

  /**
   * 
   * @param searchService 
   */
  constructor(private searchService: SearchService) { 
  }

  /**
   * Método para validar nuestro search input y ocultar nuestras lista de repositorios.
   * @param username 
   */
  isValid(username) {
    if(username == '')
      this.status = false;
      this.repositories = null;
  }

  /**
   * Función para hacer la busqueda de repositorios en base al username.
   * Se hace una referencía a nuestro servicio pasando como parametro el control de @username .
   * Como resultado tenemos un objeto, el cual asignamos a nuestras variables.
   */
  search(){
    this.searchService.getSearch(this.username).subscribe(
      (result) => { 
        this.status = true;
        this.countRepositories = result.length;
        this.repositories = result;
      },
      (error) =>{
        console.error(error);
      })
  }
}
