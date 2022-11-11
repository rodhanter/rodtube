import { createClient } from "@supabase/supabase-js";
import { geraTimeline } from "../../pages";

const PROJECT_URL = "https://jihzrlucbhsknfrnlzeh.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppaHpybHVjYmhza25mcm5semVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjMyMTcsImV4cCI6MTk4MzczOTIxN30.0sjh8GKGY3_nG-VOmdHtUTCR3rXvgq2HSIfUthkDZDI";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);


export function videoService({ playlists, setPlaylists }) {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*")
                    .order("created_at", { ascending: false })
        },
        refresh() {
            supabase
            .from('*')
            .on('*', (payload) => {
            console.log('Change received!', payload);
            //window.location.reload(true);
            console.log(playlists)
            console.log(setPlaylists)
            geraTimeline(this, setPlaylists)

            })
            .subscribe();
        }
    }
}

