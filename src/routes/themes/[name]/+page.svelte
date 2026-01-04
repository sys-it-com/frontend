<script lang="ts">
  import { Theme } from '@freenit-framework/core'
  import store from '$lib/store'

  let { data: props } = $props()
</script>

<Theme name={props.name} store={store} />
