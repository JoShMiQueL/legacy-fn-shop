<script lang="ts">
  import ShopCard from "./shop-card.svelte";
  export const full: boolean = false;
</script>

<div class={`grid grid-flow-row grid-cols-[146px_373px_524px_746px] grid-rows-1 h-[649px] gap-[30px] ${$$props.class}`}>
  <ShopCard cardId={1} full={full}/>
  <ShopCard cardId={2} full={full}/>
  <ShopCard cardId={3} full={full}/>
  <ShopCard cardId={4} full={full}/>
</div>