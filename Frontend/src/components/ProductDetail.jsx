import Link from "next/link";

export default function ProductDetail({ name, category, fund, percent, image, website, overview, youtubeID }) {
    return (
    <div className="card flex justify-between rounded-2xl p-10">
        <div className="bg-white w-[58%] ">
            <iframe
              src={youtubeID}
              title={name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[70%] rounded-2xl shadow object-cover "
            ></iframe>

            {/* </Link> */}
            <div className="grid grid-cols-3 gap-5 py-5">
              <img src={image} alt={name}
              className="rounded-lg" />
              <img src={image} alt={name}
              className="rounded-lg" />
              <img src={image} alt={name}
              className="rounded-lg" />
            </div>
        </div>
        <div className="flex flex-col p-3 px-7 w-[40%] bg-white">
          <p className='text-md text-primary font-semibold py-1'>Funding Project</p>
          <Link href=''>
            <h2 className="text-4xl font-bold text-black py-3">{name}</h2>
          </Link>
          <p className="mb-2 text-md font-bold text-black pb-1">Project Summary</p>
          <p className="mb-2 text-xs text-gray-400 pb-1">{overview}</p>
          <p className="mb-2 text-md font-bold text-black py-5">Project Raising</p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 bg-grayprogressbar">
            <div className="bg-primary h-1.5 rounded-full" style={{width: `${percent}`}} ></div>
          </div>
          <div className='flex justify-between py-2 '>
            <p className='mb-2 text-lg font-semibold text-black pb-1'>{percent} funded</p>
            <p className='mb-2 text-lg font-semibold text-black pb-1'>{fund} raised</p>
          </div>
          <div className="flex justify-center p-5">
            <button
                className=" justify-center rounded-lg shadow-lg px-20 py-2 text-md font-bold text-white bg-primary"
                type="submit"
                onClick={() =>
                  (window.location = "mailto:suy.chakriya19@kit.edu.kh?")
                }
              >
                <p className="pb-1 ">Contact For Funding</p>
            </button>
          </div>
        </div>
      </div>
    )
}