import React from 'react'
import turkeyHigh from "./images/tr.svg"
// import rusevi from "./images/rusevi.png"
import matrushka from "./images/matrushka.png"
const MainPage = () => {
  return (
    <div>
     <div className='w-100 py-5 mainPageFirst position-relative' style={{backgroundColor:"#e2e9ff"}}>
     <div className='container px-5 pt-5 pb-5 '>
        <div className='row gap-0'>
            <div className='col-lg'>
            <h1 className='mainBaslik'>Rusya’da yüksek öğrenim: giriş, eğitim, kariyer</h1>
                <div className='gradient-text'>
                <h3 className='baslikAlt'>Хочешь учиться в России?</h3>
                </div>  
                <div className='d-flex gap-2'>
                <a href="" className='btn rusEviButton pe-5 tgButton' style={{paddingLeft:"2.2rem"}}>Rusevi</a>
                <a href="" className='btn tgButton'>Telegram <i class="fa-brands fa-telegram"></i></a>
                </div>
            </div>
            <div className='col-lg'>
            <img src={turkeyHigh} className='w-100 turkeyMapMain' alt="" />
            </div>
        </div>
        
      </div>
      <div class="position-absolute bottom-0 start-25 ms-5">
        <img src={matrushka} alt="" style={{width:"15%"}}/>
        </div>
        <div class="position-absolute top-0 end-0 me-5 rotateMat">
        <img src={matrushka} alt="" style={{width:"15%"}}/>
        </div>
     </div>
     
    </div>
  )
}

export default MainPage
