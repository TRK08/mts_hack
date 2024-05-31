<template>
  <main class="home-page">
    <div class="home-page__tabs">
      <a-tabs>
        <a-tab-pane key="1" tab="Загрузить файл">
          <UploadFile />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Загрузить текст">
          <UploadText />
        </a-tab-pane>
      </a-tabs>
    </div>
    <div>
      <Result />
    </div>
  </main>
</template>

<script setup lang="ts">
import Result from "@/components/Result.vue"
import UploadFile from "@/components/UploadFile.vue"
import UploadText from "@/components/UploadText.vue"
</script>

<style lang="scss">
.home-page {
  &__tabs {
    background-color: #f2f3f7;
    padding: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
