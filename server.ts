import express from "express";
import "dotenv/config";
import path from "path";
import fs from "fs";
import cors from "cors";
import { fileURLToPath } from "url";
import { saveToDatabase } from "./src/lib/database";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();
const PORT = 3000;

// Standard Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Router
const apiRouter = express.Router();

// Health Check
apiRouter.get("/health", (req, res) => {
  res.json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV,
    hasSupabase: !!(process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL)
  });
});

// API: Save Contact Form
apiRouter.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const date = new Date().toISOString();
    const result = await saveToDatabase({ 
      Date: date, 
      Source: 'Contact Form', 
      Name: name || 'Anonymous', 
      Email: email, 
      Message: message || '' 
    });
    
    if (!result.success) {
      console.error("Local sync failed:", result.error);
      return res.status(500).json({ 
        success: false, 
        sync: false,
        error: result.error 
      });
    }

    res.json({ 
      success: true, 
      sync: true
    });
  } catch (error: any) {
    console.error("Critical error in /api/contact:", error);
    res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
});

// API: Internship Application
apiRouter.post("/internship-apply", async (req, res) => {
  try {
    const data = req.body;
    if (!data.email) return res.status(400).json({ error: "Email is required" });

    const date = new Date().toISOString();
    
    console.log("Processing internship application for:", data.email);
    
    const result = await saveToDatabase({
      Date: date, 
      Source: 'Internship Application', 
      Name: data.fullName || 'Anonymous', 
      Email: data.email, 
      Phone: data.phone || '',
      WhatsApp: data.whatsapp || '',
      College: data.college || '', 
      Degree: data.degree || '', 
      Year: data.year || '', 
      Domain: data.domain || '',
      Skills: data.skills || '', 
      Reason: data.reason || ''
    });

    if (!result.success) {
      console.error("Local sync failed (Internship):", result.error);
      return res.status(500).json({ 
        success: false, 
        sync: false,
        error: result.error 
      });
    }

    res.json({ 
      success: true, 
      sync: true
    });
  } catch (error: any) {
    console.error("Critical error in /api/internship-apply:", error);
    res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
});

// API: Export CSV (Only local)
apiRouter.get("/export", (req, res) => {
  const CSV_FILE = path.join(process.cwd(), 'leads.csv');
  if (fs.existsSync(CSV_FILE)) {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=leads.csv');
    res.sendFile(CSV_FILE);
  } else {
    res.status(404).send("No leads found yet.");
  }
});

// Mount API router
app.use("/api", apiRouter);

// Global Error Handler for API
app.use((err: any, req: any, res: any, next: any) => {
  console.error("Global Error:", err);
  res.status(500).json({ error: "Critical Server Error", message: err.message });
});

// For local/non-serverless environments
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server starting on port ${PORT}...`);
    console.log(`Current Working Directory: ${process.cwd()}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
    
    const envKeys = Object.keys(process.env);
    const supabaseKeys = envKeys.filter(k => k.includes('SUPABASE'));
    console.log(`Available Supabase-related Env Vars: ${supabaseKeys.join(', ') || 'NONE'}`);
    
    if (process.env.SUPABASE_URL) console.log('SUPABASE_URL is set in process.env');
    if (process.env.SUPABASE_ANON_KEY) console.log('SUPABASE_ANON_KEY is set in process.env');
  });
}

startServer();
