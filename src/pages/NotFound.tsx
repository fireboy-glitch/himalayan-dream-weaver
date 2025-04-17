
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-9xl font-bold text-mountain-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-mountain-500 hover:bg-mountain-600">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
