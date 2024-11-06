export function useLogout() {
    const pb = usePB('td');
    const router = useRouter();

    const logout = async () => {
        try {
            await pb.authStore.clear(); // Clear authentication and log the user out
            console.log("Logged out successfully");

            // Redirect to the login or home page after logout
            router.push('/admin');
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return {
        logout,
    };
}