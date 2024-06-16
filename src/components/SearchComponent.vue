<script setup lang="ts">
import { useSearchStore } from '@/stores/searchStore'
const searchStore = useSearchStore()
</script>

<template>
  <VIconField iconPosition="left">
    <VInputIcon class="pi pi-search"> </VInputIcon>
    <VInputText
      @update:modelValue="(val: string) => searchStore.setSearchQuery(val)"
      v-model="searchStore.searchQuery"
      placeholder="Search"
    />
  </VIconField>
</template>
