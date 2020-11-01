function importEs6() {
  return {
    name: 'import-es6',
    renderChunk(code, chunk, options) {
      if (['es', 'esm'].indexOf(options.format) >-1) {
        chunk.imports = chunk.imports.map((mod) => {
          return mod.replace(/^(celia\.\w+)\/(\S+)$/, '$1/es/$2');
        });
        return code.replace(/'(celia\.\w+)\/(\S+)'/g, '\'$1/es/$2\'');
      }
    }
  };
}

module.exports = importEs6;