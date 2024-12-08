import { mount, unmount, type Component } from 'svelte'

interface Props {
  name: string
  time: number
}

export type RenderedComponent = Component<Props>

export class SvelteWrapper {
  dom: HTMLElement
  component?: RenderedComponent
  mounted?: {}
  props: Props = $state({
    name: 'component',
    time: Date.now()
  })

  constructor(dom: HTMLElement, component?: RenderedComponent) {
    this.dom = dom
    this.component = component
  }

  update(time: number) {
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
