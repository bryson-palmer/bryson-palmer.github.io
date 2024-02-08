import './guitar.css'

export const Guitar = () => {
  return (
    <div id='instrument'>
      <div className='guitar-top'>
        <div className='guitar head'></div>
        <div className='guitar-neck'></div>
      </div>
      <div className='guitar-body'>
        <div className='guitar body-top'></div>
        <div className='body-hole'></div>
        <div className='guitar body-bottom'></div>
      </div>
    </div>
  )
}
