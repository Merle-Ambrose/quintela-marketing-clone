import React from "react";
import Article from "../../pages/Article/Article";

function HRDiverse() {
  return (
    <Article
      paragArr={META.paragArr}
      details={`by ${META.author} | ${META.date} | ${META.category}`}
      heading={META.heading}
    />
  );
}

export default HRDiverse;

export const META = {
  heading: "Part 1: How Diverse Are HR Vendor Executive Teams?",
  paragArr: [
    "There are 1000s of blogs/articles/white papers on diversity, equity, and inclusion (DEI), and the takeaway is always the same.  DEI is the right thing to do and even impacts the bottom line.  As a person of color (POC), I suppose I should be grateful that DEI is at the forefront. But to be honest, most of it feels like lip service.",
    "The conclusion is always the same too. The Executive Team and HR must command the entire organization to focus on DEI, especially hiring. Like most initiatives, if it doesn’t come from the top, it doesn’t go anywhere. Great intentions, but we’re seeing how difficult this is. But there is another influential group that companies rely on to achieve their DEI goals. HR tech vendors. So I started to wonder. Exactly how diverse are HR tech vendor Executive Teams?",
    "At first, I was curious and only looked at a few HR vendor Executive Teams. After seeing a pattern, I decided to look at 30 top US-based HR tech vendors. I’m an IO Psych, so I also included some IO companies. Take the numbers below with a grain of salt because I didn’t spend days on this or follow any scientific methodology. I used the eyeball test (e.g., Hispanic-looking last names) and focused mainly on POCs but counted gender as well. Of the 365 Executives, 4% are Black, 3% are Hispanic, and 12% are APAC. On the bright side-ish, 31% are Female Executives. Of course, this means that the overwhelming majority are middle-aged White Males. Yeah, I know the actual number of POCs is likely higher, but it wouldn’t matter even if that number doubled. I encourage you to do a quick eyeball test with a few vendors.",
    "Who cares?",
    "Hopefully, everyone agrees that these numbers are low. I know there isn’t anything shady going on at these HR tech companies. I genuinely believe it’s unintentional. After all, these companies are in Talent Management because they believe in the power of a company’s most valuable assets. Moreover, they are publishing and sponsoring the webinars, white papers, and articles that all say DEI is the right thing to do, and it does impact the bottom line. This is the dichotomy that I am struggling with. Can you be a leader/champion of DEI but fall short of the #1 rule that it must come from the top? Either way, it just feels like non-POCs telling POCs about DEI.",
    "I know this is a snapshot in time, and some probably have DEI initiatives. But here we are today. There does seem to be more DEI further down the organization because some of the content presenters are POC Directors/VPs. The bad thing is that this may be inadvertently sending the wrong message. You can be a VP but can’t be on the Executive Team. You may be thinking, “who would take it this way?” Your POC colleagues probably notice it.",
    "From an “only chip in the cookie” point of view, this dichotomy smacks you right in the face. When flipping through websites, I noticed that every company has a dedicated DEI section placed prominently on their website and has a product/service that identifies and increases diversity. Some even have a picture of POCs right above their Executive Team, composed mainly of White Males. Holy smokes. To a POC, it is a stark contrast.",
    "I am obsessed now. When I see an HR tech talking about AI in hiring, I look at their Executive Team. The question now is Part 2 – Why Aren’t HR Vendor Executive Teams Diverse?",
  ],
  desc: "There are 1000s of blogs/articles/white papers on diversity, equity, and inclusion (DEI), and the takeaway is always the same.  DEI is the right thing to do and even impacts the bottom line.  As a person of color (POC), I suppose I should be grateful that DEI is at...",
  img: "./img/articles/cookie.png",
  alt: "Article thumbnail about HR vendor executive team diversity",
  author: "Joel Quintela",
  date: "Jun 21, 2022",
  category: "Diversity, Equity, and Inclusion",
  url: "/articles/how-diverse-are-hr-vendor-executive-teams",
};
