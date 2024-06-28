import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

export const supabaseUrl = "https://hqftvfvbxegciojhjjkw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxZnR2ZnZieGVnY2lvamhqamt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3NzUyNTYsImV4cCI6MjAzMzM1MTI1Nn0.nKT58MIgpnaeKOyyL4rnBRtsIh6o3JInHmsTdW0dzvI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
