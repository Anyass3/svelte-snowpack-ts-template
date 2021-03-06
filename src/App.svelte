<!-- App.svelte -->
<script lang="ts">
  let name: string = 'Rich';
  /* component logic will go here */
</script>

<div class="App">
  <header class="App-header">
    <a class="App-link" href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
      Learn Svelte with {name}
    </a>
    <br />
    <br />
    <input type="text" bind:value={name} />
  </header>
</div>

<style>
  a {
    font-size: larger;
  }
  header {
    width: auto;
  }
  /* css will go here */
</style>
