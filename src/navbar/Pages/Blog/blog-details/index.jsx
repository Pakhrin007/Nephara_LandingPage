import { useParams } from "react-router-dom";
import Navbar from "../../../../navbar/index";
import BlogPost from "../../../../ui/blog-post/blog-post";
const BlogDetail = () => {
    const { id } = useParams();
    const blog = BlogPost.find(post => post.id === parseInt(id));

    if (!blog) {
        return (
            <>
                <Navbar />
                <div className="max-w-[800px] mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold text-red-500">Blog not found</h2>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="max-w-[800px] mx-auto px-4 py-8">
                <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-xl mb-6" />
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <p className="text-gray-700 text-lg">{blog.detail}</p>
            </div>
        </>
    );
};

export default BlogDetail;
