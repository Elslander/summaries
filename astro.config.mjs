// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "D-Summaries",
      social: [
        // {
        //   icon: "github",
        //   label: "GitHub",
        //   href: "https://github.com/withastro/starlight",
        // },
      ],
      sidebar: [
        {
          label: "Semester 1",
          items: [
            {
              label: "Experience Design 1",
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
              items: [],
            },
            {
              label: "Web 1",
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
                { label: "Transform & Transition", slug: "web1/transform-transition" },
                { label: "Gradients", slug: "web1/gradient" },
              ],
            },
          ],
        },
        {
          label: "Semester 2",
          items: [
            {
              label: "Experience Design 2",
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
              items: []
            },
            {
              label: "Web 2",
              items: []
            },
            {
              label: "Creative Code 2",
              items: [
                {label: "Object Oriented Programming (OOP)", slug: "cc2/object-oriented-programming"},
                {label: "Document Object Model (DOM)", slug: "cc2/document-object-model"},
                {label: "Events", slug: "cc2/events"},
                {label: "Forms", slug: "cc2/forms"},
                {label: "Localstorage & Timing", slug: "cc2/localstorage-timing"},
                {label: "Micro Interactions", slug: "cc2/micro-interactions"},
                {label: "Async Calls", slug: "cc2/async-calls"},
                {label: "Canvas", slug: "cc2/canvas"},
              ]
            }
          ],
        },
        {
          label: "Semester 3",
          items: [
            {
              label: "Experience Design 3",
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
              ],
            },
          ],
        },
        {
          label: "Semester 4",
          items: [],
        },
      ],
    }),
  ],
});
