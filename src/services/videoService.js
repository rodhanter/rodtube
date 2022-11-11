 
export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*")
                    .order("created_at", { ascending: false })
        }
    }
}