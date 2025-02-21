<!-- <script>
  import Meta from '$lib/components/meta.svelte';
   export let data;
   const { products,metaTags } = data;
</script> 

 <Meta {metaTags}/> 
 <ul>
  {#each products as product}
    <li>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1> 
       <a class="text-blue-500"  href={`/product/${product.ctaLink}`}>{product.ctaText}</a>
    </li>
  {/each}
</ul> -->


<script>
  import { metaTags as metaStore } from '$lib/stores/metaStore.js';
  export let data;

  const { metaTags, products } = data;

 
  metaStore.set(metaTags);
</script>

<ul>
  {#each products as product}
    <li>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
      <a class="text-blue-500" href={`/product/${product.ctaLink}`}>{product.ctaText}</a>
    </li>
  {/each}
</ul>
