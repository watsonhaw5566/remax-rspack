import * as fs from 'fs';
import * as path from 'path';
import { RspackVirtualModulePlugin } from 'rspack-plugin-virtual-module';
import Builder from '../Builder';
import NormalEntry from './NormalEntry';
import { replaceExtension } from '../utils/paths';
import { Compiler, EntryPlugin } from '@rspack/core';

export default class VirtualEntry extends NormalEntry {
  originalSource: string;
  virtualPath: string;
  virtualModule: any;

  constructor(builder: Builder, name: string, filename: string) {
    super(builder, name, filename);
    this.originalSource = fs.existsSync(this.filename) ? fs.readFileSync(this.filename).toString() : '';
    this.virtualPath = path.resolve(
      replaceExtension(this.filename, this.filename.endsWith('.ts') ? '.entry.ts' : '.entry.js')
    );
    this.virtualModule = new RspackVirtualModulePlugin({
      [this.virtualPath]: this.outputSource(),
    });
  }

  outputSource() {
    return this.originalSource;
  }

  updateSource(force = false) {
    const source = fs.readFileSync(this.filename).toString();
    if (!force && source === this.originalSource) {
      return;
    }
    this.originalSource = source;
    this.virtualModule.writeModule(this.virtualPath, this.outputSource());
  }

  addToWebpack(compiler: Compiler) {
    if (!this.virtualModule._compiler) {
      this.virtualModule.apply(compiler);
      this.virtualModule.writeModule(this.virtualPath, this.outputSource());
    }
    new EntryPlugin('', this.virtualPath, { name: this.name }).apply(compiler);
  }
}
