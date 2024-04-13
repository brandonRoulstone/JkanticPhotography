import ReviewCards from "./ReviewCards"
const ReviewsPage = () => {
  return (
    <section id="ReviewsSection">
      <div id="newGrid" className="mt-3">
        <ReviewCards name="Charlene Gomez" reviews={1} photo="https://cdn-images.imagevenue.com/6d/d3/c4/ME17Y7DX_o.png" review="Thank you Jonathan for your professional and kind manner.You captured the esssence and vibe of our dance competition.Thanks so much"/>
        <ReviewCards name="Gradi Lumbila" reviews={4} photo="https://cdn-images.imagevenue.com/58/da/cc/ME17Y7E5_o.png" review="Quality service indeed.It's not your ordinary photography service.I needed a few shots of myself with my new boots and I was not expecting much,but what i recieved was excellent"/>
        <ReviewCards name="Ralph Tshibanda" reviews={3} photo="https://cdn-images.imagevenue.com/12/26/59/ME182MNB_o.png" review="One of the best photographers I've ever worked with!! Very highly recommended!!!!"/>
        <ReviewCards name="Daiyaan Abrahams" reviews={1} photo="https://cdn-images.imagevenue.com/8d/9a/b9/ME17YPDZ_o.jpg" review="One of the best Photographers in Cape Town! Jkantic knows what you want and makes sure that you get the best results and captures memorable photos or videos.I highly recommend Jkantic Photography for all special events and for special moments!"/>
      </div>
    </section>
  )
}

export default ReviewsPage
