<template>
  <div class="w-full py-5 px-16">
    <div class="flex justify-start gap-10 mb-3">
      <div class="w-[60px]">
        <span>Title</span>
      </div>
      <div>
        <span>: {{ selectedFilm.title }}</span>
      </div>
    </div>
    <div class="flex justify-start gap-10 mb-3">
      <div class="w-[60px]">
        <span>Genre</span>
      </div>
      <div>
        <span>: {{ selectedFilm.genre }}</span>
      </div>
    </div>
    <div class="flex justify-start gap-10 mb-3">
      <div class="w-[60px]">
        <span>Deskripsi</span>
      </div>
      <div>
        <span>: {{ selectedFilm.deskripsi }}</span>
      </div>
    </div>
    <div class="flex justify-start gap-10 mb-3">
      <div class="w-[60px]">
        <span>Durasi</span>
      </div>
      <div>
        <span>: {{ selectedFilm.durasi }}</span>
      </div>
    </div>
    <div class="flex justify-start gap-10 mb-3">
      <div class="w-[60px]">
        <span>Rating</span>
      </div>
      <div>
        <span>: {{ selectedFilm.rating }}</span>
      </div>
    </div>
    <div class="flex justify-start gap-10 mb-3">
      <div class="w-[60px]">
        <span>Keterangan</span>
      </div>
      <div>
        <span>: {{ selectedFilm.keterangan }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { filmInterface } from "../../services/film";

defineProps<{
  selectedFilm: filmInterface;
}>();
</script>
../../services/film
