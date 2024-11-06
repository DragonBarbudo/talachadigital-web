<template>
    <UContainer class="max-w-sm">
        <UForm :state="state" @submit="onSubmit" class="flex flex-col gap-5 border p-5 rounded-xl">
            <UFormGroup label="Usuario" required>
                <UInput
                    required
                    v-model="state.email"
                    placeholder="you@example.com"
                    icon="i-fluent:person-standing-16-regular"
                    :disabled="state.loading"
                />
            </UFormGroup>
            <UFormGroup label="Contraseña" required>
                <UInput
                    required
                    v-model="state.password"
                    placeholder="Pass...."
                    type="password"
                    icon="i-fluent-password-16-regular"
                    :disabled="state.loading"
                />
            </UFormGroup>
            <div class="ml-auto">
                <UButton type="submit" :loading="state.loading">
                    Ingresar
                </UButton>
            </div>
            <!-- Display error message if login fails -->
            <p v-if="state.errorMessage" class="text-red-500 text-sm mt-2">
                {{ state.errorMessage }}
            </p>
        </UForm>
    </UContainer>
</template>

<script setup lang="ts">

const pb = usePB('td');
const router = useRouter();

const state = reactive({
    email: '',
    password: '',
    loading: false,
    errorMessage: ''
});

const onSubmit = async () => {

    if (!state.email || !state.password) {
        state.errorMessage = "Por favor, completa todos los campos.";
        return;
    }

    state.loading = true;
    state.errorMessage = '';

    try {
        const authData = await pb.admins.authWithPassword(state.email, state.password);
        router.push('/admin/dashboard');

    } catch (error) {

        state.errorMessage = "Inicio de sesión fallido. Verifica tus credenciales.";
        console.error("Login failed:", error);
    } finally {
        state.loading = false;
    }
};


const isAuthenticated = pb.authStore.isValid;

onMounted(() => {
    if (isAuthenticated) {
        router.push('/admin/dashboard');
    }
});

</script>

<style scoped>
/* Optional styles for customization */
</style>