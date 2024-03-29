import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stat from "./components/Stat/Stat";
import Users from "./components/Users";
import Split from "./components/Split";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions/Questions";
import Try from "./components/Try";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import QuestionContent from "./components/Questions/QuestionContent";

export default function App() {
  return (
    <div >
      {/* NARBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* STAT */}
      <Stat />

      {/* PROJECT */}
      <Users />

      {/* TRIAL */}
      <Split />

      {/* PRICING */}
      <Pricing />

      {/* Question */}
      <Questions />
      <div className="max-w-screen-xl mx-auto my-auto">
        <div className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
          <QuestionContent
            name="How does website traffic affect my business?"
            content="Website traffic is the number of visitors to a website or webpage. It is usually measured in hits, unique visitors, page views."
          />
          <QuestionContent
            name="What are the advantages of using a free traffic service at the beginning?"
            content="For starters, it is free. It does not cost anything to use the service unlike other paid services that require you to pay."
          />
          <QuestionContent
            name="Which types of paid traffic services are available?"
            content="There are many different types of paid traffic services, such as pay-per-click advertising, social media ads, and email marketing."
          />
          <QuestionContent
            name="How do you generate traffic to a website?"
            content="Social media is a great place for businesses because it has the potential to reach millions of people, so we can help to you do that."
          />
          <QuestionContent
            name="How can Website traffic service help me?"
            content="There are many benefits to using a website traffic service. For example, they can help you get more targeted visitors to your site."
          />
          <QuestionContent
            name="Which are the best Website traffic service providers in the market?"
            content="There are a lot of Website traffic service providers in the market, but split is one of the best, and trusted websites in the market"
          />
            <QuestionContent
            name="How can Website traffic service help me?"
            content="There are many benefits to using a website traffic service. For example, they can help you get more targeted visitors to your site."
          />
          <QuestionContent
            name="How can Website traffic service help me?"
            content="There are many benefits to using a website traffic service. For example, they can help you get more targeted visitors to your site."
          />
        </div>
      </div> 
      <Try />
      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
