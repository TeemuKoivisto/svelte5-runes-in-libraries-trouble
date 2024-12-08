import { mount, unmount, type Component } from 'svelte'

interface Props {
  name: string
  time: number
}

export type RenderedComponent = Component<Props>

export class SvelteWrapper {
  wrapper: HTMLDivElement
  component?: RenderedComponent
  mounted?: {}
  props: Props = $state({
    name: 'component',
    time: Date.now()
  })
  dom: HTMLElement

  constructor(dom: HTMLElement, component?: RenderedComponent) {
    this.component = component
    this.dom = dom
    this.wrapper = document.createElement('div')
    this.wrapper.className = '.wrapper'
    dom.appendChild(this.wrapper)
  }

  update(time: number) {
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
