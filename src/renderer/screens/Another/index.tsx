import { useNavigate } from 'react-router-dom'

import { Container, Heading, Button } from 'renderer/components'
import { useWindowStore } from 'renderer/store'

export function AnotherScreen() {
  const { App } = window // The "App" comes from the bridge
  const navigate = useNavigate()
  const store = useWindowStore().about

  App.whenAboutWindowClose(({ message }) => {
    console.log(message)

    store.setAboutWindowState(false)
  })

  function openAboutWindow() {
    App.createAboutWindow()
    store.setAboutWindowState(true)
  }

  return (
    <Container>
      <Heading>Hello! 👋</Heading>

      <h2>It's another screen! ✨</h2>
      <Button
        className={store.isOpen ? 'disabled' : ''}
        onClick={openAboutWindow}
      >
        Open About Window
      </Button>

      <Button onClick={() => navigate('/')}>Go back to Main screen</Button>
    </Container>
  )
}
