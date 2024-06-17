<script setup lang="ts">
import { onMounted } from 'vue';
import type { PageState } from 'primevue/paginator'
import { usePersonsStore } from '@/stores/personsStore'
import { usePaginationStore } from '@/stores/paginationStore'
const personsStore = usePersonsStore()
const paginationStore = usePaginationStore()

const setPage = (e: PageState) => {
  personsStore.setPersonsFrom(e.first)
  personsStore.setPersonsOnPage(e.rows)
}

onMounted(() => {
  paginationStore.checkVisibleBtns(window.innerWidth)
  window.addEventListener('resize', () => {
    paginationStore.checkVisibleBtns(window.innerWidth)
  })
})

</script>

<template>
  <div class="card">
    <VPaginator
      @page="setPage"
      :rows="personsStore.personsOnPage"
      :totalRecords="personsStore.filteredPersons.length"
      :rowsPerPageOptions="paginationStore.listPages"
      :first="personsStore.personsFrom"
      :pageLinkSize="paginationStore.visibleBtns"
    ></VPaginator>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 425px) {
  ::v-deep .p-paginator {
    flex-wrap: unset;
  }
}
</style>