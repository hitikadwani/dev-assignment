# 📿 Puja API Server

A **Node.js + Express** backend API for the **DevDham Puja** websitethat serves information about Hindu pujas, festivals, and ceremonies.This implementation uses PostgreSQL and Prisma ORM.

---

## ✨ Features

- 🔍 Search for pujas by **title**, **tag**, or **location**  
- 📅 Get pujas by **specific date**  
- 📃 Fetch a list of **all available pujas**  
- 📖 Get detailed information about a **specific puja**

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **Postgres (Neon.tech)**
- **Mongoose ODM**
- **CORS middleware**

---





## Running the Application

 

### Step 1: Start the server:


```bash
npm start
```
For development with auto-restart:
```bash
npm run dev
```

### Step 2: Seed the database with initial data:
```bash
npx prisma db seed
``` 




## API Endpoints

### Search for Pujas

```bash
GET /api/puja/search?query={searchTerm}
```

Search for pujas by title, tag, or location

### Get Pujas by Date
```bash
GET /api/puja/date/{date}
```
Get all pujas for a specific date (format: YYYY-MM-DD)


### Get All Pujas
```bash
GET /api/puja
```
Get all available pujas

### Get Puja by ID
```bash
GET /api/puja/{id}
```
Get detailed information about a specific puja

### Example API Response

```bash
{
  "id": "2ccaea6e-cdc5-4501-af85-c3f3471182c3",
  "title": "Akshaya Tritiya Puja",
  "tag": "Akshaya Tritiya",
  "date": "2025-05-10",
  "location": "Shaktipeeth Mahalaxmi Kolhapur",
  "benefits": "Considered highly auspicious for new beginnings, wealth generation, and long-term prosperity.",
  "description": "Akshaya Tritiya is one of the most auspicious days in the Hindu calendar. 'Akshaya' means imperishable or eternal - that which never diminishes. Performing puja on this day is believed to bring unending prosperity."
}
```


