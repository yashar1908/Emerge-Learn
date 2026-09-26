import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AiAssistantService } from '../../services/ai-assistant';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-chat-window',
  styleUrl: './chat-window.less',
  templateUrl: './chat-window.html',
})
export class ChatWindow {

  private readonly aiAssistantService = inject(AiAssistantService);

  messageInput = '';

  messages: ChatMessage[] = [];

  isLoading = false;

  sendMessage(): void {
    const message = this.messageInput.trim();

    if (!message || this.isLoading) {
      return;
    }

    this.messages.push({
      role: 'user',
      content: message,
    });

    this.messageInput = '';

    this.isLoading = true;

    this.aiAssistantService.sendMessage(message).subscribe({
      next: (response) => {
        this.messages.push({
          role: 'assistant',
          content: response.message,
        });

        this.isLoading = false;
      },

      error: (error) => {
        console.error('AI assistant request failed:', error);

        this.messages.push({
          role: 'assistant',
          content: 'Something went wrong while connecting to Emerge. Please try again.',
        });

        this.isLoading = false;
      },
    });
  }
}