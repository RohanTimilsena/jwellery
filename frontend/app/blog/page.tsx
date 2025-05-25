"use client";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Tag,
  TrendingUp,
  BookOpen,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";

export default function Component() {
  const blogPosts = [
    {
      id: 1,
      title: "Mastering React Server Components: A Complete Guide",
      excerpt:
        "Learn how to leverage React Server Components to build faster, more efficient web applications with better SEO and performance.",
      content:
        "React Server Components represent a paradigm shift in how we think about React applications...",
      author: {
        name: "Alex Thompson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Senior Frontend Developer",
      },
      publishedAt: "March 18, 2024",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Next.js", "Performance"],
      image: "/placeholder.svg?height=300&width=500",
      likes: 124,
      comments: 18,
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Design Systems with Tailwind CSS",
      excerpt:
        "Discover best practices for creating maintainable and scalable design systems using Tailwind CSS and component libraries.",
      content:
        "Design systems are crucial for maintaining consistency across large applications...",
      author: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "UI/UX Designer",
      },
      publishedAt: "March 16, 2024",
      readTime: "6 min read",
      category: "Design",
      tags: ["Tailwind", "Design Systems", "CSS"],
      image: "/placeholder.svg?height=300&width=500",
      likes: 89,
      comments: 12,
      featured: false,
    },
    {
      id: 3,
      title: "TypeScript Best Practices for Large Applications",
      excerpt:
        "Essential TypeScript patterns and practices that will help you build more maintainable and type-safe applications at scale.",
      content:
        "As applications grow in complexity, TypeScript becomes increasingly valuable...",
      author: {
        name: "Michael Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Full Stack Developer",
      },
      publishedAt: "March 14, 2024",
      readTime: "10 min read",
      category: "TypeScript",
      tags: ["TypeScript", "Best Practices", "Architecture"],
      image: "/placeholder.svg?height=300&width=500",
      likes: 156,
      comments: 24,
      featured: false,
    },
    {
      id: 4,
      title: "Modern CSS Techniques for Better Web Performance",
      excerpt:
        "Explore advanced CSS techniques that can significantly improve your website's performance and user experience.",
      content:
        "Modern CSS offers powerful features that can enhance both performance and user experience...",
      author: {
        name: "Emma Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Frontend Specialist",
      },
      publishedAt: "March 12, 2024",
      readTime: "7 min read",
      category: "CSS",
      tags: ["CSS", "Performance", "Web Development"],
      image: "/placeholder.svg?height=300&width=500",
      likes: 92,
      comments: 15,
      featured: false,
    },
  ];

  const trendingTopics = [
    { name: "React 18", posts: 45 },
    { name: "Next.js 14", posts: 38 },
    { name: "TypeScript", posts: 52 },
    { name: "Tailwind CSS", posts: 29 },
    { name: "Web Performance", posts: 34 },
    { name: "Design Systems", posts: 21 },
  ];

  const recentPosts = [
    {
      title: "Understanding React Hooks in Depth",
      date: "March 15, 2024",
      category: "React",
      readTime: "5 min",
    },
    {
      title: "CSS Grid Layout Masterclass",
      date: "March 13, 2024",
      category: "CSS",
      readTime: "8 min",
    },
    {
      title: "JavaScript ES2024 Features",
      date: "March 11, 2024",
      category: "JavaScript",
      readTime: "6 min",
    },
    {
      title: "API Design Best Practices",
      date: "March 9, 2024",
      category: "Backend",
      readTime: "9 min",
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="w-8/12 mx-auto bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Tech <span className="text-blue-600">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest trends, tutorials, and insights in web
            development, design, and technology. Stay ahead with expert
            knowledge and practical guides.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Post */}
            {featuredPost && (
              <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <div className="relative">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 cursor-pointer transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={featuredPost.author.avatar || "/placeholder.svg"}
                        alt={featuredPost.author.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {featuredPost.author.role}
                        </p>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredPost.publishedAt}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-5 h-5" />
                        <span>{featuredPost.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-5 h-5" />
                        <span>{featuredPost.comments}</span>
                      </div>
                      <Share2 className="w-5 h-5 cursor-pointer hover:text-blue-600" />
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Regular Posts */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Latest Articles
              </h3>
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Image
                            src={post.author.avatar || "/placeholder.svg"}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-900 text-sm">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {post.publishedAt}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-500 text-sm">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center pt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-6 rounded-xl text-white">
              <h3 className="text-lg font-bold mb-3">Stay in the Loop</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get weekly updates on the latest tech trends and tutorials.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-bold text-gray-900">
                  Trending Topics
                </h3>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={topic.name}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-orange-500">
                        #{index + 1}
                      </span>
                      <span className="font-medium text-gray-900">
                        {topic.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {topic.posts} posts
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-5 h-5 text-green-500" />
                <h3 className="text-lg font-bold text-gray-900">
                  Recent Posts
                </h3>
              </div>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <h4 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer mb-2 leading-snug">
                      {post.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="w-5 h-5 text-purple-500" />
                <h3 className="text-lg font-bold text-gray-900">
                  Popular Tags
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "CSS",
                  "Node.js",
                  "Design",
                  "Performance",
                  "Testing",
                  "DevOps",
                  "API",
                  "Database",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all duration-200 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Spotlight */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Author Spotlight
              </h3>
              <div className="text-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Featured Author"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-4 border-white shadow-lg"
                />
                <h4 className="font-bold text-gray-900 mb-1">Alex Thompson</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Senior Frontend Developer
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Passionate about React, performance optimization, and sharing
                  knowledge with the community.
                </p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
