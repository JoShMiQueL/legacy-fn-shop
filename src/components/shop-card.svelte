<script lang="ts">
  export const full: boolean = false;
</script>
<!-- bg-[url(https://static.wikia.nocookie.net/fortnite/images/1/1c/Stoneheart_%28Featured%29_-_Outfit_-_Fortnite.png)] bg-center bg-no-repeat -->
<div class={`font-[Burbank_Big_Regular] italic tracking-wider relative overflow-hidden ${full ? "row-span-2" : "row-span-1"}`}>
  <!-- <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] uppercase">Shop Card {cardId}</div> -->
  <div class="bg-radial from-[#ff72cb] to-[#c91a7a] absolute top-0 -left-[50%] w-[200%] h-full"></div>
  <img class="h-[104.5%] -ml-8 object-cover" style="mask-image: linear-gradient(to bottom, black 66%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 66%, transparent 100%);" src="https://image.fnbr.co/outfit/5d8ff40b47f8fe5d30bf6c75/featured.png" alt="" />
  <!-- <img class="absolute top-0 -left-5 w-full h-full object-cover" src="https://image.fnbr.co/outfit/5d8ff40b47f8fe5d30bf6c75/featured.png" alt="" /> -->
  <!-- <div class="absolute top-[50%] left-0 w-full h-full bg-linear-to-t from-[#c91a7a]"></div> -->
  <!-- <div class="absolute top-0 left-0 w-full h-full bg-[#c91a7a]" 
       style="mask-image: linear-gradient(to bottom, black 0%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);"></div> -->
  <div class="mt-auto absolute left-0 bottom-0 w-full h-[calc(14px+75px+39px)]">
    <div class="absolute top-0 left-0 w-[calc(100%+1px)] h-[calc(14px+10px)] bg-[#01fffb]" style="clip-path: polygon(0 10px, 100% 0, 100% 100%, 0 100%);"></div>
    <div class="absolute top-[14px] left-0 w-[calc(100%+1px)] h-[calc(75px+1px)] bg-[#1c1b1b] flex justify-center items-center" style="clip-path: polygon(0 10px, 100% 0, 100% 100%, 0 100%);">
        <span class="mt-3 text-4xl">STONEHEART</span>
    </div>
    <div class="absolute bottom-0 left-0 w-[calc(100%+1px)] h-[39px] bg-[#0e0d0d]"></div>
  </div>
</div>