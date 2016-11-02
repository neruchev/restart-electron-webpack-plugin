import electron from 'electron';
import { resolve } from 'path';
import { spawn } from 'child_process';


export default class RestartElectronPlugin {

  constructor(options) {

    this.options = options || {};
    this.options.script = resolve(process.cwd(), this.options.script);
    this.options.arguments = this.options.arguments || [];
    this.args = this.options.arguments.concat(this.options.script);
  }

  apply(compiler) {

    compiler.plugin('after-emit', (compilation, callback) => {

      if (this.child) {

        this.child.kill();
        this.child = null;
      }

      this.child = spawn(electron, this.args, { 'stdio' : 'inherit' });

      callback();
    });
  }
}
