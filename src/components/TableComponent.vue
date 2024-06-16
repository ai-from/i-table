<script setup lang="ts">
import { showItemsOnPage } from '@/composables/table'
import { usePersonsStore } from '@/stores/personsStore'
import { useSortStore } from '@/stores/sortStore'
import { useUrlStore } from '@/stores/urlStore'
const personsStore = usePersonsStore()
const sortStore = useSortStore()
const urlStore = useUrlStore()
</script>

<template>
  <VDataTable
    :value="
      showItemsOnPage(personsStore.filteredPersons, {
        from: personsStore.personsFrom,
        count: personsStore.personsOnPage
      })
    "
    stripedRows
    tableStyle="min-width: 50rem"
    @update:sortField="(val: string) => sortStore.setSortField(val)"
    @update:sortOrder="(val: number) => sortStore.setSortOrder(val)"
    :sortField="urlStore.URLQuery.sortField"
    :sortOrder="Number(urlStore.URLQuery.sortOrder)"
  >
    <VColumn header="Аватар">
      <template #body="slotProps">
        <img :src="`${slotProps.data.picture}`" alt="image" class="w-6rem border-round" />
      </template>
    </VColumn>
    <VColumn field="name" header="ФИО" sortable></VColumn>
    <VColumn field="gender" header="Пол" sortable></VColumn>
    <VColumn field="country" header="Страна" sortable></VColumn>
    <VColumn field="dob" header="Дата рождения" sortable></VColumn>
    <VColumn field="email" header="Адрес электронной почты" sortable></VColumn>
    <VColumn field="phone" header="Телефон" sortable></VColumn>
  </VDataTable>
</template>
