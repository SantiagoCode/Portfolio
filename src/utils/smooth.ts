const idSections = [ 'Hero', 'Portfolio', 'SantiagoExperience', 'AboutMe', 'Project' ]

const smooth = {

  off: () => {
    setTimeout(() => {
      idSections.map((id) => {
        const el = document.querySelector(`#${id}`)
        el?.classList.remove('opacity-0')
      })
    }, 300)
  },

  on: () => {
    setTimeout(() => {
      idSections.map((id) => {
        const el = document.querySelector(`#${id}`)
        el?.classList.add('opacity-0')
      })
    }, 300)
  }
}

export default smooth