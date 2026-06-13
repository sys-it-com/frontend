<script lang="ts">
  import { Group } from 'freenit'
  import store from '$lib/store'

  let { data: props } = $props()
</script>

<Group fqdn={props.fqdn} name={props.name} store={store} />
