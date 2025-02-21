 <!-- <script> 
import Meta from "$lib/components/meta.svelte";
 
 export let data

 const {}=data 

 </script>

  <Meta {metaTags} /> 

 <h1 class="text-3xl">Welcome to SvelteKit</h1>
 <p>Visit <a  class="text-blue-500" href="/product">products</a> to read the documentation</p> -->

   




   <script>
    import { metaTags as metaStore } from '$lib/stores/metaStore.js';
    export let data;
  
    const { metaTags } = data;

    metaStore.set(metaTags);
  </script>
  
  <h1 class="text-3xl">Welcome to SvelteKit</h1>
  <p>
    Visit <a class="text-blue-500" href="/product">products</a> to read the documentation.
  </p>
  





