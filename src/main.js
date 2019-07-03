/* eslint-disable eqeqeq */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import autosize from 'autosize'
import PropertyStore from './models/PropertyStore'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false

const messages = require('./assets/lang.json')

if (window.location.pathname === '/' | window.location.pathname === '/get-started') {
  if (navigator.language === 'ja' | 'ja-JP') {
    var currentLocale = 'ja'
  } else {
    var currentLocale = 'en'
  }
} else if (window.location.pathname === '/ja') {
  var currentLocale = 'ja'
} else if (window.location.pathname === '/en') {
  var currentLocale = 'en'
}

const i18n = new VueI18n({
  locale: currentLocale, // set locale
  messages // set locale messages
})

var ta
var taheights = []

/* eslint-disable no-new */
var thisApp = new Vue({
  i18n,
  router: router,
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  mounted: function () {
    // eslint-disable-next-line
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // eslint-disable-next-line
        db.collection('users').doc(user.uid).set({
          created: true
        }, {
          merge: true
        })
          .then(() => {
            // eslint-disable-next-line
            db.collection('users').doc(user.uid).get().then((doc) => {
              var userData
              if (doc.data().content === undefined) {
                userData = [{
                  text: '',
                  title: ''
                }]
                console.log(userData)
              } else {
                userData = doc.data().content
                if (userData[userData.length - 1].text != '' && userData[userData.length - 1].title != '') {
                  userData.push({
                    text: '',
                    title: ''
                  })
                }
              }
              PropertyStore.state.property.content = userData
              thisApp.$nextTick(function () {
                // eslint-disable-next-line
                document.getElementById('textarea-' + (userData.length - 1)).focus()
                ta = document.querySelectorAll('textarea')
                // eslint-disable-next-line
                autosize.update((ta))
                autosize(ta)
                taheights = []
                ta.forEach((taelement) => {
                  taheights.push(taelement.offsetHeight)
                  taelement.addEventListener('autosize:resized', function () {
                    window.scrollBy(0, taelement.offsetHeight - taheights[parseInt(taelement.id.slice(9))])
                    taheights[parseInt(taelement.id.slice(9))] = taelement.offsetHeight
                  })
                })
              })
            })
          })

        // eslint-disable-next-line
        db.collection('users').doc(user.uid).onSnapshot(function (doc) {
          if (doc.data().content === undefined) {
            var userData = [{
              text: '',
              title: ''
            }]
          } else {
            var userData = doc.data().content
          }
          PropertyStore.state.property.content = userData
          thisApp.$nextTick(function () {
            ta = document.querySelectorAll('textarea')
            // eslint-disable-next-line
            autosize.update((ta))
            autosize(ta)
            taheights = []
            ta.forEach((taelement) => {
              taheights.push(taelement.offsetHeight)
            })
          })
        })

        Mousetrap.bindGlobal(['command+m', 'ctrl+m'], function (e) {
          var tempid = document.activeElement.id
          var tempidnum
          if (tempid.slice(0, 9) === 'titlearea') {
            tempidnum = tempid.slice(10)
          } else if (tempid.slice(0, 8) === 'textarea') {
            tempidnum = tempid.slice(9)
          } else if (tempid == '') {
            tempidnum = PropertyStore.state.property.content.length - 1
          }
          PropertyStore.state.property.content.splice(parseInt(tempidnum) + 1, 0, {
            text: '',
            title: ''
          })
          // eslint-disable-next-line
          db.collection('users').doc(user.uid).update({
            content: PropertyStore.state.property.content
          })
          thisApp.$nextTick(function () {
            document.getElementById('textarea-' + (parseInt(tempidnum) + 1)).focus()
            ta = document.querySelectorAll('textarea')
            // eslint-disable-next-line
            autosize.update((ta))
            autosize(ta)
            taheights = []
            ta.forEach((taelement) => {
              taheights.push(taelement.offsetHeight)
              taelement.addEventListener('autosize:resized', function () {
                window.scrollBy(0, taelement.offsetHeight - taheights[parseInt(taelement.id.slice(9))])
                taheights[parseInt(taelement.id.slice(9))] = taelement.offsetHeight
              })
            })
          })
          return false
        })
        Mousetrap.bindGlobal(['command+s', 'ctrl+s'], function (e) {
          return false
        })
        Mousetrap.bindGlobal(['command+j', 'ctrl+j'], function (e) {
          PropertyStore.state.property.content.splice(PropertyStore.state.property.content.length, 0, {
            text: '',
            title: ''
          })
          // eslint-disable-next-line
          db.collection('users').doc(user.uid).update({
            content: PropertyStore.state.property.content
          })
          thisApp.$nextTick(function () {
            document.getElementById('textarea-' + (PropertyStore.state.property.content.length - 1)).focus()
            ta = document.querySelectorAll('textarea')
            // eslint-disable-next-line
            autosize.update((ta))
            autosize(ta)
            taheights = []
            ta.forEach((taelement) => {
              taheights.push(taelement.offsetHeight)
              taelement.addEventListener('autosize:resized', function () {
                window.scrollBy(0, taelement.offsetHeight - taheights[parseInt(taelement.id.slice(9))])
                taheights[parseInt(taelement.id.slice(9))] = taelement.offsetHeight
              })
            })
          })
          return false
        })
      }
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
        PropertyStore.state.property.content.splice(parseInt(tempidnum) + 1, 0, {
          text: '',
          title: ''
        })
        // eslint-disable-next-line
        db.collection('users').doc(firebase.auth().currentUser.uid).update({
          content: PropertyStore.state.property.content
        })
        console.log(tempidnum)
        thisApp.$nextTick(function () {
          // eslint-disable-next-line
          document.getElementById('textarea-' + (parseInt(tempidnum) + 1)).focus()
          ta = document.querySelectorAll('textarea')
          // eslint-disable-next-line
          autosize.update((ta))
          autosize(ta)
          taheights = []
          ta.forEach((taelement) => {
            taheights.push(taelement.offsetHeight)
            taelement.addEventListener('autosize:resized', function () {
              window.scrollBy(0, taelement.offsetHeight - taheights[parseInt(taelement.id.slice(9))])
              taheights[parseInt(taelement.id.slice(9))] = taelement.offsetHeight
            })
          })
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

            thisApp.$nextTick(function () {
              document.getElementById('textarea-' + (tempidnum - 1)).focus()
              ta = document.querySelectorAll('textarea')
              // eslint-disable-next-line
              autosize.update((ta))
              autosize(ta)
              taheights = []
              ta.forEach((taelement) => {
                taheights.push(taelement.offsetHeight)
                taelement.addEventListener('autosize:resized', function () {
                  window.scrollBy(0, taelement.offsetHeight - taheights[parseInt(taelement.id.slice(9))])
                  taheights[parseInt(taelement.id.slice(9))] = taelement.offsetHeight
                })
              })
            })
            // eslint-disable-next-line
            db.collection('users').doc(firebase.auth().currentUser.uid).update({
              content: PropertyStore.state.property.content
            })
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
            db.collection('users').doc(firebase.auth().currentUser.uid).update({
              content: PropertyStore.state.property.content
            })
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
