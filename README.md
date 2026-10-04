<div align="center">

# Full Stack Challenge — Zoox

**Full-stack CRUD application for managing Brazilian states and cities.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)

</div>

---

## Overview

This repository contains a full-stack technical challenge implemented with a separated frontend and backend.

The application manages **states (`Estado`)** and **cities (`Cidade`)**, exposing CRUD operations through a REST API and consuming them from an Angular interface.

Although this is an older project, it is kept public as part of my engineering history because it demonstrates an early use of TypeScript across both sides of the stack, explicit repository abstractions and use-case-oriented backend organization.

## Architecture

```text
Angular 11
   │
   │ HTTP
   ▼
Express + TypeScript
   │
   ├── Routes
   ├── Controllers / Use Cases
   ├── Repository interfaces
   ▼
Mongoose
   │
   ▼
MongoDB
```

Backend responsibilities are separated into:

- `entities/` — domain entities;
- `routes/` — HTTP endpoints;
- `useCase/` — create/list/update/delete application flows;
- `repositories/` — persistence contracts and implementations.

## API

The backend exposes CRUD routes for states and cities.

### States

```http
POST   /estado
GET    /estado
GET    /estado/:id
PUT    /estado/:id
DELETE /estado/:id
```

### Cities

```http
POST   /cidade
GET    /cidade
GET    /cidade/:id
PUT    /cidade/:id
DELETE /cidade/:id
```

## Stack

### Frontend

- Angular 11
- TypeScript
- Bootstrap / ngx-bootstrap
- RxJS

### Backend

- Node.js
- TypeScript
- Express
- Mongoose
- MongoDB
- dotenv

## Repository structure

```text
.
├── backend/
│   └── src/
│       ├── common/
│       ├── entities/
│       ├── repositories/
│       ├── routes/
│       └── useCase/
└── frontend/
    └── src/app/
        ├── components/
        └── services/
```

## Running the backend

Create a `.env` file from `example.env` and configure:

```env
PORT=3000
USER_DB=user
PASS_DB=secret
HOST_BD=xxxx.host.mongodb.net
NAME_BD=zoox
```

Install and start:

```bash
cd backend
npm install
npm start
```

## Running the frontend

Point the frontend environment configuration to the backend port, then:

```bash
cd frontend
npm install
npm start
```

## What this project demonstrates

- end-to-end TypeScript development;
- REST API design;
- CRUD workflows;
- repository abstraction;
- separation between transport, use cases and persistence;
- Angular service/component integration;
- MongoDB persistence with Mongoose.

## Status

**Historical portfolio project.**

Dependencies reflect the period in which the challenge was implemented and are intentionally not presented as my current preferred stack.

---

<div align="center">

Developed by **Denner Fernandes**

</div>
