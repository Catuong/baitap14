export default function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto my-auto">
    <div className="flex items-center justify-between py-3 custom-screen md:py-5">
      <img
        src="https://split-xi.vercel.app/split.svg"
        alt=""
        className=""
      />
      <div className="flex mt-8 md:font-medium">
        <ul className="  text-gray-600 flex justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0 ">
          <li>Features</li>
          <li>Pricing</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="flex gap-5">
        <p className="flex justify-center items-center">Sign in</p>
        <button className="py-2.5 px-4 text-center rounded-full font-medium text-sm text-white bg-gray-800">Get started </button>
        
      </div>
    </div>
    </div>
  );
}
