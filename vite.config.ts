// @ts-nocheck
import { md } from "./plugins/md";
import fs from 'fs';
import {baseParse} from '@vue/compiler-core';

export default {
  base: './',
  assetsDir: 'assets',
  plugins: [md()],
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      const style = baseParse(file).children.find(n => n.tag === 'style')
      const content = parsed.children[0].content.split('$')

      const title = content[0].split(':')[1].trim()
      const subTitle = content[1].split(':')[1].trim()

      let main = file.split(parsed.loc.source).join('').trim()
      if(style) {
        main = main.split(style.loc.source).join('').trim()
      }
      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
        Component.__sourceCodeSubTitle = ${JSON.stringify(subTitle)}
      }`.trim()
    }
  }
};
