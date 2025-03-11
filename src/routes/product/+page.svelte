<script>
  export let data;

  const { products } = data;

  console.log(products);
</script>

<ul>
  {#each products as product}
    <li>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
      <a href={`/product/${product.ctaLink}`}>{product.ctaText}</a>
    </li>
  {/each}
</ul>
