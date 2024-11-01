import VirtualEntry from './VirtualEntry';

export default class AppEntry extends VirtualEntry {
  outputSource() {
    return `
      import { createAppConfig } from '@remax/runtime';
      import Entry from '${this.filename}';

      App(createAppConfig(Entry));
    `;
  }
}
