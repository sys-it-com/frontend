<script lang="ts">
  import { Group } from '@freenit-framework/core'
  import store from '$lib/store'

  let { data: props } = $props()
</script>

<Group fqdn={props.fqdn} name={props.name} store={store} />
