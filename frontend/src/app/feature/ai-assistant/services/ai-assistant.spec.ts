import { TestBed } from '@angular/core/testing';
import { AiAssistantService } from './ai-assistant';

describe('AiAssistant', () => {
  let service: AiAssistantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiAssistantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
