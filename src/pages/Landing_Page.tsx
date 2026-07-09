
import bg from "@/assets/images/bg.jpg";
import logo from "@/assets/images/logo.png"

const Landing = () => {
    return (
        <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          `url(${bg})`,
      }}
    >
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Logo */}
      <div className="absolute left-6 top-6 z-20">
        <img
          src={logo}
          alt="Mottu Claims Logo"
          className="h-14 w-auto object-contain md:h-16"
        />
      </div>
      <div className="absolute left-6 bottom-0 z-20">
            <h4 className="text-white/50"> Designed and Developed by Swetha Udayakumar</h4>
      </div>
      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">



          {/* Customer Card */}
          <div className="flex items-center justify-center">
            <div className="size-72 rounded-3xl border border-white/20 bg-white/15 p-8 shadow-2xl backdrop-blur-2xl">
              <div className="flex h-full items-center justify-center">
                <h1 className="text-4xl font-bold text-white">
                  Bikers
                </h1>
              </div>
            </div>
          </div>
          {/* Employee Card */}
          <div className="flex items-center justify-center">
            <div className="size-72 rounded-3xl border border-white/20 bg-white/15 p-8 shadow-2xl backdrop-blur-2xl">
              <div className="flex h-full items-center justify-center">
                <h1 className="text-4xl font-bold text-white">
                  Motu-ian
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Landing;