import './faqs.css'
import { useState } from 'react';

const FAQs = () => {
  return (
    <div className='FAQs'>
      <div className="faq_background">
        <div className="faq_heading"><h2>FAQs</h2></div>
        <div class="accordion accordion-flush" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      Are non GITAM students allowed to attend the fest?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Yes, the fest is open for non GITAM undergradutate/graduate students. However, certain events may have specific eligibility criteria.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How can I register for Pramana 2024?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       Registration details will be available in the official website and keep an eye for for updates and instructions on the official <a href="https://www.instagram.com/pramana_2024.gitam/">@pramana_2024.gitam</a> instagram page.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What kind of events and activities will Pramana 2024 feature?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The fest will feature a variety of events including cultural performances, workshops and competitions. Check the events section for details.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Is outside food allowed into the arena?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      There will be food available inside the arena.
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default FAQs