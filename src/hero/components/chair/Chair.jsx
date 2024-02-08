import './chair.css'

export const Chair = () => {
  return (
    <div id='chair'>
      <div className='chair-back'>
        <div className='chair-back top'></div>
        <div className='chair-back bottom one'></div>
        <div className='chair-back bottom two'></div>
      </div>
      <div className='chair-seat'></div>
      <div className='chair-base'></div>
    </div>
  )
}
