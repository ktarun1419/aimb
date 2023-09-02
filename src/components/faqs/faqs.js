import React, { useState } from "react";
import { useImmer } from "use-immer";
import './faqs.css'
const Faqs = () => {
  const [openquestion,setOpenQuestion]=useState(0)
  const [questions, setQuestions] = useImmer([
    {
      question: "What are the specific ways in which CiccaDefi is using decentralization and innovation to create a new kind of financial system?",
      answer: "The cryptocurrency and blockchain landscape is awash with projects. Each promises something unique, but few manage to truly captivate and deliver on their promises. Enter CiccaDefi — a holistic amalgamation of groundbreaking features and visionary aspirations.",
      active: true,
    },
    {
      question: "What are the potential profits that can be earned from CiccaDefi Staking?",
      answer: "Holding tokens shouldn't be a passive act. Recognizing this, CiccaDefi 's proprietary staking dApp revolutionizes token holding. Users are incentivized not just with attractive rewards, but they also play an essential role in fortifying the network's security and integrity. It's a system where every stakeholder, from the smallest to the most significant token holder, contributes to and benefits from the project's success.",
      active: false,
    },
    {
      question: "What are your hopes and concerns about the CiccaDefi metaverse?",
      answer: "If the internet was humanity's first step into the digital realm, the metaverse is a giant leap. CiccaDefi digital universe, brimming with endless possibilities, beckons users to immerse themselves. Within this vast expanse, every action, whether it's trading, socializing, or exploring, carries profound significance. It's a realm where virtual experiences have tangible real-world implications.      ",
      active: false,
    },
    {
      question: "What are the benefits of using CiccaDefi's Swap Bridge?",
      answer: "In a fragmented crypto landscape, the ability to fluidly move assets across blockchains is invaluable. CiccaDefi 's Swap Bridge is not just a feature but a lifeline for those entrenched in the crypto world. With a focus on security, speed, and simplicity, the Swap Bridge ensures users can effortlessly maximize their assets' potential, regardless of the blockchain",
      active: false,
    },
    {
      question: "What is CiccaDefi`s Play-to-earn model?",
      answer: "Gone are the days when gaming was solely a pastime. CiccaDefi infuses gaming with purpose, integrating a play-to-earn model that rewards players for their skills, strategies, and time. Every challenge overcome, every milestone reached, translates to real-world rewards, making gaming not just entertaining but also profitable",
      active: false,
    },
    {
      question: "Why CiccaDefi Stands Out?",
      answer: "Beyond its feature-rich platform, CiccaDefi's ethos sets it apart. At its core, it prioritizes community, transparency, and innovation. Every feature is meticulously crafted, every update community-driven, ensuring that the project remains agile, relevant, and ahead of the curve.Moreover, the synergy between CiccaDefi 's offerings is undeniable. Each component, while powerful individually, collectively creates an ecosystem where the whole is genuinely greater than the sum of its parts. Whether you're a gamer, trader, tech enthusiast, or someone simply curious about the future of the internet, CiccaDefi has something for everyone.",
      active: false,
    },
    {
      question: "What are CiccaDefi`s futute goals??",
      answer: "The journey for CiccaDefi is just beginning. With a clear roadmap, dedicated team, and a vibrant community, it's poised to not only shape but define the future of decentralized applications. As blockchain technology continues to permeate mainstream consciousness, CiccaDefi stands ready to guide newcomers and veterans alike through the exciting possibilities that lie ahead.To truly grasp the magnitude of what CiccaDefi offers, one must experience it firsthand. Dive deep, explore, and engage. A universe of innovation, opportunities, and community awaits.",
      active: false,
    },
  ]);
  const handleAccord=(index, value)=>{
    // setQuestions((state)=>{
    //     state[index].active=value
    // })
    if (openquestion===index) {
      setOpenQuestion(null)
    }else{
      setOpenQuestion(index)
    }
  }
  return (
    <div className="faq">
      {/* <h2>
        Roadmap
      </h2> */}
      {Array.isArray(questions) &&
        questions.map((item, _idx) => (
          <div className="each_faq">
            <div className="question" onClick={()=>handleAccord(_idx, !item?.active)}>
              <p>{item?.question}</p>
              <div className="icon">{openquestion===_idx ? "-" : "+"}</div>
            </div>
            {openquestion===_idx && <div className="answer">{item?.answer}</div>}
          </div>
        ))}
    </div>
  );
};

export default Faqs;
