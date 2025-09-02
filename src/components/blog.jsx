import { useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([
    {
      title: "Understandixcxcx eact Hooks",
      date: "2023-10-01",
      content:
        "React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 and have since become a fundamental part of React development.",
      link: "https://example.com/react-hooks",
      image: "blog-1.jpg",
    },
    {
      title: "A Guide to CSS Grid Layout",
      date: "2023-09-15",
      content:
        "CSS Grid Layout is a powerful layout system that allows you to create complex web layouts with ease. It provides a two-dimensional grid-based layout system, making it easier to design responsive web pages.",
      link: "https://example.com/css-grid",
      image: "blog-1.jpg",
    },
  ]);

  // blog input state
  const [blogInput, setBlogInput] = useState({
    title: "",
    author: "",
    content: "",
    tags: "",
    image: "",
    link: "",
  });

  // handle add blog
  const handleAddBlog = (e) => {
    e.preventDefault();

    const { title, author, content, link } = blogInput;
    if (title && author && content && link) {
      const newBlog = {
        ...blogInput,
        date: new Date().toISOString(), // auto-generate current date
      };

      setBlogs([newBlog, ...blogs]); // prepend new blog
      setBlogInput({
        title: "",
        author: "",
        content: "",
        tags: "",
        image: "",
        link: "",
      });
    }
  };

  return (
    <div className="rounded-3xl text-white/90 bg-neutral-900 p-6">
      <h1 className="text-3xl font-[700] mb-[4vh] underline-offset-16 underline decoration-[2px] decoration-yellow-500">
        Blogs
      </h1>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {blogs.map((post, index) => (
          <div
            key={index}
            className="group w-full border bg-gradient-to-br from-neutral-800 to-neutral-900 border-neutral-700 pb-2 rounded-3xl"
          >
            <div className="w-full relative">
              <img
                className="rounded-3xl p-2 object-cover transition-all ease-in-out duration-200 group-hover:scale-110 w-full h-full"
                src={post.image || "blog-1.jpg"}
                alt={post.title}
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-bold group-hover:text-yellow-400">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm mb-1 flex justify-between">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                {post.author && <span>✍ {post.author}</span>}
              </p>
              <p className="text-gray-300 mb-2">
                {post.content.length > 100
                  ? post.content.substring(0, 100) + "..."
                  : post.content}
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Form */}
      <form
        onSubmit={handleAddBlog}
        className="mt-10 bg-neutral-800 p-6 rounded-2xl space-y-4 shadow-lg"
      >
        <h2 className="text-xl font-bold text-yellow-400 mb-2">Add New Blog</h2>

        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-2 bg-neutral-900 text-white border border-neutral-600 rounded"
          value={blogInput.title}
          onChange={(e) =>
            setBlogInput({ ...blogInput, title: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Author"
          className="w-full p-2 bg-neutral-900 text-white border border-neutral-600 rounded"
          value={blogInput.author}
          onChange={(e) =>
            setBlogInput({ ...blogInput, author: e.target.value })
          }
          required
        />

        <textarea
          placeholder="Blog Content"
          className="w-full p-2 bg-neutral-900 text-white border border-neutral-600 rounded"
          value={blogInput.content}
          onChange={(e) =>
            setBlogInput({ ...blogInput, content: e.target.value })
          }
          rows="6"
          required
        />

        <input
          type="text"
          placeholder="Tags (comma separated)"
          className="w-full p-2 bg-neutral-900 text-white border border-neutral-600 rounded"
          value={blogInput.tags}
          onChange={(e) =>
            setBlogInput({ ...blogInput, tags: e.target.value })
          }
        />

        <input
          type="url"
          placeholder="Featured Image Link"
          className="w-full p-2 bg-neutral-900 text-white border border-neutral-600 rounded"
          value={blogInput.image}
          onChange={(e) =>
            setBlogInput({ ...blogInput, image: e.target.value })
          }
        />

        <input
          type="url"
          placeholder="Blog Link"
          className="w-full p-2 bg-neutral-900 text-white border border-neutral-600 rounded"
          value={blogInput.link}
          onChange={(e) => setBlogInput({ ...blogInput, link: e.target.value })}
          required
        />

        <button
          type="submit"
          className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-all"
        >
          Publish Ba
        </button>
      </form>
    </div>
  );
}
