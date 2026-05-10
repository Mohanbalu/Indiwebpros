import type { VercelRequest, VercelResponse } from '@vercel/node';
import { saveToDatabase } from '../src/lib/database.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
      console.error("Database sync failed:", result.error);
      return res.status(500).json({ 
        success: false, 
        sync: false,
        error: result.error 
      });
    }

    return res.status(200).json({ 
      success: true, 
      sync: true
    });
  } catch (error: any) {
    console.error("Critical error in /api/contact:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Internal Server Error", 
      message: error.message
    });
  }
}
