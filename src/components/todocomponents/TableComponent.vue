<template>
  <div class="w-full px-4 md:overflow-x-hidden">
    <table role="table" class="w-full min-w-full">
      <thead>
        <tr role="row">
          <th colspan="1">
            <div
              class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs"
            >
              Title
            </div>
          </th>
          <th colspan="1">
            <div
              class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs"
            >
              Rating
            </div>
          </th>
          <th colspan="1">
            <div
              class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs"
            >
              Action
            </div>
          </th>
        </tr>
      </thead>
      <tbody role="rowgroup" class="px-4">
        <tr role="row" v-for="item in data" :key="item.id">
          <td class="py-3 text-sm" role="cell">
            <div class="flex items-center gap-2">
              <p class="text-sm font-medium text-navy-700">
                {{ item.title }}
              </p>
            </div>
          </td>
          <td class="py-3 text-sm" role="cell">
            <p class="text-md font-medium text-navy-700">
              {{ item.rating }}
            </p>
          </td>
          <td class="py-3 text-sm" role="cell">
            <div class="flex flex-row font-bold">
              <button
                v-on:click="$emit('lihat-detail', item.id)"
                class="linear rounded bg-lightPrimary p-1 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100"
              >
                <i><ion-icon name="eye-outline"></ion-icon></i>
              </button>
              <button
                v-on:click="$emit('update', item.id)"
                class="linear rounded bg-lightPrimary p-1 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100"
              >
                <i><ion-icon name="pencil-outline"></ion-icon></i>
              </button>
              <button
                v-on:click="$emit('hapus', item.id)"
                class="linear rounded bg-lightPrimary p-1 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100"
              >
                <i><ion-icon name="trash-outline"></ion-icon></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { filmsArray } from "../../services/film";

defineProps<{
  data: filmsArray;
}>();

defineEmits<{
  (e: "lihat-detail", id: number): void;
  (e: "update", id: number): void;
  (e: "hapus", id: number): void;
}>();

// export default {
//   name: 'TableComponent',
//   setup() {
//     return {

//     }
//   },
//   data() {
//     const filmData = dataFilm
//     return {
//       filmData
//     }
//   },
//   methods: {
//     btnDetails(item:string|number){
//       this.$emit('send-props', {success:false,id: item,routes:'detail'})
//     },

//     btnDelete(item: number) {
//       const number = item
//       const index = this.filmData.findIndex((item) => item.id === number);
//       this.filmData.splice(index, 1);
//       console.log(item);
//       this.$emit('send-props', {success:true})
//     },
//     btnUpdate(item: number|string) {
//       this.$emit('send-props', {success:false,id: item,routes:'update'})
//     }
//   }
// }
</script>
../../services/film
