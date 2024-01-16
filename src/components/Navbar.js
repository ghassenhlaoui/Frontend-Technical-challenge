import CafeStreetLogo from '../assets/img/street-cafe-logo.jpg'
import shop from '../assets/img/shop.png'
import './navbar.css';
const Navbar = () => {
    return ( 
        <nav>
         <div class="logo">
         <img src={CafeStreetLogo}  alt="logo" />
            
         </div>
         <input type="checkbox" id="click" />
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
         <ul>
            <li><a class="active" href="#">About US</a></li>
            <li><a href="#">Our Product</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">
                <input 
                type='text'
                placeholder='Search for product'/>
                
                </a></li>
            <li><a href="#"><img className="shop" src={shop} alt="cart" /></a></li>
         </ul>
      </nav>
     );
}
 
export default Navbar;