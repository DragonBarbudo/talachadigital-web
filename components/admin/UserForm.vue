<template>

    <UFormGroup label="Name" required>
        <UInput required v-model="row.name" />
    </UFormGroup>
    <UFormGroup label="Username" required>
        <UInput required v-model="row.username" />
    </UFormGroup>
    <UFormGroup label="Phone" >
        <UInput  v-model="row.phone" />
    </UFormGroup>
    <UFormGroup label="Email" >
        <UInput  v-model="row.email" />
    </UFormGroup>
    


<div class="col-span-2 text-center flex gap-4 justify-center">
    <UButton :loading="loading"  color="lime" label="Save" @click="saveFN()" icon="i-fluent-save-32-regular" />
    <!--
        <UButton :loading="loading"  color="lime" label="Refresh" @click="refreshFn()" icon="i-fluent-save-32-regular" @refresh="refreshFn" />
    -->
</div>

</template>
<script setup lang="ts">
const pb = usePB()
const emit = defineEmits(['refreshItem'])
const props = defineProps({
    row: Object
})
const loading = ref(false)

const saveFN = async () => {
    loading.value = true
    const record = await pb.collection('users').update(props.row.id, {
        name: props.row.name,
        username: props.row.username,
        phone: props.row.phone,
        email: props.row.email,
    });
    loading.value = false
}
const refreshFn = () => {
    emit('refreshItem', props.row.id)
}
</script>