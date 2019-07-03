import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {

   usuariorecibido = '';
   passwrecibida = '';

  placeholders = {
    usernme: 'Escribe tu usuario',
    userpss: 'Introduce la contraseña'
  };

  constructor() {}

    recibirDatos(userform, passform) {
      this.usuariorecibido = userform.value;
      this.passwrecibida = passform.value;
    }



  ngOnInit() {
  }

}
