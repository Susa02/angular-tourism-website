import { Component } from '@angular/core';
import { ReactiveLoginComponent } from "../../components/reactive-login/reactive-login.component";

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
    imports: [ReactiveLoginComponent]
})
export class AuthComponent {

}
