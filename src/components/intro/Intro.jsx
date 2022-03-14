import './intro.css'

export const Intro = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="intro">Hello! I'm Kaushik Baidya</div>
        <div className="title">
          I am a <span className="mySpan">FRONTEND DEVELOPER</span>
        </div>
        <div className="desc">
          I am creative and self-starting Front-End Developer with the
          experience of building stable websites and apps in fast-paced,
          collaborative environments.
        </div>
        <button className="btn">
          {' '}
          <span>Contact ME</span>{' '}
        </button>
      </div>
    </div>
  )
}
