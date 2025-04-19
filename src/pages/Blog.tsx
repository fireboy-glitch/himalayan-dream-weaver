
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, User, Search, Tag, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = [
    { name: "Trekking Guide", count: 12 },
    { name: "Travel Tips", count: 8 },
    { name: "Culture", count: 5 },
    { name: "Photography", count: 4 },
    { name: "Mountain Safety", count: 3 },
    { name: "Gear Reviews", count: 6 }
  ];

  const recentPosts = [
    {
      title: "10 Things to Pack for EBC Trek",
      date: "2025-04-10",
      path: "/blog/things-to-pack-ebc"
    },
    {
      title: "Understanding Altitude Sickness",
      date: "2025-03-28",
      path: "/blog/altitude-sickness"
    },
    {
      title: "Best Time to Visit Nepal",
      date: "2025-03-15",
      path: "/blog/best-time-nepal"
    }
  ];

  const blogPosts = [
    {
      title: "Essential Guide to Everest Base Camp Trek",
      excerpt: "Everything you need to know about preparing for and completing the iconic Everest Base Camp trek. From physical preparation to packing lists, permits, and what to expect on each day of your journey.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      author: "Sherpa Guide",
      date: "2025-04-15",
      readTime: "8 min read",
      category: "Trekking Guide",
      featured: false,
      path: "/blog/essential-guide-everest-base-camp"
    },
    {
      title: "Best Time to Trek in Nepal",
      excerpt: "A comprehensive guide to Nepal's trekking seasons and what to expect in each one. Learn about the pros and cons of trekking during pre-monsoon, post-monsoon, winter, and monsoon seasons to plan your perfect adventure.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      author: "Trek Expert",
      date: "2025-04-10",
      readTime: "6 min read",
      category: "Travel Tips",
      featured: false,
      path: "/blog/best-time-trek-nepal"
    },
    {
      title: "Cultural Highlights of the Annapurna Region",
      excerpt: "Discover the rich cultural heritage and traditions of the communities in the Annapurna region. Learn about the Gurung, Magar, and Thakali cultures, their festivals, customs, and the historical significance of the ancient monasteries and temples along the trek.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      author: "Culture Guide",
      date: "2025-04-05",
      readTime: "7 min read",
      category: "Culture",
      featured: false,
      path: "/blog/annapurna-cultural-highlights"
    },
    {
      title: "Photography Tips for Himalayan Treks",
      excerpt: "Master the art of mountain photography with these expert tips on equipment, settings, composition, and timing. Learn how to capture the majestic beauty of the Himalayas in all weather conditions.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      author: "Photography Expert",
      date: "2025-03-28",
      readTime: "5 min read",
      category: "Photography",
      featured: false,
      path: "/blog/photography-tips-himalayan-treks"
    },
    {
      title: "Ghorepani Poon Hill Trek: The Perfect Short Trek",
      excerpt: "Explore one of Nepal's most accessible and rewarding treks. With breathtaking sunrise views over the Annapurna and Dhaulagiri ranges, this short trek is perfect for beginners and those with limited time.",
      image: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a",
      author: "Trek Guide",
      date: "2025-03-20",
      readTime: "6 min read",
      category: "Trekking Guide",
      featured: false,
      path: "/blog/ghorepani-poon-hill-trek"
    },
    {
      title: "Local Cuisine Along the Trekking Routes",
      excerpt: "A culinary journey through the diverse flavors of Nepal's trekking regions. From the famous Dal Bhat to local Sherpa stews and Tibetan momos, discover the delicious meals that will fuel your adventure.",
      image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190",
      author: "Food Expert",
      date: "2025-03-15",
      readTime: "7 min read",
      category: "Travel Tips",
      featured: false,
      path: "/blog/local-cuisine-trekking-routes"
    }
  ];

  const featuredPost = {
    title: "Ultimate Guide to Trekking in Nepal",
    excerpt: "From choosing the right trek to essential gear and permits, this comprehensive guide covers everything you need to know about trekking in Nepal. Whether you're a first-time visitor or returning for a new adventure, our expert tips will help you prepare for an unforgettable Himalayan experience.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    author: "Mountain Expert",
    date: "2025-04-17",
    readTime: "10 min read",
    path: "/blog/ultimate-guide-trekking-nepal"
  };

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="heading-lg mb-4">Our Blog</h1>
            <p className="text-lg text-gray-600">
              Discover trekking tips, travel guides, and stories from the Himalayas
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 max-w-xl mx-auto">
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm border">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-none focus-visible:ring-0"
              />
              <Button variant="ghost" className="px-3">
                <Search size={18} className="text-gray-500" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Post */}
              <div className="mb-12">
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={featuredPost.image}
                        alt="Featured post"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <span className="inline-block px-3 py-1 bg-mountain-100 text-mountain-800 rounded-full text-sm font-medium mb-4">
                        Featured
                      </span>
                      <h2 className="heading-md mb-4">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User size={16} className="mr-2" />
                        <span className="mr-4">{featuredPost.author}</span>
                        <CalendarDays size={16} className="mr-2" />
                        <span className="mr-4">{featuredPost.date}</span>
                        <Clock size={16} className="mr-2" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <Link to={featuredPost.path}>
                        <Button className="bg-mountain-600 hover:bg-mountain-700">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <span className="inline-block px-3 py-1 bg-mountain-100 text-mountain-800 rounded-full text-sm font-medium mb-2">
                          {post.category}
                        </span>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-gray-500">
                          <User size={16} className="mr-2" />
                          <span className="mr-4">{post.author}</span>
                          <CalendarDays size={16} className="mr-2" />
                          <span>{post.date}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link to={post.path} className="w-full">
                          <Button variant="outline" className="w-full">
                            Read More
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-2 py-12 text-center">
                    <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => setSearchQuery("")}
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </div>

              {/* Load More Button */}
              {filteredPosts.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Articles
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="mt-12 lg:mt-0">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <Link to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center text-gray-700 hover:text-mountain-600">
                          <Tag size={16} className="mr-2" />
                          <span>{category.name}</span>
                        </Link>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Recent Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <div key={index} className="pb-4 last:pb-0">
                        <Link to={post.path}
                          className="text-sm font-medium hover:text-mountain-600">
                          {post.title}
                        </Link>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <CalendarDays size={12} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        {index < recentPosts.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/blog" className="text-sm text-mountain-600 hover:text-mountain-800 inline-flex items-center">
                    View all posts <ArrowRight size={14} className="ml-1" />
                  </Link>
                </CardFooter>
              </Card>

              {/* Newsletter Subscription */}
              <Card className="mt-6 bg-mountain-50">
                <CardHeader>
                  <CardTitle>Subscribe to Our Newsletter</CardTitle>
                  <CardDescription>Get the latest trekking tips and updates in your inbox</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-white"
                    />
                    <Button className="w-full bg-mountain-600 hover:bg-mountain-700">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
