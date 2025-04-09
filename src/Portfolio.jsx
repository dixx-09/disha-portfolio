import React from "react";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-purple-700">Hi, I'm Disha Shenoy 👋</h1>
        <p className="text-lg text-gray-600 mt-2">Aspiring Software Developer | Python Enthusiast | BCA Graduate 2024</p>
        <p className="text-sm text-gray-500">📍 Based in India | 📧 shenoydisha2004@gmail.com</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-600">About Me</h2>
        <ul className="list-disc list-inside mt-3 text-gray-700">
          <li>Currently learning <strong>Machine Learning</strong> and <strong>Full Stack Development</strong></li>
          <li>Built a deep learning model for <strong>Black & White Image Colorization</strong></li>
          <li>Developed a <strong>Python GUI E-commerce Price Comparator</strong></li>
          <li>Created a <strong>Flappy Bird clone</strong> using Python and Pygame</li>
          <li>Enjoys building creative tools and solving real-world problems</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-600">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {['Python',\t 'Java', 'HTML5', 'CSS3', 'JavaScript', 'OpenCV'].map(tech => (
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium" key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-600">Projects</h2>
        <div className="grid gap-4 mt-4">
          <div className="bg-white shadow-md rounded-xl p-4">
            <h3 className="text-xl font-bold text-purple-700">Image Colorization using Deep Learning</h3>
            <p className="text-gray-700">Python app using OpenCV and Caffe to colorize black & white images using AI.</p>
            <a href="https://github.com/dixx-09/bw-image-colorization" className="text-sm text-blue-600">View on GitHub</a>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
            <h3 className="text-xl font-bold text-purple-700">E-commerce Product Price Comparator</h3>
            <p className="text-gray-700">Tkinter-based GUI that compares prices across platforms.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
            <h3 className="text-xl font-bold text-purple-700">Flappy Bird Game Clone</h3>
            <p className="text-gray-700">Python game using Pygame recreating the Flappy Bird experience.</p>
          </div>
        </div>
      </section>

      <section className="text-center text-sm text-gray-500">
        <p>© 2024 Disha Shenoy • Built with React and Tailwind CSS</p>
        <p>GitHub: <a className="text-blue-600" href="https://github.com/dixx-09">github.com/dixx-09</a></p>
      </section>
    </div>
  );
}
