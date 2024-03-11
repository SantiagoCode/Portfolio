const opacityOnClick = () => {
  const idSections = [ 'Hero', 'Portfolio', 'SantiagoExperience', 'AboutMe' ]

  idSections.map((id) => {
    const el = document.querySelector(`#${id}`)
    el?.classList.add('opacity-0')
  })
}

export default opacityOnClick