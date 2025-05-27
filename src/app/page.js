'use client';
import React from 'react';
import Navbar from './Components/Navbar';
import Image from 'next/image';
import SliderOne from "../assets/sliderone.webp";
import Bed from "../assets/bed.webp";
import AtticRoom from "../assets/attic-rom.webp";
import Deluxe from "../assets/deluxe-room.webp";
import SuperDeluxe from "../assets/Super-deluxe-rooms.webp";
import SuiteRoom from "../assets/suite-room.webp";
import Cottage from "../assets/cottage.webp";
import Logo from "../assets/royal-logo.png";
import Footer from './Components/Footer';

const Page = () => {
  const rooms = [
    { image: AtticRoom, room: "Luxury Room", privacy: "Private Balcony", facilities: "2 King Bed", rating: 3 },
    { image: Deluxe, room: "Luxury Room", privacy: "Private Balcony", facilities: "2 King Bed", rating: 4 },
    { image: SuperDeluxe, room: "Super Deluxe", privacy: "Private Balcony", facilities: "3 King Bed", rating: 3 },
    { image: SuiteRoom, room: "Suite Room", privacy: "Private Balcony", facilities: "4 King Bed", rating: 4 },
    { image: Cottage, room: "Cottage", privacy: "Private Balcony", facilities: "4 King Bed", rating: 4 },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full">
        <Image src={SliderOne} alt="Slider" className="w-full h-auto object-cover" />
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16">
        <div className="w-full md:w-1/2">
          <Image src={Bed} alt="bed" className="w-full h-auto rounded-xl" />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-3xl md:text-5xl font-serif text-black text-center md:text-left">
            Welcome to Laurent Banon Resort Manali
          </p>
          <h1 className="text-sm font-serif text-[#c19d68] uppercase text-center md:text-left">The Laurent & Banon Resort</h1>
          <p className="text-gray-800 font-serif text-justify">
            The Laurent & Banon Resort by Royal Collections Hotels in Manali is the epitome of luxury and comfort.
            Offering modern and spacious accommodations, each room is equipped with air conditioning, Wi-Fi,
            and 24-hour room services.
          </p>
          <p className="text-gray-800 font-serif text-justify">
            With spectacular views, top-notch facilities, and unparalleled hospitality, this resort is a destination of choice for tourists from all over the world.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="uppercase px-10 md:px-16 bg-[#c19d68] hover:bg-white hover:text-[#c19d68] transition text-white h-12 md:h-14 w-full md:w-60 text-sm border-2 flex items-center justify-center"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Rooms and Facilities Section */}
      <section className="w-full bg-black py-16 px-6 md:px-20">
        <h2 className="text-white font-serif text-2xl md:text-4xl mb-10 text-center">Our Rooms & Facilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
              <Image src={item.image} alt={item.room} className="w-full h-48 object-cover" />
              <div className="p-4 space-y-1">
                <p className="text-lg font-serif text-black">{item.room}</p>
                <p className="text-sm font-serif text-gray-700">Privacy: {item.privacy}</p>
                <p className="text-sm font-serif text-gray-700">Facilities: {item.facilities}</p>
                <p className="text-sm font-serif text-yellow-600">Rating: {item.rating} ⭐</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms & Suites Section */}
      <section className="w-full py-16 bg-black">
        <div className="max-w-6xl mx-auto text-center px-4">
          <Image src={Logo} alt="logo" className="h-20 w-auto mx-auto" />
          <p className="uppercase text-3xl md:text-4xl font-serif text-white mt-6">Rooms & Suites</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
