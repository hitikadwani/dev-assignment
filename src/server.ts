// src/server.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Puja API is running!');
});

// Search route
app.get('/api/puja/search', function(req, res) {
  (async () => {
    try {
      const query = req.query.query as string;
      
      if (!query) {
        return res.status(400).json({ message: 'Search query is required' });
      }
      
      const pujas = await prisma.puja.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: 'insensitive' } },
            { tag: { contains: query, mode: 'insensitive' } },
            { location: { contains: query, mode: 'insensitive' } }
          ]
        }
      });
      
      res.json(pujas);
    } catch (error) {
      console.error('Search error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  })();
});

// Get puja by date
app.get('/api/puja/date/:date', function(req, res) {
  (async () => {
    try {
      const { date } = req.params;
      const pujas = await prisma.puja.findMany({
        where: { date }
      });
      res.json(pujas);
    } catch (error) {
      console.error('Error fetching pujas by date:', error);
      res.status(500).json({ message: 'Server error' });
    }
  })();
});

// Get all pujas
app.get('/api/puja', function(req, res) {
  (async () => {
    try {
      const pujas = await prisma.puja.findMany();
      res.json(pujas);
    } catch (error) {
      console.error('Error fetching all pujas:', error);
      res.status(500).json({ message: 'Server error' });
    }
  })();
});

// Get puja by ID
app.get('/api/puja/:id', function(req, res) {
  (async () => {
    try {
      const { id } = req.params;
      const puja = await prisma.puja.findUnique({
        where: { id }
      });
      
      if (!puja) {
        return res.status(404).json({ message: 'Puja not found' });
      }
      
      res.json(puja);
    } catch (error) {
      console.error('Error fetching puja:', error);
      res.status(500).json({ message: 'Server error' });
    }
  })();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});