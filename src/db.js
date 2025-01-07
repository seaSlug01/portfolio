const imgPath = (image) => {
  return `${window.location.origin}/assets/${image}`
}

export const heroVideoPathMp4 = imgPath("Aerialviewofsandbeach.mp4")
export const heroVideoPathWebP = imgPath("Aerialviewofsandbeach.webp")

export const projects = [
  {
    id: 1,
    href: "https://teams-90ee7.web.app/",
    images: [
      {
        src: {
          large: imgPath("mp-1.webp"),
          medium: imgPath("mp-1.webp"),
          small: imgPath("mp-1.webp"),
          preview: imgPath("mp-1.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("mp-2.webp"),
          medium: imgPath("mp-2.webp"),
          small: imgPath("mp-2.webp"),
          preview: imgPath("mp-2.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("mp-3.webp"),
          medium: imgPath("mp-3.webp"),
          small: imgPath("mp-3.webp"),
          preview: imgPath("mp-3.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("mp-4.webp"),
          medium: imgPath("mp-4.webp"),
          small: imgPath("mp-4.webp"),
          preview: imgPath("mp-4.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("mp-5.webp"),
          medium: imgPath("mp-5.webp"),
          small: imgPath("mp-5.webp"),
          preview: imgPath("mp-5.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("mp-6.webp"),
          medium: imgPath("mp-6.webp"),
          small: imgPath("mp-6.webp"),
          preview: imgPath("mp-6.webp"),
        },
        type: "contain",
      },
    ],
    heading: {
      text: "Team Management System",
      color: "blue",
    },
    textFields: [
      {
        type: "p",
        text: "A website for managing team projects. You can add members, give them assignments or let them add their own. Members can write their notes/instructions to each of their assignments, which can only be accessed by them and the project owner.",
      },
      {
        type: "p",
        text: "The team project keeps track of the completed assignments, giving an average completion rate in percentage form(%).",
      },
      {
        type: "p",
        text: "You can create an account either by filling a form with your personal details or through a quick one-click-sign-in, through facebook.",
      },
      {
        type: "p",
        text: `Thanks to firebases great feature of "listening" live to changes made in the database documents, you can see in real time which members are online the moment they log in, so no slackers allowed! (Although, they can turn their active status off, so...camouflaged slackers are allowed.)`,
      },
      {
        type: "h2",
        text: `Technologies used:`,
      },
      {
        type: "tags",
        header: "Frontend",
        listItems: ["React"],
      },
      {
        type: "tags",
        header: "Databases",
        listItems: ["firebase", "firestore"],
      },
      {
        type: "tags",
        header: "Backend",
        listItems: ["BaaS (Backend as a service, firebase)"],
      },
      {
        type: "h2",
        text: `Notes:`,
      },
      {
        type: "p",
        text: `This project is incomplete as it lacks certain key functionalities such as searching, members accepting the invitation before they join, the ability to dump inactive members from a project, ability to resign voluntarily etc.`,
      },
      {
        type: "a",
        text: `Visit website`,
        href: "https://teams-90ee7.web.app/",
      },
    ],
  },
  {
    id: 2,
    href: "https://hopin-gpe5bygkgwcxe0b3.germanywestcentral-01.azurewebsites.net/login",
    images: [
      {
        src: {
          large: imgPath("tc-1.webp"),
          medium: imgPath("tc-1.webp"),
          small: imgPath("tc-1.webp"),
          preview: imgPath("tc-1.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("tc-8.webp"),
          medium: imgPath("tc-8.webp"),
          small: imgPath("tc-8.webp"),
          preview: imgPath("tc-8.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("tc-2.webp"),
          medium: imgPath("tc-2.webp"),
          small: imgPath("tc-2.webp"),
          preview: imgPath("tc-2.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("tc-3.webp"),
          medium: imgPath("tc-3.webp"),
          small: imgPath("tc-3.webp"),
          preview: imgPath("tc-3.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("tc-4.webp"),
          medium: imgPath("tc-4.webp"),
          small: imgPath("tc-4.webp"),
          preview: imgPath("tc-4.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("tc-5.webp"),
          medium: imgPath("tc-5.webp"),
          small: imgPath("tc-5.webp"),
          preview: imgPath("tc-5.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("tc-6.webp"),
          medium: imgPath("tc-6.webp"),
          small: imgPath("tc-6.webp"),
          preview: imgPath("tc-6.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("tc-7.webp"),
          medium: imgPath("tc-7.webp"),
          small: imgPath("tc-7.webp"),
          preview: imgPath("tc-7.webp"),
        },
        type: "contain",
      },
    ],
    heading: {
      text: "HopIn",
      color: "violet",
    },
    textFields: [
      {
        type: "p",
        text: "A content sharing website, a twitter child 😗. You can post, reply, share, like and follow people. Notification system is included.",
      },
      {
        type: "p",
        text: "You can upload up to 4 images, 1 video or one GIF using the giphy API for each post. Images can be cropped and videos can take subs.",
      },
      {
        type: "h2",
        text: `Stack:`,
      },
      {
        type: "tags",
        header: "Frontend",
        listItems: ["jade"],
      },
      {
        type: "tags",
        header: "Databases",
        listItems: ["MongoDB"],
      },
      {
        type: "tags",
        header: "Backend",
        listItems: ["Node.js", "express"],
      },
      {
        type: "h2",
        text: `Notes:`,
      },
      {
        type: "p",
        text: "If you're using Chrome or Mozilla and want to take a peak, an already registered account is pre-populated in the login form.",
      },
      {
        type: "p",
        text: "Initial(first) loading of the page may take awhile, since I'm currently using a free hosting service. After the first load, it runs fine.",
      },
      {
        type: "a",
        text: `Visit Website`,
        href: "https://hopin-gpe5bygkgwcxe0b3.germanywestcentral-01.azurewebsites.net",
      },
    ],
  },
  {
    id: 3,
    href: "https://hopin-gpe5bygkgwcxe0b3.germanywestcentral-01.azurewebsites.net/messages",
    images: [
      {
        src: {
          large: imgPath("msg-1.webp"),
          medium: imgPath("msg-1.webp"),
          small: imgPath("msg-1.webp"),
          preview: imgPath("msg-1.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("msg-7.webp"),
          medium: imgPath("msg-7.webp"),
          small: imgPath("msg-7.webp"),
          preview: imgPath("msg-7.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("msg-2.webp"),
          medium: imgPath("msg-2.webp"),
          small: imgPath("msg-2.webp"),
          preview: imgPath("msg-2.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("msg-3.webp"),
          medium: imgPath("msg-3.webp"),
          small: imgPath("msg-3.webp"),
          preview: imgPath("msg-3.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("msg-4.webp"),
          medium: imgPath("msg-4.webp"),
          small: imgPath("msg-4.webp"),
          preview: imgPath("msg-4.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("msg-5.webp"),
          medium: imgPath("msg-5.webp"),
          small: imgPath("msg-5.webp"),
          preview: imgPath("msg-5.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("msg-6.webp"),
          medium: imgPath("msg-6.webp"),
          small: imgPath("msg-6.webp"),
          preview: imgPath("msg-6.webp"),
        },
        type: "contain",
      },
    ],
    heading: {
      text: "HopIn Chat",
      color: "orange",
    },
    textFields: [
      {
        type: "p",
        text: "A messaging system, for solo and group chats. It uses sockets for real-time communication between client and server. Any parties connected to the same socket (i.e. the chats unique identifier) will receive messages, 'seen' flags as well as typing indications without page reload. You can send images/videos/text and office files.",
      },
      {
        type: "h2",
        text: `Langs used:`,
      },
      {
        type: "tags",
        header: "Frontend",
        listItems: ["jade"],
      },
      {
        type: "tags",
        header: "Databases",
        listItems: ["MongoDB"],
      },
      {
        type: "tags",
        header: "Backend",
        listItems: ["Node.js", "express", "Socket.Io"],
      },
      {
        type: "h2",
        text: `Notes:`,
      },
      {
        type: "p",
        text: "If you're using Chrome or Mozilla and want to take a peak, an already registered account is pre-populated in the login form.",
      },
      {
        type: "p",
        text: "Initial (first) loading of the page may take awhile, since I'm currently using a free hosting service.",
      },
      {
        type: "a",
        text: `Chit Chat ;)`,
        href: "https://hopin-gpe5bygkgwcxe0b3.germanywestcentral-01.azurewebsites.net/messages",
      },
    ],
  },
  {
    id: 4,
    images: [
      {
        src: {
          large: imgPath("dashboard.webp"),
          medium: imgPath("dashboard.webp"),
          small: imgPath("dashboard.webp"),
          preview: imgPath("dashboard.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("guest_page.webp"),
          medium: imgPath("guest_page.webp"),
          small: imgPath("guest_page.webp"),
          preview: imgPath("guest_page.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("insert_category.webp"),
          medium: imgPath("insert_category.webp"),
          small: imgPath("insert_category.webp"),
          preview: imgPath("insert_category.webp"),
        },
        type: "cover",
      },
      {
        src: {
          large: imgPath("projects.webp"),
          medium: imgPath("projects.webp"),
          small: imgPath("projects.webp"),
          preview: imgPath("projects.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("eu-post_page.webp"),
          medium: imgPath("eu-post_page.webp"),
          small: imgPath("eu-post_page.webp"),
          preview: imgPath("eu-post_page.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("proposal_edit.webp"),
          medium: imgPath("proposal_edit.webp"),
          small: imgPath("proposal_edit.webp"),
          preview: imgPath("proposal_edit.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("users.webp"),
          medium: imgPath("users.webp"),
          small: imgPath("users.webp"),
          preview: imgPath("users.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("user.webp"),
          medium: imgPath("user.webp"),
          small: imgPath("user.webp"),
          preview: imgPath("user.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("partner_view_only.webp"),
          medium: imgPath("partner_view_only.webp"),
          small: imgPath("partner_view_only.webp"),
          preview: imgPath("partner_view_only.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("excel.webp"),
          medium: imgPath("excel.webp"),
          small: imgPath("excel.webp"),
          preview: imgPath("excel.webp"),
        },
        type: "cover",
      },
    ],
    heading: {
      text: "Eu Projects Admin Dashboard",
      color: "green",
    },
    textFields: [
      {
        type: "p",
        text: "Using «Filaments» capabilities in creating admin dashboards with a nice set of full-stack components, the Projects EU Library is a platform made to document proposals and ongoing project statistics. It serves as a library for the organization and management of projects at an organizational level.",
      },
      {
        type: "h2",
        text: `TALL Stack:`,
      },
      {
        type: "tags",
        header: "Frontend",
        listItems: ["Tailwind.css", "Alpine.js"],
      },
      {
        type: "tags",
        header: "Backend",
        listItems: ["Laravel, Livewire"],
      },
      {
        type: "tags",
        header: "Database",
        listItems: ["mysqli"],
      },
      {
        type: "h2",
        text: `Notes:`,
      },
      {
        type: "p",
        text: `The link is a zip file containing the project files. If you have composer installed on your matchine you can download and follow the instructions of the "readme.md" file.`,
      },
      {
        type: "a",
        text: `Code Review Files (.zip)`,
        href: imgPath("eu-projects-main.zip"),
      },
    ],
  },
  {
    id: 5,
    href: "https://new.dimitra.gr/poioi-eimaste/",
    images: [
      {
        src: {
          large: imgPath("hover-cards.webp"),
          medium: imgPath("hover-cards.webp"),
          small: imgPath("hover-cards.webp"),
          preview: imgPath("hover-cards.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("ypodomes-preview.webp"),
          medium: imgPath("ypodomes-preview.webp"),
          small: imgPath("ypodomes-preview.webp"),
          preview: imgPath("ypodomes-preview.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("wcu.webp"),
          medium: imgPath("wcu.webp"),
          small: imgPath("wcu.webp"),
          preview: imgPath("wcu.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("poioi-eimaste.webp"),
          medium: imgPath("poioi-eimaste.webp"),
          small: imgPath("poioi-eimaste.webp"),
          preview: imgPath("poioi-eimaste.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("contact.webp"),
          medium: imgPath("contact.webp"),
          small: imgPath("contact.webp"),
          preview: imgPath("contact.webp"),
        },
        type: "contain",
      },
      {
        src: {
          large: imgPath("kariera.webp"),
          medium: imgPath("kariera.webp"),
          small: imgPath("kariera.webp"),
          preview: imgPath("kariera.webp"),
        },
        type: "cover",
      },
    ],
    heading: {
      text: "Κέντρο Επαγγελματικής Κατάρτισης «ΔΗΜΗΤΡΑ»",
      color: "blue",
    },
    textFields: [
      {
        type: "p",
        text: "This website is a collaborative work between me and my old partner. It might be a wordpress site but there's alot of custom Javascript and love.",
      },
      {
        type: "h2",
        text: `Made with:`,
      },
      {
        type: "tags",
        header: "CMS",
        listItems: ["Wordpress"],
      },
      {
        type: "a",
        text: `Visit website`,
        href: "https://new.dimitra.gr/poioi-eimaste/",
      },
    ],
  },
  {
    id: 6,
    images: [
      {
        src: {
          large: imgPath("3-small.webp"),
          medium: imgPath("3-small.webp"),
          small: imgPath("3-small.webp"),
          preview: imgPath("3-small.webp"),
        },
        type: "cover",
      },
      {
        src: {
          large: imgPath("1-small.webp"),
          medium: imgPath("1-small.webp"),
          small: imgPath("1-small.webp"),
          preview: imgPath("1-small.webp"),
        },
        type: "cover",
      },
      {
        src: {
          large: imgPath("2-small.webp"),
          medium: imgPath("2-small.webp"),
          small: imgPath("2-small.webp"),
          preview: imgPath("2-small.webp"),
        },
        type: "cover",
      },
      {
        src: {
          large: imgPath("4-small.webp"),
          medium: imgPath("4-small.webp"),
          small: imgPath("4-small.webp"),
          preview: imgPath("4-small.webp"),
        },
        type: "cover",
      },
      {
        src: {
          large: imgPath("5-small.webp"),
          medium: imgPath("5-small.webp"),
          small: imgPath("5-small.webp"),
          preview: imgPath("5-small.webp"),
        },
        type: "cover",
      },
      {
        src: {
          large: imgPath("6-small.webp"),
          medium: imgPath("6-small.webp"),
          small: imgPath("6-small.webp"),
          preview: imgPath("6-small.webp"),
        },
        type: "cover",
      },
      {
        src: {
          large: imgPath("7-small.webp"),
          medium: imgPath("7-small.webp"),
          small: imgPath("7-small.webp"),
          preview: imgPath("7-small.webp"),
        },
        type: "cover",
      },
    ],
    heading: {
      text: "6",
      color: "violet",
    },
    textFields: [
      {
        type: "p",
        text: "Vite > create react app",
      },
    ],
  },
  {
    id: 7,
    images: [
      {
        src: {
          large: imgPath("4-small.webp"),
          medium: imgPath("4-small.webp"),
          small: imgPath("4-small.webp"),
          preview: imgPath("4-small.webp"),
        },
        type: "cover",
      },
      {
        src: {
          large: imgPath("1-small.webp"),
          medium: imgPath("1-small.webp"),
          small: imgPath("1-small.webp"),
          preview: imgPath("1-small.webp"),
        },
        type: "cover",
      },
      {
        src: {
          large: imgPath("2-small.webp"),
          medium: imgPath("2-small.webp"),
          small: imgPath("2-small.webp"),
          preview: imgPath("2-small.webp"),
        },
        type: "cover",
      },
      {
        src: {
          large: imgPath("3-small.webp"),
          medium: imgPath("3-small.webp"),
          small: imgPath("3-small.webp"),
          preview: imgPath("3-small.webp"),
        },
        type: "cover",
      },
      {
        src: {
          large: imgPath("5-small.webp"),
          medium: imgPath("5-small.webp"),
          small: imgPath("5-small.webp"),
          preview: imgPath("5-small.webp"),
        },
        type: "cover",
      },
      {
        src: {
          large: imgPath("6-small.webp"),
          medium: imgPath("6-small.webp"),
          small: imgPath("6-small.webp"),
          preview: imgPath("6-small.webp"),
        },
        type: "cover",
      },
      {
        src: {
          large: imgPath("7-small.webp"),
          medium: imgPath("7-small.webp"),
          small: imgPath("7-small.webp"),
          preview: imgPath("7-small.webp"),
        },
        type: "cover",
      },
    ],
    heading: {
      text: "7",
      color: "orange",
    },
    textFields: [
      {
        type: "p",
        text: "Modal scaling may struggle with big images.",
      },
    ],
  },
]
