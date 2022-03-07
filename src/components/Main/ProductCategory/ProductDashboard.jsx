import React from 'react'
import { Outlet } from 'react-router'
import FixedImage from '../FixedImage/FixedImage'
import CategoryBar from './CategoryBar'

const ProductDashboard = () => {
    return (
        <div>
            <CategoryBar/>
            <Outlet/>
        </div>
    )
}
export default ProductDashboard