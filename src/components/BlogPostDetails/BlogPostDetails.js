import { useState, useEffect } from "react";
import BlogHeader from "../BlogHeader/BlogHeader";
import { Link, useLocation } from 'react-router-dom';
import './BlogPostDetails.css';
import { ChevronDown, ChevronUp, Twitter, Facebook, Linkedin } from 'lucide-react';


const ArticleSection = () => {
    const location = useLocation();
    const { singleBlog } = location.state || {};

    // Iterating through the sections to get the title
    const getBodySection = (blogBody) => {
        const titles = [];
        for ( let eachSection in blogBody.body){
            if (blogBody.body[eachSection].title) {
                titles.push(blogBody.body[eachSection].title)
            }
        }
        return (titles);
    };
    const getBodySectionContent = (blogBody) => {
        const contents = [];
        for ( let eachSection in blogBody.body){
            if (blogBody.body[eachSection].content) {
                contents.push(blogBody.body[eachSection].content)
            } 
        }
        return (contents);
    };

    const titles = getBodySection(singleBlog);

    return (
        <section className="mb-8">
            <div>
                {titles && titles.map((title) => (
                    <div>
                        <p className="text-2xl font-bold mb-4 flex items-center hover:text-red-800" id="name">
                            {getBodySection(singleBlog).indexOf(title) + 1}. {title}</p>           
                        <p className="mb-4">{getBodySectionContent(singleBlog).map((content) => content)}</p>
                    </div>
                ))}
          </div>
      </section>
    );
    };

const BlogPostDetails = () => {

    const location = useLocation();
    const { singleBlog } = location.state || {};

    const [toc, setToc] = useState(false);
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

    const handleDate = (time) => {
        const date = new Date(time);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="min-h-screen">
            <BlogHeader />
            { singleBlog && (
                <div>
                    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : ''}`}>
                        <div className="container mx-auto px-4 flex justify-between items-center">
                        <h1 className={`text-3xl md:text-4xl font-bold transition-all duration-300 ${scrolled ? 'text-2xl md:text-3xl' : ''}`}>{singleBlog.title}</h1>
                        <button
                            onClick={() => setToc(!toc)}
                            className="md:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                        >
                            {toc ? <ChevronUp /> : <ChevronDown />}
                        </button>
                        
                        </div>
                    </header>

                    {/* smaller screen toc that has navigation */}
                    <div className="container mx-auto px-4 py-8 flex flex-wrap md:flex-nowrap">
                        {toc && (
                        <aside className="w-full md:w-1/4 md:pr-8 animate-fade-in">
                            <nav className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-24">
                            <h2 className="text-xl font-bold mb-4 text-blue-600">Table of Contents</h2>
                            <ul className="space-y-2">
                                {['Introduction', 'Concurrent Rendering', 'Automatic Batching', 'Suspense Enhancements', 'New Hooks', 'Server Components', 'Challenges and Considerations', 'Conclusion'].map((item, index) => (
                                <li key={index}>
                                    <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-blue-500 hover:text-blue-700 transition-colors">
                                    {item}
                                    </a>
                                </li>
                                ))}
                            </ul>
                            </nav>
                        </aside>
                        )}
                        
                        <main className="w-full md:w-3/4">
                        <article className="bg-white rounded-lg shadow-md p-6 mb-8">
                            <img
                            src={singleBlog.image}
                            alt="React 18 Update"
                            className="w-full h-64 object-cover rounded-lg shadow-md mb-8 transition-transform hover:scale-105"
                            />
                            <div className="flex items-center mb-6 animate-fade-in">
                            <div>
                                <h2 className="text-xl font-bold">{singleBlog.author}</h2>
                                <p className="text-gray-600">{handleDate(singleBlog.date)}</p>
                            </div>
                            </div>
                            
                            <section id="introduction" className="mb-8 animate-fade-in">
                            <h2 className="text-2xl font-bold mb-4 text-blue-600">Introduction</h2>
                            <p className="text-lg">{singleBlog.body.introduction}</p>
                            </section>
                            
                            <ArticleSection />

                            <section id="conclusion" className="bg-yellow-100 p-6 rounded-lg animate-fade-in">
                                <h2 className="text-2xl font-bold mb-4 text-blue-600">Conclusion</h2>
                                <p>{singleBlog.body.conclusion.content}</p>
                            </section>

                            <div className="mt-8 flex justify-center space-x-4 animate-fade-in">
                            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors transform hover:scale-110">
                                <Twitter size={32} />
                            </a>
                            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors transform hover:scale-110">
                                <Facebook size={32} />
                            </a>
                            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors transform hover:scale-110">
                                <Linkedin size={32} />
                            </a>
                            </div>
                        </article>
                        </main>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogPostDetails;