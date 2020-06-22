module.exports = {
    pwa: {
      name: 'QRgen',
      workboxPluginMode: 'InjectManifest',
      themeColor: '#4A90E2',
      workboxOptions: {
        swSrc: './src/sw.js',
        swDest: 'service-worker.js',
      },
    }
  }
