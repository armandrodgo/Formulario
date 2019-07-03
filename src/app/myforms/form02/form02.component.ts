import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.scss']
})
export class Form02Component implements OnInit {

  public user: User = new User();

  usuariorecibido = '';
  passwrecibida = '';

 placeholders = {
   usernme: 'Escribe tu usuario',
   userpss: 'Introduce la contraseña'
 };


  createUser(myform){
    this.user.setUsername = myform[0].value;
    this.user.setPassword = myform[1].value;
  }

  recibirDatos(userform, passform) {
     this.usuariorecibido = userform.value;
     this.passwrecibida = passform.value;
   }


   constructor() {}

  ngOnInit() {
  }

}
