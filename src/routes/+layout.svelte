<script lang="ts">
  import "../app.css"
  // biome-ignore lint/correctness/noUnusedImports: false positive, used in svelte:head
  import favicon from "$lib/assets/favicon.svg"

  const { children } = $props()
</script>

<svelte:head>
  <link rel="icon" href={favicon}>
</svelte:head>

{@render children()}
