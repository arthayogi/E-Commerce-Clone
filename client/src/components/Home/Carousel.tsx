export default function Carousel() {
    return (
        <>
  <div className="carousel w-full">
    <div id="item1" className="carousel-item w-full">
      <img
        src="https://goodsmileeurope.com/cdn/shop/files/jujutsu_kaisen.png?v=1716954251&width=1920"
        className="w-screen"
        alt="banner1"
      />
    </div>
    <div id="item2" className="carousel-item w-full">
      <img
        src="https://goodsmileeurope.com/cdn/shop/files/demoslayer.png?v=1716954404&width=1920"
        className="w-screen"
        alt="banner2"
      />
    </div>
    <div id="item3" className="carousel-item w-full">
      <img
        src="https://goodsmileeurope.com/cdn/shop/files/bannergoodsmilemiku_copy.png?v=1716361381&width=1920"
        className="w-screen"
        alt="banner3"
      />
    </div>
    <div id="item4" className="carousel-item w-full">
      <img
        src="https://goodsmileeurope.com/cdn/shop/files/mioxenoblade.png?v=1715592085&width=1920"
        className="w-screen"
        alt="banner4"
      />
    </div>
  </div>
  <div className="flex justify-center w-full py-2 gap-2 mb-10">
    <a href="#item1" className="btn btn-xs">
      1
    </a>
    <a href="#item2" className="btn btn-xs">
      2
    </a>
    <a href="#item3" className="btn btn-xs">
      3
    </a>
    <a href="#item4" className="btn btn-xs">
      4
    </a>
  </div>
</>

    )
}