import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, MessageSquare, BarChart2, ShoppingCart, BookMarked, Search } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <BookOpen className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                BookLover AI Buddy
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">Features</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#booklist">Book List</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#ai-discussion">AI Discussion</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#analytics">Analytics</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <form className="flex items-center">
                <Input
                  type="search"
                  placeholder="Search books..."
                  className="w-full md:w-[300px] mr-2"
                />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
              Welcome to BookLover AI Buddy
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl mt-4">
              Your personal AI companion for exploring, discussing, and analyzing books.
            </p>
            <Button className="mt-6" size="lg">
              Get Started
            </Button>
          </div>
        </section>

        {/* Feature Highlights */}
        <section id="features" className="px-4 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Extensive Book Lists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Discover books by category, rankings, and popularity. Search for specific titles with ease.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Summaries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Get detailed summaries of entire books and individual chapters, powered by AI.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Interactive Discussions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Engage in deep discussions about books with our AI, and save your insights.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Book List Showcase */}
        <section id="booklist" className="px-4 py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Our Book Collection</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((book) => (
                <Card key={book} className="overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=150&text=Book ${book}`}
                    alt={`Book ${book}`}
                    width={150}
                    height={200}
                    className="w-full object-cover"
                  />
                  <CardFooter className="p-2">
                    <p className="text-sm font-medium">Book Title {book}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button>View More Books</Button>
            </div>
          </div>
        </section>

        {/* AI Discussion and Analysis */}
        <section id="ai-discussion" className="px-4 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">AI-Powered Book Discussions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Engage in Deep Conversations</h3>
                <p className="mb-4">Discuss books with our AI companion, gaining new insights and perspectives.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-green-500" />
                    Analyze themes and characters
                  </li>
                  <li className="flex items-center">
                    <BookMarked className="mr-2 h-5 w-5 text-blue-500" />
                    Highlight and comment on passages
                  </li>
                  <li className="flex items-center">
                    <BarChart2 className="mr-2 h-5 w-5 text-purple-500" />
                    Track your reading progress
                  </li>
                </ul>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-2">AI: What aspects of the book's theme resonated with you the most?</p>
                  <p className="text-gray-800 mb-2">User: I found the exploration of identity particularly compelling...</p>
                  <p className="text-gray-600">AI: That's an interesting observation. The author's treatment of identity does indeed...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personalized Reading Experience */}
        <section className="px-4 py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Your Personalized Reading Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Save and Categorize</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Organize your discussions, highlights, and comments for easy reference.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Chapter Summaries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Dive deep into each chapter with AI-generated summaries and analysis.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Reading Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Get personalized book recommendations based on your reading history and preferences.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Order and Access */}
        <section className="px-4 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Easy Access to Your Favorite Books</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Found a book you love? Order the physical copy or access the e-book version instantly.
            </p>
            <Button className="mr-4">
              <ShoppingCart className="mr-2 h-4 w-4" /> Order Books
            </Button>
            <Button variant="outline">Access E-Books</Button>
          </div>
        </section>

        {/* Activity Tracking and Analytics */}
        <section className="px-4 py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Track Your Reading Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Analytics</h3>
                <p className="mb-4">Gain insights into your reading habits and progress with detailed analytics.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <BarChart2 className="mr-2 h-5 w-5 text-blue-500" />
                    Visualize your reading statistics
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-green-500" />
                    Track books read and pages completed
                  </li>
                  <li className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-purple-500" />
                    Review your discussion history
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Reading+Analytics+Chart"
                  alt="Reading Analytics Chart"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Start Your Reading Adventure Today</h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto">
              Join BookLover AI Buddy and transform your reading experience with AI-powered insights and personalized recommendations.
            </p>
            <Button size="lg" variant="secondary">
              Sign Up Now
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <BookOpen className="h-6 w-6" />
            <p className="text-center text-sm leading-loose md:text-left">
              Built by BookLover AI Buddy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

