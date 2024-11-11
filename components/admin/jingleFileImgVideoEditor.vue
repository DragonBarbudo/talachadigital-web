<template>
    <UCard>
        <template #header>
            <UBadge :label="newItem.file" variant="outline" />
        </template>
        <div class="flex flex-col gap-2">
            <UFormGroup label="Name" required>
                <UInput required v-model="newItem.name" />
            </UFormGroup>
            <NuxtImg :src="fileurl()" class="mx-auto max-w-96" v-if="type=='img'" />
            <video :src="fileurl()" controls v-if="type=='video'"></video>

        </div>
        <template #footer>
            <div class="flex gap-2">
                <UButton :loading="loading" v-if="!deleteConfirmation" :disabled="loading" size="xs" color="red" label="Delete" @click="deleteFN()" icon="i-fluent-delete-12-regular" />
                <UButton v-else :loading="loading" :disabled="loading" size="xs" color="red" label="Confirm" @click="deleteFN()" icon="i-fluent-delete-12-regular" />
                <UDivider></UDivider>
                <UButton size="xs" color="blue" label="Open" :to="fileurl()" target="_blank" icon="i-fluent-open-24-regular" />
                <UButton :disabled="loading" :loading="loading" size="xs" color="lime" label="Save" @click="saveFN(newItem.file)" icon="i-fluent-save-32-regular" />
            </div>
        </template>
    </UCard>
</template>
<script setup lang="ts">
const pb = usePB()
const props = defineProps({
    item: Object,
    index: Number,
    items: Object,
    type: String
})

const loading = ref(false)
const newItem = ref(props.item)

const thecollection = ref(props.type=='img'?'storageImg':'storageVideo')


const fileurl = () => {
  return `https://talachadigital.pockethost.io/api/files/${props.item.collectionId}/${props.item.id}/${props.item.file}`
}


const deleteConfirmation = ref(false)
const deleteFN = async () => {
    if(!deleteConfirmation.value){
        deleteConfirmation.value = true
        return false
    }
    loading.value = true
    const recordDelete = await pb.collection(thecollection.value).delete(props.item.id);
    props.items.splice(props.index, 1)
    loading.value = false
}
const saveFN = async () => {
    loading.value = true
    const record = await pb.collection(thecollection.value).update(props.item.id, newItem.value);
    loading.value = false
}

</script>