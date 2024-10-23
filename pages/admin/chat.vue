<template>
    Test...
    <div>
        {{ resultList }}
    </div>

</template>





<script  setup lang="ts">


const pb = usePB('td')

definePageMeta({
  layout: 'admin'
})




//const authData = await pb.collection('users').authWithPassword('chamba@talachadigital.com', '1906.Panza')
const authData = await pb.admins.authWithPassword('chamba@talachadigital.com', '1906.Panza')
const resultList = await pb.collection('projects').getList(1, 50, {});


</script>