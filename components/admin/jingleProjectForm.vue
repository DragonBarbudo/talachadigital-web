<template>

<div class="col-span-3 pr-5">
    <UFormGroup label="Client" required>
    <USelectMenu
    v-model="row.owner"
    searchable
    searchable-placeholder="Search"
    class="w-full "
    placeholder="Select client"
    :options="clients"
    option-attribute="name"
    value-attribute="id"
    by="id"
    :search-attributes="['name']"
  />
</UFormGroup>
</div>

<div class="flex flex-col gap-5">
    <UFormGroup label="Name" required>
        <UInput required v-model="row.name" />
    </UFormGroup>
    <div class="grid grid-cols-2 gap-2">
        <UFormGroup label="Amount" required>
            <UInput icon="i-ic-baseline-attach-money" type="number" required v-model="row.amount" />
        </UFormGroup>
        <UFormGroup label="Paid" required>
            <UInput icon="i-ic-baseline-attach-money" type="number" required v-model="row.paid" />
        </UFormGroup>
    </div>
    <UFormGroup label="Status" required>
        <USelect required v-model="row.status" :options="['por hacer', 'pendiente', 'terminado']" />
    </UFormGroup>
    </div>
    
    
    <div class="flex flex-col gap-5 justify-between">
    <UFormGroup label="Notes" class="">
        <UTextarea autoresize :maxrows="5" v-model="row.notes" />
    </UFormGroup>
    
    <AdminJingleFileManager @refresh-item="refreshFn"  :row-name="row.name" :row-id="row.id" />
</div>

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
    row: Object,
    clients: Object
})
const loading = ref(false)

const saveFN = async () => {
    loading.value = true
    const record = await pb.collection('projects').update(props.row.id, {
        name: props.row.name,
        amount: props.row.amount,
        paid: props.row.paid,
        status: props.row.status,
    });
    loading.value = false
}
const refreshFn = () => {
    emit('refreshItem', props.row.id)
}
</script>