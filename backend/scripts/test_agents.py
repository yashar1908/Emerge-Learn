import os
import sys
from dotenv import load_dotenv

# 1. Load environment variables FIRST, before importing our graph
load_dotenv()

# 2. Error handling: Ensure the API key is present before continuing
if not os.getenv("GROQ_API_KEY"):
    print("ERROR: GROQ_API_KEY is not configured.")
    print("Please add it to your .env file before running the agent.")
    sys.exit(1)

# Ensure the 'app' module can be found by Python
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from langchain_core.messages import HumanMessage
from app.agent.graph import app  # Now we import this AFTER load_dotenv()

def main():
    print("Agent is ready! (Type 'quit' to exit)")
    print("-" * 40)
    
    while True:
        # Get input from the user
        user_input = input("\nYou: ")
        if user_input.lower() in ["quit", "exit", "q"]:
            break
            
        # Format the input for the graph
        initial_state = {
            "messages": [HumanMessage(content=user_input)]
        }
        
        try:
            # Execute the graph
            print("AI is thinking...")
            result = app.invoke(initial_state)
            
            # Extract the final response
            ai_message = result["messages"][-1].content
            
            print(f"\nAI: {ai_message}")
            print("-" * 40)
            
        except Exception as e:
            print(f"\nAn error occurred while calling the LLM: {e}")

if __name__ == "__main__":
    main()