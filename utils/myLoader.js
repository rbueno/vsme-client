const myLoader = ({ src, width, quality, ...rest }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

module.exports = myLoader;