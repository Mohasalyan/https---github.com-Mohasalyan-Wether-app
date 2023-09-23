import React from 'react'
import MainNavBar from './MainNavBar'
import { Outlet } from 'react-router'

export default function ShearedLayOut() {
  return (
    <>
        <MainNavBar/>
    <Outlet/>
    </>

  )
}
