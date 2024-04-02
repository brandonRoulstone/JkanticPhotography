import ServiceSale from "./ServiceSale"
const CompanyServices = () => {
  return (
    <section id="companyServ">
      <div id="companyService">
      <ServiceSale heading="Filming" title="Commercial video production" productsInfo="Filming customer brand advertisement videos, Corporate testimonials and commercial property walkthrough" price={6417}/>
      <ServiceSale heading="Content creation" title="Monthly social media content creation" productsInfo="Filming short form engaging content for brands social media accounts" price={5703}/>
      <ServiceSale heading="Social media Managment" title="Social media management standard" productsInfo="Managing content engagement, developing social media reports, and developing future content." price={7567}/>
      </div>
    </section>
  )
}

export default CompanyServices;
