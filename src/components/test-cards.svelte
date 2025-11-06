<script lang="ts">
  import ShopCard from "./shop-card.svelte";
  export const full: boolean = false;
</script>

<div class={`grid grid-flow-col auto-cols-[499px] grid-rows-2 h-[864px] gap-[30px] ${$$props.class}`}>
  <ShopCard full={full}/>
  <ShopCard full={full}/>
  <ShopCard full={full}/>
  <ShopCard/>
  <ShopCard/>
  <ShopCard/>
  <ShopCard/>
  <ShopCard/>
  <ShopCard/>
</div>