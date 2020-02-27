import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {

  userName: string;
  // cach 1
  //userService: UserService;

  // cach 1
  // constructor() { 
  //   // 1. Dependency Injection use ReflectiveInjector (Constructor Injection)
  //   const injector : any = ReflectiveInjector.resolveAndCreate([UserService]);
  //   this.userService = injector.get(UserService);
  // }

  // cach 2
  // create Angular Module to inject singleton dependency( use command ng g m <module's name>)
  // It’s important to know that when we put the UserService on the constructor of the
  // UserDemoComponent, Angular knows what to inject (and how) **because we listed
  // UserService in the providers key of our NgModule
  constructor(private userService : UserService){

  }

  ngOnInit() {
  }

  signIn(){
    this.userService.setUser({
      name: 'Nate Murray'
    });

    this.userName = this.userService.getUser().name;

    console.log("hello, ", this.userName);
  }

}
