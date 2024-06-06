import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zdvgtqrfmtgutdqjrscb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpkdmd0cXJmbXRndXRkcWpyc2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwNTg4NjEsImV4cCI6MjAzMjYzNDg2MX0.Zy4Hf7st-6GHoxPliKiiJO3Bwts35JFOtQuYEYAltzk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
