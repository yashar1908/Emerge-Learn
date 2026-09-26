from langgraph.graph import StateGraph, START, END
from .state import AgentState
from .nodes import tutor_node

def create_graph():
    # 1. Initialize the graph with our State schema
    workflow = StateGraph(AgentState)
    
    # 2. Add our node to the graph
    # The first argument "tutor" is just a string name we give the node.
    workflow.add_node("tutor", tutor_node)
    
    # 3. Define the edges (The Flow)
    # Start -> Tutor -> End
    workflow.add_edge(START, "tutor")
    workflow.add_edge("tutor", END)
    
    # 4. Compile the graph into a runnable application
    return workflow.compile()

# We expose the compiled graph so other files can import and run it
app = create_graph()