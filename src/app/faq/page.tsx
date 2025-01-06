import React from 'react'

export default function FAQ() {
  const faqs = [
    {
      question: "What kind of content do you create?",
      answer: "I create gaming content focused on tutorials, gameplay walkthroughs, and gaming tips & tricks. My content is designed to help gamers improve their skills and enjoy their gaming experience."
    },
    {
      question: "How often do you upload new videos?",
      answer: "I aim to upload new content 2-3 times per week, typically on Monday, Wednesday, and Friday. Special events or game releases might lead to additional content."
    },
    {
      question: "Can I request specific game content?",
      answer: "Yes! I welcome game suggestions from my community. You can leave your requests in the YouTube comments or reach out through my social media channels."
    },
    {
      question: "Do you do live streams?",
      answer: "Yes, I regularly stream on YouTube. Check my community tab for stream schedules and updates."
    },
    {
      question: "How can I support your channel?",
      answer: "The best ways to support the channel are by subscribing, liking videos, leaving comments, and sharing content with other gamers. You can also join my channel membership for exclusive perks!"
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        Frequently Asked Questions
      </h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-white mb-3">
              {faq.question}
            </h2>
            <p className="text-gray-300">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
