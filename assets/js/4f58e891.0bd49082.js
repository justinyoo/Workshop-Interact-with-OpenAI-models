"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[170],{2159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(5893),o=n(1151);const i={title:" Generative AI",slug:"/generative-ai"},r=void 0,s={id:"concepts/Generative-AI",title:" Generative AI",description:"Most people are familiar with natural language generative AI from applications like ChatGPT, but you can use these models for much more than chatbots. In this section, we'll explore some other useful applications of these models.",source:"@site/docs/03-concepts/4-Generative-AI.md",sourceDirName:"03-concepts",slug:"/generative-ai",permalink:"/Workshop-Interact-with-OpenAI-models/generative-ai",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:" Generative AI",slug:"/generative-ai"},sidebar:"tutorialSidebar",previous:{title:"Tokenization",permalink:"/Workshop-Interact-with-OpenAI-models/tokenization"},next:{title:"Basic Prompting",permalink:"/Workshop-Interact-with-OpenAI-models/labs/Basic-Prompting"}},l={},c=[{value:"Information extraction",id:"information-extraction",level:3},{value:"Structured data extraction",id:"structured-data-extraction",level:3},{value:"Text Classification",id:"text-classification",level:3},{value:"Text summarization",id:"text-summarization",level:3},{value:"Next steps",id:"next-steps",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Most people are familiar with natural language generative AI from applications like ChatGPT, but you can use these models for much more than chatbots. In this section, we'll explore some other useful applications of these models."}),"\n",(0,a.jsx)(t.h3,{id:"information-extraction",children:"Information extraction"}),"\n",(0,a.jsx)(t.p,{children:"The example below shows how you can combine a prompt with data to extract information using natural-language instructions. In this case, the completion extracts the name, company, location, and phone number from an email. Modify the prompt and the source data to extract different information."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Extract the person name, company name, location and phone number from the text below.\n\nHello. My name is Robert Smith. I\u2019m calling from Contoso Insurance, Delaware. My colleague mentioned that you are interested in learning about our comprehensive benefits policy. Could you give me a call back at (555) 346-9322 when you get a chance so we can go over the benefits?\n"})}),"\n",(0,a.jsx)(t.h3,{id:"structured-data-extraction",children:"Structured data extraction"}),"\n",(0,a.jsx)(t.p,{children:"In this example, we provide freeform narrative about fictitious fruits, and prompt the model to generate a table of all the fruits mentioned and their attributes."}),"\n",(0,a.jsx)(t.p,{children:'In this example, we "primed" the model with the desired output format: a header row, and a couple of examples.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"There are many fruits that were found on the recently discovered planet Goocrux. There are neoskizzles that grow there, which are purple and taste like candy. There are also loheckles, which are a grayish blue fruit and are very tart, a little bit like a lemon. Pounits are a bright green color and are more savory than sweet. There are also plenty of loopnovas which are a neon pink flavor and taste like cotton candy. Finally, there are fruits called glowls, which have a very sour and bitter taste which is acidic and caustic, and a pale orange tinge to them.\n\n\nPlease make a table summarizing the fruits from Goocrux\n| Fruit | Color | Flavor |\n| Neoskizzles | Purple | Sweet |\n| Loheckles | Grayish blue | Tart |\n"})}),"\n",(0,a.jsx)(t.p,{children:"Try extending the prompt by appending the following text:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Please also make a JSON array summarizing the fruits from Goocrux:\n"})}),"\n",(0,a.jsx)(t.p,{children:"The model will now return a JSON array of the fruit and their attributes."}),"\n",(0,a.jsx)(t.h3,{id:"text-classification",children:"Text Classification"}),"\n",(0,a.jsx)(t.p,{children:'In this example, we provide one example of a headline and a category, and ask the model to classify a second example. This is an example of "one-shot learning": with just one example, the model can generalize to classify a new example.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Classify the following news headline into 1 of the following categories: Business, Tech, Politics, Sport, Entertainment\n\nHeadline 1: Donna Steffensen Is Cooking Up a New Kind of Perfection. The Internet's most beloved cooking guru has a buzzy new book and a fresh new perspective\nCategory: Entertainment\n\nHeadline 2: Major Retailer Announces Plans to Close Over 100 Stores\n\nCategory:\n"})}),"\n",(0,a.jsx)(t.p,{children:"Try replacing Headline 2 with other text and regenerating the completion. Does it generate the appropriate category?"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Jets lose, again!\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Obama announces re-election bid\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Microsoft up in after-hours trading\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"20nm process offers more density and better power value\n"})}),"\n",(0,a.jsx)(t.h3,{id:"text-summarization",children:"Text summarization"}),"\n",(0,a.jsx)(t.p,{children:'Text summarization is a well known capability of ChatGPT - it creates a short summary of a larger piece of text. Add tl;dr (for "too long; didn\'t read") to gain a summary of the article below. Where can you see this being useful in your business?'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"At Microsoft, we have been on a quest to advance AI beyond existing techniques, by taking a more holistic, human-centric approach to learning and understanding. As Chief Technology Officer of Azure AI Cognitive Services, I have been working with a team of amazing scientists and engineers to turn this quest into a reality. In my role, I enjoy a unique perspective in viewing the relationship among three attributes of human cognition: monolingual text (X), audio or visual sensory signals, (Y) and multilingual (Z). At the intersection of all three, there\u2019s magic\u2014what we call XYZ-code as illustrated in Figure 1\u2014a joint representation to create more powerful AI that can speak, hear, see, and understand humans better. \n\nWe believe XYZ-code will enable us to fulfill our long-term vision: cross-domain transfer learning, spanning modalities and languages. The goal is to have pre-trained models that can jointly learn representations to support a broad range of downstream AI tasks, much in the way humans do today. Over the past five years, we have achieved human performance on benchmarks in conversational speech recognition, machine translation, conversational question answering, machine reading comprehension, and image captioning. These five breakthroughs provided us with strong signals toward our more ambitious aspiration to produce a leap in AI capabilities, achieving multi-sensory and multilingual learning that is closer in line with how humans learn and understand. I believe the joint XYZ-code is a foundational component of this aspiration, if grounded with external knowledge sources in the downstream AI tasks.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,a.jsx)(t.p,{children:"These examples are illustrative as one-off demonstrations, but their real power comes with automation. You can use the Azure OpenAI service to perform similar tasks either on-demand (say, as a customer request form is submitted) or in batch mode (say, to extract data points from a database of unstructured text responses)."}),"\n",(0,a.jsx)(t.p,{children:"Lets move on to learn more about Prompt Engineering in the chat interface with hands-on lab exercises."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var a=n(7294);const o={},i=a.createContext(o);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);