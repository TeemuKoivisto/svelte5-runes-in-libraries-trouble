<script lang="ts">
  import type { Props } from '@/lib'

  let { name, time }: Props = $props()
</script>

<div class="bg-gray-100 rounded p-2">
  <h1>{name}</h1>
  <p>{time}</p>
</div>

<style lang="postcss">
</style>
