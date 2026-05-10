import type { VercelRequest, VercelResponse } from '@vercel/node';
import { saveToDatabase } from '../src/lib/database.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
      console.error("Database sync failed (Internship):", result.error);
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
    console.error("Critical error in /api/internship-apply:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Internal Server Error", 
      message: error.message
    });
  }
}
