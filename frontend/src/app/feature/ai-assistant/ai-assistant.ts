import { Component } from '@angular/core';
import { ChatWindow } from './components/chat-window/chat-window';

@Component({
  selector: 'app-ai-assistant',
  imports: [ChatWindow],
  templateUrl: './ai-assistant.html',
  styleUrl: './ai-assistant.less',
})
export class AiAssistant {}