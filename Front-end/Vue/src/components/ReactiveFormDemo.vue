<script setup lang="ts">
import { computed, reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
});

const stats = computed(() => {
  const nameLen = form.name.trim().length;
  const emailLen = form.email.trim().length;
  return `姓名 ${nameLen} 字 · 邮箱 ${emailLen} 字`;
});
</script>

<template>
  <div class="panel">
    <h2>reactive 表单</h2>
    <p class="lead">单对象多字段；派生统计用 <code>computed</code>。</p>
    <label class="muted" for="f-name">姓名</label>
    <input id="f-name" v-model="form.name" type="text" autocomplete="name" />
    <label class="muted" for="f-email" style="display: block; margin-top: 10px">邮箱</label>
    <input id="f-email" v-model="form.email" type="email" autocomplete="email" />
    <p class="muted" style="margin: 10px 0 0">{{ stats }}</p>
  </div>
</template>
