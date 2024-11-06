<template>
    <UButton @click="logout" icon="i-fluent:sign-out-20-regular">
        Cerrar sesión
    </UButton>
</template>

<script setup lang="ts">


const pb = usePB('td');
const router = useRouter();

const logout = async () => {
    try {
        await pb.authStore.clear(); // Clear authentication and log the user out
        console.log("Logged out successfully");
        
        // Optional: Redirect to the login or home page after logout
        router.push('/admin');
    } catch (error) {
        console.error("Logout failed:", error);
    }
};
</script>