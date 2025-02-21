<!-- <script> 
  import Meta from '$lib/components/meta.svelte';
  export let data;

   const { hero,metaTags } = data; 
   const { hero } = data;
 </script> 

  <Meta {metaTags}/> 
 <ul>
    <li>
      <h1>{hero.title}</h1>
      <h1>{hero.description}</h1>
    </li>
</ul>  -->






<script>
  import { metaTags as metaStore } from '$lib/stores/metaStore.js';
  export let data;

  const { metaTags, hero } = data;


  metaStore.set(metaTags);
</script>

<ul>
  <li>
    <h1>{hero.title}</h1>
    <h1>{hero.description}</h1>
  </li>
</ul>

