import React, {useState} from "react";
import './Menu.css';
import { FaShoppingCart } from "react-icons/fa";


const menuItems =[

{category: 'Pizza', Name: 'Delicious Pizza',Price: '$10', Image: '/images (2).jpeg'},
{category: 'Burger', Name: 'Testy Burger',Price: '$8', Image: '/image6.jpeg'},
{category: 'Pizza', Name: 'Butter Pizza',Price: '$15', Image: '/images (2).jpeg'},
{category: 'Pasta', Name: 'Butter Pasta',Price: '$10', Image: '/images4.jpeg'},
{category: 'Fries', Name: 'French Fries',Price: '$5', Image: '/image3.jpeg'},
{category: 'Pizza', Name: 'Onion Pizza',Price: '$5', Image: '/images (2).jpeg'},
{category: 'Burger', Name: 'Chizes Burger',Price: '$5', Image: '/image6.jpeg'},
{category: 'Burger', Name: 'Testy Burger',Price: '$4', Image: '/image6.jpeg'},
{category: 'Pasta', Name: 'Delicious Pasta',Price: '$6', Image: '/images4.jpeg'}

];


const category =['ALL','Burger','Pizza','Pasta', 'Fries'];

const Menu = ()=>{


    const[activeCategory, setActiveCategory] = useState('All');

    const filterdItems = activeCategory === 'All' ? menuItems : menuItems.filter(item => item.category === activeCategory);


    return(


        <div className="menu">

            <h2>Our menu</h2>
            <div className="menu-categoris">
                {category.map(category =>(
                    <button key={category} className={activeCategory === category ? 'active' : ''}  onClick = {()=> setActiveCategory(category)}>
                        {category} 
                    </button>

                ))}
            </div>
            <dov className="menu-items">
                {filterdItems.map((item , index)=>(
                    <div className="menu-card" key={index}>
                        <img src={item.Image} alt={item.Name} />

                        <div className="menu-card-content">
                            <h3>{item.Name}</h3>
                            <p>Fast food is a commercial term, limited to food sold in a restaurant or store with frozen, preheated or precooked ingredients and served in packaging for take-out or takeaway. Fast food was created as a commercial strategy to accommodate large numbers of busy commuters, travelers and wage workers.</p>
                            <div className="Menu-card-price">{item.Price}</div>
                            <button className="order-button">
                                Order now
                                <FaShoppingCart /> 
                            </button>
                        </div>
                    </div>
                
                ))}
            </dov>
        </div>
    )
};
export default Menu;