<script lang="ts">
  import type { Props } from '@/lib'

  let { name, time }: Props = $props()
  let tooltipEl: HTMLElement
</script>

<div class="tooltip bg-gray-100 rounded p-2" bind:this={tooltipEl}>
  <h1>{name}</h1>
  <p>{time}</p>
</div>

<style lang="postcss">
</style>
