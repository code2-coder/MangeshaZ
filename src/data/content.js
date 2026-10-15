const image = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`

export const whatsappNumber = "918550980432"

export const phoneNumber = "+918550980432"

export const formattedPhoneNumber = "+91 85509 80432"

export const whatsappBase = `https://wa.me/${whatsappNumber}`

export const address =
  "Shop No. 3, Ground Floor, Shivar Chowk, Near McDonald's, Pimple Saudagar, Pune, Maharashtra 411017, India"

export const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Shop%20No.%203%2C%20Ground%20Floor%2C%20Shivar%20Chowk%2C%20Near%20McDonald%27s%2C%20Pimple%20Saudagar%2C%20Pune%2C%20Maharashtra%20411017"

export const services = [
  [
    "Haircut & Hair Styling",

    "Haircuts, styling, and personalized looks.",

    "photo-1695527081848-1e46c06e6458",
  ],

  [
    "Hair Spa & Treatments",

    "Hair nourishment, conditioning, and care.",

    "photo-1766184313424-16013ecc2c34",
  ],

  [
    "Hair Coloring",

    "Hair colour, highlights, and customized looks.",

    "photo-1766183683885-b698b3a4e347",
  ],

  [
    "Facial & Skincare",

    "Facial treatments and skincare services.",

    "photo-1648241815778-fdc8daf0d6ef",
  ],

  [
    "Bridal Makeup",

    "Bridal beauty and makeup services.",

    "photo-1613457492120-4fcfbb7c3a5b",
  ],

  [
    "Party Makeup",

    "Makeup for celebrations and special occasions.",

    "photo-1695527081728-e3a42f0ce261",
  ],

  [
    "Manicure & Pedicure",

    "Nail care and hand and foot grooming.",

    "photo-1659391542239-9648f307c0b1",
  ],

  [
    "Waxing & Threading",

    "Personal grooming and hair removal services.",

    "photo-1695527081874-b674c46f40fb",
  ],

  [
    "Eyebrow & Beauty Services",

    "Eyebrow shaping and selected beauty treatments.",

    "photo-1695527081882-a8b051dac51e",
  ],

  [
    "Pre-Bridal Packages",

    "Customizable beauty services for wedding preparation.",

    "photo-1617033298215-166aba80df22",
  ],

  [
    "Straightening & Smoothening",

    "Hair texture and styling treatments.",

    "photo-1746723378067-83a345ff3160",
  ],

  [
    "Saree Draping & Styling",

    "Occasion styling, subject to availability.",

    "photo-1590564310616-4984760edb51",
  ],
].map(([name, description, photo]) => ({
  name,

  description,

  image: image(photo, 700),
}))

export const pricing = {
  Hair: [
    ["Haircut & Styling", "Personalized consultation and finish"],

    ["Hair Spa", "Care selected for your hair needs"],

    ["Hair Colour", "Shade and technique consultation"],
  ],

  "Skin & Facial": [
    ["Facial Care", "Selected according to skin preference"],

    ["Cleanup", "Cleansing and grooming care"],

    ["Skincare Ritual", "Custom care consultation"],
  ],

  Makeup: [
    ["Party Makeup", "Occasion-ready makeup look"],

    ["Bridal Makeup", "Custom bridal consultation"],

    ["Saree Draping", "Subject to availability"],
  ],

  Nails: [
    ["Manicure", "Hand and nail grooming"],

    ["Pedicure", "Foot and nail grooming"],

    ["Nail Care", "Selected nail services"],
  ],

  Grooming: [
    ["Eyebrow Shaping", "Personalized shaping"],

    ["Waxing", "Selected grooming services"],

    ["Threading", "Face and eyebrow grooming"],
  ],

  "Bridal Packages": [
    ["Pre-Bridal Consultation", "Plan services around your occasion"],

    ["Custom Pre-Bridal Package", "Built around your requirements"],

    ["Bridal Styling", "Makeup and styling consultation"],
  ],
}

export const gallery = [
  [
    "Salon Interior",

    "photo-1722262363236-4f7dd2f2462a",

    "Stock image of an elegant pink salon-inspired interior",
  ],

  [
    "Hair Styling",

    "photo-1695527081848-1e46c06e6458",

    "Stock image of professional hair styling",
  ],

  [
    "Makeup Looks",

    "photo-1695527081728-e3a42f0ce261",

    "Stock beauty portrait representing makeup services",
  ],

  [
    "Facial & Skincare",

    "photo-1648241815778-fdc8daf0d6ef",

    "Stock image representing a skincare treatment",
  ],

  [
    "Nail Care",

    "photo-1659391542239-9648f307c0b1",

    "Stock image of polished nails",
  ],

  [
    "Bridal Looks",

    "photo-1617033298215-166aba80df22",

    "Stock floral beauty image representing bridal styling",
  ],
].map(([category, photo, alt], index) => ({
  category,

  alt,

  image: image(photo, index === 0 || index === 3 ? 1100 : 800),
}))

export const navItems = [
  ["Home", "home"],

  ["About", "about"],

  ["Services", "services"],

  ["Price List", "pricing"],

  ["Gallery", "gallery"],

  ["Contact", "contact"],
]

export const getWhatsappUrl = (message) =>
  `${whatsappBase}?text=${encodeURIComponent(message)}`

export const socialLinks = [
  {
    name: "Instagram",

    url: "https://www.instagram.com/mangeshaz_brothers/",

    handle: "@mangeshaz_brothers",

    type: "instagram",
  },

  {
    name: "WhatsApp",

    url: getWhatsappUrl(
      "Hello Mangesha'z Salon, I would like to book an appointment.",
    ),

    handle: "+91 85509 80432",

    type: "whatsapp",
  },

  {
    name: "Facebook",

    url: "https://www.facebook.com/",

    handle: "Mangesha'z Salon",

    type: "facebook",
  },

  {
    name: "YouTube",

    url: "https://www.youtube.com/",

    handle: "Mangesha'z Salon",

    type: "youtube",
  },
]
