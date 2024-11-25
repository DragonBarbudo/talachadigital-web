<template>
    <div class="flex flex-wrap gap-2 w-full">

        <div 
            v-for="item in items" 
            :key="item" 
            class="text-black rounded w-fit px-2 cursor-pointer hover:-rotate-2" 
            :class="item === currentType ? 'bg-tdgreen' : 'bg-white'" 
            @click="selectType(item)"
            v-html="item"
        />
        
        <div 
            v-if="currentType !== 'Otro'" 
            class="text-black rounded w-fit px-2 cursor-pointer hover:-rotate-2" 
            :class="currentType === 'Otro' ? 'bg-tdgreen' : 'bg-white'" 
            @click="selectType('Otro')">
            Otro
        </div>

        <div class="basis-full flex" v-else >            
            <div><div class="text-black rounded-l w-fit px-2 bg-tdgreen" v-html="otrotext || 'Otro'"></div></div>
            <textarea 
                type="text" 
                class="rounded-r rounded-b px-2 py-1 border-4 border-tdgreen w-full dark:bg-tdblue dark:text-tdgreen text-tdblue focus:outline-none"
                v-model="customType" 
                :placeholder="ph || 'Descríbelo aquí...'"
            />
        </div>

    </div>
  
    
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  
  // Props
  const props = defineProps({
    items: Array,
    modelValue: String,
    otrotext: String,
    ph: String,
  });
  
  // Emits
  const emit = defineEmits(['update:modelValue']);
  
  // State
  const currentType = ref(props.modelValue || props.items[0]);
  const customType = ref('');
    
 
  watch(
    [currentType, customType],
    ([type, custom]) => {
      const valueToEmit = type === 'Otro' ? (custom || 'Otro') : type;
      emit('update:modelValue', valueToEmit);
    }
  );


  
  // Select type handler
  const selectType = (type: string) => {
    currentType.value = type;
    if (type !== 'Otro') {
      customType.value = ''; 
    }
  };

  if(props.items.length==0){
    selectType('Otro')
  }

  </script>