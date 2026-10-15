import { useEffect, useMemo, useState } from "react"

import {
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Flower2,
  Heart,
  Images,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  Send,
  Sparkles,
  Star,
  UserRound,
  X,
} from "lucide-react"

import {
  address,
  directionsUrl,
  formattedPhoneNumber,
  gallery,
  getWhatsappUrl,
  navItems,
  phoneNumber,
  pricing,
  services,
  socialLinks,
} from "./data/content"

const heroImage =
  "https://images.unsplash.com/photo-1695527081848-1e46c06e6458?auto=format&fit=crop&w=1200&q=88"

const interiorImage =
  "https://images.unsplash.com/photo-1746723378067-83a345ff3160?auto=format&fit=crop&w=1200&q=85"

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.03 3.2A12.72 12.72 0 0 0 5.08 22.4L3.28 29l6.75-1.77A12.73 12.73 0 1 0 16.03 3.2Zm0 23.3c-2.04 0-4.03-.55-5.76-1.58l-.41-.24-4 .99 1.07-3.9-.27-.42A10.53 10.53 0 1 1 16.03 26.5Zm5.77-7.88c-.32-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.33-.49-2.54-1.57a9.54 9.54 0 0 1-1.76-2.19c-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.07 1.29 3.28c.16.21 2.23 3.4 5.4 4.77.75.33 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.87-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function Logo({ light = false }) {
  return (
    <a
      className={`logo ${light ? "logo--light" : ""}`}
      href="#home"
      aria-label="Mangesha'z Salon home"
    >
      <span className="logo__mark">
        <Flower2 aria-hidden="true" />
      </span>
      <span>
        <strong>Mangesha&apos;z</strong>
        <small>BEAUTY SALON</small>
      </span>
    </a>
  )
}

function ButtonLink({
  href,

  children,

  variant = "primary",

  icon = true,

  onClick,

  target,
}) {
  return (
    <a
      className={`btn btn--${variant}`}
      href={href}
      onClick={onClick}
      target={target}
      rel={target ? "noreferrer" : undefined}
    >
      {children}
      {icon && <ArrowRight size={17} aria-hidden="true" />}
    </a>
  )
}

function SectionHeading({ eyebrow, title, text, align = "center" }) {
  return (
    <div className={`section-heading section-heading--${align} reveal-on-scroll`}>
      <p className="eyebrow">
        <span />
        {eyebrow}
        <span />
      </p>
      <h2>{title}</h2>
      {text && <p className="section-heading__text">{text}</p>}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const close = () => setOpen(false)

    window.addEventListener("resize", close)

    return () => window.removeEventListener("resize", close)
  }, [])

  // Active section scrollspy observer

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140

      const sectionIds = navItems.map(([, id]) => id)

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])

        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i])

          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setOpen(false)

    const el = document.getElementById(id)

    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault()

                handleNavClick(id)
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="navbar__actions">
          <a
            className="navbar__call-btn"
            href={`tel:${phoneNumber}`}
            aria-label={`Call salon on ${formattedPhoneNumber}`}
          >
            <Phone size={15} />
            <span>Call Now</span>
          </a>
          <ButtonLink href="#appointment" icon={false}>
            Book Appointment
          </ButtonLink>
        </div>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault()

                handleNavClick(id)
              }}
            >
              {label}
              <ChevronRight size={18} />
            </a>
          ))}
          <div className="mobile-nav__actions">
            <a
              className="navbar__call-btn navbar__call-btn--mobile"
              href={`tel:${phoneNumber}`}
              onClick={() => setOpen(false)}
            >
              <Phone size={16} />
              <span>Call +91 85509 80432</span>
            </a>
            <ButtonLink href="#appointment" onClick={() => setOpen(false)}>
              Book Appointment
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__orb hero__orb--one" />
      <div className="hero__orb hero__orb--two" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow eyebrow--left hero__eyebrow-anim">
            <span />A BEAUTY RITUAL, MADE PERSONAL
          </p>
          <h1 className="hero__title-anim">
            Your Beauty,
            <br />
            <em className="hero__em-highlight">Our Passion.</em>
          </h1>
          <p className="hero__lead hero__lead-anim">
            Discover your beauty with personalized salon services, expert care,
            and a relaxing experience at Mangesha&apos;z Salon, Pimple Saudagar,
            Pune.
          </p>
          <div className="hero__actions hero__actions-anim">
            <ButtonLink href="#appointment">Book Your Appointment</ButtonLink>
            <ButtonLink href="#services" variant="outline">
              Explore Services
            </ButtonLink>
          </div>
          <div className="hero__trust hero__trust-anim">
            <div className="avatar-stack">
              <span className="avatar-sparkle">
                <Sparkles />
              </span>
              <span className="avatar-heart">
                <Heart />
              </span>
              <span className="avatar-flower">
                <Flower2 />
              </span>
            </div>
            <div className="hero__trust-text">
              <strong>Your beauty. Your style.</strong>
              <small>Your confidence.</small>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img
              src={heroImage}
              alt="Stock photo of a professional hair styling appointment"
            />
            <span className="stock-label">Editorial stock photography</span>
            <div className="hero__image-glare" aria-hidden="true" />
          </div>
          <div className="hero__note">
            <span className="hero__note-icon">
              <Sparkles />
            </span>
            <div>
              <strong>Personalized care</strong>
              <small>Designed around you</small>
            </div>
          </div>
          <div className="hero__flower">
            <Flower2 />
          </div>
        </div>
      </div>
      <div className="hero__bottom">
        <div className="container hero__features">
          <span>
            <Sparkles />
            Personalized services
          </span>
          <span>
            <MapPin />
            Pimple Saudagar, Pune
          </span>
          <span>
            <MessageCircle />
            Easy WhatsApp enquiries
          </span>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__visual reveal-on-scroll">
          <div className="about__image">
            <img
              src={interiorImage}
              alt="Stock photograph representing a professional salon environment"
              loading="lazy"
            />
          </div>
          <div className="about__card">
            <Flower2 />
            <p>
              Beauty feels best when it feels like <em>you.</em>
            </p>
          </div>
        </div>
        <div className="about__content reveal-on-scroll delay-2">
          <SectionHeading
            eyebrow="OUR PHILOSOPHY"
            title="Welcome to Mangesha'z Salon"
            align="left"
          />
          <p className="about__intro">
            At Mangesha&apos;z Salon, we believe beauty is personal.
          </p>
          <p>
            Our salon is dedicated to helping you look and feel your best with
            beauty services tailored to your preferences. Visit us at Shivar
            Chowk, Pimple Saudagar, Pune, and enquire about the services that
            suit your style.
          </p>
          <div className="about__points">
            <span>
              <Check />
              Thoughtful, preference-led service
            </span>
            <span>
              <Check />A comfortable beauty experience
            </span>
            <span>
              <Check />
              Care for everyday and special occasions
            </span>
          </div>
          <ButtonLink href="#appointment">Book Your Visit</ButtonLink>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? services : services.slice(0, 6)

  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="WHAT WE OFFER"
          title="Beauty care for every version of you"
          text="Explore our editable service menu and contact the salon to confirm current availability."
        />
        <div className="services__grid">
          {visible.map((service, index) => (
            <article className={`service-card reveal-on-scroll delay-${(index % 3) + 1}`} key={service.name}>
              <div className="service-card__image">
                <img
                  src={service.image}
                  alt={`Stock image representing ${service.name}`}
                  loading="lazy"
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="service-card__body">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <a
                  href={getWhatsappUrl(
                    `Hello Mangesha'z Salon, I would like to enquire about ${service.name}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire on WhatsApp <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <button className="text-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show fewer services" : "View all services"}{" "}
          <ArrowRight size={16} />
        </button>
        <p className="availability-note">
          Services shown are an editable menu. Please contact the salon to
          confirm current availability.
        </p>
      </div>
    </section>
  )
}

function WhyUs() {
  const items = [
    [
      UserRound,

      "Personalized Beauty Services",

      "Care shaped around your preferences and occasion.",
    ],

    [
      Heart,

      "Comfortable Experience",

      "A thoughtful setting for your beauty appointment.",
    ],

    [
      Sparkles,

      "For Every Occasion",

      "Everyday care through to celebration-ready styling.",
    ],

    [
      MapPin,

      "Convenient Location",

      "Easy to find near Shivar Chowk, Pimple Saudagar.",
    ],

    [
      MessageCircle,

      "Easy WhatsApp Enquiries",

      "Ask about services, pricing, and availability quickly.",
    ],

    [
      CalendarDays,

      "Appointment Convenience",

      "Request a preferred date and time before your visit.",
    ],
  ]

  return (
    <section className="section why">
      <div className="container">
        <SectionHeading
          eyebrow="THE MANGESHA'Z EXPERIENCE"
          title="Care that puts you at the centre"
        />
        <div className="why__grid">
          {items.map(([Icon, title, text], index) => (
            <article className={`reveal-on-scroll delay-${(index % 3) + 1}`} key={title}>
              <span>
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PriceList() {
  const categories = Object.keys(pricing)

  const [active, setActive] = useState(categories[0])

  return (
    <section className="section pricing" id="pricing">
      <div className="container pricing__shell">
        <SectionHeading
          eyebrow="SERVICE MENU"
          title="Price list"
          text="Transparent information begins with a conversation. Select a category, then ask us for the latest pricing."
        />
        <div className="tabs reveal-on-scroll" role="tablist" aria-label="Price categories">
          {categories.map((category) => (
            <button
              key={category}
              className={active === category ? "active" : ""}
              onClick={() => setActive(category)}
              role="tab"
              aria-selected={active === category}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="price-list reveal-on-scroll delay-1">
          {pricing[active].map(([name, description]) => (
            <div className="price-row" key={name}>
              <span className="price-row__icon">
                <Scissors />
              </span>
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
              <span className="price-row__dots" />
              <strong>Price on enquiry</strong>
            </div>
          ))}
        </div>
        <div className="pricing__footer reveal-on-scroll delay-2">
          <p>
            Please contact us for the latest service prices and customized
            packages.
          </p>
          <ButtonLink
            href={getWhatsappUrl(
              "Hello Mangesha'z Salon, please share your latest price list and package details.",
            )}
            target="_blank"
          >
            Ask for Our Price List
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const onKey = (event) => event.key === "Escape" && setSelected(null)

    window.addEventListener("keydown", onKey)

    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="A GLIMPSE OF BEAUTY"
          title="Our inspiration gallery"
          text="Licensed stock imagery shown for visual inspiration only—not actual client results or salon interiors."
        />
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <button
              className={`gallery-item gallery-item--${index + 1} reveal-on-scroll delay-${(index % 3) + 1}`}
              key={item.category}
              onClick={() => setSelected(item)}
              aria-label={`Enlarge ${item.category} image`}
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
              <span>
                <small>STOCK INSPIRATION</small>
                <strong>{item.category}</strong>
                <Images />
              </span>
            </button>
          ))}
        </div>
      </div>
      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.category}
          onClick={() => setSelected(null)}
        >
          <button
            aria-label="Close gallery image"
            onClick={() => setSelected(null)}
          >
            <X />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={selected.image} alt={selected.alt} />
            <figcaption>
              {selected.category} · Stock inspiration image
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}

const initialAppointment = {
  name: "",

  phone: "",

  service: "",

  date: "",

  time: "",

  message: "",
}

function AppointmentForm() {
  const [form, setForm] = useState(initialAppointment)

  const [errors, setErrors] = useState({})

  const [sent, setSent] = useState(false)

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], [])

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

    setErrors({ ...errors, [e.target.name]: "" })

    setSent(false)
  }

  const submit = (e) => {
    e.preventDefault()

    const next = {}

    if (!form.name.trim()) next.name = "Please enter your full name."

    if (!/^[+\d][\d\s-]{8,14}$/.test(form.phone.trim()))
      next.phone = "Enter a valid phone number."

    if (!form.service) next.service = "Please select a service."

    if (!form.date) next.date = "Please select a preferred date."
    else if (form.date < minDate)
      next.date = "The preferred date cannot be in the past."

    setErrors(next)

    if (Object.keys(next).length) return

    const message = `Hello Mangesha'z Salon, I would like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred Date: ${form.date}\nPreferred Time: ${form.time || "Flexible"}\nMessage: ${form.message || "None"}\n\nPlease confirm availability. Thank you.`

    window.open(getWhatsappUrl(message), "_blank", "noopener,noreferrer")

    setSent(true)
  }

  return (
    <form className="appointment-form" onSubmit={submit} noValidate>
      {sent && (
        <div className="form-success">
          <CheckCircle2 />
          Your request is ready in WhatsApp. It is not confirmed until the salon
          replies.
        </div>
      )}
      <div className="field-row">
        <Field
          label="Full name"
          name="name"
          value={form.name}
          onChange={update}
          error={errors.name}
          placeholder="Your full name"
        />
        <Field
          label="WhatsApp / phone"
          name="phone"
          value={form.phone}
          onChange={update}
          error={errors.phone}
          placeholder="+91 00000 00000"
          inputMode="tel"
        />
      </div>
      <div className="field-row">
        <label className="field">
          Service of interest
          <select
            name="service"
            value={form.service}
            onChange={update}
            aria-invalid={!!errors.service}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.name}>{service.name}</option>
            ))}
          </select>
          {errors.service && <small className="error">{errors.service}</small>}
        </label>
        <Field
          label="Preferred date"
          type="date"
          name="date"
          min={minDate}
          value={form.date}
          onChange={update}
          error={errors.date}
        />
      </div>
      <div className="field-row">
        <Field
          label="Preferred time"
          type="time"
          name="time"
          value={form.time}
          onChange={update}
        />
        <label className="field">
          Optional message
          <input
            name="message"
            value={form.message}
            onChange={update}
            placeholder="Tell us anything helpful"
          />
        </label>
      </div>
      <button className="btn btn--primary form-submit" type="submit">
        <MessageCircle size={18} />
        Book on WhatsApp
      </button>
      <p className="form-note">
        This sends a booking request through WhatsApp. Your appointment is
        confirmed only after the salon replies.
      </p>
    </form>
  )
}

function Field({ label, error, ...props }) {
  return (
    <label className="field">
      {label}
      <input {...props} aria-invalid={!!error} />
      {error && <small className="error">{error}</small>}
    </label>
  )
}

function Booking() {
  return (
    <section className="section booking" id="appointment">
      <div className="container booking__grid">
        <div className="booking__intro reveal-on-scroll">
          <p className="eyebrow eyebrow--left eyebrow--light">
            <span />
            YOUR TIME TO SHINE
          </p>
          <h2>Let&apos;s plan your beauty appointment</h2>
          <p>
            Share your preferred service, date, and time. We&apos;ll prepare a
            WhatsApp request for you to send directly to the salon.
          </p>
          <div className="booking__steps">
            <span>
              <i>01</i>
              <span>
                <strong>Choose your service</strong>
                <small>Pick what you would like to enquire about.</small>
              </span>
            </span>
            <span>
              <i>02</i>
              <span>
                <strong>Share your preference</strong>
                <small>Tell us a suitable date and time.</small>
              </span>
            </span>
            <span>
              <i>03</i>
              <span>
                <strong>Confirm on WhatsApp</strong>
                <small>The salon will reply with availability.</small>
              </span>
            </span>
          </div>
        </div>
        <div className="reveal-on-scroll delay-2">
          <AppointmentForm />
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="YOUR WORDS MATTER"
          title="A space for verified client stories"
          text="No fabricated reviews here. This section is ready for genuine customer feedback when supplied by the salon."
        />
        <div className="testimonials__empty reveal-on-scroll delay-1">
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p>“Verified customer testimonials will appear here.”</p>
          <small>Placeholder only — not a customer review</small>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",

    phone: "",

    email: "",

    service: "",

    message: "",
  })

  const [errors, setErrors] = useState({})

  const [sent, setSent] = useState(false)

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

    setErrors({ ...errors, [e.target.name]: "" })

    setSent(false)
  }

  const submit = (e) => {
    e.preventDefault()

    const next = {}

    if (!form.name.trim()) next.name = "Please enter your name."

    if (!/^[+\d][\d\s-]{8,14}$/.test(form.phone.trim()))
      next.phone = "Enter a valid phone number."

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email address."

    if (!form.message.trim()) next.message = "Please add a short message."

    setErrors(next)

    if (Object.keys(next).length) return

    const message = `Hello Mangesha'z Salon, I have an enquiry.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "Not provided"}\nService: ${form.service || "General enquiry"}\nMessage: ${form.message}`

    window.open(getWhatsappUrl(message), "_blank", "noopener,noreferrer")

    setSent(true)
  }

  return (
    <form className="contact-form reveal-on-scroll delay-1" onSubmit={submit} noValidate>
      <h3>Send an enquiry</h3>
      <p>Your enquiry will open in WhatsApp for you to send.</p>
      {sent && (
        <div className="form-success">
          <CheckCircle2 />
          WhatsApp opened with your enquiry.
        </div>
      )}
      <div className="field-row">
        <Field
          label="Full name"
          name="name"
          value={form.name}
          onChange={update}
          error={errors.name}
        />
        <Field
          label="Phone number"
          name="phone"
          value={form.phone}
          onChange={update}
          error={errors.phone}
          inputMode="tel"
        />
      </div>
      <div className="field-row">
        <Field
          label="Email (optional)"
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          error={errors.email}
        />
        <label className="field">
          Service of interest
          <select name="service" value={form.service} onChange={update}>
            <option value="">General enquiry</option>
            {services.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="field">
        Message
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={update}
          aria-invalid={!!errors.message}
          placeholder="How can we help?"
        />
        {errors.message && <small className="error">{errors.message}</small>}
      </label>
      <button className="btn btn--primary" type="submit">
        <Send size={17} />
        Continue to WhatsApp
      </button>
    </form>
  )
}

function Location() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

  return (
    <section className="section location" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="VISIT US"
          title="Your beauty destination in Pimple Saudagar"
        />
        <div className="location__grid reveal-on-scroll">
          <div className="map-wrap">
            <iframe
              src={mapSrc}
              title="Map showing Mangesha'z Salon location in Pimple Saudagar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="location__details">
            <div className="contact-detail">
              <span>
                <MapPin />
              </span>
              <div>
                <small>ADDRESS</small>
                <p>{address}</p>
              </div>
            </div>
            <div className="contact-detail">
              <span>
                <Phone />
              </span>
              <div>
                <small>PHONE / WHATSAPP</small>
                <a href="tel:+918550980432">+91 85509 80432</a>
              </div>
            </div>
            <div className="contact-detail">
              <span>
                <Clock3 />
              </span>
              <div>
                <small>OPENING HOURS</small>
                <p>Contact us for current opening hours</p>
              </div>
            </div>
            <div className="location__actions">
              <ButtonLink href={directionsUrl} target="_blank">
                Get Directions
              </ButtonLink>
              <ButtonLink
                href={getWhatsappUrl(
                  "Hello Mangesha'z Salon, I would like to know more about your services and appointments.",
                )}
                target="_blank"
                variant="outline"
              >
                Chat on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

function getSocialIcon(type) {
  switch (type) {
    case "instagram":
      return <InstagramIcon />

    case "whatsapp":
      return <WhatsAppIcon />

    case "facebook":
      return <FacebookIcon />

    case "youtube":
      return <YouTubeIcon />

    default:
      return null
  }
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand-col">
          <Logo light />
          <p>
            Personalized beauty care for everyday confidence and life&apos;s
            special occasions in Pimple Saudagar, Pune.
          </p>

          {/* Social Media Channels with Brand Colors */}
          <div className="footer__socials-wrap">
            <span className="footer__socials-title">Connect with us</span>
            <div
              className="footer__socials"
              role="list"
              aria-label="Social media profiles"
            >
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`footer__social-btn footer__social-btn--${item.type}`}
                  aria-label={`Visit our ${item.name} page (${item.handle})`}
                  title={`${item.name}: ${item.handle}`}
                >
                  <span className="footer__social-icon">
                    {getSocialIcon(item.type)}
                  </span>
                  <span className="footer__social-tooltip">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3>Explore</h3>
          {navItems.slice(1).map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>

        <div>
          <h3>Popular services</h3>
          {services.slice(0, 5).map((item) => (
            <a key={item.name} href="#services">
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <h3>Visit us</h3>
          <p>{address}</p>
          <a className="footer__phone" href="tel:+918550980432">
            <Phone size={16} />
            +91 85509 80432
          </a>
          <ButtonLink
            href={getWhatsappUrl(
              "Hello Mangesha'z Salon, I would like to know more about your services and appointments.",
            )}
            target="_blank"
          >
            WhatsApp Us
          </ButtonLink>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} Mangesha&apos;z Salon. All rights
          reserved.
        </p>
        <p>Stock photography is for visual representation only.</p>
      </div>
    </footer>
  )
}

function FloatingContact() {
  return (
    <div
      className="floating-contact-bar"
      role="region"
      aria-label="Quick contact options"
    >
      {/* Phone Call Circle Button */}
      <a
        className="floating-btn floating-btn--phone"
        href={`tel:${phoneNumber}`}
        aria-label={`Call Mangesha'z Salon at ${formattedPhoneNumber}`}
      >
        <span
          className="floating-btn__ring floating-btn__ring--1"
          aria-hidden="true"
        />
        <span
          className="floating-btn__ring floating-btn__ring--2"
          aria-hidden="true"
        />
        <span className="floating-btn__tooltip">
          <strong>Direct Line</strong>
          <small>{formattedPhoneNumber}</small>
        </span>
        <span className="floating-btn__icon">
          <Phone size={22} />
        </span>
      </a>

      {/* WhatsApp Chat Circle Button */}
      <a
        className="floating-btn floating-btn--whatsapp"
        href={getWhatsappUrl(
          "Hello Mangesha'z Salon, I would like to know more about your services and appointments.",
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Mangesha'z Salon on WhatsApp"
      >
        <span
          className="floating-btn__ring floating-btn__ring--1"
          aria-hidden="true"
        />
        <span
          className="floating-btn__ring floating-btn__ring--2"
          aria-hidden="true"
        />
        <span
          className="floating-btn__status-dot"
          aria-hidden="true"
          title="Online"
        />
        <span className="floating-btn__tooltip">
          <strong>WhatsApp Salon</strong>
          <small>Instant reply & booking</small>
        </span>
        <span className="floating-btn__icon">
          <WhatsAppIcon />
        </span>
      </a>
    </div>
  )
}

export default function App() {
  useEffect(() => {
    // Senior UI/UX: IntersectionObserver for graceful fluid scroll transitions
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    )

    const elements = document.querySelectorAll(".reveal-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <PriceList />
        <Gallery />
        <Booking />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
