document.getElementById('addButton').addEventListener('click', function () {
  const input = document.getElementById('newItem')
  const newItemText = input.value.trim()

  if (newItemText) {
    const ul = document.getElementById('myList')
    const li = document.createElement('li')
    li.classList.add('list-group-item')
    li.textContent = newItemText
    ul.appendChild(li)
    input.value = ''
  } else {
    alert('Please enter an item.')
  }
})
