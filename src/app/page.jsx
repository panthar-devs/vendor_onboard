"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Lenis from "lenis";
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Eye,
  Globe,
  Heart,
  Instagram,
  Linkedin,
  MapPin,
  Shield,
  Smartphone,
  TrendingUp,
  User,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {


  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="  px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center gap-3">
          <div className="bg-green-600 px-3 py-2 rounded-md">
            <span className="text-white font-bold text-lg">FrameFinder</span>
          </div>
          <span className="text-sm text-gray-600 font-medium p-1">An eyewear hub</span>
        </Link>
        <nav className="ml-auto hidden sm:flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
            About
          </Link>
          <Link href="#mission" className="text-sm font-medium hover:text-green-600 transition-colors">
            Mission
          </Link>
          <Link href="#features" className="text-sm font-medium hover:text-green-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-green-600 transition-colors">
            How It Works
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="  w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-white to-emerald-50">
          <div className="flex items-center justify-center">
            <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    Multivendor Eyewear Platform
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Revolutionizing India's <span className="text-green-600">Eyewear Business</span>
                  </h1>
                  <p className="text-lg text-green-600 font-semibold italic">An eyewear hub</p>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    FrameFinder is the ultimate multivendor e-commerce platform connecting optical vendors across India.
                    Empowering local businesses to reach customers nationwide and take the eyewear industry to the next
                    level.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Link href="/onboarding" >
                      Join as Vendor
                    </Link>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Pan India Reach</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>10,000+ Products</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/eyewear-collection.png"
                  alt="Eyewear Collection"
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="  w-full py-12 md:py-24 lg:py-32">
          <div className="flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About FrameFinder</h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    FrameFinder is India's first multivendor eyewear e-commerce platform, designed to bridge the gap
                    between local optical vendors and customers across the nation. We provide a comprehensive digital
                    marketplace where optical businesses can showcase their products, manage inventory, and reach
                    customers beyond their geographical boundaries.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Image
                  src="/modern-optical-store.jpg"
                  alt="Modern Optical Store"
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Empowering Optical Businesses</h3>
                    <p className="text-gray-600">
                      We understand the challenges faced by optical vendors in reaching a wider audience. FrameFinder
                      provides the technology, tools, and platform needed to transform local optical businesses into
                      nationwide brands.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Seamless Customer Experience</h3>
                    <p className="text-gray-600">
                      Our platform ensures customers have access to a vast collection of eyewear from trusted vendors,
                      with features like virtual try-on, prescription management, and doorstep delivery across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission" className="  w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className=" flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">
                      To revolutionize India's eyewear industry by creating a comprehensive digital ecosystem that
                      empowers optical vendors to expand their reach nationwide. We aim to make quality eyewear accessible
                      to every Indian while supporting local businesses in their digital transformation journey.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <Eye className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">
                      To become India's most trusted and comprehensive eyewear marketplace, where every optical vendor,
                      regardless of size or location, can thrive in the digital age. We envision a future where quality
                      eyewear is just a click away for every Indian, supported by a network of empowered local businesses.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="  w-full py-12 md:py-24 lg:py-32">
          <div className=" flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose FrameFinder?</h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Comprehensive features designed to help optical vendors succeed in the digital marketplace
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-2">
                    <Globe className="mx-auto h-12 w-12 text-green-600 mb-4" />
                    <CardTitle>Pan India Reach</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      Expand your business beyond local boundaries and reach customers across all states and cities in
                      India.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-2">
                    <Smartphone className="mx-auto h-12 w-12 text-green-600 mb-4" />
                    <CardTitle>Mobile-First Platform</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      Optimized for mobile devices with responsive design ensuring seamless experience across all
                      platforms.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-2">
                    <Shield className="mx-auto h-12 w-12 text-emerald-600 mb-4" />
                    <CardTitle>Secure Transactions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      Advanced security measures and encrypted payment gateways ensure safe transactions for all users.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-2">
                    <Zap className="mx-auto h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Easy Store Setup</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      Quick and simple onboarding process to get your optical store online within minutes.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-2">
                    <CreditCard className="mx-auto h-12 w-12 text-green-700 mb-4" />
                    <CardTitle>Multiple Payment Options</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      Support for UPI, cards, wallets, and EMI options to cater to diverse customer preferences.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-2">
                    <Heart className="mx-auto h-12 w-12 text-green-600 mb-4" />
                    <CardTitle>24/7 Support</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      Dedicated customer support team available round the clock to assist vendors and customers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="  w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className=" flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How FrameFinder Works</h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Simple steps to join India's largest eyewear marketplace
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Register Your Store</h3>
                  <p className="text-gray-600">
                    Sign up as a vendor and provide your optical store details. Our team will verify and approve your
                    account.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Upload Products</h3>
                  <p className="text-gray-600">
                    Add your eyewear collection with high-quality images, descriptions, and pricing. Our tools make it
                    easy.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Start Selling</h3>
                  <p className="text-gray-600">
                    Receive orders from customers across India, manage inventory, and grow your business with our support.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Benefits Section */}
        <section className="  w-full py-12 md:py-24 lg:py-32">
          <div className=" flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Benefits for Optical Vendors</h2>
                    <p className="max-w-[600px] text-gray-600 md:text-xl">
                      Join thousands of optical vendors who have transformed their business with FrameFinder
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Increased Revenue</h4>
                        <p className="text-gray-600 text-sm">
                          Access to millions of customers across India leading to higher sales
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Brand Visibility</h4>
                        <p className="text-gray-600 text-sm">Enhanced online presence and brand recognition nationwide</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Inventory Management</h4>
                        <p className="text-gray-600 text-sm">Advanced tools to track and manage your eyewear inventory</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Marketing Support</h4>
                        <p className="text-gray-600 text-sm">
                          Professional marketing and promotional support to boost sales
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/sucsessful-optical-vendor.png"
                    alt="Successful Optical Vendor"
                    width={600}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=" selection:bg-green-800 selection:text-white w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                    Ready to Transform Your Optical Business?
                  </h2>
                  <p className="max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join FrameFinder today and take your eyewear business to the next level. Reach customers across India
                    and grow your revenue.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Link href="/onboarding" >
                      Become a Vendor
                    </Link>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-8 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Supported By</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative h-[6rem] w-[12rem]" >
                      <Image
                        src="/rise.png"
                        alt="Smart City Jhansi Logo"
                        fill
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <p className="text-lg font-semibold text-gray-700">Rise Incubation</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 ">
                    <div className="relative h-[6rem] w-[12rem]" >
                      <Image
                        src="/smart.png"
                        alt="Smart City Jhansi Logo"
                        fill
                        className="object-cover h-full w-full"
                      />
                    </div>

                    <p className="text-lg font-semibold text-gray-700">Smart City Jhansi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="  flex flex-col gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50"
      >
        <div className="container grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="bg-green-600 px-2 py-1 rounded-md">
                  <span className="text-white font-bold text-sm">FrameFinder</span>
                </div>
              </div>
              <span className="text-xs text-gray-500 italic">An eyewear hub</span>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Follow Us On</h4>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-green-600" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-green-600" aria-label="Threads">
                  <User className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-green-600" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#about" className="text-gray-600 hover:text-green-600">
                About Us
              </Link>
              <Link href="#mission" className="text-gray-600 hover:text-green-600">
                Mission & Vision
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                Careers
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                Press
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Vendors</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#" className="text-gray-600 hover:text-green-600">
                Become a Vendor
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                Vendor Support
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                Pricing
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                Resources
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Support</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#" className="text-gray-600 hover:text-green-600">
                Help Center
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                Contact Us
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                Terms of Service
              </Link>
            </nav>
          </div>

        </div>
        <div className="container border-t pt-6 mt-8">
          <p className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} Designed and Developed By <Link href={'https://www.pantharinfohub.com'} target="_blank" className="font-bold" > Panthar InfoHub </Link>.
          </p>
        </div>
      </footer>
    </div>
  )
}
