import React from 'react'
import Navbar from './components/navbar'
import Homeone from './components/home1st'
import AboutUsSection from './components/about'
import HomeSection from './components/home'
import AdmissionsSection from './components/admission'
import ContactSection from './components/contact'
import FooterSection from './components/footer'

import ComputerScienceDepartment from './components/csDepartment'
import CivilEngineeringDepartment from './components/civilDepartment'
import MechanicalEngineeringDepartment from './components/mechanicalDepartment'
import ElectricalEngineeringDepartment from './components/electricalDepartment'
import ElectronicsEngineeringDepartment from './components/electronicsDepartment'

function App() {
  return (
    <div className='App'>

    <Navbar/>
   <HomeSection/>
   <AboutUsSection/>
   <AdmissionsSection/>

   <ComputerScienceDepartment/>
   <CivilEngineeringDepartment/>
   <MechanicalEngineeringDepartment/>
   <ElectricalEngineeringDepartment/>
   <ElectronicsEngineeringDepartment/>

   <ContactSection/>
   <FooterSection/>
    </div>
  )
}

export default App
