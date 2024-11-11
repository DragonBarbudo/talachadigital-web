<template>
  <div class="flex flex-col h-screen">
    <UHorizontalNavigation  :links="links" class="border-b border-gray-200 dark:border-gray-800 " />
    <div class="p-2  grow ring overflow-auto">
      <div class=" h-full p-2">
        <slot />
      </div>
    </div>
  
  </div>
</template>

<script setup lang="ts">
const pb = usePB('td');
const router = useRouter();
const { logout } = useLogout();
const colorMode = useColorMode()



const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const links = [
  [
    {
    label: 'Dash',
    to: '/admin/dashboard'
  }, 
  {
    label: 'Client',
    icon: 'i-fluent-person-circle-24-regular',
    to: '/admin/clients'
  }, 
  {
    label: 'Jingle',
    icon: 'i-fluent-music-note-2-play-20-regular',
    to: '/admin/jingles'
  }, 
  {
    label: 'Menu',
    icon: 'i-fluent-clipboard-task-list-24-regular',
    to: '/admin/menus'
  },
  {
    label: 'File',
    icon: 'i-fluent-box-arrow-up-20-regular',
    to: '/admin/archivos'
  } 
  ], [
    {
    icon: 'i-fluent-weather-sunny-low-20-regular',
    click:() => {
      isDark.value = !isDark.value
    }
  },
    {
    icon: 'i-fluent:sign-out-20-regular',
    click:() => {
        logout()
    }
  }
]
]





const isAuthenticated = pb.authStore.isValid;

onMounted(() => {
    if (!isAuthenticated) {
        router.push('/admin');
    }
});


</script>