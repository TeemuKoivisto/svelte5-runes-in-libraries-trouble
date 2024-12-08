<script lang="ts">
  import { onMount } from 'svelte'

  import { SvelteWrapper } from '@/lib'
  import Component from './Component.svelte'

  let mounted: SvelteWrapper | undefined

  onMount(() => {
    const int = setInterval(() => {
      mounted?.update(Date.now())
    }, 500)
    return () => {
      clearInterval(int)
    }
  })

  function run_mount(dom: HTMLElement) {
    mounted = new SvelteWrapper(dom, Component)
  }
</script>

<main class="max-w-[800px] mx-auto">
  <h1 class="mt-12 mb-4 text-4xl font-semibold">svelte5-runes-in-libraries-trouble</h1>
  <h2>Mount</h2>
  <div class="flex" use:run_mount></div>
</main>

<style lang="postcss">
</style>
