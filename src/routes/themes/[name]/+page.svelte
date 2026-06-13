<script lang="ts">
  import { Theme } from 'freenit'
  import store from '$lib/store'

  let { data: props } = $props()
</script>

<Theme name={props.name} store={store} />
