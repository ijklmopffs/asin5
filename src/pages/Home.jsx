import Navbar from "../components/Navbar";
import partners from "../assets/partners.png";
import { Link } from "react-router-dom";
import arrowRight from "../assets/arrow-right.svg";
import polygon from "../assets/Polygon.svg";
import quadri from "../assets/quadri.svg";
import trap from "../assets/trape.svg";
import portfolio from "../assets/Portfolio.png";
import portfolioMobile from "../assets/portfoliotoo.png";
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import three from "../assets/three.svg";
import application from "../assets/application.svg";
import alignment from "../assets/alignment.svg";
import negotiation from "../assets/negotiation.svg";
import onboarding from "../assets/onboarding.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import network from "../assets/network.png";
import networkMobile from "../assets/networktoo.png";
import equity from "../assets/equity.png";
import equityMobile from "../assets/equitytoo.png";
import vids from "../assets/vids.svg";
import vidsMobile from "../assets/vidstoo.svg";
import heads from "../assets/heads.png";
import headsMobile from "../assets/headstoo.png";
import featured from "../assets/featured.png";
import footerImg from "../assets/Footer.png";
import footerMobile from "../assets/footertoo.png";
import slide from "../assets/slide.svg";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white p-4 md:p-0">
        <section className="max-w-7xl mx-auto flex items-center justify-between gap-16">
          <div className="w-[48rem] text-start">
            <h1 className="font-bold text-xl md:text-3xl my-4 tracking-widest">
              SINC Partners is a service incubation company
            </h1>
            <p className="text-lg md:text-2xl tracking-wider">
              Connecting experts in product development and growth marketing
              willing to offer their services to amazing startups in exchange
              for minute equity (usually 0.5% to 2%).
            </p>
          </div>
          <div className="hidden md:block">
            <img src={partners} alt="picture of partners" />
          </div>
        </section>
        <div className="md:hidden mt-5">
          <img src={slide} alt="" className="mx-auto" />
        </div>
      </main>

      <section className="my-20 max-w-[30rem] md:max-w-4xl mx-auto bg-white rounded-3xl p-8">
        <p className="text-[#212121] text-xl md:w-[50rem] mx-auto font-medium">
          "Nigeria and Africa has a massive network effect that have not be
          fully utilized. With Nigerians/Africans in every country and territory
          of the world, we can scale an African business to 100+ countries in
          few weeks"
        </p>
        <div className="flex flex-col gap-2 my-4">
          <p className="font-semibold text-[#212121]">
            Daniel Izeghs Oratokhai
          </p>
          <span>Managing Partner at SINC Partners Ltd</span>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-20">
        <h2 className="text-[#212121] text-3xl md:text-6xl font-medium my-5">
          Network of builders helping <br /> startup scale
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 justify-between mt-16">
          <div className="text-start bg-white p-8 w-[30rem] md:w-[33rem] rounded-md">
            <h3 className="text-black font-semibold text-2xl">
              Work with Service Incubators to expedite your time-to-market
            </h3>
            <p className="text-[#4e4e4e] my-5">
              Collaborate with our meticulously chosen service partners, each
              with a vested interest, ensuring a shared commitment to success in
              the game of venture building.
            </p>
            <span className="text-base text-[#4e4e4e] font-semibold">
              For 7.5% equity, you get a product manager, product designer,
              frontend engineer, software engineer and growth marketer to build
              the MVP of your app or web application and validate it.
            </span>
            <div className="my-3 flex items-center gap-1">
              <Link to="/" className="underline font-bold text-black">
                Learn more
              </Link>
              <img src={arrowRight} alt="" className="w-5 h-5" />{" "}
            </div>
          </div>
          <div className="text-start bg-white p-8 w-[30rem] md:w-[34rem] h-[265px] rounded-md">
            <h3 className="text-black font-semibold text-2xl">
              Access funding after your mvp is <br /> validated{" "}
            </h3>
            <p className="text-[#4e4e4e] my-5">
              Startups that have built and validated their product can take
              advantage of the financial resources of the SINC Investors
              Network, elevating their potential for success in the venture
              capital landscape.
            </p>
            <span className="text-base text-[#4e4e4e] font-semibold">
              Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within <br />{" "}
              12 months
            </span>
            <div className="my-3 flex items-center gap-1">
              <Link to="/" className="underline font-bold text-black">
                Learn more
              </Link>
              <img src={arrowRight} alt="" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-20">
        <h2 className="font-medium text-[#212121] text-4xl md:text-6xl mb-4">
          Our Area of Focus
        </h2>
        <p className="text-sm md:text-base w-96 md:w-auto mx-auto md:mx-0 text-[#4e4e4e]">
          In our quest to help make success available to everyone, we have
          initial strategic <br /> direction to focus on these five (5) key
          areas at the lab
        </p>
        <div className="text-start flex flex-col md:flex-row justify-center items-center md:items-start md:justify-normal my-10">
          <div className="bg-[#303030] h-40 w-96 md:w-60 flex flex-col justify-between text-white p-4 text-xl">
            <h3>01</h3>
            <p>Business Support & Incubation</p>
          </div>
          <div className="bg-[#F47733] h-40 w-96 md:w-60 flex flex-col justify-between text-white p-4 text-xl">
            <h3>02</h3>
            <p>On-Demand & As-A-Service</p>
          </div>
          <div className="bg-[#FF78BF] h-40 w-96 md:w-60 flex flex-col justify-between text-white p-4 text-xl">
            <h3>03</h3>
            <p>Marketplace & Crowdsourcing</p>
          </div>
          <div className="bg-[#20888F] h-40 w-96 md:w-60 flex flex-col justify-between text-white p-4 text-xl">
            <h3>04</h3>
            <p>Aggregation & Shared Economy</p>
          </div>
          <div className="bg-[#FF88C6] h-40 w-96 md:w-60 flex flex-col justify-between text-white p-4 text-xl">
            <h3>05</h3>
            <p>Decentralized Economy & Digital Assets</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-20">
        <h2 className="font-medium text-[#212121] text-4xl md:text-6xl mb-4">
          Our Concept Innovations
        </h2>
        <p className="text-sm md:text-base text-[#4e4e4e] w-96 md:w-auto mx-auto md:mx-0">
          We have proprietary concept innovations that will support the startup
          ecosystem, support solution-providers/entrepreneurs and <br />
          ultimately help democratize success;
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-8 my-20">
          <div className="bg-white rounded-md p-12 pt-4 w-[30rem] md:w-[60rem]">
            <h3 className="text-[#212121] text-lg my-5 font-semibold">
              Service Incubator
            </h3>
            <p className="text-[#4e4e4e]">
              A service-for-shares model of incubating pre-product startups and
              early-stage companies by building their early stage product and
              MVP
            </p>
          </div>
          <div className="bg-white rounded-md p-12 pt-4 w-[30rem] md:w-[60rem]">
            <h3 className="text-[#212121] text-lg font-semibold my-5">
              Virtualting
            </h3>
            <p className="text-[#4e4e4e]">
              A resource share model that allows companies share the time of
              resources (employees, consultants, technical advisers or
              influencers) while also splitting the service cost of the resource{" "}
            </p>
          </div>
          <div className="bg-white rounded-md p-12 pt-4 w-[30rem] md:w-[60rem]">
            <h3 className="text-[#212121] text-lg font-semibold my-5">
              Diiming
            </h3>
            <p className="text-[#4e4e4e]">
              A progressive investment model that allows you to put aside income
              (disposable or non-disposable) as investment over a period towards
              an investment or spend of your choice {" "}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-20">
        <h2 className="font-medium text-[#212121] text-4xl md:text-6xl mb-4">
          Our Service Incubation Model
        </h2>
        <p className="text-sm md:text-base text-[#4e4e4e] w-96 md:w-auto mx-auto md:mx-0">
          The Service Incubation model is an alternate funding model for startup
          that allows professionals to offer their services to <br /> startups
          in return for a minute equity (usually between 0.5% to 1.5%) in the
          startup. As a service incubator, you will see <br /> your share grow
          as much as 1000% in 12 – 24 months as been first to invest.
        </p>
        <div className="my-20 text-start">
          <h3 className="text-[#212121] text-3xl font-medium pl-8 md:pl-0">
            Hypothesis
          </h3>
          <p className="text-[#4e4e4e] my-3 pl-8 md:pl-0">
            Just a few reasons we know its time for this model
            within the ecosystem
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-8 my-5">
            <div className="bg-white rounded-md p-8 pt-4 w-[30rem] md:w-[60rem]">
              <img src={polygon} alt="" className="w-8 h-8" />
              <p className="text-[#4e4e4e] my-5 font-medium">
                Most early-stage companies and pre-product startups cannot
                afford professional services especially those who don’t have
                family and friends’ network that can support
              </p>
            </div>
            <div className="bg-white rounded-md p-8 pt-4 w-[30rem] md:w-[60rem]">
              <img src={quadri} alt="" className="w-8 h-8" />
              <p className="text-[#4e4e4e] my-5 font-medium">
                If startups can seed 5-10% in equity to incubators for $20k to
                $200k funding most times, they will be willing to seed 10%
                equity for a $25k service investment
              </p>
            </div>
            <div className="bg-white rounded-md p-8 pt-4 w-[30rem] md:w-[60rem]">
              <img src={trap} alt="" className="w-8 h-8" />
              <p className="text-[#4e4e4e] my-5 font-medium">
                Young professionals who don’t have a lot of money to invest nor
                an accredited investors will have opportunities to take equity
                at the early stage of their career, usually been the first to
                invest and almost guaranteed of return{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="my-20 text-start pl-8 md:pl-0">
          <h3 className="text-[#212121] text-3xl font-medium">Case Study</h3>
          <p className="text-[#4e4e4e] my-3 w-96 md:w-auto">
            See what Service Incubators get, the maths behind Service Equity
            (SEEQ) and what the value of your share equity can be over time
          </p>

          <div className="flex flex-col md:flex-row items-start gap-8 md:items-center my-5">
            <div className="bg-white rounded-full py-3 px-6">
              <p className="text-[#212121] text-lg">Service Incubator Equity</p>
            </div>
            <div className="bg-white rounded-full py-3 px-6">
              <p className="text-[#212121] text-lg">SEEQ Maths Equation</p>
            </div>
            <div className="bg-white rounded-full py-3 px-6">
              <p className="text-[#212121] text-lg">
                Value of My Equity Over Time
              </p>
            </div>
          </div>
        </div>
        <div className="underline flex items-center gap-2 font-bold text-[#212121] justify-center">
          <p>Become A Service Incubator</p>
          <img src={arrowRight} alt="" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-20">
        <h2 className="font-medium text-[#212121] text-4xl md:text-6xl mb-4">
          Our Studio Portfolio
        </h2>
        <p className="text-base text-[#4e4e4e]">
          Our 2024 Service Incubator Portfolio Companies
        </p>
        <div className="my-20">
          <img src={portfolio} alt="" className="hidden md:block" />
        </div>
        <div className="my-20">
          <img src={portfolioMobile} alt="" className="md:hidden mx-auto" />
        </div>
        <div className="underline flex items-center gap-2 font-bold text-[#212121] justify-center">
          <p>Become A Service Incubator</p>
          <img src={arrowRight} alt="" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-20">
        <h2 className="font-medium text-[#212121] text-4xl md:text-6xl mb-4">
          Co-found With Us
        </h2>
        <p className="text-sm md:text-base text-[#4e4e4e] w-80 md:w-auto mx-auto md:mx-0">
          We seek to collaborate with visionary individuals who are solving
          similar problems of helping entrepreneurs succeed
        </p>
        <div className="my-10 text-start flex flex-col md:flex-row items-center gap-12">
          <div className="bg-white rounded-md p-8">
            <img src={one} alt="" className="w-10 h-10" />
            <div className="mt-8">
              <h3 className="my-5 text-[#212121] text-lg font-semibold">
                We Ideate
              </h3>
              <p className="text-base text-[#4e4e4e] w-96 md:w-80">
                We internally generate concepts and ideas that help solve
                problems in our thesis areas, after which we proceed to develop
                a nano/micro MVP (usually having as low as 30 functions to as
                high as 100 functions) of the product that we take to the
                market.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-8">
            <img src={two} alt="" className="w-10 h-10" />
            <div className="mt-8">
              <h3 className="my-5 text-[#212121] text-lg font-semibold">
                You Validate
              </h3>
              <p className="text-base text-[#4e4e4e] w-96">
                You join our 3 months inResidence program as a business expert
                to run the operations or as a technical expert to further the
                development and validate the idea with an average monthly
                revenue of $1k or 10,000 users and/or an MVP of at least 150
                functions
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-8">
            <img src={three} alt="" className="w-10 h-10" />
            <div className="mt-9">
              <h3 className="my-5 text-[#212121] text-lg font-semibold">
                You Co-own
              </h3>
              <p className="text-base text-[#4e4e4e] w-96 md:w-72">
                After successful validation and demo day at the end of the EIR
                program, we move those with perfect fit to become co-founders of
                the product they validated as CEO & CTO, each owning
                20% of the venture.
              </p>
            </div>
          </div>
        </div>
        <div className="underline flex items-center gap-2 font-bold text-[#212121] justify-center">
          <p>Build your dream</p>
          <img src={arrowRight} alt="" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-20">
        <h2 className="font-medium text-[#212121] text-4xl md:text-6xl mb-4 my-5">
          Join Our Entrepreneur In Residence <br /> (EIR) Program
        </h2>
        <p className="text-sm md:text-base text-[#4e4e4e] w-80 md:w-auto mx-auto md:mx-0">
          Our EIR program is our structured 3 months un-paid program designed to
          help us have a pipeline of business and <br /> technical cofounders
          who can run the venture of choice as CEO & CTO owning 20% equity each.
        </p>

        <div className="text-start flex items-center gap-4 my-10 justify-center md:justify-normal overflow-hidden">
          <div className="bg-white rounded-md p-8">
            <img src={application} alt="" className="w-16 h-16" />
            <div className="mt-8">
              <h3 className="my-5 text-[#212121] text-lg font-semibold">
                Application and Selection
              </h3>
              <p className="text-base text-[#4e4e4e] w-96 md:w-80">
                Begin your journey by completing our straightforward application
                form. Share insights into your entrepreneurial background,
                expertise, and your vision for supporting the success of our
                portfolio companies. <br /> Our dedicated selection committee,
                comprised of key stakeholders at SINC Partners, will carefully
                review your application.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-8 hidden md:block">
            <img src={alignment} alt="" className="w-16 h-16" />
            <div className="mt-8">
              <h3 className="my-5 text-[#212121] text-lg font-semibold">
                Alignment Meeting and Proposal Submission{" "}
              </h3>
              <p className="text-base text-[#4e4e4e] w-[22rem]">
                If your application stands out, we'll invite you to an alignment
                meeting. This is an opportunity to discuss the goals of our EIR
                program and explore how your expertise aligns with the needs of
                our portfolio companies. <br /> Following the alignment meeting,
                submit a formal proposal outlining your intended contributions
                and how you envision adding significant value to our portfolio
                companies.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-8 hidden md:block">
            <img src={negotiation} alt="" className="w-16 h-16" />
            <div className="mt-8">
              <h3 className="my-5 text-[#212121] text-lg font-semibold">
                Negotiation and Agreement
              </h3>
              <p className="text-base text-[#4e4e4e] w-[22rem]">
                Upon successful alignment and proposal review, we'll engage in
                discussions to finalize the terms of your EIR role. This
                includes the duration, expectations, and any compensation or
                equity arrangements. <br /> Once terms are agreed upon, we'll
                draft a formal agreement outlining the specifics of your EIR
                engagement, including reporting structures, responsibilities,
                and the support/resources provided by SINC Partners.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-8 hidden md:block">
            <img src={onboarding} alt="" className="w-16 h-16" />
            <div className="mt-8">
              <h3 className="my-5 text-[#212121] text-lg font-semibold">
                Onboarding and Integration
              </h3>
              <p className="text-base text-[#4e4e4e] w-80">
                Congratulations! As an accepted EIR, you'll undergo an
                onboarding process to familiarize yourself with the SINC
                Partners ecosystem, our portfolio companies, and key team
                members. Facilitated introductions will ensure a seamless
                integration between you and relevant portfolio companies,
                setting clear expectations for collaboration.
              </p>
            </div>
          </div>
        </div>
        <div className="underline flex items-center gap-2 font-bold text-[#212121] justify-center">
          <p>Support the Future</p>
          <img src={arrowRight} alt="" />
        </div>
        <div className="flex items-center gap-8 justify-center my-10">
          <img src={left} alt="" className="w-16 h-16" />
          <img src={right} alt="" className="w-16 h-16" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-20">
        <h2 className="font-medium text-[#212121] text-4xl md:text-6xl mb-4 my-5">
          SINC Investors Network
        </h2>
        <p className="text-sm md:text-base text-[#4e4e4e] my-5 w-96 md:w-auto mx-auto md:mx-0">
          Our deals are structured not just to take in investments but to
          onboard owners passionate about our solutions. Our <br /> portfolio
          companies are valued at $50k at start, with these low valuation, you
          are guaranteed at least 2x-5x, usually been <br /> the first to
          invest.
        </p>
        <p className="text-sm md:text-base mx-auto md:mx-0 w-80 md:w-auto">
          <span className="font-bold">Disclaimer:</span>
          These deal flows is a statement of our projections and may differ from
          stage to stage and from venture to <br /> venture and the guarantee is
          for deal 1, usually the first to invest{" "}
        </p>

        <div className="mt-10">
          <img src={network} alt="" className="hidden md:block" />
        </div>
        <div className="mt-10">
          <img src={networkMobile} alt="" className="md:hidden mx-auto" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-20">
        <h2 className="font-medium text-[#212121] text-4xl md:text-6xl mb-4 my-5">
          Equity Jobs
        </h2>
        <p className="text-sm md:text-base text-[#4e4e4e] my-5 w-80 md:w-auto mx-auto md:mx-0">
          See companies and startups offering equity or a mix of cash and equity
          for very important position in their company
        </p>
        <div className="my-10">
          <img src={equity} alt="" className="hidden md:block" />
        </div>
        <div className="my-10">
          <img src={equityMobile} alt="" className="md:hidden mx-auto" />
        </div>

        <div className="underline hidden md:flex items-center gap-2 font-bold text-[#212121] justify-center">
          <p>See More Equity Jobs</p>
          <img src={arrowRight} alt="" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-20">
        <h2 className="font-medium text-[#212121] text-4xl md:text-6xl mb-4 my-5">
          Blogs & Resources
        </h2>
        <div className="my-10">
          <img src={vids} alt="" className="hidden md:block" />
        </div>
        <div className="my-10">
          <img src={vidsMobile} alt="" className="md:hidden mx-auto" />
        </div>
        <div className="my-10">
          <img src={heads} alt="" className="hidden md:block" />
        </div>
        <div className="my-10">
          <img src={headsMobile} alt="" className="md:hidden mx-auto" />
        </div>
        <div className="underline flex items-center gap-2 font-bold text-[#212121] justify-center">
          <p>See More Blogs & Resources</p>
        </div>
      </section>

      <section className="hidden md:block">
        <h2 className="font-semibold text-[#212121] text-2xl mb-4 my-5">
          As Featured In
        </h2>

        <div className="my-10">
          <img src={featured} alt="" />
        </div>
      </section>

      <section className="my-20 hidden md:block">
        <h2 className="font-medium text-[#212121] text-7xl mb-4 my-5">
          Let's build companies that <br /> help everyone succeed
        </h2>

        <div className="flex gap-2 justify-center my-10">
          <button className="rounded-full border-black text-black border-2 px-6 py-3">
            SINC with us
          </button>
          <button className="text-white bg-[#303030] rounded-full px-6 py-3">
            Apply to SIP 1.0
          </button>
        </div>
      </section>

      <section>
        <img src={footerImg} alt="" className="mx-auto hidden md:block" />
        <img src={footerMobile} alt="" className="md:hidden mx-auto" />
      </section>
    </>
  );
}
