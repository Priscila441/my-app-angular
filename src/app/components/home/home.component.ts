import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { UserTableComponent } from '../user-table/user-table.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserTableComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
  

})
export class HomeComponent implements OnInit {
  users: any[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
