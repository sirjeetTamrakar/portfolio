module.exports = {
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact#projects',
        destination: '/#projects',
        permanent: true,
      },
    ]
  },
}