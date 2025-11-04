<script lang="ts">
  
</script>

<main class="min-h-screen pt-40 flex flex-col gap-10">
  {#each { length: 15 } as x, i}
    <div class="outline-2 outline-white bg-white/15 h-200">
      <h2 class="text-center">Item {i + 1}</h2>
    </div>
  {/each}
</main>
