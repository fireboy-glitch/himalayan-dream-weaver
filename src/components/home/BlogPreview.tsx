
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Essential Gear for Trekking in the Himalayas",
    excerpt: "Learn about the must-have gear and equipment for a successful and safe Himalayan trek.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=80",
    date: "April 12, 2023",
    path: "/blog/essential-gear-for-himalayan-trekking"
  },
  {
    id: 2,
    title: "Best Time to Visit Everest Base Camp",
    excerpt: "Discover the optimal seasons and weather conditions for your Everest Base Camp journey.",
    image: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=800&q=80",
    date: "March 5, 2023",
    path: "/blog/best-time-for-everest-base-camp"
  },
  {
    id: 3,
    title: "Cultural Etiquette: Respecting Local Traditions",
    excerpt: "Tips on respecting and appreciating the rich cultural heritage you'll encounter in Nepal.",
    image: "https://images.unsplash.com/photo-1518002054494-de13c05cc718?auto=format&fit=crop&w=800&q=80",
    date: "February 20, 2023",
    path: "/blog/nepal-cultural-etiquette"
  }
];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={post.path}>
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{post.date}</span>
        </div>
        <Link to={post.path}>
          <h3 className="text-xl font-bold mb-2 hover:text-mountain-600 transition-colors duration-200">{post.title}</h3>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link to={post.path} className="text-mountain-600 font-medium hover:text-mountain-700 inline-flex items-center">
          Read More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const BlogPreview = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trekking tips, destination insights, and adventure stories from the heart of the Himalayas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button className="bg-mountain-500 hover:bg-mountain-600 text-white">
              View All Articles <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
