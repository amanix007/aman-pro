// app/config/pageConfigs.ts

// Update the import path if the file is named NestedPageHandler.tsx and is in the same directory structure
import Link from "next/link";
import { NestedPageConfig } from "../_components/NestedPageHandler";
import ArrayPrototypeMyFilterComponent from "@/app/javascript-functions/[[...slug]]/array-prototype-filter/ArrayPrototypeMyFilterComponent";
import LodashGetComponent from "@/app/javascript-functions/[[...slug]]/lodash/LodashGetComponent";


export interface NestedRouteConfig extends NestedPageConfig {
  seo?: {
    title?: string;
    description?: string;
  };
  children?: Record<string, NestedRouteConfig>;
}

export const pageConfigs: Record<string, NestedRouteConfig> = {
  "javascript-functions": {
    title: "JavaScript Functions",
    description: "Closures, callbacks, async/await, and more.",
    seo: {
      title: "Learn JavaScript Functions",
      description: "Master closures, async/await, and callback patterns.",
    },
    component: <div>
      <h4>
        📘 Intro to JS Functions
      </h4>
      <ul className="mt-5 mb-5">
        <li className="mb-5"><Link className="text-blue-600/100 dark:text-sky-400/100" href={'/javascript-functions/array-prototype-filter-recreate'}>Array.prototype.myFilter</Link></li>
        <li className="mb-5"><Link className="text-blue-600/100 dark:text-sky-400/100" href={'/javascript-functions/array-prototype-filter-recreate'}>Array.prototype.myFilter</Link></li>
        <li className="mb-5"><Link className="text-blue-600/100 dark:text-sky-400/100" href={'/javascript-functions/lodash-get-recreate'}>Lodash - get</Link></li>
      </ul>
    </div>,
    children: {
      "array-prototype-filter-recreate": {
        title: "Array.prototype.myFilter",
        seo: {
          title: "JavaScript Array.prototype.myFilter",
          description: "Deep dive into Array.prototype.myFilter with examples.",
        },
        component: <ArrayPrototypeMyFilterComponent/>,
        children: {
          examples: {
            title: "Closure Examples",
            seo: { title: "Closure Examples", description: "Practical closure examples" },
            component: <ArrayPrototypeMyFilterComponent/>,
          },
        },
      },
      "lodash-get-recreate": {
        title: "Lodash Get Function Implementation",
        seo: {
          title: "Lodash Get Recreate",
          description: "Deep dive into Get Recreate with examples.",
        },
        component: <LodashGetComponent/>,
        children: {
          examples: {
            title: "Closure Examples",
            seo: { title: "Closure Examples", description: "Practical closure examples" },
            component: <ArrayPrototypeMyFilterComponent/>,
          },
        },
      },
      closures: {
        title: "Closures",
        seo: {
          title: "JavaScript Closures",
          description: "Deep dive into closures with examples.",
        },
        component: <div>🔒 Learn about closures</div>,
        children: {
          examples: {
            title: "Closure Examples",
            seo: { title: "Closure Examples", description: "Practical closure examples" },
            component: <div>📄 Code examples</div>,
          },
        },
      },
    },
  },
  "system-design": {
    title: "System Design",
    seo: { title: "System Design Basics", description: "Scalability, caching, and more" },
    component: <div>⚙️ Scalability, caching, load balancing</div>,
    children: {
      scalability: {
        title: "Scalability",
        seo: { title: "System Scalability", description: "Scale up or out with ease" },
        component: <div>📈 Horizontal vs Vertical scaling</div>,
      },
    },
  },
  quiz: {
    title: "Programming Quizzes",
    seo: { title: "Programming Quizzes", description: "Test your coding knowledge" },
    component: <div>❓ Take quizzes and test knowledge</div>,
  },
  dsa: {
    title: "Data Structures & Algorithms",
    seo: { title: "DSA Practice", description: "Learn and practice DSA problems" },
    component: <div>🧮 Learn DSA problems</div>,
  },
};
