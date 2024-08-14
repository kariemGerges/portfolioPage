import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBlogFetcher from '../../Hooks/useBlogFetcher'
import BlogHeader from "../BlogHeader/BlogHeader";
import Loading from "../Loading/Loading";

const BlogList = () => {

    const { blogData, loading, error } = useBlogFetcher();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // helper functions
    const handleDate = (time) => {
        const date = new Date(time);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    };

    const mostRecentArticle = blogData.sort((a, b)=> new Date(b.date) - new Date(a.date));

    return (
      <div className="min-h-screen p-4 mt-4">
        <div className={` bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-1' : ''}`}>
          <BlogHeader />
        </div>        
        {/* Main Content */}
        <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hero Section that displays the most recent article */}
          <section className="lg:col-span-2">
          {loading && <p>It's coming<Loading /></p>}
          {error && <p>{error}</p>}
              { mostRecentArticle[0] && (
                <div className="relative  p-8 rounded-lg shadow-lg overflow-hidden">
                  <h1 className="text-3xl font-bold mb-4">{mostRecentArticle[0].title}</h1>
                    <img
                      src={mostRecentArticle[0].image}
                      alt={mostRecentArticle[0].title}
                      className="w-full h-64 object-cover mb-6"
                    />
                    <p className="text-sm mb-6">{mostRecentArticle[0].body.introduction} </p>
                  <p className="text-sm mb-6">{handleDate(mostRecentArticle[0].date)}</p>
                  <Link to="/BlogPostDetails" state = {{ singleBlog: mostRecentArticle[0] }}>
                    <button 
                      className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-blue-950 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                      Read article ➡️
                    </button>
                  </Link>
                </div>
              )}

            {/* Secondary Articles */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Article 1 */}
                <Link to="/BlogPostDetails" state={{ singleBlog: mostRecentArticle[1] }}>
                  { mostRecentArticle[1] && (
                    <div className=" p-4 rounded-lg shadow">
                      <h2 className="text-lg font-bold mt-2">
                        {mostRecentArticle[1].title}
                      </h2>
                      <p className="text-sm">{handleDate(mostRecentArticle[1].date)}</p>
                    </div>
                  )}
                </Link>


                {/* Article 2 */}
                <Link to="/BlogPostDetails" state={{ singleBlog: mostRecentArticle[2] }}>
                  { mostRecentArticle[2] && (
                    <div className=" p-4 rounded-lg shadow">
                      <h2 className="text-lg font-bold mt-2">
                        {mostRecentArticle[2].title}
                      </h2>
                      <p className="text-sm">{handleDate(mostRecentArticle[2].date)}</p>

                    </div>
                  )}
                </Link>            
              </div>
            

          </section>
  
          {/* Sidebar Section that shows all articles */}
          <aside className="lg:block">
            <div className="p-6 rounded-lg shadow overflow-y-auto" style={{ maxHeight: '500px' }}>
              <div><h2 className="text-xl font-bold mb-4">All Articles</h2></div>
              {/* Recommended Article 1 */}
              { blogData && blogData.map((blog, index) => (
                <Link to='/BlogPostDetails' state = {{ singleBlog: blog }}>
                  <hr className="my-2 border-gray-700" />
                  <div className="mb-4">
                    <h3 className="font-bold text-gray-800">
                      {blog.title}
                    </h3>
                    <p className="text-sm mt-1">{handleDate(blog.date)}</p>
                  </div>
                  <hr className="my-2 border-gray-700" />
                </Link>
              ))}
            </div>
          </aside>
          
        </main>
        
      </div>
    );
};

export default BlogList;


// {/* Decorative Circle */}
// <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-r from-blue-200 to-purple-300 rounded-full opacity-50 transform translate-x-1/4"></div>