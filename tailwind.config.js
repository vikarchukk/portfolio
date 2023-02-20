module.exports = {
  content: ['./src/html/**/*.html'],
  theme: {
    extend: {
      screens: {
        max1080: {'max': '1080px'},
        max560: {'max': '560px'},
      },
      colors: {
        blackM: '#0f0f0f',
        whiteM: '#f1f1f1',
      },
    },
  }
}