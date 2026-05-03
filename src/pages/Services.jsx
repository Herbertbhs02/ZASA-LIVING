import React from "react";

const Services = () => {
  return (
    <div className="">
      <h3 className="text-2xl font-bold text-center">SERVICES</h3>
     
      <div className="relative p-6 text-white bg-[url('/images/PersonalLifestyleSupport.png')] bg-cover bg-center bg-no-repeat" >

              {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h2 className="font-bold">Lifestyle support</h2>
        <p>With busy lives some items can simply fall off the list as there is not enough time in the day to manage all the activities and
           events which are part of living. We give you back your time, we handle your personal appointments, organise events, book travel 
           and support you with your admin. We are ready to manage your personal diary manager handling medical, dental and hair appointments,
            as well as, booking theatre tickets and much more.
      </p>
          <li>Organise Events</li>
          <p>Whether you are looking to organise a home party or party at a venue, just set your criteria and budget then leave the rest to us. </p>
          <li>Travel Booking</li>
          <p>Organising your travel is made easier, we  book  rail or airline tickets as well as accommodation at home or abroad. </p>
          <li>Admin</li>
          <p>Zasa living takes the hassle out of organising visa, passport renewals and membership cancellations.</p>
          </div>
      </div>
      

       <div className="relative p-6 mt-1 text-white bg-[url('/images/HouseholdManagement.png')] bg-cover bg-center bg-no-repeat" >
           
              {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h2 className="font-bold">Household Management</h2>
        <p>Running your home becomes that much easier, we focus on ensuring household tasks get done when needed and in a manner in which 
          you prefer. Our aim is to first understand your needs and requirements are, then executing them accordingly. Whether we source service 
          providers on your behalf and or use your suggested services providers to get your home to the desired state. Undertaking a House MOT,
           Trades and Services persons coordination such as window cleaner, and running errands such as taking the pets to the vet all form part 
           of the services offered.<br/>
        We can ensure that the work or services is appropriately scheduled ensuring no lapses, or unnecessarily inconvenience to your homelife.

      </p>
          <li>House MOT</li>
          <p>We inspect your home work out with you the areas that you require support and set out the schedule for delivery. Some of these may require
             monthly or annual scheduling, such as boiler servicing or cleaning.</p>
          <li>Trades and Service coordination</li>
          <p> Ensuring that the plumber and cleaner are scheduled appropriately, or simply sourcing and or organising the delivery of such services 
            depending your needs and requirements. </p>
          <li>Errands</li>
          <p>These can range from shopping, taking pets to the vet to receiving precious parcels. Working with house pets, we can arrange to take your
             pets to the vet and feed household pets whilst you are away.</p>
             </div>
      </div>


         <div className="  relative p-6 mt-1 text-white bg-[url('/images/Property.png')] bg-cover bg-center bg-no-repeat" >
                   {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h2 className="font-bold">Property Care</h2>
        <p>ZASA Living is geared towards helping resolve the issues with your property in a hassle free manner. The type of works needed and
           service you required will shape the support we provide.  Our services range from Project Managing works on your behalf to a Key Holding
            service that ensures that your commissioned work is completed even in your absence, or you don’t return to nasty surprises as we check 
            on your property whilst your away. 
      </p>
          <li>Project manage a home improvements and repairs.</li>
          <li>Key holding service- check on your property whilst you are away and ensure works get completed</li>
          <li>Support landlords property with checks</li>
          </div>
      </div>

    </div>
  );
};

export default Services;
