<template>
   
   <UContainer class="max-w-xl">
   <UForm :state="state" @submit="onSubmit" class="flex flex-col gap-2">
    <UFormGroup label="Telefono / Whatsapp" required>
    <UInput
          required
          v-model="state.phone"
          placeholder="+5255830000"
          icon="i-fluent:person-standing-16-regular"
          :disabled="state.loading"
      />
    </UFormGroup>  
    
    <UFormGroup label="Email" required>
    <UInput
          required
          v-model="state.email"
          placeholder="you@example.com"
          icon="i-fluent:person-standing-16-regular"
          :disabled="state.loading"
      />
    </UFormGroup>  
    <div>Proyecto</div>
    <UFormGroup label="Nombre de proyecto" required>
    <UInput
          required
          v-model="state.email"
          placeholder="you@example.com"
          icon="i-fluent:person-standing-16-regular"
          :disabled="state.loading"
      />
    </UFormGroup>  
   </UForm>
  </UContainer>

</template>
<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})



  const props = defineProps({
      
  })


  const state = reactive({
    phone: '+52',
    email: null,
    name: null,
    type: null,
    loading: false,
    errorMessage: ''
  })


  const onSubmit = async () => {

  }


</script>