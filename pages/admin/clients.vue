<template>
    <div>
        <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700 justify-between">
            <UInput v-model="q" placeholder="Filter..." />
            <UButton :loading="loading" variant="outline" label="New" @click="createnew" />
        </div>
        <ClientOnly>
            <UTable :columns="columns" v-model:expand="expand" :rows="filteredItems">
                <template #expand="{ row }">
                    <div class="p-2 grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <AdminUserForm :row="row" />
                    </div>
                </template>
            </UTable>
        </ClientOnly>
    </div>

</template>
<script setup lang="ts">
const pb = usePB()
definePageMeta({
    layout: 'admin'
})



const props = defineProps({

})

const loading = ref(false)
const items = ref()

const columns = [
    { key: 'name', label: 'Name' },
    { key: 'username', label: 'Username' },
    { key: 'phone', label: 'Phone' },
    { key: 'email', label: 'Email' },
    { key: 'id', label: 'Id' },
    //{ key: 'files', label: 'Files' },
]

const loadItems = async() => {
    const clients = await pb.collection('users').getList(1, 50, {
        expand: 'projects(owner)',
        sort: '-created',
    })
    loading.value = false
    try {
        items.value = clients.items
    } catch (error) {
        console.error('Error loading users:', error);
    }
}


if (pb.authStore.isValid) {
   loadItems()
}


const expand = ref({
  openedItems: [],
  row: {}
})



// FILTER SEARCH
const q = ref('')
const filteredItems = computed(() => {
    if (!q.value) {
        return items.value
    }
    return items.value.filter((item) => {
        return Object.values(item).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
        })
    })
})



function randomName() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const length = Math.floor(Math.random() * 3) + 1;
  let emailName = '';
  for (let i = 0; i < length; i++) {
    emailName += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${emailName}`;
}

const createnew = async () => {
    loading.value = true
    const rName = randomName()
    const fakeemail = rName + '@fakeemail.co'
    const randomname = 'New'+rName
    const data = {
        "username": randomname.toLowerCase(),
        "email": fakeemail,
        "password": "12345678",
        "passwordConfirm": "12345678",
        "name": randomname,
        "phone": "+52"
    };
    q.value = randomname
    const record = await pb.collection('users').create(data);
    loadItems()
}


</script>