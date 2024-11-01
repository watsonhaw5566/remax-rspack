import VirtualEntry from './VirtualEntry';

export default class ComponentEntry extends VirtualEntry {
  outputSource() {
    return `
      import { createComponentConfig } from '@remax/runtime';
      import Entry from './${this.filename}';

      Component(createComponentConfig(Entry));
    `;
  }
}
