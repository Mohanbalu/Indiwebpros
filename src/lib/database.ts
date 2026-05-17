import { getSupabase } from './supabase.js';

// Shared utility for saving to Database (Supabase)
export async function saveToDatabase(data: any) {
  try {
    const supabase = getSupabase();
    let table = '';
    let payload: any = {};

    if (data.Source === 'Contact Form') {
      table = 'contacts';
      payload = {
        name: data.Name,
        email: data.Email,
        message: data.Message,
        source: data.Source
      };
    } else if (data.Source === 'Internship Application') {
      table = 'internship_applications';
      payload = {
        full_name: data.Name,
        email: data.Email,
        phone: data.Phone,
        whatsapp: data.WhatsApp,
        college: data.College,
        degree: data.Degree,
        year: data.Year,
        domain: data.Domain,
        skills: data.Skills,
        reason: data.Reason,
        referral_code: data.ReferralCode,
        source: data.Source
      };
    } else {
      throw new Error(`Unknown source: ${data.Source}`);
    }

    console.log(`Syncing to Database table: ${table}...`);
    console.log(`Payload being sent:`, JSON.stringify(payload));
    
    const { error } = await supabase
      .from(table)
      .insert([payload]);

    if (error) {
      console.error(`Database Insert Error into ${table}:`, error);
      return { success: false, error: error.message, code: error.code };
    }

    console.log("Database Sync Success");
    return { success: true };
  } catch (err: any) {
    console.error("Error in saveToDatabase:", err);
    return { success: false, error: err.message || "Unknown connection failure" };
  }
}
