import { HoverEffect } from "@/utils/card-hover-effect";

function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Curated for 'You'",
    description:
      "  The algorithm detects your needs and suggests you the best possible product.",
    link: "https://stripe.com",
  },
  {
    title: "Easier than ever",
    description:
      "Get the right product to fulfill your needs in just some clicks.",
    link: "https://netflix.com",
  },
  {
    title: "Faster",
    description:
      "Saves hours of tirelessly searching for the right product.",
    link: "https://google.com",
  },
  {
    title: "Get the best Deal",
    description:
      "We not only suggest you the best product but also suggest you the place where you can get it a best price",
    link: "https://meta.com",
  },
];

export default CardHoverEffectDemo;

// <!-- About Section - Home Page -->
//     <section id="about" class="about">
//       <div class="container" data-aos="fade-up" data-aos-delay="100">
//         <div class="row align-items-xl-center gy-5">
//           <div class="col-xl-5 content">
//             <h3>About Us</h3>
//             <h2>Who are we?</h2>
//             <p>
//               We are here to help you select the right product according to
//               your needs!
//             </p>
//             <a href="#team" class="read-more"><span>Know Us</span><i class="bi bi-arrow-right"></i></a>
//           </div>

//           <div class="col-xl-7">
//             <div class="row gy-4 icon-boxes">
//               <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
//                 <div class="icon-box">
//                   <i class="bi bi-clipboard-pulse"></i>
//                   <h3>Curated for 'You'</h3>
//                   <p>
//                     The algorithm detects your needs and suggests you the
//                     <strong>best possible product</strong>.
//                   </p>
//                 </div>
//               </div>
//               <!-- End Icon Box -->

//               <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
//                 <div class="icon-box">
//                   <i class="bi bi-buildings"></i>
//                   <h3>Easier than ever</h3>
//                   <p>
//                     Get the right product to fulfill your needs in
//                     <strong>just some clicks</strong>.
//                   </p>
//                 </div>
//               </div>
//               <!-- End Icon Box -->

//               <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
//                 <div class="icon-box">
//                   <i class="bi bi-graph-up-arrow"></i>
//                   <h3>Faster</h3>
//                   <p>
//                     <strong>Saves hours</strong> of tirelessly searching for
//                     the right product.
//                   </p>
//                 </div>
//               </div>
//               <!-- End Icon Box -->

//               <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
//                 <div class="icon-box">
//                   <i class="bi bi-command"></i>
//                   <h3>Get the best Deal</h3>
//                   <p>
//                     We not only suggest you the best product but also suggest
//                     you the place where you can get it at
//                     <strong>best price</strong>.
//                   </p>
//                 </div>
//               </div>
//               <!-- End Icon Box -->
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <!-- End About Section -->