const Shimmer = () =>{
    return (
        <>
  <div className="relative">
    {/* Overlay Loader */}
    <div className="absolute inset-0 flex items-center justify-center bg-white/0 z-10 bottom-[400px]">
      <div
        className="h-16 w-16 animate-spin rounded-full border-6 border-amber-500 border-t-transparent"
        aria-label="Loading"
        role="status"
      />
    </div>

    {/* Cards */}
    <div className="flex justify-center flex-wrap my-[70px] relative z-0">
      <div className="my-4 py-2 w-[280px] h-[350px] rounded-2xl shadow-md mx-5 overflow-hidden hover:shadow-2xl transition-shadow bg-[#f0f0f0] hover:outline-2 hover:outline-amber-200"></div>
      <div className="my-4 py-2 w-[280px] h-[350px] rounded-2xl shadow-md mx-5 overflow-hidden hover:shadow-2xl transition-shadow bg-[#f0f0f0] hover:outline-2 hover:outline-amber-200"></div>
      <div className="my-4 py-2 w-[280px] h-[350px] rounded-2xl shadow-md mx-5 overflow-hidden hover:shadow-2xl transition-shadow bg-[#f0f0f0] hover:outline-2 hover:outline-amber-200"></div>
      <div className="my-4 py-2 w-[280px] h-[350px] rounded-2xl shadow-md mx-5 overflow-hidden hover:shadow-2xl transition-shadow bg-[#f0f0f0] hover:outline-2 hover:outline-amber-200"></div>
      <div className="my-4 py-2 w-[280px] h-[350px] rounded-2xl shadow-md mx-5 overflow-hidden hover:shadow-2xl transition-shadow bg-[#f0f0f0] hover:outline-2 hover:outline-amber-200"></div>
      <div className="my-4 py-2 w-[280px] h-[350px] rounded-2xl shadow-md mx-5 overflow-hidden hover:shadow-2xl transition-shadow bg-[#f0f0f0] hover:outline-2 hover:outline-amber-200"></div>
      <div className="my-4 py-2 w-[280px] h-[350px] rounded-2xl shadow-md mx-5 overflow-hidden hover:shadow-2xl transition-shadow bg-[#f0f0f0] hover:outline-2 hover:outline-amber-200"></div>
      <div className="my-4 py-2 w-[280px] h-[350px] rounded-2xl shadow-md mx-5 overflow-hidden hover:shadow-2xl transition-shadow bg-[#f0f0f0] hover:outline-2 hover:outline-amber-200"></div>
      <div className="my-4 py-2 w-[280px] h-[350px] rounded-2xl shadow-md mx-5 overflow-hidden hover:shadow-2xl transition-shadow bg-[#f0f0f0] hover:outline-2 hover:outline-amber-200"></div>
      <div className="my-4 py-2 w-[280px] h-[350px] rounded-2xl shadow-md mx-5 overflow-hidden hover:shadow-2xl transition-shadow bg-[#f0f0f0] hover:outline-2 hover:outline-amber-200"></div>
      <div className="my-4 py-2 w-[280px] h-[350px] rounded-2xl shadow-md mx-5 overflow-hidden hover:shadow-2xl transition-shadow bg-[#f0f0f0] hover:outline-2 hover:outline-amber-200"></div>
      <div className="my-4 py-2 w-[280px] h-[350px] rounded-2xl shadow-md mx-5 overflow-hidden hover:shadow-2xl transition-shadow bg-[#f0f0f0] hover:outline-2 hover:outline-amber-200"></div>
    </div>
  </div>
</>

    )
}
export default Shimmer;