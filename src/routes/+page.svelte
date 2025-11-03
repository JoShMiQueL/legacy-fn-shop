<script lang="ts">
    let count = $state(0);
    let doubled = $derived(count * 2);
    function increment() {
        count++;
    }
    function decrement() {
        count--;
    }
</script>

<button onclick={decrement}>Decrement</button>
<button onclick={increment}>Increment</button>
<p>Count: {count}</p>
<p>Doubled: {doubled}</p>


