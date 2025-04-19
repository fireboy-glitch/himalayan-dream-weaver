
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, User, Clock, ChevronLeft, Facebook, Twitter, ArrowRight } from "lucide-react";

// This is a sample blog post component. In a real application, you would fetch the post data based on the slug
const BlogPost = () => {
  const { slug } = useParams();
  
  // Sample blog post data - in a real app, this would come from an API or database
  const post = {
    title: "Ultimate Guide to Trekking in Nepal",
    excerpt: "From choosing the right trek to essential gear and permits, this comprehensive guide covers everything you need to know about trekking in Nepal.",
    content: `
      <p class="lead">Nepal offers some of the world's most iconic trekking routes, from the popular Everest Base Camp and Annapurna Circuit to hidden gems like Manaslu Circuit and Upper Dolpo. This comprehensive guide will help you plan your perfect Himalayan adventure.</p>
      
      <h2>Choosing the Right Trek</h2>
      <p>With so many options available, selecting the right trek depends on several factors:</p>
      <ul>
        <li><strong>Experience level:</strong> Some treks like Everest Base Camp and Manaslu Circuit are challenging, while others like Ghorepani Poon Hill are suitable for beginners.</li>
        <li><strong>Duration:</strong> Treks can range from 4-5 days (Poon Hill) to 3+ weeks (Upper Dolpo, Kanchenjunga).</li>
        <li><strong>Season:</strong> The primary trekking seasons are spring (March-May) and autumn (September-November).</li>
        <li><strong>Permits:</strong> Different regions require different permits, with some restricted areas having additional fees.</li>
      </ul>
      
      <h2>Essential Gear for Himalayan Trekking</h2>
      <p>Proper equipment is crucial for a successful trek. Here's what you'll need:</p>
      <ul>
        <li><strong>Clothing:</strong> Moisture-wicking base layers, warm mid-layers, waterproof outer layers, and proper hiking boots.</li>
        <li><strong>Sleeping:</strong> A good quality sleeping bag rated for low temperatures.</li>
        <li><strong>Accessories:</strong> Trekking poles, headlamp, water purification, and a well-fitted backpack.</li>
        <li><strong>First aid:</strong> Basic supplies including altitude sickness medication.</li>
      </ul>
      
      <h2>Understanding Permits</h2>
      <p>Most trekking regions in Nepal require permits:</p>
      <ul>
        <li><strong>TIMS Card:</strong> The Trekkers' Information Management System card is required for most treks.</li>
        <li><strong>Conservation Area Permits:</strong> Required for protected areas like Annapurna, Langtang, and Sagarmatha.</li>
        <li><strong>Restricted Area Permits:</strong> For areas like Upper Mustang, Dolpo, and Kanchenjunga.</li>
      </ul>
      
      <h2>Altitude Sickness Prevention</h2>
      <p>Acute Mountain Sickness (AMS) is a serious concern for high-altitude trekking:</p>
      <ul>
        <li>Ascend slowly, following the "climb high, sleep low" principle</li>
        <li>Stay hydrated and avoid alcohol</li>
        <li>Consider prophylactic medication like Diamox after consulting with a doctor</li>
        <li>Never ignore symptoms - descend if you experience severe headache, vomiting, or difficulty breathing</li>
      </ul>
      
      <h2>Teahouse vs. Camping Treks</h2>
      <p>Most popular trekking routes offer teahouse accommodation, providing basic rooms and meals. More remote areas require camping treks with tents, kitchen crew, and porters.</p>
      
      <h2>Hiring Guides and Porters</h2>
      <p>While some experienced trekkers go solo on well-established routes, hiring local guides and porters is recommended. They provide cultural insights, handle logistics, ensure safety, and create employment for local communities.</p>
      
      <h2>Responsible Trekking</h2>
      <p>Respect local cultures, minimize environmental impact, and follow Leave No Trace principles. Use biodegradable products, avoid single-use plastics, and support eco-friendly lodges and companies.</p>
      
      <h2>Conclusion</h2>
      <p>Trekking in Nepal is a life-changing experience that combines physical challenge with cultural immersion. With proper preparation, you'll be ready to embark on an unforgettable journey through some of the world's most magnificent mountain landscapes.</p>
    `,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    author: "Mountain Expert",
    date: "2025-04-17",
    readTime: "10 min read",
    tags: ["Trekking", "Nepal", "Travel Tips", "Hiking", "Adventure"]
  };

  const relatedPosts = [
    {
      title: "Essential Gear for Himalayan Trekking",
      image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
      path: "/blog/essential-gear-himalayan-trekking"
    },
    {
      title: "Understanding AMS: Altitude Sickness Guide",
      image: "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17",
      path: "/blog/altitude-sickness-guide"
    },
    {
      title: "Spring vs. Autumn: Best Time to Trek",
      image: "https://images.unsplash.com/photo-1540202404-1b927e27fa8b",
      path: "/blog/spring-vs-autumn-trekking"
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Link to="/blog" className="flex items-center text-mountain-600 hover:text-mountain-800 mb-6">
              <ChevronLeft size={16} className="mr-1" />
              Back to Blog
            </Link>
          </div>
          
          {/* Hero Section */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
            <div className="aspect-[3/1] relative">
              <img 
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="container-custom py-8">
                  <div className="max-w-3xl">
                    <h1 className="text-3xl md:text-4xl text-white font-bold mb-4">{post.title}</h1>
                    <div className="flex flex-wrap items-center text-sm text-gray-300 gap-x-6 gap-y-2">
                      <div className="flex items-center">
                        <User size={16} className="mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarDays size={16} className="mr-2" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                {/* Post Content */}
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                
                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link 
                        key={index}
                        to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Share */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Share this article:</h4>
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="rounded-full w-9 h-9 p-0">
                      <Facebook size={16} />
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full w-9 h-9 p-0">
                      <Twitter size={16} />
                    </Button>
                  </div>
                </div>
                
                {/* Author Bio */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <User size={24} className="text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{post.author}</h3>
                      <p className="text-gray-600 text-sm">
                        Experienced mountain guide and trekking expert with over 15 years of experience 
                        leading expeditions throughout the Himalayas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Related Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>Related Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedPosts.map((post, index) => (
                    <div key={index} className="group">
                      <Link to={post.path} className="flex space-x-3">
                        <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium group-hover:text-mountain-600 transition-colors duration-200">
                            {post.title}
                          </h4>
                        </div>
                      </Link>
                      {index < relatedPosts.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              {/* Booking CTA */}
              <div className="mt-6 bg-mountain-50 rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-2">Ready for Your Adventure?</h3>
                <p className="text-gray-600 mb-4">
                  Book your perfect trek today and experience the breathtaking beauty of the Himalayas!
                </p>
                <Link to="/excess-now">
                  <Button className="w-full bg-mountain-600 hover:bg-mountain-700">
                    Find Your Perfect Trek <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
