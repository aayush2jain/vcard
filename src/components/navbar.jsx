export default function Navbar() {
    return (
        <nav className="bg-neutral-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">MyWebsite</div>
                <ul className="flex space-x-6">
                    <li><a href="/" className="hover:text-yellow-400">Home</a></li>
                    <li><a href="/about" className="hover:text-yellow-400">About</a></li>
                    <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}