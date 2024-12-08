import { mount, unmount } from 'svelte'

export class SvelteWrapper {
  dom
  component
  mounted
  props = $state({
    name: 'component',
    time: Date.now()
  })

  constructor(dom, component) {
    this.dom = dom
    this.component = component
  }

  update(time) {
    this.props.time = time
    if (this.mounted) {
      // this.mounted.$set(this.props)
    } else if (this.component) {
      this.mounted = mount(this.component, {
        target: this.dom,
        props: this.props
      })
    }
  }

  destroy() {
    this.mounted && unmount(this.mounted)
  }
}
