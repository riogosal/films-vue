<template>
  <div class="px-20 py-2">
    <div class="">
      <label
        for="title"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Title</label
      >
      <div class="mt-2">
        <input
          type="text"
          name="title"
          id="title"
          v-model="fields.title"
          class="peer h-full w-full rounded-[7px] border border-blue-900/25 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:outline-0"
        />
      </div>
    </div>
    <div class="">
      <label
        for="genre"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Genre</label
      >
      <div class="mt-2">
        <input
          type="text"
          name="genre"
          id="genre"
          v-model="fields.genre"
          class="peer h-full w-full rounded-[7px] border border-blue-900/25 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:outline-0"
        />
      </div>
    </div>

    <div class="">
      <label
        for="text"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Deskripsi</label
      >
      <div class="mt-2">
        <input
          id="deskripsi"
          name="deskripsi"
          type="text"
          v-model="fields.deskripsi"
          class="peer h-full w-full rounded-[7px] border border-blue-900/25 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:outline-0"
        />
      </div>
    </div>
    <div class="">
      <label
        for="text"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Durasi</label
      >
      <div class="mt-2">
        <input
          id="durasi"
          name="durasi"
          type="number"
          v-model="fields.durasi"
          class="peer h-full w-full rounded-[7px] border border-blue-900/25 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:outline-0"
        />
      </div>
    </div>
    <div class="">
      <label
        for="text"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Rating</label
      >
      <div class="mt-2">
        <input
          id="deskripsi"
          name="deskripsi"
          type="text"
          v-model="fields.rating"
          class="peer h-full w-full rounded-[7px] border border-blue-900/25 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:outline-0"
        />
      </div>
    </div>
    <div class="">
      <label
        for="text"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Keterangan</label
      >
      <div class="mt-2">
        <input
          id="deskripsi"
          name="deskripsi"
          type="text"
          v-model="fields.keterangan"
          class="peer h-full w-full rounded-[7px] border border-blue-900/25 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:outline-0"
        />
      </div>
    </div>
    <div class="mt-5">
      <button
        class="linear rounded-[20px] ms-1 bg-white/50 px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100/20 active:bg-gray-200"
        @click="
          $emit('submit-form', { ...fields, durasi: Number(fields.durasi) })
        "
      >
        {{ $props.method === "update" ? "Update" : "Tambah Film" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { filmInterface } from "../../services";

const $props = defineProps<{
  method: "form" | "update";
  selectedFilm: filmInterface | null;
}>();

defineEmits<{
  (e: "submit-form", data: filmInterface): void;
}>();

const fields = ref<TForm>({
  id: $props.selectedFilm?.id ?? 0,
  title: $props.selectedFilm?.title ?? "",
  genre: $props.selectedFilm?.genre ?? "",
  deskripsi: $props.selectedFilm?.deskripsi ?? "",
  durasi: $props.selectedFilm?.durasi.toString() ?? "",
  rating: $props.selectedFilm?.rating ?? "",
  keterangan: $props.selectedFilm?.keterangan ?? "",
});

type TForm = {
  id: number;
  title: string;
  genre: string;
  deskripsi: string;
  durasi: string;
  rating: string;
  keterangan: string;
};

// export default {
//   name: 'FormCoponent',
//   props: ['method']
//   ,setup(props) {
//     const idFilm = props?.method?.id
//     const methodFlm = props?.method?.method
//     console.log(methodFlm)
//     return {
//       idFilm,
//       methodFlm
//     }
//   }
//   , data() {
//     const filmLength = dataFilm.length;
//     const findIndex = dataFilm.findIndex((item: any) => item.id === this.idFilm);
//     const field1={
//         id: filmLength + 1,
//         title: '',
//         genre: '',
//         deskripsi: '',
//         durasi: '',
//         rating: '',
//         keterangan: ''
//     }
//     const findDataById= dataFilm.find((item:any) => item.id === this.idFilm)
//     console.log(findDataById)
//     return {
//       field: findDataById ? findDataById : field1,
//       findIndex
//     }
//   },
//   methods: {
//     formData() {
//       const { title, genre, deskripsi, durasi, rating, keterangan }: TForm = this.field;
//       console.log(title, genre, deskripsi, durasi, rating, keterangan);
//       const cofig = {
//         id: this.field.id,
//         title: title,
//         genre: genre,
//         deskripsi: deskripsi,
//         durasi: durasi,
//         rating: rating,
//         keterangan: keterangan
//       }
//       if(this.methodFlm === 'update'){
//         dataFilm[this.findIndex]=cofig
//       } else {
//         dataFilm.push(cofig)
//       }
//       this.$emit('send-props', {success:true})
//     }
//   }
// }
</script>
../../services/film
