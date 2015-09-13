var headers = [
  {
    link: 'mailto:emmenko@gmail.com',
    position: 'bottom-left',
    icon: 'icon-email-envelope'
  },
  {
    link: 'https://twitter.com/emmenko',
    position: 'top-left',
    icon: 'icon-twitter'
  },
  {
    link: 'https://github.com/emmenko',
    position: 'top',
    icon: 'icon-github'
  },
  {
    link: 'https://plus.google.com/+NicolaMolinari',
    position: 'top-right',
    icon: 'icon-googleplus-1'
  },
  {
    link: 'https://www.xing.com/profile/Nicola_Molinari',
    position: 'bottom-right',
    icon: 'icon-xing'
  }
]

var Gravatar = React.createClass({
  displayName: 'Gravatar',

  getDefaultProps: function () {
    return { hash: '70f0507ce8012cdaa5e0ab97445136c6' }
  },

  render: function () {
    var url = 'http://www.gravatar.com/avatar/' + this.props.hash + '?s=100'
    return React.createElement('img', { className: 'gravatar', src: url })
  }
})

var ProfileHeader = React.createClass({
  displayName: 'ProfileHeader',

  render: function () {
    var className = 'link-social icon-' + this.props.position
    return React.createElement(
      'a', { href: this.props.link, className: className, target: '_blank' },
      React.createElement('i', { className: this.props.icon })
    )
  }
})

var Profile = React.createClass({
  displayName: 'Profile',

  render: function () {
    return React.createElement('div', { className: 'profile-box' },
      React.createElement('div', { className: 'profile-header' },
        headers.map(function (h, i) {
          return React.createElement(
            ProfileHeader, { key: i, link: h.link, position: h.position, icon: h.icon }
          )
        }),
        React.createElement(Gravatar, null)
      ),
      React.createElement('div', { className: 'profile-title' },
        React.createElement('div', { className: 'side-left' }, React.createElement('span', { className: 'highlighted' }, 'Full-stack')),
        React.createElement('div', { className: 'side-right' }, 'Web Developer')
      ),
      React.createElement('div', { className: 'profile-description' },
        React.createElement('h1', null, 'A passionate JS developer with a growing knowledge of the entire development stack or simply with a genuine interest in all software technology.'),
        React.createElement('h2', null, '» Nicola Molinari')
      )
    )
  }
})

React.render(React.createElement(Profile, null), document.getElementById('root'))
