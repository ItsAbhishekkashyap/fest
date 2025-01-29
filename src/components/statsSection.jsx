import React from 'react';

export default function StatsSection() {
  return (
    <section className="relative  overflow-hidden">
      {/* Main container with shadow and background */}
      <div className="max-w-screen max-h-screen mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
          {/* Decorative leaves */}
          <div
            className="absolute left-0 top-0 w-40 h-40 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-28%20192111-JyfJC5PmYNt7fPwPkm5UBXtaMLOtfw.png')] bg-no-repeat opacity-20"
            style={{ transform: "rotate(180deg)" }}
          />
          <div className="absolute right-0 bottom-0 w-40 h-40 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-28%20192111-JyfJC5PmYNt7fPwPkm5UBXtaMLOtfw.png')] bg-no-repeat opacity-20" />

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            <div className="p-6">
              <div className="text-[#006B5E] text-5xl lg:text-6xl font-serif mb-2">20k+</div>
              <div className="text-gray-600">Footfall</div>
            </div>

            <div className="p-6">
              <div className="text-[#006B5E] text-5xl lg:text-6xl font-serif mb-2">25+</div>
              <div className="text-gray-600">Events</div>
            </div>

            <div className="p-6">
              <div className="text-[#006B5E] text-5xl lg:text-6xl font-serif mb-2">100+</div>
              <div className="text-gray-600">Performers</div>
            </div>

            <div className="p-6">
              <div className="text-[#006B5E] text-5xl lg:text-6xl font-serif mb-2">10+</div>
              <div className="text-gray-600">Workshops</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



