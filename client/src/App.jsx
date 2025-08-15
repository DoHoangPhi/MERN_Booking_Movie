import React from 'react'
import Navbar from './components/navbar'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import MovieDetail from './pages/MovieDetail'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'
import Favorite from './pages/Favorite'
import { Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'



const App = () => {

  const isAdminRouter = useLocation().pathname.startsWith('/admin')

  return (
    <>
      <Toaster />
      {!isAdminRouter && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movie/>} />
        <Route path='/movies/:id' element={<MovieDetail/>} />
        <Route path='/movies/:id/:date' element={<SeatLayout/>} />
        <Route path='/my-bookings' element={<MyBooking/>} />
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/admin/*' element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='add-shows' element={<AddShows/>} />
          <Route path='list-shows' element={<ListShows/>} />
          <Route path='list-bookings' element={<ListBookings/>} />
        </Route>
      </Routes>
      {!isAdminRouter && <Footer/>}
    </>
  )
}

export default App