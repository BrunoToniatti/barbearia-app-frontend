import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Appointment {
  id: number;
  clientName: string;
  time: string;
  service: string;
  price: number;
  status: 'pending' | 'completed' | 'missed';
  date: string;
}

@Component({
  selector: 'app-appointments',
  imports: [CommonModule, FormsModule],
  templateUrl: './appointments.html',
  styleUrl: './appointments.scss'
})
export class Appointments implements OnInit {
  selectedDate: string = '';
  selectedStatus: string = '';
  appointments: Appointment[] = [];
  filteredAppointments: Appointment[] = [];
  isProfileMenuOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.initializeData();
    this.setTodayAsDefault();
    this.filterAppointments();

    // Fechar dropdown quando clicar fora
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.profile-container')) {
        this.isProfileMenuOpen = false;
      }
    });
  }

  private initializeData() {
    // Dados mockados para demonstração
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    this.appointments = [
      {
        id: 1,
        clientName: 'João Silva',
        time: '09:00',
        service: 'Corte + Barba',
        price: 45.00,
        status: 'pending',
        date: today
      },
      {
        id: 2,
        clientName: 'Pedro Santos',
        time: '10:30',
        service: 'Corte Degradê',
        price: 35.00,
        status: 'completed',
        date: today
      },
      {
        id: 3,
        clientName: 'Carlos Oliveira',
        time: '14:00',
        service: 'Barba',
        price: 25.00,
        status: 'pending',
        date: today
      },
      {
        id: 4,
        clientName: 'Roberto Lima',
        time: '15:30',
        service: 'Corte Social',
        price: 30.00,
        status: 'missed',
        date: today
      },
      {
        id: 5,
        clientName: 'Antonio Costa',
        time: '16:00',
        service: 'Corte + Barba',
        price: 45.00,
        status: 'pending',
        date: today
      },
      {
        id: 6,
        clientName: 'Fernando Alves',
        time: '09:00',
        service: 'Corte Moderno',
        price: 40.00,
        status: 'pending',
        date: tomorrow
      }
    ];
  }

  private setTodayAsDefault() {
    this.selectedDate = new Date().toISOString().split('T')[0];
  }

  filterAppointments() {
    this.filteredAppointments = this.appointments.filter(appointment => {
      const matchesDate = !this.selectedDate || appointment.date === this.selectedDate;
      const matchesStatus = !this.selectedStatus || appointment.status === this.selectedStatus;
      return matchesDate && matchesStatus;
    });

    // Ordenar por horário
    this.filteredAppointments.sort((a, b) => a.time.localeCompare(b.time));
  }

  updateAppointmentStatus(appointmentId: number, newStatus: 'completed' | 'missed') {
    const appointment = this.appointments.find(app => app.id === appointmentId);
    if (appointment) {
      appointment.status = newStatus;
      this.filterAppointments();
    }
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  openSettings(event: Event) {
    event.stopPropagation();
    this.isProfileMenuOpen = false;
    // Implementar navegação para configurações
    console.log('Abrindo configurações...');
    // this.router.navigate(['/settings']);
  }

  logout(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.isProfileMenuOpen = false;
    // Implementar logout (limpar sessão, etc.)
    this.router.navigate(['/login']);
  }
}
