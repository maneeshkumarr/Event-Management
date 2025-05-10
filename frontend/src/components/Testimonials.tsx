import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100" id="review">
      <div className="container mx-auto px-4">
        <span className="block text-center text-sm font-semibold text-pink-600 uppercase mb-2">
          Review
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          See What Our Customers Say About Us
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Testimonial 01 */}
          <figure className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <Image
              className="rounded-full mx-auto mb-4"
              src="/images/customers/dave.jpg"
              alt="Photo of customer Dave Bryson"
              width={100}
              height={100}
            />
            <blockquote className="text-gray-600 text-sm mb-4">
              “Our wedding day was absolutely perfect, thanks to the incredible team at A to Z wedding services. They took care of every detail, from the stunning decorations to the delicious catering. Highly recommended!”
            </blockquote>
            <p className="text-center font-semibold text-pink-600">&mdash; Dave Bryson</p>
          </figure>

          {/* Testimonial 02 */}
          <figure className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <Image
              className="rounded-full mx-auto mb-4"
              src="/images/customers/ben.jpg"
              alt="Photo of customer Ben Hadley"
              width={100}
              height={100}
            />
            <blockquote className="text-gray-600 text-sm mb-4">
              “A to Z wedding services exceeded our expectations in every way. The venue was gorgeous, the entertainment kept everyone dancing all night, and the mehendi artist created the most beautiful designs.”
            </blockquote>
            <p className="text-center font-semibold text-pink-600">&mdash; Ben Hadley</p>
          </figure>

          {/* Testimonial 03 */}
          <figure className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <Image
              className="rounded-full mx-auto mb-4"
              src="/images/customers/steve.jpg"
              alt="Photo of customer Steve Miller"
              width={100}
              height={100}
            />
            <blockquote className="text-gray-600 text-sm mb-4">
              “We couldn't have been happier with the services provided by A to Z wedding services. The decorations were elegant, and the catering was top-notch. Thank you for making our day so special!”
            </blockquote>
            <p className="text-center font-semibold text-pink-600">&mdash; Steve Miller</p>
          </figure>

          {/* Testimonial 04 */}
          <figure className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <Image
              className="rounded-full mx-auto mb-4"
              src="/images/customers/hannah.jpg"
              alt="Photo of customer Hannah Smith"
              width={100}
              height={100}
            />
            <blockquote className="text-gray-600 text-sm mb-4">
              “Choosing A to Z wedding services for our wedding was the best decision we made. The team was friendly and truly dedicated to making our wedding day amazing.”
            </blockquote>
            <p className="text-center font-semibold text-pink-600">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>

     
    </section>
  );
};

export default Testimonials;
