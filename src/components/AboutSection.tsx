
const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-left pl-4">
            What's <span className="text-[#9b87f5]">Pre</span> <span className="text-[#65B741]">Money</span> <span className="text-[#9b87f5]">Post</span>?
          </h2>
          
          <div className="space-y-8 pl-4">
            <p className="text-lg md:text-xl font-light leading-relaxed text-white">
              Founded in 2021, our company set out with a clear vision: to create and nurture brands that resonate with people on a deeper level. We believe that great brands aren't just built—they're crafted with intention, passion, and a deep understanding of human connection.
            </p>
            
            <p className="text-lg md:text-xl font-light leading-relaxed text-white">
              As we continue to grow and evolve, our commitment remains unwavering: to create brands that improve lives, inspire minds, and leave a positive impact on the world. This is not just business for us—it's a responsibility we take to heart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
