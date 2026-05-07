import { Exhibit, Rank } from './types';

export const EXHIBITS: Exhibit[] = [
  // EASY - TEXT
  {
    id: 'e1',
    type: 'text',
    origin: 'human',
    content: "The woods are lovely, dark and deep, But I have promises to keep, And miles to go before I sleep, And miles to go before I sleep.",
    headline: "Stopping by Woods on a Snowy Evening",
    deskNote: "Poem fragment.",
    source: "Robert Frost, New Hampshire (1923)",
    hint: "The repetition of the final line is a deliberate poetic device, not a machine error.",
    difficulty: 'Easy'
  },
  {
    id: 'e2',
    type: 'text',
    origin: 'ai',
    content: "The algorithm processed the data with high efficiency. The output was a series of numbers that represented the probability of success. The system was optimized for performance and accuracy.",
    headline: "Efficiency and Probability",
    deskNote: "Technical report excerpt.",
    source: "AI Model GPT-3.5 (2023)",
    hint: "The prose is repetitive and lacks the nuance of a human technical writer.",
    difficulty: 'Easy'
  },
  {
    id: 'e3',
    type: 'text',
    origin: 'human',
    content: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    headline: "Moby-Dick; or, The Whale",
    deskNote: "Novel excerpt.",
    source: "Herman Melville (1851)",
    hint: "The voice is distinctively conversational yet grand, a signature of 19th-century prose.",
    difficulty: 'Easy'
  },
  {
    id: 'e4',
    type: 'text',
    origin: 'ai',
    content: "Once upon a time, in a land far away, there lived a king and a queen who wanted a child very much. They were kind and just, and their kingdom was peaceful and happy for many years.",
    headline: "The Quiet Kingdom",
    deskNote: "Fairy tale opening.",
    source: "Large Language Model",
    hint: "The phrasing is highly conventional and lacks any unique descriptive flair.",
    difficulty: 'Easy'
  },
  {
    id: 'e5',
    type: 'text',
    origin: 'human',
    content: "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.",
    headline: "The Gettysburg Address",
    deskNote: "Speech excerpt.",
    source: "Abraham Lincoln (1863)",
    hint: "The rhythmic cadence and specific biblical-inflection are uniquely Lincoln's.",
    difficulty: 'Easy'
  },
  // EASY - IMAGE
  {
    id: 'e6',
    type: 'image',
    origin: 'human',
    content: new URL("../Human or Not Images/Authentic Images/Easy/A1E.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "Motocross rider on dirt bike in desert landscape",
    source: "Creator/Owner: Joey Chacon - https://unsplash.com/@joey_noside | Equipment: SONY, ILCE-7M3 | Date: December 13, 2025 | Link: https://unsplash.com/photos/motocross-rider-on-dirt-bike-in-desert-landscape-gMwV3Mf9Uhg",
    hint: "Source details are listed above.",
    difficulty: 'Easy'
  },
  {
    id: 'e7',
    type: 'image',
    origin: 'ai',
    content: new URL("../Human or Not Images/AI Images/Easy/AI1E.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "Superman flying alongside a plane, this is a selfie, his arm reaching towards the camera, you can see the pilot inside the plane.",
    source: "Model: Aperture Max | Link: https://lexica.art/prompt/7291979a-0b35-4dfe-b41d-45ad6a8e83bd",
    hint: "Source details are listed above.",
    difficulty: 'Easy'
  },
  {
    id: 'e8',
    type: 'image',
    origin: 'human',
    content: new URL("../Human or Not Images/Authentic Images/Easy/A2E.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "A person walks down a narrow street between buildings.",
    source: "Creator/Owner: Paul Yong - https://unsplash.com/@paulysj | Equipment: Panasonic, DC-GX9 | Date: February 6, 2026 | Link: https://unsplash.com/photos/a-person-walks-down-a-narrow-street-between-buildings-lapkZvboG3M",
    hint: "Source details are listed above.",
    difficulty: 'Easy'
  },
  {
    id: 'e9',
    type: 'image',
    origin: 'ai',
    content: new URL("../Human or Not Images/AI Images/Easy/AI2E.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "Pikachu at the vet getting weighed on a pet scale, vet looking shocked at weight",
    source: "Model: Aperture Max | Link: https://lexica.art/prompt/c12e6b1e-af98-4ceb-982b-7bed878cfb17",
    hint: "Source details are listed above.",
    difficulty: 'Easy'
  },
  {
    id: 'e10',
    type: 'image',
    origin: 'human',
    content: new URL("../Human or Not Images/Authentic Images/Easy/A3E.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "Man in black crew neck t shirt and gray pants standing on black asphalt road",
    source: "Creator/Owner: Brian Lundquist - https://unsplash.com/@bwl667 | Equipment: FUJIFILM, X-T4 | Date: February 26, 2021 | Link: https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-and-gray-pants-standing-on-black-asphalt-road-during-GP_9VjWarps",
    hint: "Source details are listed above.",
    difficulty: 'Easy'
  },
  // EASY - MIXED
  {
    id: 'e11',
    type: 'text',
    origin: 'human',
    content: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender.",
    headline: "We Shall Fight on the Beaches",
    deskNote: "Speech excerpt.",
    source: "Winston Churchill (1940)",
    hint: "The powerful rhetorical repetition was designed for morale-boosting during wartime.",
    difficulty: 'Easy'
  },
  {
    id: 'e12',
    type: 'text',
    origin: 'ai',
    content: "To create a recipe for chocolate cake, you first need to gather all your ingredients: flour, sugar, cocoa powder, eggs, milk, and butter. Preheat your oven to 350 degrees Fahrenheit.",
    headline: "Kitchen Notes for Chocolate Cake",
    deskNote: "Instructional excerpt.",
    source: "RecipeBot v2",
    hint: "The tone is completely utilitarian and lacks any personal narrative or culinary insight.",
    difficulty: 'Easy'
  },
  {
    id: 'e13',
    type: 'image',
    origin: 'ai',
    content: new URL("../Human or Not Images/AI Images/Easy/AI3E.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "Photograph of a woman wearing a black dress and is gazing directly at the camera. The lighting is soft Rembrandt style on her face, with a gentle backlight behind her.",
    source: "Model: Aperture Max | Link: https://lexica.art/prompt/cff1321b-6d66-4eed-b2cf-7a4efe5239a1",
    hint: "Source details are listed above.",
    difficulty: 'Easy'
  },
  {
    id: 'e14',
    type: 'text',
    origin: 'human',
    content: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    headline: "I Have a Dream",
    deskNote: "Speech excerpt.",
    source: "Martin Luther King Jr. (1963)",
    hint: "The visionary clarity and emotional weight are iconic features of human oratory.",
    difficulty: 'Easy'
  },
  {
    id: 'e15',
    type: 'image',
    origin: 'human',
    content: new URL("../Human or Not Images/Authentic Images/Easy/A4E.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "Man doing skateboard tricks",
    source: "Creator/Owner: Daniel Koponyas - https://unsplash.com/@kopidanny | Equipment: Canon, EOS 750D | Date: August 17, 2018 in Manhattan, New York, United States | Link: https://unsplash.com/photos/man-doing-skateboard-tricks-gxC8OUPUeUUMan",
    hint: "Source details are listed above.",
    difficulty: 'Easy'
  },

  // MEDIUM - TEXT
  {
    id: 'm1',
    type: 'text',
    origin: 'human',
    content: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    headline: "Pride and Prejudice",
    deskNote: "Novel excerpt.",
    source: "Jane Austen (1813)",
    hint: "The wit and social commentary are hallmarks of Austen's style.",
    difficulty: 'Medium'
  },
  {
    id: 'm2',
    type: 'text',
    origin: 'ai',
    content: "The sun dipped below the horizon, casting long shadows across the silent valley. A lone wolf howled in the distance, its cry echoing through the ancient trees. Nature was at peace.",
    headline: "The Silent Valley",
    deskNote: "Descriptive prose excerpt.",
    source: "Claude 3.5 Sonnet",
    hint: "The imagery is somewhat cliché and the rhythm is very predictable.",
    difficulty: 'Medium'
  },
  {
    id: 'm3',
    type: 'text',
    origin: 'human',
    content: "The past is a foreign country: they do things differently there. When a child, you think that the world is a place where you are the center of all things.",
    headline: "The Go-Between",
    deskNote: "Novel excerpt.",
    source: "L.P. Hartley (1953)",
    hint: "The philosophical pivot from the metaphor to the personal memory is a sophisticated human opening.",
    difficulty: 'Medium'
  },
  {
    id: 'm4',
    type: 'text',
    origin: 'ai',
    content: "The intersection of technology and humanity is a complex landscape. As we navigate the digital age, we must strive to maintain our core values while embracing innovation.",
    headline: "The Shape of Progress",
    deskNote: "Opinion essay excerpt.",
    source: "ContentEngine v4",
    hint: "The language is filled with buzzwords but lacks a truly unique or controversial thesis.",
    difficulty: 'Medium'
  },
  {
    id: 'm5',
    type: 'text',
    origin: 'human',
    content: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles.",
    headline: "Hamlet, Act III, Scene I",
    deskNote: "Dramatic monologue excerpt.",
    source: "William Shakespeare (c. 1600)",
    hint: "The density of the metaphors and the existential depth are deeply human.",
    difficulty: 'Medium'
  },
  // MEDIUM - IMAGE
  {
    id: 'm6',
    type: 'image',
    origin: 'human',
    content: new URL("../Human or Not Images/Authentic Images/Medium/A1M.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "A man walking down a street next to tall buildings",
    source: "Creator/Owner: MAK - https://unsplash.com/@mak_jp | Equipment: FUJIFILM, X-T20 | Date: February 4, 2023 | Link: https://unsplash.com/photos/a-man-walking-down-a-street-next-to-tall-buildings-ixm2fXdVXWE",
    hint: "Source details are listed above.",
    difficulty: 'Medium'
  },
  {
    id: 'm7',
    type: 'image',
    origin: 'ai',
    content: new URL("../Human or Not Images/AI Images/Medium/AI1M.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "Golden sunlight filters through blinds in a quiet diner, casting warm rays on the floor as a lone figure sits in a booth, creating a serene vibe.",
    source: "Title: Golden Diner Solitude | Creator/Owner: Sam Schwartz Creations - https://www.lummi.ai/creator/schwartzs2001-rxeo0 | Link: https://www.lummi.ai/photo/golden-diner-solitude-bbuqb",
    hint: "Source details are listed above.",
    difficulty: 'Medium'
  },
  {
    id: 'm8',
    type: 'image',
    origin: 'human',
    content: new URL("../Human or Not Images/Authentic Images/Medium/A2M.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "A young woman in a white dress stands near flowers",
    source: "Creator/Owner: Richmond Fajardo - https://unsplash.com/@ritchimondo_faharudo777 | Date: April 7, 2026 at 𝒪𝓇𝑜𝓆𝓊𝒾𝑒𝓉𝒶 𝒞𝒾𝓉𝓎 𝑀𝒾𝓃𝒹𝒶𝓃𝒶𝑜 𝑀𝒾𝓈𝒶𝓂𝒾𝓈 𝒪𝒸𝒸𝒾𝒹𝑒𝓃𝓉𝒶𝓁 | Link: https://unsplash.com/photos/a-young-woman-in-a-white-dress-stands-near-flowers-u8sXK_c6pyk | Person in photo: 𝔍𝔲𝔩𝔦𝔞𝔫𝔞 ℜ𝔬𝔞",
    hint: "Source details are listed above.",
    difficulty: 'Medium'
  },
  {
    id: 'm9',
    type: 'image',
    origin: 'ai',
    content: new URL("../Human or Not Images/AI Images/Medium/AI2M.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "A group of people walking through a vibrant red corridor, with one individual in yellow standing out among the dark-clad figures.",
    source: "Title: Corridor Walkers | Creator/Owner: Sam Stoof - https://www.lummi.ai/creator/samstoof | Link: https://www.lummi.ai/illustration/corridor-walkers-kirkn",
    hint: "Source details are listed above.",
    difficulty: 'Medium'
  },
  {
    id: 'm10',
    type: 'image',
    origin: 'human',
    content: new URL("../Human or Not Images/Authentic Images/Medium/A3M.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "A woman in a bikini laying on a fallen tree",
    source: "Creator/Owner: Andrea Pipitone - https://unsplash.com/@takeshi_milka | Equipment: NIKON CORPORATION, NIKON D5300 | Date: June 15, 2023 | Link: https://unsplash.com/photos/a-woman-in-a-bikini-laying-on-a-fallen-tree-dIcdpSBwPzI",
    hint: "Source details are listed above.",
    difficulty: 'Medium'
  },
  // MEDIUM - MIXED
  {
    id: 'm11',
    type: 'text',
    origin: 'human',
    content: "In the end, we will remember not the words of our enemies, but the silence of our friends. This realization often comes too late to save the connections we value.",
    headline: "Reflection on Civil Rights",
    deskNote: "Reflective essay excerpt.",
    source: "Martin Luther King Jr. (1967)",
    hint: "The internal moral conviction is expressed with a rhythm that feels lived-in.",
    difficulty: 'Medium'
  },
  {
    id: 'm12',
    type: 'text',
    origin: 'ai',
    content: "The market showed significant volatility during the afternoon session. Analysts suggest that the change in interest rates was the primary driver for the sell-off in technology stocks.",
    headline: "Afternoon Market Briefing",
    deskNote: "Financial report excerpt.",
    source: "FinanceAI News",
    hint: "The prose is factual but entirely devoid of any unique authorial voice or perspective.",
    difficulty: 'Medium'
  },
  {
    id: 'm13',
    type: 'image',
    origin: 'ai',
    content: new URL("../Human or Not Images/AI Images/Medium/AI3M.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "Cinematic photo of a face-off between Khabib Nurmagomedov and a grizzly bear in a UFC weigh-in event set inside the packed Barclays Center in Brooklyn, New York.",
    source: "Model: Aperture Max | Link: https://lexica.art/prompt/ef86d697-acf8-4609-a3b2-7f01365f3409",
    hint: "Source details are listed above.",
    difficulty: 'Medium'
  },
  {
    id: 'm14',
    type: 'text',
    origin: 'human',
    content: "I suppose that at the end of the day, all we have are our stories. The ones we tell ourselves, and the ones we tell each other to make sense of the void.",
    headline: "Fictional Narrative",
    deskNote: "Novel excerpt.",
    source: "Modern Author (2015)",
    hint: "The specific combination of weariness and wonder is a complex human emotion to fake.",
    difficulty: 'Medium'
  },
  {
    id: 'm15',
    type: 'image',
    origin: 'human',
    content: new URL("../Human or Not Images/Authentic Images/Medium/A4M.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "Beautiful Chinese Buddhist temple with traditional architecture and intricate designs.",
    source: "Creator/Owner: Lawrence Suzara - https://www.pexels.com/@lawrencesuzara/ | Date: November 10th, 2018 | Link: https://www.pexels.com/photo/low-angle-photo-of-temple-1581555/",
    hint: "Source details are listed above.",
    difficulty: 'Medium'
  },

  // HARD - TEXT
  {
    id: 'h1',
    type: 'text',
    origin: 'human',
    content: "The phenomenology of spirit is the science of the experience of consciousness. It is the movement of the concept from its abstract form to its concrete reality.",
    headline: "Philosophical Treatise",
    deskNote: "Philosophical passage.",
    source: "G.W.F. Hegel (1807)",
    hint: "The complexity of the thought process is difficult for current AI to sustain.",
    difficulty: 'Hard'
  },
  {
    id: 'h2',
    type: 'text',
    origin: 'ai',
    content: "The ontological status of the object is determined by its relationship to the subject. In the absence of a perceiving mind, the object exists only as a potentiality within the field of being.",
    headline: "The Field of Being",
    deskNote: "Philosophical passage.",
    source: "GPT-4o",
    hint: "It uses big words but the underlying logic is slightly circular.",
    difficulty: 'Hard'
  },
  {
    id: 'h3',
    type: 'text',
    origin: 'human',
    content: "The very concept of objective truth is fading out of the world. Lies will pass into history. What is true is whatever the Party says is true, at that moment.",
    headline: "Reflections on Propaganda",
    deskNote: "Political essay excerpt.",
    source: "George Orwell (1943)",
    hint: "The sharp, pointed societal critique has a weight that AI models often dilute with 'safeguarded' language.",
    difficulty: 'Hard'
  },
  {
    id: 'h4',
    type: 'text',
    origin: 'ai',
    content: "The emergent properties of complex systems often elude reductionist analysis. To truly understand the whole, we must examine the interactions rather than just the constituent parts.",
    headline: "The Whole and Its Parts",
    deskNote: "Academic essay excerpt.",
    source: "Research Assistant AI",
    hint: "While technically correct, the phrasing is extremely typical of common academic training data.",
    difficulty: 'Hard'
  },
  {
    id: 'h5',
    type: 'text',
    origin: 'human',
    content: "In the beginning was the Word, and the Word was with God, and the Word was God. He was with God in the beginning. Through him all things were made.",
    headline: "Gospel According to John",
    deskNote: "Religious text excerpt.",
    source: "Biblical Text (KJV)",
    hint: "The archaic repetition and rhythmic structure are deeply rooted in historical liturgical traditions.",
    difficulty: 'Hard'
  },
  // HARD - IMAGE
  {
    id: 'h6',
    type: 'image',
    origin: 'human',
    content: new URL("../Human or Not Images/Authentic Images/Hard/A1H.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "A black and white photo shows a man in a hooded jacket and glasses next to a woman with a bob haircut and large sunglasses who is shouting.",
    source: "Title: TOMORA | Creator/Owner: Tom Rowlands, AURORA | Date: April 2026 | Link: https://www.tomora.com/ | Person in photo: Tom Rowlands of The Chemical Brothers and Norwegian artist AURORA.",
    hint: "Source details are listed above.",
    difficulty: 'Hard'
  },
  {
    id: 'h7',
    type: 'image',
    origin: 'ai',
    content: new URL("../Human or Not Images/AI Images/Hard/AI1H.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "Minimalist 'MEWED' perfume bottle surrounded by dried flowers, creating an elegant and serene composition.",
    source: "Title: Minimalist Perfume Bottle with Dried Flowers | Creator/Owner: lébéa - https://www.lummi.ai/creator/lebea | Link: https://www.lummi.ai/photo/minimalist-perfume-bottle-with-dried-flowers-4nnkq",
    hint: "Source details are listed above.",
    difficulty: 'Hard'
  },
  {
    id: 'h8',
    type: 'image',
    origin: 'human',
    content: new URL("../Human or Not Images/Authentic Images/Hard/A2H.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "A thin arc glowing in the darkness of space. Sunlight traces the curves of the ocean and clouds, while the rest of the planet fades into shadow",
    source: "Title: Mother Earth | Date: April 4, 2026) | Link: Credit: NASA Image Credit: NASA",
    hint: "Source details are listed above.",
    difficulty: 'Hard'
  },
  {
    id: 'h9',
    type: 'image',
    origin: 'ai',
    content: new URL("../Human or Not Images/AI Images/Hard/AI2H.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "Minimalist perfume bottle on lush green moss, blending luxury and nature with sleek design and earthy textures.",
    source: "Title: Perfume on Moss Display | Creator/Owner: Daniil Filatov - https://www.lummi.ai/creator/filatov.design | Link: https://www.lummi.ai/photo/perfume-on-moss-display-vawwr",
    hint: "Source details are listed above.",
    difficulty: 'Hard'
  },
  {
    id: 'h10',
    type: 'image',
    origin: 'human',
    content: new URL("../Human or Not Images/Authentic Images/Hard/A3H.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "A blue record player with a record on it",
    source: "Creator/Owner: Clay Banks - https://unsplash.com/@claybanks | Equipment: SONY, ILCE-7M4 | Date: March 9, 2026 | Link: https://unsplash.com/photos/a-blue-record-player-with-a-record-on-it-YZZgAMftFuQ",
    hint: "Source details are listed above.",
    difficulty: 'Hard'
  },
  // HARD - MIXED
  {
    id: 'h11',
    type: 'text',
    origin: 'human',
    content: "The owl of Minerva spreads its wings only with the falling of the dusk. This means that philosophy only begins to understand a culture as that culture begins to fade.",
    headline: "Philosophy of Right",
    deskNote: "Philosophical passage.",
    source: "G.W.F. Hegel (1821)",
    hint: "The metaphor encapsulates a highly specific historical and philosophical worldview.",
    difficulty: 'Hard'
  },
  {
    id: 'h12',
    type: 'text',
    origin: 'ai',
    content: "The paradigm shift towards decentralization represents a fundamental restructuring of global power dynamics. This evolution is driven by the immutable nature of cryptographic protocols.",
    headline: "Protocols of Power",
    deskNote: "Whitepaper excerpt.",
    source: "PolicyBot 9000",
    hint: "The language is extremely dense with jargon but relies heavily on current online manifestos.",
    difficulty: 'Hard'
  },
  {
    id: 'h13',
    type: 'image',
    origin: 'ai',
    content: new URL("../Human or Not Images/AI Images/Hard/AI3H.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "A black leather jacket with a classic design, featuring a front zipper, side pockets, and ribbed cuffs, displayed on a white background.",
    source: "Title: Classic Leather Jacket | Creator/Owner: Sam Stoof - https://www.lummi.ai/creator/samstoof",
    hint: "Source details are listed above.",
    difficulty: 'Hard'
  },
  {
    id: 'h14',
    type: 'text',
    origin: 'human',
    content: "What is important is to spread light; to let each person feel that they are part of a larger story that did not begin with them and will not end with them.",
    headline: "Humanist Reflection",
    deskNote: "Diary excerpt.",
    source: "Anonymous Diarist (c. 1910)",
    hint: "The quiet, personal sincerity of the 20th-century humanist tradition is hard to replicate without sounding 'inspiring'.",
    difficulty: 'Hard'
  },
  {
    id: 'h15',
    type: 'image',
    origin: 'human',
    content: new URL("../Human or Not Images/Authentic Images/Hard/A4H.png", import.meta.url).href,
    headline: "Evidence Scan",
    deskNote: "A woman in a flowing red dress reclines confidently on rugged coastal rocks, illuminated by warm sunlight. The bright blue sky and calm sea create a striking contrast with her vibrant outfit and relaxed, graceful pose.",
    source: "Creator/Owner: sammy swae - https://unsplash.com/@sammyswae | Equipment: SONY, ILCE-7M3 | Date: November 18, 2025 | Link: https://unsplash.com/t/people?asset=%5B%22Photos%22%2C%7B%22slug%22%3A%22young-woman-in-red-dress-by-the-sea--PLgFxbrcB0%22%7D%5D",
    hint: "Source details are listed above.",
    difficulty: 'Hard'
  }
];

export const RANKS: Rank[] = [
  { title: "The Apprentice", description: "You're just starting your investigation. The machine still fools you often.", minScore: 0 },
  { title: "The Fact Checker", description: "You have a decent eye for detail, but some sophisticated fakes get through.", minScore: 500 },
  { title: "The Senior Editor", description: "Your instincts are sharp. You can spot most manufactured culture with ease.", minScore: 1000 },
  { title: "The Bureau Chief", description: "Nothing escapes your scrutiny. You are a master of the pre-AI truth.", minScore: 1500 }
];
