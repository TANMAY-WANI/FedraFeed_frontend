import React from 'react'
import Sidebar from '../components/Sidebar'
import Carousel from '../components/Carousel'
const PgTwo = () => {
  return (

      <div style={{display:'grid', gridTemplateColumns:'1fr 2fr'}}>
        <div>
          <Sidebar />
        </div>
        <div>
          {/* <Carousel /> */}
        </div>
      </div>

  )
}

export default PgTwo