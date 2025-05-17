const Footer = () => {
    return (
        <footer className="bg-blue-200 text-blue-900 py-10 mt-16 rounded-t-3xl shadow-inner">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About */}
                <div>
                    <h3 className="text-xl font-bold mb-3">SweetDelights</h3>
                    <p className="text-sm">
                        Delightful cakes and desserts made with love. Visit us to enjoy sweet moments!
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-xl font-bold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                    <div className="flex space-x-4 text-blue-600 text-xl">
                        <a href="#"><i className="fab fa-facebook-f hover:text-blue-800"></i></a>
                        <a href="#"><i className="fab fa-instagram hover:text-pink-600"></i></a>
                        <a href="#"><i className="fab fa-twitter hover:text-blue-500"></i></a>
                        <a href="#"><i className="fab fa-github hover:text-gray-800"></i></a>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-blue-800 mt-10">
                © {new Date().getFullYear()} SweetDelights. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
