<template>
<div class="flex flex-col gap-2">
    <!--UPLOAD-->
    <UFormGroup label="Upload" >
        <UInput :loading="loading" type="file" size="xl" @change="uploadFiles" ref="inputUploader"  multiple :disabled="loading" />
    </UFormGroup>

</div>


</template>

<script setup lang="ts">
const pb = usePB()



const props = defineProps({
    files: Array,
    rowId: String,
    rowName: String,

})
const emit = defineEmits(['refreshItem'])



const getCollectionName = (file) => {
  const extension = file.name.split('.').pop().toLowerCase();
  if (['mp3', 'wav'].includes(extension)) return 'storageJingles';
  if (['mov', 'mp4'].includes(extension)) return 'storageVideo';
  if (['jpg', 'png', 'gif', 'webp'].includes(extension)) return 'storageImg';
  return null;  // If file type is unsupported
};


const inputUploader = ref();
const loading = ref(false);

const createRecordAndUpload = async (formData, collectionName) => {
    const recordJingle = await pb.collection(collectionName).create(formData);
    return recordJingle
};



function randomName() {
  const chars = 'abcdefg0123456789';
  const length = Math.floor(Math.random() * 3) + 1;
  let thename = '';
  for (let i = 0; i < length; i++) {
    thename += chars[Math.floor(Math.random() * chars.length)];
  }
  return thename;
}


const uploadFiles = async (thefiles) => {

  loading.value = true;
  for (const file of Array.from(thefiles)) {

    const collectionName = getCollectionName(file);
    if (!collectionName) {
      console.warn(`Unsupported file type for ${file.name}`);
      continue;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('owner', props.rowId)
    formData.append('name', randomName())
    //formData.append('lyrics', '---')
    await createRecordAndUpload(formData, collectionName);
  }
  // Reset uploading state and clear file input
  loading.value = false;
  inputUploader.value.value = '';  // Clear the file input
  emit('refreshItem')
};



</script>