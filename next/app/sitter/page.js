'use client'

import React, { useState, useEffect } from 'react'
import ComponentsCustomerFeedback from './_components/customer-feedback'
import ComponentsSectionIntro from './_components/section-intro'
import InputDesign from './_components/carousel/InputDesign'
import CommonQuestions from './_components/CommonQuestions/CommonQuestions'
import PetCareServices from './_components/hero-section/PetCareServices'

export default function SitterPage(props) {
  return (
    <>
      <div>Sitter Page</div>
      <PetCareServices></PetCareServices>
      <ComponentsSectionIntro></ComponentsSectionIntro>
      <InputDesign></InputDesign>
      <ComponentsCustomerFeedback></ComponentsCustomerFeedback>
      <CommonQuestions></CommonQuestions>
    </>
  )
}
