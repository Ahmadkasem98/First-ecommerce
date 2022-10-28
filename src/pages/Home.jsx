import React from 'react'
import Announcment from '../Component/Announcment'
import Categories from '../Component/Categories'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import NewsLetter from '../Component/NewsLetter'
import Products from '../Component/Products'
import Slider from '../Component/Slider'


export default function Home() {
  return (
    <div>
        <Navbar />
        <Announcment />
        <Slider />
        <Categories />
        <Products />
        <NewsLetter />
        <Footer />
    </div>
  )
}
