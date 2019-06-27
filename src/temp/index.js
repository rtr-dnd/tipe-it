console.log('imported')

window.onload = function () {
  var animationTivel = lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'unsaved.json'
  })
}
