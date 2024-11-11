export function useAuthenticate() {
    const pb = usePB('td'); // Initialize PocketBase instance

    const auth = async (usr, pass) => {
        try {
            const authData = await pb.admins.authWithPassword(usr, pass);
            return authData;
        } catch (error) {
            return null;
        }
    };

    return {
        auth
    };
}