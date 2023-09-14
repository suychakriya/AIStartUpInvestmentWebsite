import Link from "next/link";

export default function ProductDetail({ name, category ='hi', fund = 'hi', percent = 'hi', image = '/Images/Project/gencraft.jpg', website, overview = "OpenDream is an AI-powered art generation tool that allows users to use the power of AI to generate their own art in seconds with simple prompts. This tool is available online and has plenty of customization options to make your images stand out. Additionally, our servers use A100 graphics processing units (GPUs), resulting in incredibly fast average generation times. OpenDream can queue up to 20 images and generate up to 3 images at the same time, making it faster than using a 6x RTX 3090. You can also build, improve, tweak, modify, and enhance the images you create using one of four AI models. Additionally, users can customize advanced settings to fine-tune their images. OpenDream is a useful tool that helps students, professionals, artists, or anyone else, even without a graphic design background, produce professional results. A free plan is also available, but it has limitations on image queuing, simultaneous generation, and settings. If you want more credits or features, you can sign up for a paid plan. Overall, OpenDream is an efficient and easy-to-use AI tool to generate your own art in seconds." }) {
    return (
    <div className="card flex justify-between rounded-2xl p-10">
        <div className="bg-white w-[58%]">
            <Link href="/Layout/Detailpage">
            <img
                src={image}
                alt={name}
                className="rounded-t-2xl shadow object-cover "
            />
            </Link>
        </div>
        <div className="flex flex-col p-3 px-7 w-[40%] bg-white">
          <p className='text-md text-primary font-semibold py-1'>Funding Project</p>
          <Link href={``}>
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
          <button
                className="w-[40%] justify-center rounded-lg shadow-md px-2 text-sm font-bold text-white bg-primary"
                type="submit"
                id="button-addon2"
              >
                <p className="pb-1">Contact me</p>
              </button>
        </div>
      </div>
    )
}