import Enter from "./Enter";
import Forms from "./Forms";

export default function Home() {
  return (
    <>
      <Forms />
      <Enter />
      <div className="bg-slate-400 py-10 px-10 grid gap-10 min-h-screen">
        <div className="bg-white p-8 rounded-3xl shadow-md ">
          <span className="font-extrabold text-2xl">Selected Item</span>
          <ul className="">
            {[1, 2].map((v, i) => (
              <div
                key={i}
                className="flex justify-between first:bg-blue-50 last:bg-blue-50"
              >
                <span className="text-gray-500">Gray Chair</span>
                <span className="font-semibold"> $19</span>
              </div>
            ))}
          </ul>
          <ul className="">
            {[1].map((v, i) => (
              <div key={i} className="flex justify-between only:bg-red-500">
                <span className="text-gray-500">Gray Chair</span>
                <span className="font-semibold"> $19</span>
              </div>
            ))}
          </ul>
          <ul className="">
            {[1, 2, 3, 4].map((v, i) => (
              <div
                key={i}
                className="flex justify-between even:bg-amber-500 odd:bg-green-300"
              >
                <span className="text-gray-500">Gray Chair</span>
                <span className="font-semibold"> $19</span>
              </div>
            ))}
          </ul>
          <ul>
            {["a", "b", "c", ""].map((v, i) => (
              <li key={i} className="bg-blue-200 py-4 empty:hidden">
                {v}
              </li>
            ))}
          </ul>
          <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
            <span>Total</span>
            <span className="font-semibold"> $38</span>
          </div>
          <div className="hover:bg-teal-400 bg-blue-500 p-3 mt-5 w-1/3 rounded-2xl text-center mx-auto">
            <span className="text-white">Checkout</span>
          </div>
        </div>

        <div className="bg-white overflow-hidden rounded-3xl shadow-md ">
          <div className=" bg-blue-500 flex justify-between p-6 pb-14">
            <h4 className="font-semibold text-2xl text-white ">Profile</h4>
            <span className="text-2xl">🛒</span>
          </div>
          <div className="bg-white p-6 relative -top-5 rounded-xl">
            <div className="flex justify-between items-end relative -mt-16 ">
              <div className="flex  flex-col  items-center justify-between ">
                <span className="text-gray-300 text-sm">Orders</span>
                <span className="font-semibold">$340</span>
              </div>
              <div className="w-24 h-24 rounded-full bg-blue-200 mb-8 " />
              <div className="flex flex-col  items-center  justify-between">
                <span className="text-gray-300 text-sm">Spent</span>
                <span className="font-semibold">$2,132</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <span className="font-semibold text-lg">Tony Molly</span>
                <span className="text-gray-500 text-sm">미국</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-md ">
          <div className="flex mb-5 justify-between items-center">
            <span>🔙</span>
            <div className="flex items-center space-x-3">
              <span className="font-semibold  ">⭐ 4.9</span>
              <span className="p-2 shadow-md ">❤️</span>
            </div>
          </div>
          <div className="bg-zinc-400 h-72 mb-5"></div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Swonn Lounge</span>
            <span className="text-xs text-gray-400">Chair</span>

            <div className="flex justify-between">
              <div className="space-x-2 mt-6">
                <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-amber-600 ring-offset-2 transition" />
                <button className="w-5 h-5 rounded-full bg-indigo-500" />
                <button className="w-5 h-5 rounded-full bg-teal-500" />
              </div>
              <div className="space-x-4">
                <button className="aspect-square w-8 rounded-lg font-medium bg-blue-200">
                  -
                </button>
                <span className="font-semibold">1</span>
                <button className="aspect-square w-8 rounded-lg font-medium bg-blue-200">
                  +
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">$450</span>
              <button className=" bg-blue-500 font-semibold  text-white rounded-xl px-10 py-4">
                Add to Chart
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-md "></div>
      </div>
    </>
  );
}
