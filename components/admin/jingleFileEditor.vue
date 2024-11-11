<template>
    <UCard>
        <template #header>
            <UBadge :label="jingle.file" variant="outline" />
        </template>
        <div class="flex flex-col gap-2">
            <UFormGroup label="Name" required>
                <UInput required v-model="jingle.name" />
            </UFormGroup>
            <UFormGroup label="Lyrics" class="col-span-3">
                <UTextarea autoresize :maxrows="5" v-model="jingle.lyrics" />
            </UFormGroup>
            <audio controls :src="fileurl()"></audio>
        </div>
        <template #footer>
            <div class="flex gap-2">
                <UButton :loading="loading" v-if="!deleteConfirmation" :disabled="loading" size="xs" color="red" label="Delete" @click="deleteFN()" icon="i-fluent-delete-12-regular" />
                <UButton v-else :loading="loading" :disabled="loading" size="xs" color="red" label="Confirm" @click="deleteFN()" icon="i-fluent-delete-12-regular" />
                <UDivider></UDivider>
                <UButton size="xs" color="blue" label="Open" :to="fileurl()" target="_blank" icon="i-fluent-open-24-regular" />
                <UButton :disabled="loading" :loading="loading" size="xs" color="lime" label="Save" @click="saveFN(jingle.file)" icon="i-fluent-save-32-regular" />
            </div>
        </template>
    </UCard>
</template>
<script setup lang="ts">
const pb = usePB()
const props = defineProps({
    item: Object,
    index: Number,
    jingles: Object
})

const loading = ref(false)
const jingle = ref(props.item)

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
    const recordDelete = await pb.collection('storageJingles').delete(props.item.id);
    props.jingles.splice(props.index, 1)
    loading.value = false
}
const saveFN = async () => {
    loading.value = true
    const record = await pb.collection('storageJingles').update(props.item.id, jingle.value);
    loading.value = false
}

</script>