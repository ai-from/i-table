<script setup lang="ts">
import SearchComponent from '@/components/SearchComponent.vue'
import TableComponent from '@/components/TableComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import { useUrlStore } from '@/stores/urlStore'
const urlStore = useUrlStore()
</script>

<template>
  <header class="flex gap-3 mb-3">
    <SearchComponent />
    <VButton label="Reset" icon="pi pi-refresh" @click="urlStore.resetURL" />
  </header>
  <TableComponent />
  <PaginationComponent />
</template>
