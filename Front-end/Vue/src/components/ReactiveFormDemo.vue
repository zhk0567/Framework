<script setup lang="ts">
import { reactive, ref } from 'vue'
import PanelFrame from './PanelFrame.vue'

const form = reactive({
  name: '',
  email: '',
})

const msg = ref('')

function submit() {
  msg.value = `演示已提交：${form.name.trim()} / ${form.email.trim()}`
}
</script>

<template>
  <PanelFrame panel-id="section-reactive">
    <template #title><code>reactive</code> 与对象形态状态</template>
    <template #desc>
      适合表单等多字段对象；模板中直接写 <code>form.name</code>，无需 <code>.value</code>。
    </template>
    <form class="form" @submit.prevent="submit">
      <label class="lab">
        <span>姓名</span>
        <input v-model="form.name" class="input" type="text" required />
      </label>
      <label class="lab">
        <span>邮箱</span>
        <input v-model="form.email" class="input" type="email" required />
      </label>
      <button type="submit" class="btn">提交（演示）</button>
    </form>
    <p v-if="msg" class="msg" role="status">{{ msg }}</p>
  </PanelFrame>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 22rem;
}

.lab {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-h);
}

.input {
  padding: 10px 12px;
  font: 15px var(--sans);
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-h);
}

.btn {
  align-self: flex-start;
  font: 15px var(--sans);
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: var(--accent);
  color: #fff;
}

.msg {
  margin-top: 12px;
  font-size: 14px;
  color: var(--text);
}
</style>
