import { Search, MapPin, Stethoscope, ArrowRight, Star, Shield, User } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const serviceCards = [
    {
      title: "Patient Portal",
      desc: "Book appointments, view history & prescriptions",
      icon: User,
      color: "bg-blue-100 text-blue-600",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
      href: "https://ayursutra-patient-portal.vercel.app/"
    },
    {
      title: "Doctor Portal",
      desc: "Manage schedule, patients & treatments",
      icon: Stethoscope,
      color: "bg-green-100 text-green-600",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&h=300&fit=crop",
      href: "https://ayursutra-docter-portal.vercel.app/"
    },
    {
      title: "Admin Portal",
      desc: "Clinic management, staff & analytics",
      icon: Shield,
      color: "bg-purple-100 text-purple-600",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=300&fit=crop",
      href: "/dashboard/admin"
    }
  ]

  const specialties = [
    { name: "Women's Health", icon: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=100&h=100&fit=crop&crop=faces" },
    { name: "Skin Care", icon: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&h=100&fit=crop&crop=faces" },
    { name: "Sexual Wellness", icon: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=100&h=100&fit=crop&crop=faces" },
    { name: "Immunity & Flu", icon: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop&crop=faces" },
    { name: "Child Care", icon: "https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?w=100&h=100&fit=crop&crop=faces" },
    { name: "Mental Wellness", icon: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=100&h=100&fit=crop&crop=faces" },
  ]

  const therapies = [
    { title: "Kayachikitsa", desc: "General Medicine", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=300&h=200&fit=crop" },
    { title: "Prasuti Tantra", desc: "Gynaecology", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop" },
    { title: "Aahar", desc: "Nutrition & Diet", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=200&fit=crop" },
    { title: "Marma Therapy", desc: "Physiotherapy", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop" },
  ]

  const articles = [
    { title: "Understanding Vata Dosha", desc: "Tips to balance your energy", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=250&fit=crop", author: "Dr. Sharma" },
    { title: "Benefits of Shirodhara", desc: "Ancient stress relief technique", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop", author: "Dr. Verma" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Search Bar Section */}
      <div className="w-full bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 md:flex-none md:w-1/4">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="City (e.g. Mumbai)" 
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search doctors, therapies, clinics, etc." 
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 space-y-12">
        {/* Service Cards Hero */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.map((card, idx) => (
            <Link key={idx} href={card.href} className="group rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer block">
              <div className="h-40 bg-muted relative">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <card.icon className={`h-5 w-5 ${card.color.split(" ")[1]}`} />
                  <h3 className="font-semibold">{card.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
                <div className="flex items-center text-primary font-medium text-sm mt-auto">
                  Visit Portal <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Specialties Carousel */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Consult top Vaidyas online</h2>
              <p className="text-muted-foreground">Private online consultations with verified experts</p>
            </div>
            <button className="text-primary hover:underline text-sm font-medium border border-primary px-4 py-2 rounded-md transition-colors hover:bg-primary/5">View All Specialties</button>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide text-center">
            {specialties.map((spec, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 min-w-[120px] cursor-pointer group">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary shadow-sm transition-all relative">
                  <img src={spec.icon} alt={spec.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-medium group-hover:text-primary transition-colors">{spec.name}</p>
                <span className="text-xs text-primary font-semibold hidden group-hover:block transition-all">CONSULT NOW</span>
              </div>
            ))}
          </div>
        </section>

        {/* Clinic Consultation */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Book an appointment for an in-clinic therapy</h2>
          <p className="text-muted-foreground mb-6">Experience authentic Ayurveda treatments</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapies.map((therapy, idx) => (
              <div key={idx} className="rounded-lg border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-48 relative">
                  <img src={therapy.image} alt={therapy.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{therapy.title}</h3>
                  <p className="text-sm text-muted-foreground">{therapy.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Articles Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Read top articles from health experts</h2>
              <p className="text-muted-foreground">Health articles that keep you informed about good health practices</p>
            </div>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">See all articles</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, idx) => (
              <div key={idx} className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-card">
                <div className="w-32 h-32 flex-shrink-0 rounded-md overflow-hidden bg-muted relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">Wellness</span>
                    <h3 className="font-semibold text-lg leading-tight mt-1">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{article.desc}</p>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">{article.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="text-center py-12 bg-accent/20 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6">What our users have to say</h2>
          <div className="max-w-2xl mx-auto px-4 relative">
             <div className="text-lg text-muted-foreground italic mb-6">
               &quot;Very easy to book appointments and maintain history. Hassle free from older versions of booking appointment via telephone. Thanks Ayursutra for making it simple.&quot;
             </div>
             <div className="flex items-center justify-center gap-2 font-medium">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs">A</div>
                <span>Anjali Sharma</span>
             </div>
             <div className="flex justify-center gap-2 mt-4 text-primary">
               <Star className="w-4 h-4 fill-primary" />
               <Star className="w-4 h-4 fill-primary" />
               <Star className="w-4 h-4 fill-primary" />
               <Star className="w-4 h-4 fill-primary" />
               <Star className="w-4 h-4 fill-primary" />
             </div>
          </div>
        </section>

        {/* Download App Section */}
        <section className="bg-[#f0f2f5] dark:bg-card/50 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-4">Download the Ayursutra app</h2>
              <p className="text-muted-foreground mb-8">Access video consultation with verified Vaidyas and get medicines delivered to your home.</p>
              
              <div className="space-y-4">
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                    +91
                  </span>
                  <input type="text" placeholder="Enter phone number" className="focus:ring-primary focus:border-primary flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2 border" />
                  <button className="bg-primary hover:opacity-90 text-white px-4 py-2 rounded-md text-sm font-medium">Send SMS</button>
                </div>
                <div className="flex gap-4 mt-6">
                  <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 w-auto" />
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8 w-auto" />
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative h-full flex items-end justify-center pt-8">
               <div className="relative w-[250px] h-[500px]">
                 <img 
                   src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop" 
                   alt="Ayursutra App Preview" 
                   className="rounded-t-3xl shadow-2xl w-full h-full object-cover"
                 />
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
