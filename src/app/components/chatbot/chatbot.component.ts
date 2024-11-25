import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages = [
    { role: 'bot', content: 'Bonjour ! Je suis votre assistant médical. Comment puis-je vous aider aujourd\'hui ?' }
  ];
  input = '';

  handleSend() {
    if (!this.input.trim()) return;

    // Add user message
    this.messages.push({ role: 'user', content: this.input });
    
    // Simulate bot response
    setTimeout(() => {
      this.messages.push({
        role: 'bot',
        content: 'Je comprends votre préoccupation. Voici quelques informations qui pourraient vous être utiles...'
      });
    }, 1000);

    this.input = '';
  }
}
