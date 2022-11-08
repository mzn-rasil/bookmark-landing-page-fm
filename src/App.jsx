import { Fragment, useState } from "react";

/* Header Images */
import { Logo } from "./assets/svg/Logo";
import MenuIcon from "./assets/images/icon-hamburger.svg";
import MenuCloseIcon from "./assets/images/icon-close.svg";
import HeroIllustration from "./assets/images/illustration-hero.svg";

/* Main section */
/* -- Features section -- */
import IllustrationFeature1 from "./assets/images/illustration-features-tab-1.svg";
import IllustrationFeature2 from "./assets/images/illustration-features-tab-2.svg";
import IllustrationFeature3 from "./assets/images/illustration-features-tab-3.svg";
/* -- Downloads section */
import ChromeLogo from "./assets/images/logo-chrome.svg";
import FirefoxLogo from "./assets/images/logo-firefox.svg";
import OperaLogo from "./assets/images/logo-opera.svg";
import BgDots from "./assets/images/bg-dots.svg";
/* -- FAQ Disclosure section */
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

/* Footer */
import { Facebook } from "./assets/svg/Facebook";
import Twitter from "./assets/images/icon-twitter.svg";

/* Feature Links */
const FEATURES = [
  {
    id: 1,
    title: "Simple Bookmarking",
    content: {
      illustration: IllustrationFeature1,
      header: "Bookmark in one click",
      body: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
  },
  {
    id: 2,
    title: "Speedy Searching",
    content: {
      illustration: IllustrationFeature2,
      header: "Intelligent search",
      body: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
  },
  {
    id: 3,
    title: "Easy Sharing",
    content: {
      illustration: IllustrationFeature3,
      header: "Share your bookmarks",
      body: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    },
  },
];

/* Browsers */
const BROWSERS = [
  {
    id: 1,
    name: "Chrome",
    logo: ChromeLogo,
    version: 62,
  },
  {
    id: 2,
    name: "Firefox",
    logo: FirefoxLogo,
    version: 55,
  },
  {
    id: 3,
    name: "Opera",
    logo: OperaLogo,
    version: 46,
  },
]

/* Features component */
const Features = ({ feature }) => {
  return (
    <section className="mt-12 lg:flex">
      <div className="">
        <div className="relative">
          <img src={feature.content.illustration} alt="illustration" className="mx-auto" />
          <div className="-z-10 absolute -left-6 sm:-left-8 lg:-left-10 xl:-left-40 top-12 w-full sm:w-9/12 lg:w-full h-full bg-pri-soft-blue rounded-r-full" />
        </div>
      </div>

      <div className="mt-24 lg:flex-1 lg:max-w-md lg:mx-auto">
        <h3 className="text-2xl lg:text-3xl font-medium text-center lg:text-start">{feature.content.header}</h3>
        <p className="mt-4 text-center lg:text-start text-neu-grayish-blue leading-relaxed lg:text-base">{feature.content.body}</p>
        <button className="mt-8 hidden lg:flex bg-pri-soft-blue text-white px-5 py-3 rounded-md drop-shadow-lg">More info</button>
      </div>
    </section>
  );
};

function App() {
  const [currentActiveLink, setCurrentActiveLink] = useState("Simple Bookmarking");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuIsOpen(prevMenuIsOpen => !prevMenuIsOpen);
  }

  const clickHandler = (linkTitle) => {
    setCurrentActiveLink(linkTitle);
  }

  const validateEmailHandler = (e) => {
    const enteredEmail = e.target.value;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!enteredEmail.match(emailRegex)) {
      console.log('unmatch');
      setEmailIsValid(false);
      return;
    }
    setEmailIsValid(true);
  }

  return (
    <div>
      <header className="pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24">
        <nav className={`relative z-50 container max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-between items-center ${menuIsOpen ? "!fixed top-8 sm:top-10" : ""}`}>
          <div>
            <Logo
              fill={`${menuIsOpen ? "#fff" : "#242A45"}`}
              circleFill={`${menuIsOpen ? "#fff" : "#5267DF"}`}
              iconFill={`${menuIsOpen ? "#222" : "#fff"}`}
            />
          </div>

          <div className="lg:hidden" onClick={toggleMenuHandler}>
            {
              menuIsOpen ?
                <img src={MenuCloseIcon} alt="Menu opened" /> :
                <img src={MenuIcon} alt="Menu closed" />
            }
          </div>

          <ul className="hidden lg:flex lg:items-center lg:gap-16 text-sm">
            <li className="uppercase hover:cursor-pointer hover:text-pri-soft-red">Features</li>
            <li className="uppercase hover:cursor-pointer hover:text-pri-soft-red">Pricing</li>
            <li className="uppercase hover:cursor-pointer hover:text-pri-soft-red">Contact</li>
            <button className="uppercase px-6 py-2 bg-pri-soft-red text-white rounded-md drop-shadow-lg hover:cursor-pointer hover:bg-white hover:text-pri-soft-red hover:outline hover:outline-2 hover:outline-pri-soft-red">Login</button>
          </ul>
        </nav>

        <section className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 flex flex-col lg:items-center lg:flex-row-reverse lg:pt-24 overflow-x-hidden lg:overflow-x-visible">
          <div className="relative lg:left-28">
            <img src={HeroIllustration} alt="Hero illustration image" className="mx-auto lg:mx-0" />
            <div className="absolute -z-10 top-12 -right-24 bg-pri-soft-blue w-full sm:w-9/12 lg:w-full h-5/6 rounded-l-full" />
          </div>

          <section className="flex-1 mt-12 lg:mt-0">
            <div className="">
              <h1 className="text-3xl lg:text-5xl text-center lg:text-start font-medium">A Simple Bookmark Manager</h1>

              <p className="mt-6 text-center lg:text-start text-base lg:text-lg text-neu-grayish-blue leading-relaxed">
                A clean and simple interface to organize your favourite websites. Open a new
                browser tab and see your sites load instantly. Try it for free.
              </p>

              <div className="mt-8 flex gap-4">
                <button className="flex-1 lg:flex-none lg:px-8 lg:py-3 py-2 rounded-lg drop-shadow-md bg-pri-soft-blue text-white hover:bg-white hover:outline hover:outline-2 hover:outline-pri-soft-blue hover:text-pri-soft-blue">Get it on Chrome</button>
                <button className="flex-1 lg:flex-none lg:px-8 lg:py-3 py-2 rounded-lg drop-shadow-md bg-slate-300 hover:bg-white hover:outline hover:outline-2 hover:outline-black hover:text-black hover:cursor-pointer">Get it on Firefox</button>
              </div>
            </div>
          </section>
        </section>
      </header>

      <main className="mt-16">
        {/* Features section */}
        <section className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="lg:max-w-md lg:mx-auto">
            <h2 className="text-center text-3xl lg:text-4xl font-medium">Features</h2>

            <p className="text-sm lg:text-base text-center mt-8 text-neu-grayish-blue leading-relaxed">Our aim is to make it quick and easy for you to access your favourite websites.
              Your bookmarks sync between your devices so you can access them on the go.</p>
          </div>

          <ul className="my-8 border-y-2 lg:border-y-0 divide-y-2 lg:divide-y-0 lg:border-b-2 lg:flex lg:max-w-xl lg:mx-auto lg:items-center">
            {
              FEATURES.map((feature) => (
                <li key={feature.id} className="flex justify-center hover:cursor-pointer lg:w-1/3 hover:text-pri-soft-red" onClick={() => clickHandler(feature.title)}>
                  <span className={`lg:w-full lg:text-center py-2 lg:py-6 border-b-4 border-b-white ${currentActiveLink === feature.title && "!border-b-pri-soft-red"}`}>{feature.title}</span>
                </li>
              ))
            }
          </ul>

          {
            currentActiveLink === "Simple Bookmarking" &&
            <Features
              feature={FEATURES[0]}
            />
          }
          {
            currentActiveLink === "Speedy Searching" &&
            <Features
              feature={FEATURES[1]}
            />
          }
          {
            currentActiveLink === "Easy Sharing" &&
            <Features
              feature={FEATURES[2]}
            />
          }
        </section>

        {/* Downloads section */}
        <section className="mt-24 lg:mt-48 container max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="lg:max-w-lg lg:mx-auto">
            <h2 className="text-2xl lg:text-3xl font-medium text-center">Download the extension</h2>
            <p className="mt-4 text-base text-neu-grayish-blue text-center leading-relaxed">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
          </div>

          <div className="lg:mt-10 flex flex-col lg:flex-row lg:justify-center lg:gap-8">
            {
              BROWSERS.map((browser) => (
                <section
                  key={browser.id}
                  className={`p-6 text-center shadow-md rounded-3xl ${browser.name === "Firefox" && "mt-10"} ${browser.name === "Opera" && "mt-20"}`}
                >
                  <div>
                    <img
                      src={browser.logo}
                      alt={browser.name}
                      className="mx-auto mt-10"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-medium">Add to Chrome</h3>
                  <p className="text-sm text-neu-grayish-blue font-normal">Minimum version {browser.version}</p>

                  <div className="pt-10 pb-6">
                    <img src={BgDots} alt="Dots..." className="mx-auto" />
                  </div>

                  <button className="w-full bg-pri-soft-blue text-white font-medium py-3 rounded-md hover:cursor-pointer hover:bg-white hover:text-pri-soft-blue hover:outline hover:outline-2 hover:outline-pri-soft-blue">Add & Install Extension</button>
                </section>
              ))
            }
          </div>
        </section>

        <section className="mt-24 lg:mt-48 container max-w-2xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl text-center font-medium">Frequently Asked Questions</h2>
          <p className="mt-6 text-center text-neu-grayish-blue leading-relaxed">Here are some of our FAQs. If you have any other questions you’d like
            answered please feel free to email us.</p>

          {/* Disclosure section */}
          <div className="mt-8 divide-y-2">
            <Disclosure>
              {
                ({ open }) => (
                  <div className="py-4">
                    <Disclosure.Button className="w-full flex items-center justify-between">
                      <span className="hover:text-pri-soft-red grow text-start">
                        What is Bookmark?
                      </span>
                      <span>
                        <ChevronUpIcon className={`h-7 w-7 text-pri-soft-blue ${open ? "transform rotate-180 fill-pri-soft-red" : ""}`} />
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-md text-slate-700 pt-4 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                      justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
            <Disclosure>
              {
                ({ open }) => (
                  <div className="py-4">
                    <Disclosure.Button className="w-full flex items-center justify-between">
                      <span className="hover:text-pri-soft-red grow text-start">
                        How can I request a new browser?
                      </span>
                      <span>
                        <ChevronUpIcon className={`h-7 w-7 text-pri-soft-blue ${open ? "transform rotate-180 fill-pri-soft-red" : ""}`} />
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-md text-slate-700 pt-4 leading-loose">
                      Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
            <Disclosure>
              {
                ({ open }) => (
                  <div className="py-4">
                    <Disclosure.Button className="w-full flex items-center justify-between">
                      <span className="hover:text-pri-soft-red grow text-start">
                        Is there a mobile app?
                      </span>
                      <span>
                        <ChevronUpIcon className={`h-7 w-7 text-pri-soft-blue ${open ? "transform rotate-180 fill-pri-soft-red" : ""}`} />
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-md text-slate-700 pt-4 leading-loose">
                      Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
                      urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
                      sollicitudin ex et ultricies bibendum.
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
            <Disclosure >
              {
                ({ open }) => (
                  <div className="py-4">
                    <Disclosure.Button className="w-full flex items-center justify-between">
                      <span className="hover:text-pri-soft-red grow text-start">
                        What about other Chromium browsers?
                      </span>
                      <span>
                        <ChevronUpIcon className={`h-7 w-7 text-pri-soft-blue ${open ? "transform rotate-180 fill-pri-soft-red" : ""}`} />
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-md text-slate-700 pt-4 leading-loose">
                      Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
                      vitae neque eget nisl gravida pellentesque non ut velit.
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
          </div>

          <button className="mt-8 mx-auto flex bg-pri-soft-blue text-white px-5 py-3 rounded-md drop-shadow-lg">More info</button>
        </section>

        <section className="mt-24 bg-pri-soft-blue pt-12 pb-8">
          <div className="container max-w-2xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <span className="uppercase text-white text-xs tracking-[0.3em]">35,000+ already joined</span>
            <h2 className="text-white font-medium text-2xl mt-4">Stay up-to-date with what we’re doing</h2>
            <div className="flex flex-col lg:flex-row lg:gap-4 lg:mt-8">
              <div className="lg:flex-1">
                <input type="email" placeholder="Enter your email address" className={`w-full mt-6 lg:mt-0 p-2 outline-none rounded-md focus:outline-none ${emailIsValid ? "" : "!border-2 border-red-500"}`} onChange={validateEmailHandler} required />
                {
                  !emailIsValid &&
                  <p className="bg-pri-soft-red text-white italic font-medium text-start text-sm p-1">Whoops, make sure its an email</p>
                }
              </div>
              <div className="lg:basis-48 flex items-start">
                <button type="submit" className="w-full mt-4 lg:mt-0 bg-pri-soft-red text-white py-2 rounded-md drop-shadow-md hover:bg-white hover:outline hover:outline-2 hover:outline-pri-soft-red hover:text-pri-soft-red">Contact Us</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neu-dark-blue py-8">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center lg:flex lg:items-center lg:gap-24">
          <div className="flex justify-center">
            <Logo fill="#FFF" />
          </div>

          <ul className="text-white mt-8 lg:mt-0 flex flex-col lg:flex-row gap-5">
            <li className="uppercase tracking-[0.3em] text-sm text-neu-grayish-blue lg:text-white lg:tracking-widest hover:text-pri-soft-red hover:cursor-pointer">Features</li>
            <li className="uppercase tracking-[0.3em] text-sm text-neu-grayish-blue lg:text-white lg:tracking-widest hover:text-pri-soft-red hover:cursor-pointer">Pricing</li>
            <li className="uppercase tracking-[0.3em] text-sm text-neu-grayish-blue lg:text-white lg:tracking-widest hover:text-pri-soft-red hover:cursor-pointer">Contact</li>
          </ul>

          <div className="flex mt-8 lg:mt-0 justify-center gap-10 lg:ml-auto">
            <div>
              <Facebook />
            </div>
            <div>
              <img src={Twitter} alt="twitter" />
            </div>
          </div>
        </div>
      </footer>

      {
        menuIsOpen &&
        (
          <div className="fixed z-40 top-0 bg-neu-dark-blue/80 w-full h-screen">
            <div className="container max-w-md mx-auto mt-24 flex flex-col">
              <ul className="flex flex-col justify-center border-y-2 divide-y-2 divide-neu-grayish-blue border-neu-grayish-blue">
                <li className="text-center text-white uppercase py-4">Features</li>
                <li className="text-center text-white uppercase py-4">Pricing</li>
                <li className="text-center text-white uppercase py-4">Contact</li>
              </ul>

              <button className="w-full border-2 border-white bg-transparent text-white uppercase py-2 mt-8">Login</button>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex lg:mt-0 justify-center gap-10 lg:ml-auto">
                <div>
                  <Facebook fill="" />
                </div>
                <div>
                  <img src={Twitter} alt="twitter" />
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App;

