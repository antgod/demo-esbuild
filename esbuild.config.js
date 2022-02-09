import esbuild from 'esbuild';
import babel from 'esbuild-plugin-babel';

esbuild
  .build({
      entryPoints: ['app.jsx'],
      bundle: true,
      outfile: 'bundle.js',
      watch: {
        onRebuild(error, result) {
          if (error) console.error('watch build failed:', error)
          else console.log('watch build succeeded:', result)
        },
      },
      plugins: [babel({
        config: {
          plugins: ['styled-jsx/babel']
        }
      })],
  })
  .catch(() => process.exit(1));