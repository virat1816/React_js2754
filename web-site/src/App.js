// COMPONENTS
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Steps from "./components/Steps";
import Store from "./components/Store";
import Testimonials from "./components/Testimonials";


// DATA 
import { StepsData } from "./data/StepsData"
import { StoreData } from "./data/StoreData"
import { TestData } from "./data/TestData";


function App() {
   return (
      <>

         {/*  Header */}
         <header id="header-menu">
            <Navbar />
            <section id="landing-section">
               <div id="maintext-wrapper">
                  <h1>Vegan Store Simple Website Template</h1>
                  <p>
                     With nutrition, all the vital functions of the body are connected.
                     It is the source of the development of tissues and cells,
                     their constant renewal, the saturation of man with energy.
                  </p>
               </div>
            </section>
         </header>


         {/*  Steps Section */}
         <div class="row">
            <Steps data= {StepsData} />
         </div>


         {/*  Store Section */}
         <section id="store-section">
            <p id="store-line">Fresh food</p>
            <h3>Our Vegan Store!</h3>
            <p id="store-dec">Radish contains a lot of fiber, pectin and mineral salts.</p>
            <div id="storeitem-wrapper">
               <Store data= {StoreData} />
            </div>
         </section>


         {/*  Testimonial Section */}
         <section id="testimonials-section">
            <p id="store-line">fresh food</p>
            <h3>our Vegan shop!</h3>
            <p id="test-dec">According to experts, any habit can be formed in 21 days. The same statement applies to healthy eating.</p>
            <div id="testicon-wrapper">
               <Testimonials data={TestData}/>
            </div>
         </section>


         {/* stats */}
         <section id="stats-section">
            <div id="stats-wrapper">
               <div class="stats-item">
                  <h3>7</h3>
                  <p>year of experiences</p>
               </div>
               <div class="stats-item">
                  <h3> 123k</h3>
                  <p>happy customers</p>
               </div>
               <div class="stats-item">
                  <h3>72k</h3>
                  <p>100% satisfaction</p>
               </div>
               <div class="stats-item">
                  <h3>13k</h3>
                  <p>detox smoothies</p>
               </div>
            </div>
         </section>


         {/* footer section */}
         <Footer/>
      </>

   )
}

export default App;
