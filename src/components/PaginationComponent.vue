<script setup lang="ts">
import type { PageState } from 'primevue/paginator'
import { usePersonsStore } from '@/stores/personsStore'
import { usePaginationStore } from '@/stores/paginationStore'
const personsStore = usePersonsStore()
const paginationStore = usePaginationStore()

const setPage = (e: PageState) => {
  personsStore.setPersonsFrom(e.first)
  personsStore.setPersonsOnPage(e.rows)
}
</script>

<template>
  <div class="card">
    <VPaginator
      @page="setPage"
      :rows="personsStore.personsOnPage"
      :totalRecords="personsStore.filteredPersons.length"
      :rowsPerPageOptions="paginationStore.listPages"
      :first="personsStore.personsFrom"
    ></VPaginator>
  </div>
</template>
