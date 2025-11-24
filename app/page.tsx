"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Bot,
  LayoutDashboard,
  ArrowRight,
  Zap,
  Users,
  TrendingUp,
  Moon,
  Sun,
  Languages,
  Radio,
} from "lucide-react";
import { useState, useEffect } from "react";
import { translations, type Language } from "@/lib/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [honeypot, setHoneypot] = useState("");

  const t = translations[language];

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const features = [
    {
      icon: Radio,
      title: t.features.monitoring.title,
      description: t.features.monitoring.description,
    },
    {
      icon: Bot,
      title: t.features.aiCargo.title,
      description: t.features.aiCargo.description,
    },
    {
      icon: Zap,
      title: t.features.updater.title,
      description: t.features.updater.description,
    },
    {
      icon: Users,
      title: t.features.driverManagement.title,
      description: t.features.driverManagement.description,
    },
    {
      icon: LayoutDashboard,
      title: t.features.adminDashboard.title,
      description: t.features.adminDashboard.description,
    },
  ];

  const stats = [
    { value: "2.3M+", label: t.traction.stats.cargoAds },
    { value: "2", label: t.traction.stats.timeToScale },
    { value: "2406", label: t.traction.stats.activeUsers },
    { value: "47", label: t.traction.stats.companies },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot validation - reject if filled
    if (honeypot) {
      console.warn("Bot submission detected");
      return;
    }

    // Continue with normal form submission
    console.log("Form submitted successfully");
    // Add your actual form submission logic here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="text-2xl font-bold">
                <span className="text-foreground">JAHON</span>{" "}
                <span className="text-primary">YUKLARI</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="hidden md:flex items-center gap-6">
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.features}
                </a>
                <a
                  href="#stats"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.traction}
                </a>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.about}
                </a>
                <a
                  href="#testimonials"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {language === "en"
                    ? "Testimonials"
                    : language === "uz"
                    ? "Fikrlar"
                    : "Отзывы"}
                </a>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.contact}
                </a>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://t.me/Jahonyuklari"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.nav.getStarted}
                  </a>
                </Button>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Languages className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLanguage("en")}>
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("uz")}>
                    O'zbek
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("ru")}>
                    Русский
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex justify-center"
            >
              <div className="text-6xl sm:text-7xl font-bold">
                <div className="text-foreground">JAHON</div>
                <div className="text-primary">YUKLARI</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Zap className="h-4 w-4" />
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance"
            >
              {t.hero.title}{" "}
              <span className="text-primary">{t.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 text-lg text-muted-foreground sm:text-xl text-pretty max-w-2xl mx-auto"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="group" asChild>
                <a
                  href="https://t.me/Jahonyuklari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.hero.earlyAccess}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://t.me/Jahonyuklari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.hero.contactUs}
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
              {t.features.title}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {t.features.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative h-full p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-pretty">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section id="stats" className="py-20 sm:py-32 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 to-background p-8 sm:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

              <div className="relative">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  <TrendingUp className="h-4 w-4" />
                  {t.traction.badge}
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
                  {t.traction.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  {t.traction.subtitle}
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {t.about.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t.about.mission.title}
                </h3>
                <p className="text-muted-foreground text-pretty">
                  {t.about.mission.description}
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t.about.story.title}
                </h3>
                <p className="text-muted-foreground text-pretty">
                  {t.about.story.description}
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t.about.impact.title}
                </h3>
                <p className="text-muted-foreground text-pretty">
                  {t.about.impact.description}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Added infinite carousel animation */}
      <section
        id="testimonials"
        className="py-20 sm:py-32 bg-primary/5 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
              {t.testimonials.title}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {t.testimonials.subtitle}
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex gap-6 animate-scroll">
              {/* First set of testimonials */}
              {t.testimonials.drivers.map((driver, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 w-[350px]">
                  <Card className="h-full p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                    <div className="mb-4">
                      <div className="flex items-center gap-1 text-primary mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 text-pretty">
                        &ldquo;{driver.quote}&rdquo;
                      </p>
                    </div>
                    <div className="border-t border-border/50 pt-4">
                      <p className="font-semibold text-foreground">
                        {driver.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {driver.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {driver.location}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {t.testimonials.drivers.map((driver, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-[350px]"
                >
                  <Card className="h-full p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                    <div className="mb-4">
                      <div className="flex items-center gap-1 text-primary mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 text-pretty">
                        &ldquo;{driver.quote}&rdquo;
                      </p>
                    </div>
                    <div className="border-t border-border/50 pt-4">
                      <p className="font-semibold text-foreground">
                        {driver.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {driver.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {driver.location}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Honeypot field - hidden from humans, visible to bots */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t.contact.form.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    {t.contact.form.submit}
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t.contact.info.title}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href={`mailto:${t.contact.info.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {t.contact.info.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {language === "en"
                          ? "Phone"
                          : language === "uz"
                          ? "Telefon"
                          : "Телефон"}
                      </p>
                      <a
                        href={`tel:${t.contact.info.phone}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {t.contact.info.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {language === "en"
                          ? "Address"
                          : language === "uz"
                          ? "Manzil"
                          : "Адрес"}
                      </p>
                      <p className="text-muted-foreground">
                        {t.contact.info.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Telegram</p>
                      <a
                        href={`https://t.me/${t.contact.info.telegram.replace(
                          "@",
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {t.contact.info.telegram}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="text-xl font-bold">
                <span className="text-foreground">JAHON</span>{" "}
                <span className="text-primary">YUKLARI</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a
                href="#about"
                className="hover:text-foreground transition-colors"
              >
                {t.footer.about}
              </a>
              <a
                href="#privacy"
                className="hover:text-foreground transition-colors"
              >
                {t.footer.privacy}
              </a>
              <a
                href="#contact"
                className="hover:text-foreground transition-colors"
              >
                {t.footer.contact}
              </a>
              <a
                href={`mailto:${t.footer.email}`}
                className="hover:text-foreground transition-colors"
              >
                {t.footer.email}
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
