<script>
  // import Meta from "$lib/components/meta.svelte";
  import { enhance } from "$app/forms";

  let loading = false;
</script>
<!-- <Meta metaTitle="this is contact page" metaDescription="this is details about contact page"/> -->
<form method="POST" use:enhance>
  <h1>Student Form</h1>
  <br>

  <label for="name">Enter your name:</label><br>
  <input type="text" id="name" name="name" placeholder="Enter your name" required>
  <br><br>

  <label for="email">Enter your email:</label><br>
  <input type="email" id="email" name="email" placeholder="Enter your email" required>
  <br><br>

  <label for="address">Enter your address:</label><br>
  <input type="text" id="address" name="address" placeholder="Enter your address" required>
  <br><br>

  <label for="age">Enter your age:</label><br>
  <input type="number" id="age" name="age" placeholder="Enter your age" required>
  <br><br>

  <button type="submit" class="bg-amber-500">Submit</button>
</form>




