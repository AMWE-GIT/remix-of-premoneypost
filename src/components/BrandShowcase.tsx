
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BrandShowcase = () => {
  return (
    <section id="brands" className="py-16">
      <div className="container mx-auto px-4">
        {/* Main Brand - Schoolio */}
        <Dialog>
          <DialogTrigger asChild>
            <div className="w-full aspect-video rounded-3xl overflow-hidden mb-6 relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')] bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute bottom-[10%] left-0 p-8 z-20 w-full text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Schoolio</h2>
                <p className="text-gray-300 text-lg max-w-xl mx-auto mb-6">Revolutionizing education through technology and personalized learning experiences.</p>
                <Button className="bg-[#65B741] hover:bg-[#4E9F3D] text-white">Learn more</Button>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white">
            <div className="relative w-full">
              {/* Hero Banner - now with padding and rounded corners */}
              <div className="w-full p-3">
                <div className="w-full h-[30vh] md:h-[40vh] relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">Education Technology</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Schoolio</h2>
                  </div>
                </div>
              </div>

              {/* Content - Updated with better spacing */}
              <div className="p-6 md:p-8">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-1">Revolutionizing Education</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6 mt-4"> {/* Increased vertical spacing between elements */}
                  <p className="text-gray-800">
                    Schoolio is redefining the educational experience through innovative technology solutions
                    that personalize learning for every student. Our platform combines AI-powered 
                    insights with engaging content to create adaptive learning paths.
                  </p>
                  
                  <div className="pt-2 mb-16"> {/* Increased bottom margin from mb-8 to mb-16 */}
                    <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-800">
                      To empower educators and inspire learners by creating technology that adapts to 
                      individual needs, fostering a love for lifelong learning and academic excellence.
                    </p>
                  </div>
                  
                  <div className="mt-24 flex justify-center mb-4"> {/* Increased top margin from mt-16 to mt-24 */}
                    <Button className="bg-[#65B741] hover:bg-[#4E9F3D] text-white gap-2 px-5 py-2 text-sm">
                      Visit website <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        {/* 2x2 Grid for Other Brands */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Brand 2 - Overunderrated */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="aspect-square rounded-3xl overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80')] bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute bottom-[10%] left-0 p-6 z-20 w-full text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Overunderrated</h2>
                  <p className="text-gray-300 text-sm max-w-md mx-auto mb-4">Challenging perceptions through innovative media and content creation.</p>
                  <Button className="bg-[#65B741] hover:bg-[#4E9F3D] text-white">Learn more</Button>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white">
              <div className="relative w-full">
                {/* Hero Banner */}
                <div className="w-full p-3">
                  <div className="w-full h-[30vh] md:h-[40vh] relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                    <div className="absolute bottom-6 left-6 z-20">
                      <p className="text-sm uppercase tracking-wider text-white mb-2">Media & Content</p>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">Overunderrated</h2>
                    </div>
                  </div>
                </div>

                {/* Content - Updated with better spacing */}
                <div className="p-6 md:p-8">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-1">Challenging Perceptions</DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-4"> {/* Increased vertical spacing between elements */}
                    <p className="text-gray-800">
                      Overunderrated specializes in creating thought-provoking media content that challenges
                      conventional wisdom and societal norms. Our productions span multiple formats
                      from documentaries to interactive digital experiences.
                    </p>
                    
                    <div className="pt-2 mb-16"> {/* Increased bottom margin from mb-8 to mb-16 */}
                      <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                      <p className="text-gray-800">
                        To spark meaningful conversations and inspire critical thinking by creating
                        content that questions assumptions, explores diverse perspectives, and
                        illuminates overlooked truths.
                      </p>
                    </div>
                    
                    <div className="mt-24 flex justify-center mb-4"> {/* Increased top margin from mt-16 to mt-24 */}
                      <Button className="bg-[#65B741] hover:bg-[#4E9F3D] text-white gap-2 px-5 py-2 text-sm">
                        Visit website <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          {/* Brand 3 - ChocOnThese */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="aspect-square rounded-3xl overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute bottom-[10%] left-0 p-6 z-20 w-full text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">ChocOnThese</h2>
                  <p className="text-gray-300 text-sm max-w-md mx-auto mb-4">Premium confectionery products that delight your senses and inspire joy.</p>
                  <Button className="bg-[#65B741] hover:bg-[#4E9F3D] text-white">Learn more</Button>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white">
              <div className="relative w-full">
                {/* Hero Banner */}
                <div className="w-full p-3">
                  <div className="w-full h-[30vh] md:h-[40vh] relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                    <div className="absolute bottom-6 left-6 z-20">
                      <p className="text-sm uppercase tracking-wider text-white mb-2">Premium Confectionery</p>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">ChocOnThese</h2>
                    </div>
                  </div>
                </div>

                {/* Content - Updated with better spacing */}
                <div className="p-6 md:p-8">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-1">Delightful Indulgence</DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-4"> {/* Increased vertical spacing between elements */}
                    <p className="text-gray-800">
                      ChocOnThese crafts premium confectionery products using ethically sourced ingredients
                      and artisanal techniques. Each creation is a perfect blend of tradition and innovation,
                      designed to create moments of pure joy.
                    </p>
                    
                    <div className="pt-2 mb-16"> {/* Increased bottom margin from mb-8 to mb-16 */}
                      <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                      <p className="text-gray-800">
                        To spread happiness through exceptional confectionery experiences while supporting
                        sustainable farming practices and celebrating the rich heritage of chocolate making
                        from around the world.
                      </p>
                    </div>
                    
                    <div className="mt-24 flex justify-center mb-4"> {/* Increased top margin from mt-16 to mt-24 */}
                      <Button className="bg-[#65B741] hover:bg-[#4E9F3D] text-white gap-2 px-5 py-2 text-sm">
                        Visit website <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          {/* Brand 4 - Coming Soon */}
          <div className="aspect-square rounded-3xl overflow-hidden relative group bg-secondary">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">Coming Soon</h2>
                <p className="text-black">Our next exciting venture</p>
              </div>
            </div>
          </div>
          
          {/* Brand 5 - Coming Soon */}
          <div className="aspect-square rounded-3xl overflow-hidden relative group bg-secondary">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">Coming Soon</h2>
                <p className="text-black">Something innovative is brewing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
