import React from 'react'

const DetailsContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  isRegister: false,
  showError: false,
  changeName: () => {},
  changeTopic: () => {},
  register: () => {},
  updateError: () => {},
})

export default DetailsContext
