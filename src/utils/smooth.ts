"use client"

const idSections = [ 'Navigation', 'Hero_Stack', 'AboutMe', 'Portfolio', 'SantiagoExperience', 'Contact', 'Project', 'Gallery' ]

const removeBlur = () => {
  const el = document.querySelector('.HomeBackground')
  el?.classList.remove('blur');

  idSections.map((id) => {
    const el = document.querySelector(`#${id}`)
    el?.classList.remove('opacity-0')
  })
};

const addBlur = () => {
  const el = document.querySelector('.HomeBackground')
  el?.classList.add('blur');

  idSections.map((id) => {
    const el = document.querySelector(`#${id}`)
    el?.classList.add('opacity-0')
  })
};

export {
  addBlur,
  removeBlur
}
