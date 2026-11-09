import { useAuthStore } from "@/stores/auth-store2";
export default async () => {
    const auth = useAuthStore()
    await auth.checkAuth()
}