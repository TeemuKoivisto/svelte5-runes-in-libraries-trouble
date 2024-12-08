import { mount, unmount } from 'svelte'

export class SvelteWrapper {
  wrapper
  component
  mounted
  props = $state({
    name: 'component',
    time: Date.now()
  })
  dom

  constructor(dom, component) {
    this.component = component
    this.dom = dom
    this.wrapper = document.createElement('div')
    this.wrapper.className = '.wrapper'
    dom.appendChild(this.wrapper)
  }

  update(time) {
    this.props.time = time
    if (this.mounted) {
      // this.mounted.$set(this.props)
    } else if (this.component) {
      this.mounted = mount(this.component, {
        target: this.wrapper,
        props: this.props
      })
    }
  }

  destroy() {
    this.mounted && unmount(this.mounted)
    this.wrapper.remove()
  }
}
