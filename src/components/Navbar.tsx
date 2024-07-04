

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-6 mx-40">
    <h1 className="text-3xl font-bold">xylem.ai</h1>
    <nav className="space-x-6">
      <a href="#features" className="hover:underline">Products</a>
      <a href="#pricing" className="hover:underline">Blogs</a>
      <a href="#contact" className="hover:underline">FAQs</a>
    </nav>
  </header>
  )
}

export default Navbar