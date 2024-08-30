import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useBlogFetcher from '../../Hooks/useBlogFetcher'
import BlogHeader from "../BlogHeader/BlogHeader";
import { Loader2, MoveRight  } from 'lucide-react';
import Loading from "../Loading/Loading";
import ThemeContext from "../ThemeContext/ThemeContext";

const BlogList = () => {

    const { blogData, loading, error } = useBlogFetcher();
    const [scrolled, setScrolled] = useState(false);
    const { theme } = useContext(ThemeContext);


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

    // date handler
    const handleDate = (time) => {
        const date = new Date(time);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    };

    // most recent article
    const mostRecentArticle = blogData.sort((a, b)=> new Date(b.date) - new Date(a.date));

    return (
      <div className="min-h-screen p-4 mt-4">
        <div className={`${theme ? 'bg-gray-800' : 'bg-yellow-200'} 
                rounded-lg shadow-md sticky top-0 z-50 transition-all 
                duration-300 ${scrolled ? 'py-3' : ''}`}
        >
          <BlogHeader />
        </div>        
        {/* Main Content */}
        { loading && (
          <div className="text-3xl font-bold mt-4">
            <h1 className="inline-flex items-center">
              It's c 
              <Loader2 className="animate-spin text-[#960019] h-7 w-7 mx-1" />
              ming
            </h1>
            <Loading type="bars" color="#960019" height={100} width={100} />
          </div>
        )}
          <main className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Hero Section that displays the most recent article */}
            <section className="lg:col-span-2">
            {error && <p>{error}</p>}
                { mostRecentArticle[0] && (
                  <div className="relative p-6 rounded-lg shadow-lg overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl mb-4 ">{mostRecentArticle[0].title}</h2>
                      <img
                        src={mostRecentArticle[0].image}
                        alt={mostRecentArticle[0].title}
                        className="w-full h-64 object-cover mb-6"
                      />
                      <p className="text-sm mb-6">{mostRecentArticle[0].body.introduction} </p>
                    <p className="text-sm mb-6">{handleDate(mostRecentArticle[0].date)}</p>
                    <Link to="/BlogPostDetails" state = {{ singleBlog: mostRecentArticle[0] }}>
                    <div className="flex">
                      <MoveRight 
                        className="animate-bounce mr-3 mt-2"
                        />
                          <button 
                            className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold 
                            text-blue-950 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Read article
                      </button>
                    </div>
                    </Link>
                  </div>
                )}

              {/* Secondary Articles */}
                <div className="mt-6 border grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Article 1 */}
                  <Link to="/BlogPostDetails" state={{ singleBlog: mostRecentArticle[1] }}>
                    { mostRecentArticle[1] && (
                      <div className="border-r-2 p-4 shadow">
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
                      <div className="p-4 shadow">
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
              <div className="p-6  rounded-lg shadow overflow-y-auto border" style={{ maxHeight: '600px' }} id="custom-shadow">
                <div><h2 className="text-xl font-bold mb-4" id="navLinks">All Articles</h2></div>
                {/* Recommended Article 1 */}
                { blogData && blogData.map((blog, index) => (
                  <Link to='/BlogPostDetails' state = {{ singleBlog: blog }}>
                    <hr className="my-2 border-white-700" />
                    <div className="mb-4">
                      <h3 className="font-bold">
                        {blog.title}
                      </h3>
                      <p className="text-sm mt-1">{handleDate(blog.date)}</p>
                    </div>
                    <hr className="my-2 border-white-700" />
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