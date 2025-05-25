"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Award, Clock, ChevronRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen w-8/12 mx-auto bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                About <span className="text-blue-600">Our Company</span>
              </h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl">
                We are a team of passionate individuals dedicated to creating exceptional products that help businesses
                thrive in the digital world.
              </p>
              <div className="mt-8 flex">
                <div className="rounded-md shadow">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Get in touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our team working"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Story</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">How we started and where we are headed</p>
          </div>
          <div className="mt-12 prose prose-blue prose-lg text-gray-500 mx-auto">
            <p>
              Founded in 2015, our company began with a simple mission: to create digital solutions that make a real
              difference for businesses and their customers. What started as a small team of three passionate developers
              has grown into a diverse group of talented individuals spanning design, development, marketing, and
              customer success.
            </p>
            <p>
              Throughout our journey, we have remained committed to our core values of innovation, quality, and customer
              satisfaction. We believe that technology should simplify and enhance peoples lives, not complicate them.
              This philosophy guides everything we do, from the products we build to the way we interact with our
              clients.
            </p>
            <p>
              Today, we are proud to serve clients across various industries, from startups to established enterprises.
              Our solutions have helped businesses streamline their operations, reach new customers, and achieve their
              goals in an increasingly digital world.
            </p>
            <p>
              As we look to the future, we are excited to continue pushing the boundaries of whats possible, embracing
              new technologies and approaches to deliver even greater value to our clients and their customers.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              The principles that guide our work and culture
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Value 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We put our customers at the center of everything we do. Their success is our success, and we are
                committed to delivering solutions that address their unique needs and challenges.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do. From the code we write to the designs we create, we are
                committed to delivering high-quality work that exceeds expectations.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and continuously explore new technologies and approaches. We are not afraid to
                challenge the status quo and find creative solutions to complex problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Team</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">Meet the talented people behind our success</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
                <p className="text-blue-600 mb-4">CEO & Founder</p>
                <p className="text-gray-600">
                  With over 15 years of experience in technology and business leadership, Sarah leads our companys
                  vision and strategy.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Michael Chen</h3>
                <p className="text-blue-600 mb-4">CTO</p>
                <p className="text-gray-600">
                  Michael oversees our technical strategy and ensures we are using the right technologies to solve our
                  clients problems.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Emily Rodriguez</h3>
                <p className="text-blue-600 mb-4">Design Director</p>
                <p className="text-gray-600">
                  Emily leads our design team, ensuring our products are not only functional but also beautiful and
                  intuitive to use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Journey</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">Key milestones in our companys history</p>
          </div>
          <div className="mt-12 relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            {/* Milestone 1 */}
            <div className="relative mb-12">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8 md:text-right">
                  <h3 className="text-xl font-bold text-gray-900">Company Founded</h3>
                  <p className="text-blue-600 mb-2">2015</p>
                  <p className="text-gray-600">
                    Started with three founders and a vision to create impactful digital solutions.
                  </p>
                </div>
                <div className="hidden md:block w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 rounded-full bg-blue-600 border-4 border-white"></div>
                <div className="md:w-1/2 pl-8 mt-4 md:mt-0"></div>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="relative mb-12">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8"></div>
                <div className="hidden md:block w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 rounded-full bg-blue-600 border-4 border-white"></div>
                <div className="md:w-1/2 pl-8">
                  <h3 className="text-xl font-bold text-gray-900">First Major Client</h3>
                  <p className="text-blue-600 mb-2">2016</p>
                  <p className="text-gray-600">
                    Secured our first enterprise client and expanded the team to 10 employees.
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="relative mb-12">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8 md:text-right">
                  <h3 className="text-xl font-bold text-gray-900">New Office</h3>
                  <p className="text-blue-600 mb-2">2018</p>
                  <p className="text-gray-600">
                    Moved to a larger office to accommodate our growing team of 25 employees.
                  </p>
                </div>
                <div className="hidden md:block w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 rounded-full bg-blue-600 border-4 border-white"></div>
                <div className="md:w-1/2 pl-8 mt-4 md:mt-0"></div>
              </div>
            </div>

            {/* Milestone 4 */}
            <div className="relative">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8"></div>
                <div className="hidden md:block w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 rounded-full bg-blue-600 border-4 border-white"></div>
                <div className="md:w-1/2 pl-8">
                  <h3 className="text-xl font-bold text-gray-900">International Expansion</h3>
                  <p className="text-blue-600 mb-2">2021</p>
                  <p className="text-gray-600">
                    Opened our first international office and expanded our services globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to work with us?</h2>
              <p className="mt-4 text-lg text-blue-100 max-w-3xl">
                Lets discuss how we can help your business grow and succeed in the digital landscape.
              </p>
              <div className="mt-8 flex">
                <div className="rounded-md shadow">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                  >
                    Contact us
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className="ml-4">
                  <Link
                    href="/services"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70"
                  >
                    Our services
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What our clients say</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600 italic">
                        Working with this team has been a game-changer for our business. They understood our needs and
                        delivered a solution that exceeded our expectations.
                      </p>
                      <p className="mt-2 text-sm font-medium text-gray-900">— John Smith, CEO at TechCorp</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600 italic">
                        Their attention to detail and commitment to quality is unmatched. I highly recommend their
                        services to anyone looking for a reliable technology partner.
                      </p>
                      <p className="mt-2 text-sm font-medium text-gray-900">— Lisa Johnson, CMO at GrowthBrand</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
