



export default function Footer()
    {
        return(
            <footer className="bg-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-sm text-gray-600">Made with Next.js</p>
                </div>
                <div className="text-center">
                  <form className="max-w-md mx-auto">
                    <h3 className="text-lg font-medium mb-2">Newsletter</h3>
                    <p className="text-sm text-gray-600 mb-4">Sign up with your email address to receive news and updates.</p>
                    <div className="flex gap-2">
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                      />
                      <button 
                        type="submit"
                        className="px-6 py-2 bg-black text-white hover:bg-gray-800 cursor-pointer"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">©CHOCMAN</p>
                </div>
              </div>
            </div>
          </footer>
        )
    }