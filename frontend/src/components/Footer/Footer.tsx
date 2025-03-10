const Footer = () => {
    return (
      <div className="bg-blue-800 py-10 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <span className="text-3xl text-white font-bold tracking-tight">
              Weekend.com
            </span>
            <p className="text-white/80 text-sm max-w-xs">
              Discover your perfect getaway with our curated selection of luxury destinations worldwide.
            </p>
          </div>
  
          {/* Copyright and Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold text-lg">Contact</h4>
              <p className="text-white/80 text-sm">support@weekend.com</p>
              <p className="text-white/80 text-sm">+1 (555) 123-4567</p>
            </div>
  
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold text-lg">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
  
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold text-lg">Legal</h4>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
  
        {/* Copyright Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="container mx-auto text-center md:text-left">
            <p className="text-white/60 text-sm">
              © 2025 Weekend.com. All rights reserved. 
              <span className="mx-2">|</span>
              Proudly made with ❤️ by travel enthusiasts
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;