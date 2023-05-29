export default function Card() {
  return (
    <div className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-full text-black text-xs px-3 py-1 m-2">
          Electronics
        </span>
        <img className="w-full h-full object-cover rounded-lg" src="https://dummyimage.com/600x400/000/fff" alt="headphones" />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          +
        </div>
      </figure>

      <p className="flex justify-between items-center">
        <span className="text-sm font-light">
          Headphones
        </span>
        <span className="text-lg font-medium">
          $300
        </span>
      </p>
    </div>
  )
}
