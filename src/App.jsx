import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

import Header from './components/Header'

import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './Context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
import Post from './components/Post'

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header text="FeedBack Application" />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/:id/:name" element={<Post />} />
          </Routes>

          <Card>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </Card>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App