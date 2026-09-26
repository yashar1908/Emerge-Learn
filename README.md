# Personalized Learning Platform

> **Learning that adapts to the learner.**

## Mission

Traditional classrooms have to teach many students at the same pace, despite every student learning differently.

Some students grasp a concept immediately. Others need another explanation, more examples, more practice, or simply more time.

This project explores what happens when learning becomes **personalized, adaptive, and continuously aware of the learner**.

The platform is designed to understand a student's learning journey over time — their strengths, weaknesses, progress, confidence, and learning patterns — and use that context to provide a more personalized learning experience.

The goal is not to replace teachers.

The goal is to give every student something a classroom often cannot provide:

> **A learning experience that adapts to them.**

## Core Vision

```text
Student
   ↓
Learns
   ↓
Practices
   ↓
Gets assessed
   ↓
System understands strengths & weaknesses
   ↓
Learning experience adapts
   ↓
Student learns again
   ↺
```

Over time, the platform should build an evolving understanding of the learner and use it to determine **what they should learn, how they should learn it, and where they need help.**

## What It Explores

The platform will experiment with agentic AI capabilities such as:

* Personalized tutoring
* Syllabus-aware question answering
* RAG over prescribed study material
* Concept explanations
* Adaptive quizzes
* Mock tests
* Doubt solving
* Note generation
* Learning recommendations
* Strength and weakness identification
* Concept confidence tracking
* Personalized revision
* Student learning history

## Three Perspectives

### 🎓 Student

A personalized learning environment that can:

* Explain concepts in different ways
* Answer questions using prescribed material
* Generate quizzes and practice questions
* Identify weak concepts
* Recommend what to study next
* Track learning progress
* Help prepare for tests and exams

### 👨‍🏫 Teacher

A view into how individual students are progressing.

Teachers can eventually see:

* Student strengths and weaknesses
* Concept confidence
* Learning progress
* Assessment performance
* Areas requiring attention

The intention is to **augment the teacher's understanding of the classroom**, not replace the teacher.

### 🏫 School Administration

A higher-level view of learning across the school.

Potential capabilities include:

* Class-level performance
* Subject-level trends
* Curriculum progress
* Student engagement
* Areas requiring intervention

## Tech Stack

### Frontend

* Angular
* TypeScript

### Backend / AI

* Python
* Agentic AI / LLMs
* RAG
* LangGraph

### Database

* PostgreSQL

## High-Level Architecture

```text
                         ┌──────────────────┐
                         │      Student     │
                         └────────┬─────────┘
                                  │
                                  ↓
                         ┌──────────────────┐
                         │     Angular      │
                         │    Frontend     │
                         └────────┬─────────┘
                                  │
                                  ↓
                         ┌──────────────────┐
                         │  Python Backend  │
                         └────────┬─────────┘
                                  │
                                  ↓
                         ┌──────────────────┐
                         │  Agentic Layer   │
                         │   / LangGraph    │
                         └───────┬──────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              ↓                  ↓                  ↓
        Learning State         RAG              AI Agents
              │                  │                  │
              └──────────────────┼──────────────────┘
                                 ↓
                         ┌──────────────────┐
                         │    PostgreSQL    │
                         └──────────────────┘
```

## Project Status

🚧 **Early Development**

This project is being built as a learning-focused exploration of:

* Agentic AI
* Personalized learning systems
* RAG
* LangGraph
* LLM-powered applications
* Adaptive learning
* Angular
* Python
* PostgreSQL
* AI-assisted education

The initial implementation will focus on establishing the core personalized learning experience before expanding into the broader school, teacher, and administration ecosystem.

## Repository Structure

```text
personalized-learning/
│
├── frontend/          # Angular application
│
├── backend/           # Python backend and AI systems
│
├── docs/              # Architecture, research and project notes
│
├── README.md
└── .gitignore
```

## Guiding Principle

The platform is built around one simple idea:

> **Not every student needs the same explanation, the same practice, or the same amount of time.**

A learning system should understand that difference and adapt accordingly.

---

**Built to explore what personalized learning can look like when AI becomes an active part of the learning process.**
