import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, TableModule, InputTextModule, FormsModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {
  
  @Input() users: any[] = [];
  searchTerm: string = '';

  get filteredUsers() {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.address.city.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
