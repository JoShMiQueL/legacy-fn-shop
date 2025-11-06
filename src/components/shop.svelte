<script lang="ts">
  import TestCards from "./test-cards.svelte";
</script>

<main class="pt-20 flex flex-col gap-10">
  <TestCards full/>
  <TestCards full class="grid-rows-1 h-[calc(649px/2-30px)]"/>
</main>

<style>
  
</style>