<script lang="ts">
  type Todo = { id: string; text: string; done: boolean };

  const STORAGE_KEY = 'framework-svelte-todos';

  function load(): Todo[] {
    if (typeof localStorage === 'undefined') return [{ id: '1', text: '试试勾选与删除', done: false }];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [{ id: crypto.randomUUID(), text: '示例待办', done: false }];
      return JSON.parse(raw) as Todo[];
    } catch {
      return [{ id: crypto.randomUUID(), text: '示例待办', done: false }];
    }
  }

  let todos = $state<Todo[]>(load());
  let draft = $state('');

  $effect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  });

  function add() {
    const text = draft.trim();
    if (!text) return;
    todos = [{ id: crypto.randomUUID(), text, done: false }, ...todos];
    draft = '';
  }

  function remove(id: string) {
    todos = todos.filter((t) => t.id !== id);
  }
</script>

<div class="panel">
  <h2>{'{#each}'}</h2>
  <p class="lead muted">使用 <code>(id)</code> 作为 key；与 <code>localStorage</code> 同步。</p>
  <div class="row" style="margin-bottom: 10px">
    <input type="text" bind:value={draft} placeholder="新待办" maxlength="80" onkeydown={(e) => e.key === 'Enter' && add()} />
    <button type="button" onclick={add}>添加</button>
  </div>
  <ul class="todo-list">
    {#each todos as todo (todo.id)}
      <li>
        <label>
          <input type="checkbox" bind:checked={todo.done} />
          <span class:done={todo.done}>{todo.text}</span>
        </label>
        <button type="button" class="secondary" onclick={() => remove(todo.id)}>删除</button>
      </li>
    {:else}
      <li class="muted">暂无条目</li>
    {/each}
  </ul>
</div>

<style>
  .todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .todo-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 6px 0;
    border-bottom: 1px solid var(--border);
  }

  .todo-list label {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    min-width: 0;
  }

  .done {
    text-decoration: line-through;
    color: var(--muted);
  }
</style>
