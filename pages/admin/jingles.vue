<template>
  <div>
    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700 justify-between">
      <UInput v-model="q" placeholder="Filter..." />
      <UButton :loading="loading" variant="outline" label="New" @click="createnew" />
    </div>
    <ClientOnly>
    <UTable :columns="columns" v-model:expand="expand" :rows="filteredItems">
      <!-- ROWS -->
      <template #status-data="{ row }">
        <UBadge :label="row.status" variant="soft" :color="statusColors(row.status)" />
      </template>
      <template #amount-data="{ row }">
        <UBadge :label="`$${row.amount-row.paid}`" variant="outline" :color="amountColors(row.amount-row.paid)" />
      </template>
      <template #created-data="{ row }">
        <NuxtTime :datetime="row.created" relative />
      </template>
      <template #files-data="{ row }">
        <UBadge :label="row.files.length" variant="soft" color="primary" />
      </template>
      <template #link-data="{ row }">
        <UButton :to="`/trabajo/${row.id}`" target="_blank" label="View" />
      </template>
      <!-- EXPAND -->
      <template #expand="{ row }">
        <div class="p-2 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <AdminJingleProjectForm :clients="clients" :row="row" @refresh-item="refreshItem" />
          <div class="col-span-2"><UDivider icon="i-fluent-music-note-2-20-regular" class="my-5 text-4xl" size="xl" /></div>
        <UCard class="col-span-3">
          <template #header>Jingles data</template>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <AdminJingleFileEditor  v-for="(item, index) in row.jingles" :key="item.id" :item="item" :index="index" :jingles="row.jingles"/>
          </div>
        </UCard>
        <UCard class="col-span-3">
          <template #header>Images</template>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <AdminJingleFileImgVideoEditor v-for="(item, index) in row.imgs" :key="item.id" :item="item" :index="index" :items="row.imgs" type="img" />
          </div>
        </UCard>
        <UCard class="col-span-3">
          <template #header>Videos</template>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <AdminJingleFileImgVideoEditor v-for="(item, index) in row.videos" :key="item.id" :item="item" :index="index" :items="row.videos" type="video" />
          </div>
        </UCard>

      </div>
    </template>
  </UTable>
  </ClientOnly>

  </div>

</template>
<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
const props = defineProps({

})

const pb = usePB()
const loading = ref(false)

const columns = [
  { key: 'status', label: 'Status' },
  { key: 'amount', label: '$Due' },
  { key: 'created', label: 'Created' },
  { key: 'name', label: 'Name' },
  { key: 'link', label: 'Link' },
  //{ key: 'files', label: 'Files' },
]

const items = ref()


const remapItem = (item) => {
  let newItem = {...item}
  if(item.expand && item.expand['storageJingles(owner)']){
    newItem.jingles = item.expand['storageJingles(owner)']
    }
    if(item.expand && item.expand['storageImg(owner)']){
      newItem.imgs = item.expand['storageImg(owner)']
    }
    if(item.expand && item.expand['storageVideo(owner)']){
      newItem.videos = item.expand['storageVideo(owner)']
    }
    delete newItem.expand
  return newItem
}

const clients = ref()

const loadItems = async() => {
  const projects = await pb.collection('projects').getList(1, 50, {
    filter: 'work = "jingle"',
    expand: 'storageJingles(owner), storageImg(owner), storageVideo(owner)',
  })

  loading.value = false
  try {
    items.value = projects.items.map((item, index) => {
      return remapItem(item)
    });
  } catch (error) {
    console.error('Error loading projects:', error);
  }


  const clientsList = await pb.collection('users').getList(1, 50, {
      sort: '-created',
  })
  clients.value = clientsList.items

  
}

if (pb.authStore.isValid) {
  loadItems()
}




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
const expand = ref({
  openedItems: [],
  row: {}
})



const statusColors = (txt: string) => {
  let col = 'pink'
  col = (txt == 'por hacer') ? 'red' : col
  col = (txt == 'pendiente') ? 'blue' : col
  col = (txt == 'terminado') ? 'lime' : col
  return col
}
const amountColors = (txt: number) => {
  let col = 'red'
  col = (txt == 0) ? 'lime' : col
  return col
}


const refreshItem = async (itemid) => {

  const record = await pb.collection('projects').getOne(itemid, {
    expand: 'storageJingles(owner), storageImg(owner), storageVideo(owner)',
  });

  const newItem = remapItem(record)  
  const index = items.value.findIndex(item => item.id === newItem.id);
  if (index !== -1) {    
    items.value[index] = newItem;
  } else {
    console.warn(`Item with id ${newItem.id} not found in items.`);
  }
}


function randomName() {
  const chars = 'abcdefg0123456789';
  const length = Math.floor(Math.random() * 3) + 1;
  let thename = '';
  for (let i = 0; i < length; i++) {
    thename += chars[Math.floor(Math.random() * chars.length)];
  }
  return thename;
}


const createnew = async () => {
    loading.value = true
    let rName = 'Jin'+randomName()
    const data = {
        "status": 'por hacer',
        "work": 'jingle',
        "name": rName,
        "amount": 600,
        "paid": 0,
        "owner": '',
        "notes": '',
    };

    const record = await pb.collection('projects').create(data);
    loadItems()
}


</script>

