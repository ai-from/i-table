<script setup lang="ts">
import axios from 'axios'
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterView, useRouter, useRoute } from 'vue-router'
import { checkUrl } from './composables/url'
import { usePersonsStore } from './stores/personsStore'
import { useUrlStore } from './stores/urlStore'
const personsStore = usePersonsStore()
const urlStore = useUrlStore()
const { URLQuery, isReset } = storeToRefs(urlStore)

const router = useRouter()
const route = useRoute()

axios
  .get('mock/api.json')
  .then((res) => personsStore.setPersons(res.data.results))
  .catch((err) => {
    throw new Error(err)
  })

onMounted(async () => {
  await router.isReady()
  checkUrl(route.query)
})

watch(URLQuery, () => {
  if (isReset.value) {
    router.push({ name: 'Home' })
    isReset.value = false
  } else router.push({ name: 'Home', query: { ...urlStore.URLQuery } })
})
</script>

<template>
  <RouterView />
</template>
