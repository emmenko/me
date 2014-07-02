$(document).ready(function() {
  $(this).on('click', 'a[href=#stack]', function(evt) {
    evt.stopPropagation()
    evt.preventDefault()
    $('.profile-stack').slideToggle(600)
  })
})