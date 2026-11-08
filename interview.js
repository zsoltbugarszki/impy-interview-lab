// Interview lab content. Alicia's 16 transcript lines (roles.js, id "dropout") are indices 0..15.
// Questions are deliberately similar in length and wording so the good one is not obvious.
window.IMPY_INTERVIEW = {
 "roleId": "dropout",
 "maxQuestions": 5,
 "rounds": [
  {
   "id": "first-day",
   "prompt": "Alicia tried the gym in January. Where do you start?",
   "options": [
    {
     "kind": "closed",
     "q": "Would you say your gym experience was a good one?",
     "a": "It was okay, I guess.",
     "unlock": [],
     "mood": "yawn",
     "tip": "Ha, that was a yes/no question in a nice coat. Alicia gave you a verdict and moved on, and you can't build anything from \"it was okay\". Next time ask for what happened instead of what she thinks about it."
    },
    {
     "kind": "fact",
     "q": "How did you first hear about the gym on campus?",
     "a": "My friend sent me the link.",
     "unlock": [],
     "mood": "yawn",
     "tip": "A fact is quick to answer and quick to forget. \"My friend sent me the link\" tells you nothing about how she felt. The good stuff hides in stories, so ask for those."
    },
    {
     "kind": "narrow",
     "q": "What was the hardest part about getting started there?",
     "a": "Mm, I felt a bit lost. I didn't know how to use any of the machines.",
     "unlock": [
      2
     ],
     "mood": "nod",
     "tip": "Not bad at all! But you asked about one thing, the hard part, and she gave you exactly that one thing. It is a fine question, just not the best one: it points her at a single topic. A wider question lets her pick what matters to her."
    },
    {
     "kind": "open",
     "q": "What was it like the first time you walked in?",
     "a": null,
     "unlock": [
      0,
      1,
      2,
      3
     ],
     "mood": "happy",
     "tip": "Yes! \"What was it like...\" lets Alicia choose what to tell you, and she gave you a whole scene: friends, machines, feeling lost. When you ask wide, she does the work for you. It is much easier to pick things out of a long answer than to invent them later."
    }
   ]
  },
  {
   "id": "place-and-people",
   "prompt": "She mentioned her friends and the machines. Where next?",
   "options": [
    {
     "kind": "closed",
     "q": "Was it easier to go when your friends were there?",
     "a": "Yeah, a bit.",
     "unlock": [],
     "mood": "yawn",
     "tip": "One short answer again. \"Yeah, a bit\" is polite, but it gives you nothing to work with. Questions that start with \"was\" or \"is\" almost always get this."
    },
    {
     "kind": "fact",
     "q": "How long did your friends keep going with you?",
     "a": "Two weeks, maybe.",
     "unlock": [],
     "mood": "yawn",
     "tip": "A number is not a feeling. You now know it was two weeks, but you still have no idea why it stopped. Where is the story?"
    },
    {
     "kind": "narrow",
     "q": "How did you feel while you were in the gym?",
     "a": "Kind of judged, like everyone could see me.",
     "unlock": [
      6
     ],
     "mood": "nod",
     "tip": "A feeling question is a good instinct, and she gave you a real Thorn. But it asks about one moment in one place. Ask her what changed, and she tells you the before, the after and everything in between."
    },
    {
     "kind": "open",
     "q": "What changed for you once your friends stopped coming along?",
     "a": null,
     "unlock": [
      4,
      6,
      7
     ],
     "mood": "happy",
     "tip": "Nice one! \"What changed...\" invites a before and after, and Alicia fills in the feelings and the thoughts herself. That is how you collect Roses, Thorns and Buds without asking for them."
    }
   ]
  },
  {
   "id": "moving",
   "prompt": "You have a feeling there are good and bad moments with exercise. How do you find them?",
   "options": [
    {
     "kind": "closed",
     "q": "Is there any sport you enjoy more than others?",
     "a": "Not really.",
     "unlock": [],
     "mood": "yawn",
     "tip": "Sneaky, right? It sounds friendly but it is still a yes/no question wearing a nice sentence. \"Not really\" and we are stuck again."
    },
    {
     "kind": "fact",
     "q": "Which sports did you have to do in school?",
     "a": "Just PE. The normal stuff.",
     "unlock": [],
     "mood": "yawn",
     "tip": "Lists of sports are not lists of experiences. You learned she did PE, and you still know nothing about how it felt."
    },
    {
     "kind": "narrow",
     "q": "What kind of movement do you actually enjoy doing?",
     "a": "Dancing, I guess. With my cousins.",
     "unlock": [
      5
     ],
     "mood": "nod",
     "tip": "Good start, you got a Rose! But you only asked about the good side, so you only got the good side. Remember the Thorns are hiding on the other side of the coin."
    },
    {
     "kind": "open",
     "q": "Think of a time moving felt really good or bad. What happened?",
     "a": null,
     "unlock": [
      5,
      10
     ],
     "mood": "happy",
     "tip": "Great pick! Asking for both a good and a bad moment gets you a Rose and a Thorn from one single question, and real stories to go with them. Two sides in one question is a nice trick."
    }
   ]
  },
  {
   "id": "at-home",
   "prompt": "The gym is only one part of her day. How do you find out what else is going on?",
   "options": [
    {
     "kind": "closed",
     "q": "Do you usually have a lot going on after school?",
     "a": "Yeah, quite.",
     "unlock": [],
     "mood": "yawn",
     "tip": "Of course she is busy, so you learned nothing new. A \"do you...\" question just checks something you already guessed."
    },
    {
     "kind": "fact",
     "q": "What time do you usually get home from school?",
     "a": "Around 5, depending on the day.",
     "unlock": [],
     "mood": "yawn",
     "tip": "A timetable tells you when, not why. It is easy to answer, but it will not give you anything for your Rose, Thorn, Bud notes."
    },
    {
     "kind": "narrow",
     "q": "What happens at home when you think about the gym?",
     "a": "I scroll workout videos at night and feel super motivated, but the next day nothing changes.",
     "unlock": [
      11
     ],
     "mood": "nod",
     "tip": "Good choice, and a real feeling came out. But it only unlocks one small thing: what happens at home on one specific moment. The week is wider, and wider is better."
    },
    {
     "kind": "open",
     "q": "What does a normal week look like for you?",
     "a": null,
     "unlock": [
      8,
      9,
      11
     ],
     "mood": "happy",
     "tip": "Excellent! A whole week is a lot of ground, so Alicia has plenty to choose from: tiredness, homework, guilt, late night videos. That is why this one gets you the most. Wide questions give people room to talk."
    }
   ]
  },
  {
   "id": "wish",
   "prompt": "Last question. You want ideas for what might work for her.",
   "options": [
    {
     "kind": "closed",
     "q": "Do you think you will ever go back to the gym?",
     "a": "Maybe.",
     "unlock": [],
     "mood": "yawn",
     "tip": "\"Maybe\" is a dead end. You cannot build a How Might We from it, and you have spent your last question."
    },
    {
     "kind": "fact",
     "q": "How much did the membership end up costing you?",
     "a": "I'm not sure. My parents paid.",
     "unlock": [],
     "mood": "yawn",
     "tip": "A price is a fact, not a need. She does not even know it, because her parents paid. Not much to work with here."
    },
    {
     "kind": "narrow",
     "q": "What would it take for you to go back?",
     "a": "Honestly, I'd go if someone just walked me through the first visit.",
     "unlock": [
      14
     ],
     "mood": "nod",
     "tip": "Good, and she gave you a usable idea. But you got one idea. If you ask her to describe what she wants, she will give you the whole picture, and you get more Buds."
    },
    {
     "kind": "open",
     "q": "What would the perfect place to exercise look like for you?",
     "a": null,
     "unlock": [
      12,
      13,
      14,
      15
     ],
     "mood": "happy",
     "tip": "Perfect finish! Letting her describe her ideal place, in her own words, is where your Buds come from. This is the kind of question that helps your How Might We later."
    }
   ]
  }
 ],
 "moodShort": {
  "closed": "Hmm.",
  "fact": "Hmm, okay.",
  "narrow": "Getting warmer!",
  "open": "Now we're talking!"
 }
};
