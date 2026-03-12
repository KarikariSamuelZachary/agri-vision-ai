import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Leaf, Zap, Shield, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero text-cream py-20 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-forest-green-light filter blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-pretty">
                Detect Plant Diseases with AI
              </h1>
              <p className="text-lg md:text-xl text-cream/90 mb-8 text-balance">
                Identify crop diseases instantly with our advanced AI-powered diagnostic tool. Get accurate predictions and treatment recommendations in seconds.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/diagnose"
                  className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-charcoal px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start Diagnosis
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 border-2 border-cream hover:bg-cream/10 text-cream px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </a>
              </div>

              <p className="text-sm text-cream/70">
                Trusted by farmers across {14} crop varieties
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="pt-5 pb-5 md:pt-14 md:pb-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple three-step process to diagnose your plant diseases
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Leaf,
                  title: 'Capture Image',
                  description: 'Take a clear photo of the affected plant leaf or fruit',
                },
                {
                  icon: Zap,
                  title: 'AI Analysis',
                  description: 'Our advanced AI analyzes the image and identifies the disease',
                },
                {
                  icon: Shield,
                  title: 'Get Treatment',
                  description: 'Receive detailed treatment recommendations and care instructions',
                },
              ].map((step, idx) => {
                const StepIcon = step.icon
                return (
                  <div
                    key={idx}
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="h-full rounded-lg border border-border bg-card p-8 text-center flex flex-col items-center justify-center">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-amber/20 text-amber mb-4">
                        <StepIcon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    {idx < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-7 transform -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Supported Crops */}
        <section className="py-10 md:py-14 bg-card border-t border-border">
        <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Supported Crops
              </h2>
              <p className="text-lg text-muted-foreground">
                Detect diseases across multiple crop varieties
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  name: 'Tomato',
                  diseases: 'Bacterial spot, Early blight, Leaf mold, Septoria leaf spot, Spider mites, Target spot, Mosaic virus, YLCV',
                  icon: '🍅',
                },
                {
                  name: 'Pepper',
                  diseases: 'Bacterial spot, Healthy plant monitoring',
                  icon: '🫑',
                },
                {
                  name: 'Potato',
                  diseases: 'Early blight, Late blight, Healthy plant monitoring',
                  icon: '🥔',
                },
              ].map((crop) => (
                <div
                  key={crop.name}
                  className="rounded-lg border border-border bg-background p-6 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-3">{crop.icon}</div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {crop.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {crop.diseases}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: TrendingUp,
                  label: 'Accuracy',
                  value: '95.7%',
                },
                {
                  icon: Leaf,
                  label: 'Disease Classes',
                  value: '15+',
                },
                {
                  icon: Shield,
                  label: 'Training Images',
                  value: '10K+',
                },
                {
                  icon: Zap,
                  label: 'Response Time',
                  value: '<1s',
                },
              ].map((stat, idx) => {
                const StatIcon = stat.icon
                return (
                  <div
                    key={idx}
                    className="text-center animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-amber/20 text-amber mb-4">
                      <StatIcon className="h-6 w-6" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                    <p className="text-3xl font-heading font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-forest-green to-forest-green-light text-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-pretty">
              Ready to Diagnose Your Plants?
            </h2>
            <p className="text-lg text-cream/90 mb-8 max-w-2xl mx-auto">
              Get started now and protect your crops with our AI-powered disease detection system.
            </p>
            <Link
              href="/diagnose"
              className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-charcoal px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Free Diagnosis
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
