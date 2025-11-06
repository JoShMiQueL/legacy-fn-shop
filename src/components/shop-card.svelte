<script lang="ts">
  export let cardId: number;
  export const full: boolean = false;
</script>

<div class={`font-[Burbank_Big_Regular] italic tracking-wider relative flex flex-col bg-radial from-[#ff78d5] to-[#a8298f] overflow-hidden ${full ? "row-span-2" : "row-span-1"}`}>
  <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] uppercase">Shop Card {cardId}</div>
  <div class="mt-auto relative h-[103px]">
    <div class="absolute top-0 left-0 w-[calc(100%+1px)] h-[22px] bg-[#01fffb]" style="clip-path: polygon(0 10px, 100% 0, 100% 100%, 0 100%);"></div>
    <div class="absolute top-[10px] left-0 w-[calc(100%+1px)] h-[65px] bg-[#1c1b1b] flex justify-center items-center" style="clip-path: polygon(0 10px, 100% 0, 100% 100%, 0 100%);">
        <span class="mt-3 text-2xl">STONEHEART</span>
    </div>
    <div class="absolute bottom-0 left-0 w-[calc(100%+1px)] h-[30px] bg-[#0e0d0d]"></div>
  </div>
</div>