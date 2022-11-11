import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://jihzrlucbhsknfrnlzeh.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppaHpybHVjYmhza25mcm5semVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjMyMTcsImV4cCI6MTk4MzczOTIxN30.0sjh8GKGY3_nG-VOmdHtUTCR3rXvgq2HSIfUthkDZDI";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);


export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*")
                    .order("created_at", { ascending: false })
        }
    }
}