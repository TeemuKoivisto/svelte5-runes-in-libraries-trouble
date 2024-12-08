<script lang="ts">
  import { onMount } from 'svelte'

  import { SvelteWrapper } from '@/lib'
  import Component from './Component.svelte'

  let mounted: SvelteWrapper | undefined

  $effect(() => {
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

<header>
  <h1
    class="mt-12 px-2 mb-4 md:mt-16 font-cursive text-4xl md:text-7xl tracking-tight flex items-center justify-between"
  >
    App
  </h1>
</header>

<section class="px-4">
  <h2>Mount</h2>
  <div class="flex" use:run_mount></div>
</section>

<style lang="postcss">
</style>
