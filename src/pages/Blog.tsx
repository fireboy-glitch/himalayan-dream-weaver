
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Essential Guide to Everest Base Camp Trek",
      excerpt: "Everything you need to know about preparing for and completing the iconic Everest Base Camp trek...",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      author: "Sherpa Guide",
      date: "2025-04-15",
      readTime: "8 min read",
      category: "Trekking Guide",
    },
    {
      title: "Best Time to Trek in Nepal",
      excerpt: "A comprehensive guide to Nepal's trekking seasons and what to expect in each one...",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      author: "Trek Expert",
      date: "2025-04-10",
      readTime: "6 min read",
      category: "Travel Tips",
    },
    {
      title: "Cultural Highlights of the Annapurna Region",
      excerpt: "Discover the rich cultural heritage and traditions of the communities in the Annapurna region...",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      author: "Culture Guide",
      date: "2025-04-05",
      readTime: "7 min read",
      category: "Culture",
    },
  ];

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

          {/* Featured Post */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                    alt="Featured post"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="inline-block px-3 py-1 bg-mountain-100 text-mountain-800 rounded-full text-sm font-medium mb-4">
                    Featured
                  </span>
                  <h2 className="heading-md mb-4">
                    Ultimate Guide to Trekking in Nepal
                  </h2>
                  <p className="text-gray-600 mb-6">
                    From choosing the right trek to essential gear and permits, this comprehensive guide covers everything you need to know about trekking in Nepal...
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User size={16} className="mr-2" />
                    <span className="mr-4">Mountain Expert</span>
                    <CalendarDays size={16} className="mr-2" />
                    <span className="mr-4">2025-04-17</span>
                    <Clock size={16} className="mr-2" />
                    <span>10 min read</span>
                  </div>
                  <Button className="bg-mountain-600 hover:bg-mountain-700">
                    Read More
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
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
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
