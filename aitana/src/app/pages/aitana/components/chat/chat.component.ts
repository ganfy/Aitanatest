import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  {env}  from '../../../../../environments/environment';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set } from 'firebase/database';


@Component({
  selector: 'aitana-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent implements OnInit {
  messages: { text: string, user: string }[] = [];
  userMessage: string = '';
  canSendMessage: boolean = true;
  private database: any;

  @ViewChild('chatContainer', { static: false }) chatContainer!: ElementRef;

  ngOnInit() {
      // Inicializa Firebase
      const app = initializeApp(env.firebaseConfig);
      this.database = getDatabase(app);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.userMessage.trim() && this.canSendMessage) {

      this.canSendMessage = false;

      this.messages.push({ text: this.userMessage, user: 'user' });
      console.log(this.messages);
      this.actualizarMensaje(this.userMessage);

      this.recibirMsj();
      
      this.userMessage = '';
    }
  }

  generateAitanaResponse(message: string): string {
    // Aquí puedes personalizar la respuesta si lo necesitas
    return message;  // Esto retornará el mensaje original
  }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('No se pudo hacer scroll:', err);
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Recibir mensaje desde Firebase
  private async recibirMsj() {
    const respuestaRef = ref(this.database, 'respuesta');
    
    get(respuestaRef).then((snapshot) => {
      if (snapshot.exists()) {
        const mensaje = snapshot.val().anwser; // Cambia 'answer' por la clave que estás buscando
        //const mensaje = "Hola"; // Cambia 'answer' por la clave que estás buscando
        console.log("Mensaje:", mensaje);
        // Agrega la respuesta de Aitana a los mensajes
        this.messages.push({ text: this.generateAitanaResponse(mensaje), user: 'aitana' });
        
        this.canSendMessage = true;

      } else {
        console.log("No hay datos disponibles");
      }
    }).catch((error) => {
      console.error("Error al obtener los datos:", error);
      this.canSendMessage = true;
    });
  }

  // Función para actualizar mensaje en Firebase
  private actualizarMensaje(msj: string) {
    const mensajeRef = ref(this.database, 'mensaje');
    set(mensajeRef, {
      msg: msj,
      Flag: true
    }).then(() => {
      console.log("Mensaje actualizado correctamente.");
    }).catch((error) => {
      console.error("Error al actualizar el mensaje:", error);
    });
  }
}
