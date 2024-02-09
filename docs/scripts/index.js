document.querySelectorAll('article').forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('flip')) {
        item.classList.remove('flip')
      } else {
        document.querySelectorAll('article').forEach(card => {
          card.classList.remove('flip')
        })
        item.classList.add('flip')
      }
    })
  })
  