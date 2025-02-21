<!-- <script>
import '../app.css';

import Header from '$lib/components/header.svelte';

</script>

<Header/>
<slot/>  -->





  


   <script>
    import '../app.css';
    import Meta from '$lib/components/meta.svelte';
    import Header from '$lib/components/header.svelte'
    import Footer from '$lib/components/footer.svelte';
   
  </script>
  
  <Meta />
  <Header/>
  <slot />
  <Footer/>
  