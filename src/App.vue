<script setup lang="ts">
import { ref } from "vue";
import FormCoponent from "./components/todocomponents/FormCoponent.vue";
import { filmInterface, filmsArray } from "./services/film";
import TableComponent from "./components/todocomponents/TableComponent.vue";
import DetailComponent from "./components/todocomponents/DetailComponent.vue";
import data from "./services/data.json";

type Tprops = {
  success?: boolean;
  id?: number;
  routes?: string;
};

defineProps<Tprops>();

type Route = "table" | "form" | "detail";

/* UI Data */
const route = ref<Route>("table");
const selectedFilm = ref<filmInterface | null>(null);

const dataFilm = ref<filmsArray>(data.data);

const title = "My Favorite Film";

function handleNavigation() {
  if (route.value === "table") {
    route.value = "form";
    return;
  }
  route.value = "table";
}

function handleSubmitForm(data: filmInterface): void {
  dataFilm.value.push(data);
}

function deleteFilm(id: number) {
  const index = dataFilm.value.findIndex((item) => item.id === id);
  dataFilm.value.splice(index, 1);
}
</script>

<template>
  <div
    class="relative min-h-screen min-w-full py-1 flex align-middle justify-center bg-[url('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/123740332/original/934af649631a2dc8730f0b63cfed1e63908b6f08/create-anime-background-style.jpg')] bg-cover bg-center"
  >
    <!-- <div
      class="absolute z-10 top-3 right-4 animate-fade-left animate-duration-1000 animate-delay-100 animate-ease-out animate-normal animate-fill-both"
      v-if="receiveProps.success"
    >
      <div
        class="mb-3 inline-flex w-full items-center bg-white-500 rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-30 px-6 py-5 text-base text-red-300"
        role="alert"
      >
        <span class="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        Successfully
      </div>
    </div> -->
    <div
      class="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:min-h-[80vh] w-full bg-[#113946]-400 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-70"
    >
      <div
        class="h-screen lg:h-full px-5 pb-10 flex flex-col justify-center items-center"
      >
        <div class="  ">
          <img
            src="./assets/luffy.png"
            alt="Logo"
            class="mb-5 h-72 animate-bounce-infinite"
          />
        </div>
        <div class="">
          <h1 class="f-well text-[#451952] text-4xl font-bold">{{ title }}</h1>
          <p class="text-[#03001C]">
            Rekomendasi film yang seru untuk ditonton
          </p>
        </div>
      </div>

      <div
        id="content"
        class="h-screen lg:h-full px-14 flex justify-start items-center"
      >
        <div
          class="flex w-full flex-col bg-blue-500 rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-30"
        >
          <div
            class="flex h-fit w-full items-center justify-between rounded-t-2xl backdrop-filter backdrop-blur-sm bg-opacity-30 py-4 shadow-2xl shadow-gray-100"
          >
            <button
              class="linear rounded-[20px] ms-1 bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100/20 active:bg-gray-200"
              @click="handleNavigation"
            >
              {{ route !== "table" ? "Tutup" : "Tambah Film" }}
            </button>
          </div>
          <DetailComponent
            v-if="route === 'detail' && selectedFilm !== null"
            :dataId="selectedFilm?.id"
            :selected-film="selectedFilm"
          />
          <TableComponent
            v-if="route === 'table'"
            :data="dataFilm"
            @lihat-detail="(id: number) => {
            selectedFilm = dataFilm.find((item) => item.id === id) ?? null;
            route = 'detail'
          }"
            @update="(id: number) => {
              selectedFilm = dataFilm.find((item) => item.id === id) ?? null;
              route = 'form';
            }
            "
            @hapus="deleteFilm"
          />
          <FormCoponent
            :method="selectedFilm?.id === undefined ? 'form' : 'update'"
            :selected-film="selectedFilm"
            @submit-form="handleSubmitForm"
            v-if="route === 'form'"
          />
          <!-- <FormCoponent /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./services/film
