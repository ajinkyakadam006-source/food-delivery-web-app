import React, { useState } from 'react';

import Brownie from '../../assests/Brownie with Icecream.jpg';
import Burger from '../../assests/Burger.jpg';
import ButterChicken from '../../assests/Butter-Chicken.webp';
import ChickenPizza from '../../assests/Chicken Pizza.jpg';
import ChickenBiryani from '../../assests/Chicken-Biryani.jpg';
import ChickenFriedRice from '../../assests/Chicken-fried-rice.jpg';
import ChilliChicken from '../../assests/chilli-chicken.jpg';
import ChocolateIcecream from '../../assests/Chocolate Icecream.jpg';
import Dosa from '../../assests/Dosa.jpg';
import IdliSambar from '../../assests/Idli Sambar.jpg';
import MargheritaPizza from '../../assests/Margherita Pizza.jpg';
import PaneerRoll from '../../assests/Paneer Roll.jpg';
import PaneerButterMasala from '../../assests/Paneer-Butter-Masala.jpg';
import PavBhaji from '../../assests/Pav-Bhaji.jpg';
import Pizza from '../../assests/Pizza.jpg';
import PunjabiSamosa from '../../assests/Punjabi-samosa.jpg';
import Shawarma from '../../assests/Shawarma.jpg';
import VadaPav from '../../assests/Vada-pav.jpg';
import VegBiryani from '../../assests/Veg-Biryani.jpg';
import VegManchurian from '../../assests/veg-manchurian.jpg';


import Card from '../Card/Card';
import './Home.css';
import { FaSearch } from 'react-icons/fa';


const Home = ({cart,setCart}) => {

    let[search,setSearch]=useState("")

    let cardData= [
        { id: 1, name: "Brownie with Icecream", price: 150, image: Brownie },
        { id: 2, name: "Burger", price: 200, image: Burger },
        { id: 3, name: "Butter Chicken", price: 250, image: ButterChicken },
        { id: 4, name: "Chicken Pizza", price: 300, image: ChickenPizza },
        { id: 5, name: "Chicken Biryani", price: 250, image: ChickenBiryani },
        { id: 6, name: "Chicken Fried Rice", price: 220, image: ChickenFriedRice },
        { id: 7, name: "Chilli Chicken", price: 240, image: ChilliChicken },
        { id: 8, name: "Chocolate Icecream", price: 120, image: ChocolateIcecream },
        { id: 9, name: "Dosa", price: 100, image: Dosa },
        { id: 10, name: "Idli Sambar", price: 90, image: IdliSambar },
        { id: 11, name: "Margherita Pizza", price: 280, image: MargheritaPizza },
        { id: 12, name: "Paneer Roll", price: 150, image: PaneerRoll },
        { id: 13, name: "Paneer Butter Masala", price: 220, image: PaneerButterMasala },
        { id: 14, name: "Pav Bhaji", price: 120, image: PavBhaji },
        { id: 15, name: "Pizza", price: 300, image: Pizza },
        { id: 16, name: "Punjabi Samosa", price: 30, image: PunjabiSamosa },
        { id: 17, name: "Shawarma", price: 80, image: Shawarma },
        { id: 18, name: "Vada Pav", price: 20, image: VadaPav },
        { id: 19, name: "Veg Biryani", price: 200, image: VegBiryani },
        { id: 20, name: "Veg Manchurian", price: 180, image: VegManchurian },
       
    ];

    let filterData=cardData.filter((item)=>{
        return item.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <div className="search">
              <div className="searchBar">
                <FaSearch/>
                <input type="text" placeholder="Search food" value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
                />
            </div>
        </div>
         <Card cardData={filterData} cart={cart} setCart={setCart} />
        </div>
    )
}

export default Home