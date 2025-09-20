import Header from "./Header"
import Footer from "./Footer"
const ContactUs = () =>{
    return (
        <>
       
        <div className="max-w-3xl mx-auto px-6 py-10 h-screen">
    <h1 className="text-3xl font-bold text-amber-800 mb-6">📞 Contact Us</h1>

    <p className="text-gray-700 mb-4">
      Have questions, feedback, or need support? We’d love to hear from you!
    </p>

    <div className="space-y-4 text-gray-800">
      <p><span className="font-semibold">📍 Address:</span> FoodieHub HQ, Main Street, Jamshedpur, India</p>
      <p><span className="font-semibold">📧 Email:</span> support@foodiehub.com</p>
      <p><span className="font-semibold">📱 Phone:</span> +91 98765 43210</p>
      <p><span className="font-semibold">🕒 Working Hours:</span> Mon - Sun, 10:00 AM - 11:00 PM</p>
    </div>

    <div className="mt-8">
      <h2 className="text-xl font-semibold text-amber-800 mb-2">Follow Us</h2>
      <div className="flex gap-5 text-2xl">
        <a href="#" className="hover:text-blue-600">🌐</a>
        <a href="#" className="hover:text-pink-600">📸</a>
        <a href="#" className="hover:text-blue-500">🐦</a>
        <a href="#" className="hover:text-red-600">▶️</a>
      </div>
    </div>
  </div>
        <Footer/>
        </>
    )
}
export default ContactUs