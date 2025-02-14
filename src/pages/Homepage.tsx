import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

const Homepage: React.FC = () => {
  return (
    <div>
      < HeroSection />
      <div className="pt-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 mb-10">
      <h2 className="text-foreground font-bold text-2xl md:text-4xl lg:text-5xl text-center">
        Features
      </h2>
      <p className="text-base font-light md:text-xl w-full md:w-3/4 lg:w-1/2 my-6 mx-auto text-center">
        Great, now that we have your attention, we will actually talk about how we help you.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="flex-grow basis-[280px] max-w-[360px] rounded-3xl p-6 md:p-8 bg-muted shadow-2xl">
          <div className="w-fit h-fit text-lg font-medium tracking-tight leading-8 bg-background px-4 py-2 rounded-md">
            1
          </div>
          <h3 className="mt-5 text-xl md:text-2xl font-bold tracking-tight">
            Verified Property Owners
          </h3>
          <p className="mt-5 text-sm md:text-lg">
            Rent with confidence knowing that all property owners on our platform are verified. We conduct thorough background checks to ensure you are dealing with trustworthy landlords, giving you peace of mind in your rental journey.
          </p>
          <div className="mt-12 font-normal bg-muted outline-none text-blue-600 flex items-center hover:cursor-pointer">
            Learn more
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-grow basis-[280px] max-w-[360px] rounded-3xl p-6 md:p-8 bg-muted shadow-2xl">
          <div className="w-fit h-fit text-lg font-medium tracking-tight leading-8 bg-background px-4 py-2 rounded-md">
            2
          </div>
          <h3 className="mt-5 text-xl md:text-2xl font-bold tracking-tight">
            Seamless Booking Process
          </h3>
          <p className="mt-5 text-sm md:text-lg">
            Enjoy a hassle-free booking experience with our user-friendly platform. From searching for properties to signing rental agreements, we streamline the entire process to ensure you can secure your rental quickly and efficiently.
          </p>
          <div className="mt-12 font-normal bg-muted outline-none text-blue-600 flex items-center hover:cursor-pointer">
            Learn more
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex-grow basis-[280px] max-w-[360px] rounded-3xl p-6 md:p-8 bg-muted shadow-2xl">
          <div className="w-fit h-fit text-lg font-medium tracking-tight leading-8 bg-background px-4 py-2 rounded-md">
            3
          </div>
          <h3 className="mt-5 text-xl md:text-2xl font-bold tracking-tight">
            Extensive Property Listings
          </h3>
          <p className="mt-5 text-sm md:text-lg">
            Explore a diverse range of rental properties that suit every budget and preference. Our extensive listings include apartments, houses, and shared accommodations, making it easy for you to find your perfect home.
          </p>
          <div className="mt-12 font-normal bg-muted outline-none text-blue-600 flex items-center hover:cursor-pointer">
            Learn more
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default Homepage
