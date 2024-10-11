export default function MobileMenu({ menuOpen, onClose }) {
    return (
        <div
            className={`fixed top-0 right-0 w-64 h-full bg-blue-400 shadow-lg z-50 transition-transform duration-300 ease-in-out ${
                menuOpen ? "transform translate-x-0" : "transform translate-x-full"
            } md:hidden`}
        >
            <button onClick={onClose} className="absolute top-4 right-4 text-lg">
                ✖
            </button>
            <div className="flex-col mt-12">
                <a href="/user/dashboard" className="block p-4 hover:bg-gray-200">
                    User Dashboard
                </a>
                <a href="/service-provider/dashboard" className="block p-4 hover:bg-gray-200">
                    Provider Dashboard
                </a>
                <a href="/auth/login" className="block p-4 hover:bg-gray-200">
                    Login
                </a>
            </div>
        </div>
    );
}
