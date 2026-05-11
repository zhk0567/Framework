<script setup lang="ts"></script>

<template>
  <div class="panel">
    <h2 v-if="$slots.title"><slot name="title" /></h2>
    <p v-if="$slots.desc" class="lead"><slot name="desc" /></p>
    <slot />
  </div>
</template>
