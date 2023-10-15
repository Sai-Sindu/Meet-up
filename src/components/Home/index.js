import {Link} from 'react-router-dom'

import Header from '../Header'
import DetailsContext from '../../context/DetailsContext'

import {
  HomeContainer,
  WelcomeTitle,
  WelcomeDescription,
  RegisterButton,
  MeetupImg,
  WelcomeWithName,
  WelcomeWithTopic,
} from './styledComponents'

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <DetailsContext.Consumer>
      {value => {
        const {name, topic, isRegister} = value

        return (
          <>
            <Header />
            <HomeContainer>
              {isRegister ? (
                <>
                  <WelcomeWithName>Hello {name}</WelcomeWithName>
                  <WelcomeWithTopic>Welcome to {topic}</WelcomeWithTopic>
                </>
              ) : (
                <>
                  <WelcomeTitle>Welcome To Meetup</WelcomeTitle>
                  <WelcomeDescription>
                    Please register for the topic
                  </WelcomeDescription>
                  <Link to="/register">
                    <RegisterButton type="button" onClick={onClickRegister}>
                      Register
                    </RegisterButton>
                  </Link>
                </>
              )}
              <MeetupImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          </>
        )
      }}
    </DetailsContext.Consumer>
  )
}
export default Home
