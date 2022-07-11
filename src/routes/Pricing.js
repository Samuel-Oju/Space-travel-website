import React from "react";
import Footer from "../component/Footer";
import HeroImage from "../component/HeroImage";
import PricingCard from "../component/PricingCard";
import Navbar from "../component/Navbar";

const Pricing = () => {
    return(
<div>
<Navbar />
<HeroImage heading="PRICING." text="Choose your trip." /> 
<PricingCard />

<Footer />
</div>
    )
}
export default Pricing
