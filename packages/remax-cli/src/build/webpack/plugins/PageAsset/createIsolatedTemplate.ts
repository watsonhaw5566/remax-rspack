import ejs from 'ejs';
import type { Meta } from '@remax/types';
import Store, { ExtractedTemplate } from '@remax/build-store';
import { Compilation, sources } from '@rspack/core';

export default async function createIsolatedTemplate(meta: Meta, compilation: Compilation) {
  const templates: ExtractedTemplate[] = [];
  Store.extractedTemplates.forEach(t => {
    if (t.isolated != false) {
      templates.push(t);
    }
  });

  let source: string = await ejs.renderFile(meta.staticEjs!.isolatedTemplates!, {
    templates,
  });

  // 空文件会被 webpack 忽略掉
  if (source.trim() === '') {
    source = '<!-- empty -->\n';
  }

  const fileName = `isolated${meta.template.extension}`;

  compilation.assets[fileName] = new sources.RawSource(source);
}
