import { Link } from "react-router-dom";
import Navbar from "../../../navbar/index";
import BlogPost from "../../../ui/blog-post/blog-post";
const Blog = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-[1280px] mx-auto  py-8">
                <h1 className="text-3xl font-bold mb-6">Blog</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    {BlogPost.map(post => (
                        <Link to={post.link} key={post.id} className="border rounded-xl hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                <p className="text-gray-600">{post.excerpt}</p>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
