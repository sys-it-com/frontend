<script lang="ts">
  let {
    title,
    description = 'This is a placeholder page. Replace it with real content before going live.',
  }: {
    title: string
    description?: string
  } = $props()
</script>

<div class="dummy-page">
  <div class="container">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
</div>

<style>
  .dummy-page {
    padding: 2rem 1rem;
    max-width: 800px;
    margin: 0 auto;
    color: var(--color-darkGrey, #1b2433);
    line-height: 1.6;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    margin: 0;
  }
</style>
