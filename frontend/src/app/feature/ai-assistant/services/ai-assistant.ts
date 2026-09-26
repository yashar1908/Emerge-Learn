import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AiAssistantService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8000/api/assistant/chat';

  sendMessage(message: string): Observable<ChatResponse> {
    const request: ChatRequest = {
      message,
    };

    return this.http.post<ChatResponse>(this.apiUrl, request);
  }
}