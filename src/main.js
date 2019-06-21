/* eslint-disable eqeqeq */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import autosize from 'autosize'
import PropertyStore from './models/PropertyStore'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var thisApp = new Vue({
  router: router,
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  mounted: function () {
    // eslint-disable-next-line
    db.collection('user1').doc('input').get().then((doc) => {
      var userData = doc.data().content
      if (userData[userData.length - 1].text != '' && userData[userData.length - 1].title != '') {
        userData.push({text: '', title: ''})
      }
      PropertyStore.state.property.content = userData
      this.$nextTick(function () {
        // eslint-disable-next-line
        document.getElementById('textarea-'+(userData.length - 1)).focus()
        // eslint-disable-next-line
        autosize.update((document.querySelectorAll('textarea')))
        autosize(document.querySelectorAll('textarea'))
      })
    })

    // eslint-disable-next-line
    db.collection('user1').doc('input').onSnapshot(function (doc) {
      var userData = doc.data().content
      PropertyStore.state.property.content = userData
      thisApp.$nextTick(function () {
      // eslint-disable-next-line
        autosize.update((document.querySelectorAll('textarea')))
        autosize(document.querySelectorAll('textarea'))
      })
    })
  }
})

document.addEventListener('keydown', function (event) {
  var KeyID = event.keyCode
  switch (KeyID) {
    case 13:
      var tempid = document.activeElement.id
      if (tempid.slice(0, 9) === 'titlearea') {
        event.preventDefault()
        var tempidnum = tempid.slice(10)
        // eslint-disable-next-line
        if (tempidnum == PropertyStore.state.property.content.length - 1) {
          PropertyStore.state.property.content.push({text: '', title: ''})
        }
        thisApp.$nextTick(function () {
          // eslint-disable-next-line
          autosize(document.querySelectorAll('textarea'))
          document.getElementById('textarea-' + (parseInt(tempidnum) + 1)).focus()
        })
      }
      break
    case 8:
      // eslint-disable-next-line
      var tempid = document.activeElement.id
      if (tempid.slice(0, 8) === 'textarea' && PropertyStore.state.property.content.length !== 1) {
        if (document.getElementById(tempid).value === '') {
          // eslint-disable-next-line
          var tempidnum = tempid.slice(9)
          if (tempidnum != 0) {
            event.preventDefault()
            PropertyStore.state.property.content.splice(tempidnum, 1)
            document.getElementById('textarea-' + (tempidnum - 1)).focus()

            thisApp.$nextTick(function () {
              // eslint-disable-next-line
              autosize.update((document.querySelectorAll('textarea')))
              autosize(document.querySelectorAll('textarea'))
            })
            // eslint-disable-next-line
            db.collection('user1').doc('input').update({ content: PropertyStore.state.property.content })
          } else {
            event.preventDefault()
            PropertyStore.state.property.content.splice(0, 1)

            thisApp.$nextTick(function () {
              document.getElementById('textarea-' + tempidnum).focus()
              // eslint-disable-next-line
              autosize.update((document.querySelectorAll('textarea')))
              autosize(document.querySelectorAll('textarea'))
            })
            // eslint-disable-next-line
            db.collection('user1').doc('input').update({ content: PropertyStore.state.property.content })
          }
        }
      }
      break
    case 37:
      // eslint-disable-next-line
      var tempid = document.activeElement.id
      if (tempid.slice(0, 8) === 'textarea') {
        if (document.getElementById(tempid).selectionStart === 0) {
          // eslint-disable-next-line
          var tempidnum = tempid.slice(9)
          if (tempidnum !== 0) {
            event.preventDefault()
            document.getElementById('textarea-' + (tempidnum - 1)).focus()
          }
        }
      }
      break
    case 38:
      // eslint-disable-next-line
      var tempid = document.activeElement.id
      if (tempid.slice(0, 8) === 'textarea') {
        if (document.getElementById(tempid).selectionStart === 0) {
          // eslint-disable-next-line
          var tempidnum = tempid.slice(9)
          if (tempidnum !== 0) {
            event.preventDefault()
            document.getElementById('textarea-' + (tempidnum - 1)).focus()
          }
        }
      }
      break
    case 39:
      // eslint-disable-next-line
      var tempid = document.activeElement.id
      if (tempid.slice(0, 8) === 'textarea') {
        if (document.getElementById(tempid).selectionStart === document.getElementById(tempid).value.length) {
          // eslint-disable-next-line
          var tempidnum = tempid.slice(9)
          if (tempidnum < PropertyStore.state.property.content.length) {
            event.preventDefault()
            document.getElementById('textarea-' + (parseInt(tempidnum) + 1)).focus()
            document.getElementById('textarea-' + (parseInt(tempidnum) + 1)).setSelectionRange(0, 0)
          }
        }
      }
      break
    case 40:
      // eslint-disable-next-line
      var tempid = document.activeElement.id
      if (tempid.slice(0, 8) === 'textarea') {
        if (document.getElementById(tempid).selectionStart === document.getElementById(tempid).value.length) {
          // eslint-disable-next-line
          var tempidnum = tempid.slice(9)
          if (tempidnum < PropertyStore.state.property.content.length - 1) {
            event.preventDefault()
            document.getElementById('textarea-' + (parseInt(tempidnum) + 1)).focus()
            document.getElementById('textarea-' + (parseInt(tempidnum) + 1)).setSelectionRange(0, 0)
          }
        }
      }
      break
  }
})
