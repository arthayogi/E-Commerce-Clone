export default function PreviewProduct() {
  return (
    <div className="grid grid-cols-7 flex-wrap item-start justify-start px-8">
      {/* Card1 */}
      <div className="mx-3 mt-10">
        <div className="card w-36 bg-base-100 shadow-xl">
          <figure className="rounded-lg col-span-7">
            <img
              src="https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/34659/miExuS8yqJMb6AZ4c1enXrhLF3VgpT5P.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <figure>
              <img
                src="https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/maker/1/logo_gsc.png"
                alt=""
              />
            </figure>
            <p className="text-sm font-medium">Nendoroid Fubuki</p>
            <p className="text-sm text-left">$50 (including tax)</p>
            <div className="card-actions">
              <button className="btn btn-block bg-green-200">
                <div className="text-green-700">Buy Now</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
