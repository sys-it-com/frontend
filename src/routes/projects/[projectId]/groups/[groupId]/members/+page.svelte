<script lang="ts">
  import { ProjectGroupMembers } from 'freenit'
  import store from '$lib/store'

  let { data: props } = $props()
</script>

<ProjectGroupMembers projectId={props.projectId} groupId={props.groupId} store={store} />
