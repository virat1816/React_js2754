const Navbar = () => {
   return (
      <nav>
         <img id="logo" src="https://mobirise.com/extensions/organicamp/assets/images/logo1.jpg" alt="Logo" />
         <div>
            <div class="dropdown-wrapper">
               <a class="menu-item">Demo Pages
                  <i class="fas fa-caret-down"></i>
               </a>
               <div class="dropdown">
                  <a>Menu item 1</a>
                  <a>Menu item 2</a>
                  <a>Menu item 3</a>
               </div>
            </div>
            <a class="menu-item">Watch Video</a>
            <div class="dropdown-wrapper">
               <a class="menu-item"> Blocks</a>
            </div>
            <a class="menu-item">About us</a>

         </div>
      </nav>
   )
};
export default Navbar;



