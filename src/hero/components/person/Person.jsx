import './person.css'

export const Person = () => {
  return (
    <div id='person'>
      <div id='person-top'>
        <div id='person-head'>
          <div className='headphone'>
            <div className='headphone strap outline-thin'></div>
            <div className='headphone speaker outline-thin'>KEXP</div>
          </div>
          <div id='person-hair'>
            <div className='hair top outline-thin'></div>
            <div className='hair back outline-thin'></div>
            <div className='hair sideburn outline-thin'></div>
          </div>
          <div id='person-face'>
            <div id='eyebrows'>
              <div className='brow left'></div>
            </div>
            <div id='eyes'>
              <div className='eye left'></div>
            </div>
            <div id='nose'></div>
            <div id='chin'>
              <div id='mouth'></div>
            </div>
          </div>
        </div>
        <div id='person-neck'></div>
        <div id='person-body'>
          <div className='arm left'>
            <div className='arm-top'>
              <div className='arm-sleeve'></div>
              <div className='arm-bicep outline-thin'></div>
            </div>
            <div className='arm-bottom'>
              <div className='arm-forearm outline-thin'></div>
              <div className='arm-hand outline-thin'></div>
            </div>
          </div>
          <div className='arm right'>
            <div className='arm-bottom'>
              <div className='arm-forearm outline-thin'></div>
              <div className='arm-hand outline-thin'></div>
            </div>
          </div>
          <div id='person-waist'></div>
        </div>
      </div>
      <div id='person-legs'>
        <div className='leg left'>
          <div className='leg leg-top'></div>
          <div className='leg leg-bottom'>
            <div className='leg calf'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
