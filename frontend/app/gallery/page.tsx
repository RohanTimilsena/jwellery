"use client"

import Image from "next/image"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Mountain Landscape",
      description: "Beautiful mountain view at sunset",
      category: "Nature",
      imageUrl: "/placeholder.svg?height=600&width=800",
      color: "emerald",
    },
    {
      id: 2,
      title: "Urban Architecture",
      description: "Modern city buildings with unique design",
      category: "Architecture",
      imageUrl: "/placeholder.svg?height=800&width=600",
      color: "amber",
    },
    {
      id: 3,
      title: "Ocean Waves",
      description: "Serene ocean waves during golden hour",
      category: "Nature",
      imageUrl: "/placeholder.svg?height=600&width=800",
      color: "sky",
    },
    {
      id: 4,
      title: "Abstract Art",
      description: "Colorful abstract painting with geometric shapes",
      category: "Art",
      imageUrl: "/placeholder.svg?height=800&width=800",
      color: "violet",
    },
    {
      id: 5,
      title: "Wildlife Photography",
      description: "Rare wildlife captured in natural habitat",
      category: "Nature",
      imageUrl: "/placeholder.svg?height=600&width=800",
      color: "lime",
    },
    {
      id: 6,
      title: "Street Photography",
      description: "Candid street scene from downtown",
      category: "Urban",
      imageUrl: "/placeholder.svg?height=800&width=600",
      color: "orange",
    },
    {
      id: 7,
      title: "Minimalist Design",
      description: "Clean minimalist interior design",
      category: "Design",
      imageUrl: "/placeholder.svg?height=600&width=800",
      color: "rose",
    },
    {
      id: 8,
      title: "Aerial View",
      description: "Stunning aerial photography of coastline",
      category: "Landscape",
      imageUrl: "/placeholder.svg?height=800&width=800",
      color: "cyan",
    },
    {
      id: 9,
      title: "Portrait Photography",
      description: "Professional portrait with natural lighting",
      category: "People",
      imageUrl: "/placeholder.svg?height=800&width=600",
      color: "fuchsia",
    },
  ]

  // Color mapping for Tailwind classes
  const colorClasses = {
    emerald: {
      light: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-600",
      hover: "hover:bg-emerald-100",
      button: "bg-emerald-500 hover:bg-emerald-600",
      tag: "bg-emerald-500",
    },
    amber: {
      light: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-600",
      hover: "hover:bg-amber-100",
      button: "bg-amber-500 hover:bg-amber-600",
      tag: "bg-amber-500",
    },
    sky: {
      light: "bg-sky-50",
      border: "border-sky-200",
      text: "text-sky-600",
      hover: "hover:bg-sky-100",
      button: "bg-sky-500 hover:bg-sky-600",
      tag: "bg-sky-500",
    },
    violet: {
      light: "bg-violet-50",
      border: "border-violet-200",
      text: "text-violet-600",
      hover: "hover:bg-violet-100",
      button: "bg-violet-500 hover:bg-violet-600",
      tag: "bg-violet-500",
    },
    lime: {
      light: "bg-lime-50",
      border: "border-lime-200",
      text: "text-lime-600",
      hover: "hover:bg-lime-100",
      button: "bg-lime-500 hover:bg-lime-600",
      tag: "bg-lime-500",
    },
    orange: {
      light: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-600",
      hover: "hover:bg-orange-100",
      button: "bg-orange-500 hover:bg-orange-600",
      tag: "bg-orange-500",
    },
    rose: {
      light: "bg-rose-50",
      border: "border-rose-200",
      text: "text-rose-600",
      hover: "hover:bg-rose-100",
      button: "bg-rose-500 hover:bg-rose-600",
      tag: "bg-rose-500",
    },
    cyan: {
      light: "bg-cyan-50",
      border: "border-cyan-200",
      text: "text-cyan-600",
      hover: "hover:bg-cyan-100",
      button: "bg-cyan-500 hover:bg-cyan-600",
      tag: "bg-cyan-500",
    },
    fuchsia: {
      light: "bg-fuchsia-50",
      border: "border-fuchsia-200",
      text: "text-fuchsia-600",
      hover: "hover:bg-fuchsia-100",
      button: "bg-fuchsia-500 hover:bg-fuchsia-600",
      tag: "bg-fuchsia-500",
    },
  }

  const categories = ["All", "Nature", "Architecture", "Art", "Urban", "Design", "Landscape", "People"]
  const categoryColors = {
    All: "bg-slate-800 hover:bg-slate-700",
    Nature: "bg-emerald-500 hover:bg-emerald-600",
    Architecture: "bg-amber-500 hover:bg-amber-600",
    Art: "bg-violet-500 hover:bg-violet-600",
    Urban: "bg-orange-500 hover:bg-orange-600",
    Design: "bg-rose-500 hover:bg-rose-600",
    Landscape: "bg-cyan-500 hover:bg-cyan-600",
    People: "bg-fuchsia-500 hover:bg-fuchsia-600",
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="w-10/12 mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="mb-4 py-2 text-4xl font-bold md:text-5xl bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent"> Gallery</h1>
          <p className="mx-auto max-w-2xl text-slate-600">
            Explore our vibrant collection of stunning images showcasing various styles and subjects. Each piece tells a
            unique story and captures a moment in time.
          </p>
        </header>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-6 py-2 font-medium text-white transition ${
                categoryColors[category as keyof typeof categoryColors]
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => {
            const color = item.color as keyof typeof colorClasses
            const colorClass = colorClasses[color]

            return (
              <div
                key={item.id}
                className={`group overflow-hidden rounded-xl border-2 ${colorClass.light} ${colorClass.border} shadow-md transition hover:shadow-lg`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className={`inline-block rounded-full ${colorClass.tag} px-3 py-1 text-xs font-semibold`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-bold text-slate-800">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                  <div className="mt-4 flex justify-between">
                    <button className={`text-sm font-medium ${colorClass.text}`}>View Details</button>
                    <div className="flex gap-2">
                      <button className={`rounded-full ${colorClass.light} p-2 ${colorClass.text} ${colorClass.hover}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </button>
                      <button className={`rounded-full ${colorClass.light} p-2 ${colorClass.text} ${colorClass.hover}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="rounded-md bg-slate-800 px-8 py-3 font-medium text-white transition hover:bg-slate-700 hover:shadow-md">
            Load More
          </button>
        </div>
      </div>
    </div>
  )
}