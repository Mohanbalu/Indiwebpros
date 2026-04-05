import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import cors from "cors";
import bodyParser from "body-parser";

async function startServer() {
  const app = express();
  const PORT = 3000;
  const CSV_FILE = path.join(process.cwd(), 'leads.csv');

  app.use(cors());
  app.use(bodyParser.json());

  // Initialize CSV with headers if it doesn't exist
  if (!fs.existsSync(CSV_FILE)) {
    fs.writeFileSync(CSV_FILE, 'Date,Name,Email,Message\n');
  }

  // API: Save Contact Form to CSV
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    const date = new Date().toISOString();
    
    // Sanitize data for CSV (remove commas and newlines)
    const sanitize = (str: string) => str.replace(/,/g, ';').replace(/\n/g, ' ');
    const row = `${date},${sanitize(name)},${sanitize(email)},${sanitize(message)}\n`;
    
    fs.appendFileSync(CSV_FILE, row);
    console.log(`New lead saved: ${email}`);
    res.json({ success: true });
  });

  // API: Export CSV (Excel ready)
  app.get("/api/export", (req, res) => {
    if (fs.existsSync(CSV_FILE)) {
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=leads.csv');
      res.sendFile(CSV_FILE);
    } else {
      res.status(404).send("No leads found yet.");
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Export your leads at: http://localhost:${PORT}/api/export`);
  });
}

startServer();
