// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://elslander.github.io/summaries",
  base: "/summaries",
  integrations: [
    starlight({
      title: "Summaries",
      social: [
        // {
        //   icon: "github",
        //   label: "GitHub",
        //   href: "https://github.com/withastro/starlight",
        // },
      ],
      plugins: [catppuccin()],
      sidebar: [
        {
          label: "Semester 1",
          collapsed: true,
          items: [
            {
              label: "Experience Design 1",
              collapsed: true,
              items: [
                { label: "User Centric Design", slug: "xd1/ucd" },
                { label: "Archetypes", slug: "xd1/archetype" },
                { label: "Personas", slug: "xd1/persona" },
                {
                  label: "History",
                  items: [
                    {
                      label: "Interaction Design",
                      slug: "xd1/history/interaction-design",
                    },
                    { label: "Xerox Parc", slug: "xd1/history/xerox-parc" },
                    { label: "Other GUIs", slug: "xd1/history/gui" },
                    {
                      label: "Human Computer Interaction",
                      slug: "xd1/history/human-computer-interaction",
                    },
                  ],
                },
              ],
            },
            {
              label: "Visual Design 1",
              collapsed: true,
              items: [
                { label: "Connotation", slug: "vd1/connotation" },
                { label: "Denotation", slug: "vd1/denotation" },
                { label: "Mood- & Style Board", slug: "vd1/mood-style-board" },
                { label: "Introduction to Figma", slug: "vd1/figma" },
                {
                  label: "Visual Design Language",
                  slug: "vd1/design-language",
                },
                { label: "Gestalt Principles", slug: "vd1/gestalt" },
                { label: "Typography", slug: "vd1/typography" },
              ],
            },
            {
              label: "Creative Code 1",
              collapsed: true,
              items: [],
            },
            {
              label: "Web 1",
              collapsed: true,
              items: [
                { label: "Structure with HTML", slug: "web1/structure-html" },
                { label: "Semantics", slug: "web1/semantics" },
                { label: "Accessibility", slug: "web1/accessibility" },
                { label: "Styling with CSS", slug: "web1/styling-css" },
                { label: "Flexbox", slug: "web1/flexbox" },
                { label: "Fonts", slug: "web1/font" },
                { label: "Grid", slug: "web1/grid" },
                { label: "Pseudo", slug: "web1/pseudo" },
                { label: "SVG", slug: "web1/svg" },
                { label: "Forms", slug: "web1/forms" },
                {
                  label: "Transform & Transition",
                  slug: "web1/transform-transition",
                },
                { label: "Gradients", slug: "web1/gradient" },
              ],
            },
          ],
        },
        {
          label: "Semester 2",
          collapsed: true,
          items: [
            {
              label: "Experience Design 2",
              collapsed: true,
              items: [
                { label: "User Journey", slug: "xd2/user-journey" },
                { label: "AI in Experience Design", slug: "xd2/ai-ux" },
                { label: "Flowcharts", slug: "xd2/flowchart" },
                { label: "Wireframes", slug: "xd2/wireframe" },
                { label: "The 10 Heuristics", slug: "xd2/heuristics" },
                { label: "User Flow", slug: "xd2/user-flow" },
                {
                  label: "Design for Everyone",
                  slug: "xd2/design-for-everyone",
                },
                { label: "Cardboard Prototyping", slug: "xd2/prototyping" },
                {
                  label: "Accessibility & Empathy Lab",
                  items: [
                    {
                      label: "Intro to Accessibilty",
                      slug: "xd2/accessibility-empathy/intro",
                    },
                    {
                      label: "Visual",
                      slug: "xd2/accessibility-empathy/visual",
                    },
                    {
                      label: "Auditory",
                      slug: "xd2/accessibility-empathy/auditory",
                    },
                    {
                      label: "Physical",
                      slug: "xd2/accessibility-empathy/physical",
                    },
                    {
                      label: "Neurodivergent",
                      slug: "xd2/accessibility-empathy/neurodivergent",
                    },
                  ],
                },
              ],
            },
            {
              label: "Visual Design 2",
              collapsed: true,
              items: [
                { label: "Storytelling", slug: "vd2/storytelling" },
                { label: "Typography", slug: "vd2/typography" },
                { label: "UI Design", slug: "vd2/ui-design" },
                {
                  label: "Graphic Design History",
                  items: [
                    { label: "Art Nouveau", slug: "vd2/history/art-nouveau" },
                    {
                      label: "European Poster Design",
                      slug: "vd2/history/european-poster-design",
                    },
                    {
                      label: "Constructivism & De Stijl",
                      slug: "vd2/history/constructivism-de-stijl",
                    },
                    { label: "Bauhaus", slug: "vd2/history/bauhaus" },
                    {
                      label: "Die Neue Typographie",
                      slug: "vd2/history/neue-typographie",
                    },
                    { label: "Swiss Style", slug: "vd2/history/swiss-style" },
                    {
                      label: "The New York School",
                      slug: "vd2/history/newyork-school",
                    },
                    {
                      label: "Postmodern Design",
                      slug: "vd2/history/postmodern-design",
                    },
                    {
                      label: "The Digital Revolution",
                      slug: "vd2/history/digital-revolution",
                    },
                  ],
                },
              ],
            },
            {
              label: "Web 2",
              collapsed: true,
              items: [
                {
                  label: "Server Side Development",
                  slug: "web2/server-side-development",
                },
                { label: "Super Globals", slug: "web2/super-globals" },
                { label: "Databases", slug: "web2/databases" },
                { label: "Deployment", slug: "web2/deployment" },
                { label: "Model View Controller (MVC)", slug: "web2/mvc" },
                {
                  label: "Create Read Update Delete (CRUD)",
                  slug: "web2/crud",
                },
                {
                  label: "Progressive Enhancement",
                  slug: "web2/progressive-enhancement",
                },
                {
                  label: "Progressive Enhancement (forms)",
                  slug: "web2/progressive-enhancement-forms",
                },
              ],
            },
            {
              label: "Creative Code 2",
              collapsed: true,
              items: [
                {
                  label: "Object Oriented Programming (OOP)",
                  slug: "cc2/object-oriented-programming",
                },
                {
                  label: "Document Object Model (DOM)",
                  slug: "cc2/document-object-model",
                },
                { label: "Events", slug: "cc2/events" },
                { label: "Forms", slug: "cc2/forms" },
                {
                  label: "Localstorage & Timing",
                  slug: "cc2/localstorage-timing",
                },
                { label: "Micro Interactions", slug: "cc2/micro-interactions" },
                { label: "Async Calls", slug: "cc2/async-calls" },
                { label: "Canvas", slug: "cc2/canvas" },
              ],
            },
          ],
        },
        {
          label: "Semester 3",
          collapsed: true,
          items: [
            {
              label: "Experience Design 3",
              collapsed: true,
              items: [
                {
                  label: "Framing the Research questions",
                  slug: "xd3/framing-research-questions",
                },
                {
                  label: "Problem Space Definition & Assumptions",
                  slug: "xd3/psd-assumptions",
                },
                {
                  label: "User Group Definition",
                  slug: "xd3/user-group-definition",
                },
                {
                  label: "Secondary Research",
                  slug: "xd3/secondary-research",
                },
                {
                  label: "Surveys",
                  slug: "xd3/survey",
                },
                {
                  label: "Interviews",
                  slug: "xd3/interview",
                },
                {
                  label: "Cultural Probe",
                  slug: "xd3/cultural-probe",
                },
                {
                  label: "Ethics, Inclusivity and Diversity",
                  slug: "xd3/ethics",
                },
                {
                  label: "Thematic Analysis",
                  slug: "xd3/thematic-analysis",
                },
              ],
            },
            {
              label: "Visual Design 3",
              collapsed: true,
              items: [
                { label: "Brand Theory", slug: "vd3/brand-theory" },
                { label: "Hook", slug: "vd3/hook" },
                { label: "Brand Presence", slug: "vd3/brand-presence" },
              ],
            },
            {
              label: "Motion Design 1",
              collapsed: true,
              items: [
                {
                  label: "Workflow & Interface",
                  slug: "motion1/workflow-interface",
                },
                {
                  label: "Keyframes & Easing",
                  slug: "motion1/keyframes-easing",
                },
                {
                  label: "Shape Layers",
                  slug: "motion1/shape-layers",
                },
                {
                  label: "Transparency",
                  slug: "motion1/transparency",
                },
                {
                  label: "Typography",
                  slug: "motion1/typography",
                },
                {
                  label: "Expressions",
                  slug: "motion1/expressions",
                },
              ],
            },
            {
              label: "Web 3",
              collapsed: true,
              items: [
                {
                  label: "Homework Week 1",
                  items: [
                    {
                      label: "Logical Properties",
                      slug: "web3/logical-properties",
                    },
                  ],
                },
                { label: "Responsive", slug: "web3/responsive" },
                {
                  label: "Responsive to the User",
                  slug: "web3/responsive-user",
                },
                {
                  label: "Homework Week 2",
                  items: [
                    {
                      label: "Terminal",
                      slug: "web3/terminal",
                    },
                  ],
                },
                { label: "Git", slug: "web3/git" },
                { label: "Git Branches", slug: "web3/git-branches" },
                {
                  label: "Homework Week 3",
                  items: [
                    {
                      label: "Packages",
                      slug: "web3/packages",
                    },
                    {
                      label: "Npm",
                      slug: "web3/npm",
                    },
                    {
                      label: "Packages in Practice",
                      slug: "web3/packages-practice",
                    },
                    {
                      label: "Advantages of Npm",
                      slug: "web3/advantages-npm",
                    },
                    {
                      label: "Npx",
                      slug: "web3/npx",
                    },
                  ],
                },
                { label: "Vite", slug: "web3/vite" },
                {
                  label: "Collaboration with GitHub",
                  slug: "web3/collaboration-git",
                },
                {
                  label: "Homework Week 4",
                  items: [
                    { label: "Pull", slug: "web3/pull" },
                    { label: "GitHub Flow", slug: "web3/github-flow" },
                  ],
                },
                {
                  label: "Astro",
                  slug: "web3/astro",
                },
                {
                  label: "Images",
                  slug: "web3/images",
                },
                {
                  label: "Astro Images",
                  slug: "web3/astro-images",
                },
                {
                  label: "New in CSS",
                  slug: "web3/css-new",
                },
                {
                  label: "Deployment",
                  slug: "web3/deployment",
                },
                {
                  label: "Strapi",
                  slug: "web3/strapi",
                },
                {
                  label: "Astro + Strapi",
                  slug: "web3/astro-strapi",
                },
                {
                  label: "Strapi Deployment",
                  slug: "web3/strapi-deploy",
                },
              ],
            },
            {
              label: "Creative Code 3",
              collapsed: true,
              items: [
                { label: "ML5", slug: "cc3/ml5" },
                { label: "GSAP Animations", slug: "cc3/gsap-animations" },
                { label: "GSAP Scrolltrigger", slug: "cc3/gsap-scrolltrigger" },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
