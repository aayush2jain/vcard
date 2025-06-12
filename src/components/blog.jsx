export default function Blog(){
    const data = [
        {
            title: "Understanding React Hooks",
            date: "2023-10-01",
            content: "React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 and have since become a fundamental part of React development.",
            link: "https://example.com/react-hooks"
        },
        {
            title: "A Guide to CSS Grid Layout",
            date: "2023-09-15",
            content: "CSS Grid Layout is a powerful layout system that allows you to create complex web layouts with ease. It provides a two-dimensional grid-based layout system, making it easier to design responsive web pages.",
            link: "https://example.com/css-grid"
        },
        {
            title: "JavaScript ES6 Features You Should Know",
            date: "2023-08-20",
            content: "ES6 (ECMAScript 2015) introduced many new features to JavaScript, including arrow functions, classes, template literals, and destructuring. These features make JavaScript more powerful and easier to work with.",
            link: "https://example.com/es6-features"
        }
    ];
    return(
        <>
            <div className=" rounded-3xl text-white/90 bg-neutral-900">
                  <h1 className="text-3xl font-[700] mb-[4vh] p-1 underline-offset-16 underline decoration-[2px]  decoration-yellow-500">Blogs</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                    {data.map((post, index) => (
                        <div key={index} className="group w-full border  bg-gradient-to-br from-neutral-800 to-neutral-900  border-neutral-700 pb-2 rounded-3xl">
                            <div className="w-full  relative">
                            <img className="rounded-3xl p-2 object-cover transition-all ease-in-out duration-200 group-hover:scale-110 w-full h-full" src='blog-1.jpg'></img>
                            </div>
                            <div className="p-5">
    
                            <h2 className="text-xl font-bold group-hover:text-yellow-400">{post.title}</h2>
                             <p className="text-gray-400 items-end flex flex-col   text-sm mb-1">
                                <p>{new Date(post.date).toLocaleDateString()}</p></p>
                            <p className="text-gray-300 mb-2">{post.content}...</p>
                            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">Read more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}