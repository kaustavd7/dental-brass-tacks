import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="text-8xl font-serif font-bold text-teal-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
          The page you are looking for does not exist. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-all"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
