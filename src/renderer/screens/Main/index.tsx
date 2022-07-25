import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Container, Heading } from 'renderer/components'
import { useWindowStore } from 'renderer/store'

import { Logo } from 'renderer/components/Logo'

export function MainScreen() {
  const { App } = window // The "App" comes from the bridge

  const navigate = useNavigate()
  const store = useWindowStore().about

  useEffect(() => {
    App.sayHelloFromBridge()

    App.whenAboutWindowClose(({ message }) => {
      console.log(message)

      store.setAboutWindowState(false)
    })
  }, [])

  function openAboutWindow() {
    App.createAboutWindow()
    store.setAboutWindowState(true)
  }

  return (
    <Container>
      <Heading>Hi, {App.username || 'there'}! 👋</Heading>

      <Logo type="square" color="blue" />

      <nav>
        <Button
          className={store.isOpen ? 'disabled' : ''}
          onClick={openAboutWindow}
        >
          Open About Window
        </Button>

        <Button onClick={() => navigate('anotherScreen')}>
          Go to Another screen
        </Button>
      </nav>
    </Container>
  )
}
