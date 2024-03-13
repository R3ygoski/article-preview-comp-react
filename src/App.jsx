import Profile from './components/Profile'
import './App.scss'

const App = () => {
  return (
    <>
      <main className="card">
        <figure className="card__image"/>
        <article className="card__article">
          <h1 className="card__article-title">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
          <p className="card__article-desc">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
          <Profile/>
        </article>
      </main>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/R3ygoski" target='_blank' rel="noreferrer">Bernardo Poggioni</a>.
      </div>
    </>
  )
}

export default App