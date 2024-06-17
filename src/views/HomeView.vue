<script setup lang="ts">
import SearchComponent from '@/components/SearchComponent.vue'
import TableComponent from '@/components/TableComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import { useUrlStore } from '@/stores/urlStore'
const urlStore = useUrlStore()

</script>

<template>
  <header class="flex gap-3 mb-3">
    <SearchComponent class="w-8 sm:w-auto" />
    <VButton label="Reset" icon="pi pi-refresh" class="w-4 sm:w-auto" @click="urlStore.resetURL" />
  </header>
  <TableComponent />
  <PaginationComponent />
</template>
