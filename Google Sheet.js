const scriptURL = 'https://script.google.com/macros/s/AKfycbzGzcG_5UdMnW7P-37QiAm5uUoXJ1eB5al_gxHBWDm8kavwgOrPhe9N7b8X_EtFlr_nbw/exec'

const form = document.forms['contacts']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})