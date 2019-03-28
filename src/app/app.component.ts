import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // un'istanza di FormGroup per ora solo dichiarata
  form: FormGroup;

  // queste sono le opzioni per ora solo dichiarate, ma che dovrò usare quando avrò digitato
  remoteOptions: any[];

  cibi: string[] = ['Zucchine', 'Arrosticini', 'Pane', 'Gelato'];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.buildForm();
  }

  /**
   * Qui istanzio il {@link FormGroup}, ed è qui che assegno i validatori
   */
  buildForm(): void {
    this.form = this.fb.group({
      autocompleteField: [null, Validators.required],
      exampleCheckbox: [null, Validators.requiredTrue],
      exampleSelect: [null]
    });
  }

  /**
   * Questo metodo effettua la ricerca e popola il risultato
   * @param $event
   */
  search($event): void {
    const word = $event.target.value;
    this.http.get('https://jsonplaceholder.typicode.com/posts/')
    .subscribe((posts: any[]) => {
      /**
       * per velocità, non effettuo sull'URL il filtro ma una volta che
       * ho ricevuto i dati.
       */
      this.remoteOptions = posts.filter((post) => {
        return !!post.title.match(new RegExp(word, 'gi'));
      });

      // una volta popolato `remoteOptions` non dovrete più preoccuparvi di gestire
      // il flusso

    }, err => {
      // qui va gestito l'errore nella chiamata
    });
  }

}
