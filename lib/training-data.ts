/* ================================================================== */
/*  TRAINING HUB — Mock Data                                          */
/*  Standalone training portal                                         */
/* ================================================================== */

export interface TrainingCourse {
  id: string;
  number: number;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  sections: CourseSection[];
  quiz: QuizQuestion[];
}

export interface CourseSection {
  title: string;
  content: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/* ================================================================== */
/*  COURSES                                                            */
/* ================================================================== */

export const TRAINING_COURSES: TrainingCourse[] = [
  /* ---- Course 1 -------------------------------------------------- */
  {
    id: "course-1",
    number: 1,
    title: "Introduction to iAutoSale",
    description:
      "Understand the problem iAutoSale solves, how the consignment model works, the seven-stage process, and why this matters for your role as a sales rep.",
    videoUrl: "/training/course-1-welcome.mp4",
    duration: "18:32",
    sections: [
      {
        title: "The Problem iAutoSale Solves",
        content:
          "Every year millions of UK car sellers end up with less money than their vehicle is worth. The three traditional routes \u2014 dealer part-exchange, instant-buy services, and private sale \u2014 each sacrifice either value or convenience. Dealers offer wholesale prices, instant-buy services like We Buy Any Car pay below retail for speed, and private sales take six to eight weeks of viewings, negotiations, and paperwork. iAutoSale fills the gap: private sellers want retail value without the hassle, and that is exactly what we deliver. The seller who accepts an instant-buy offer is making a rational trade-off between speed and money \u2014 iAutoSale removes that trade-off entirely.",
      },
      {
        title: "What iAutoSale Is",
        content:
          "iAutoSale is a vehicle consignment platform. The seller does not sell their car to us \u2014 they remain the owner until a buyer is found and the deal completes. We act as the seller\u2019s agent, listing, marketing, and selling the vehicle on their behalf. The seller pays no fee, no listing charge, and no commission. They receive the full retail sale price. iAutoSale earns revenue exclusively from buyer finance arrangements on the other side of the transaction. This model aligns our commercial interests with the seller\u2019s: the more vehicles we sell at the best price, the more the business earns.",
      },
      {
        title: "The iAutoSale Process",
        content:
          "Every consignment follows a consistent seven-stage process. (1) Offer accepted \u2014 the seller signs a digital consignment agreement. (2) Vehicle collected \u2014 professional collection from the seller\u2019s door. (3) Inspected \u2014 full inspection and HPI check on arrival at our lot. (4) Reconditioned \u2014 any work needed is completed by approved vendors, all costs pre-authorised with the seller. (5) Listed for sale \u2014 the vehicle goes live on AutoTrader, the iAutoSale storefront, and partner channels with 32+ professional photos and a 360-degree viewer. (6) Sale agreed \u2014 iAutoSale handles all buyer interactions. (7) Seller paid \u2014 full proceeds via Faster Payments within 48 hours. Sellers track every stage in real time through a personal seller portal.",
      },
      {
        title: "Why This Matters for Your Role",
        content:
          "The sellers you will call have already decided to sell \u2014 they listed on AutoTrader. They have signalled intent. You are not creating demand; you are offering a better route to people who are actively looking. Your job is to understand the iAutoSale proposition deeply enough to explain it confidently on every call. Product knowledge, process discipline, and resilience are the three traits shared by every top performer in this team. Master the content in this course and you will have the foundation for everything that follows.",
      },
    ],
    quiz: [
      {
        id: "c1-q1",
        question:
          "What is the main problem iAutoSale solves for private car sellers?",
        options: [
          "Helping sellers find the cheapest insurance for their vehicle",
          "Providing sellers with retail-level proceeds without the hassle of a private sale",
          "Offering sellers a fast cash purchase below market value",
          "Connecting sellers directly with dealerships for part-exchange",
        ],
        correctIndex: 1,
        explanation:
          "iAutoSale\u2019s core proposition is delivering retail-level proceeds with zero effort from the seller. Sellers want retail value but not the burden of managing a private sale \u2014 iAutoSale removes that trade-off.",
      },
      {
        id: "c1-q2",
        question: "How does iAutoSale earn its revenue?",
        options: [
          "A flat listing fee charged to the seller",
          "A percentage commission deducted from the sale price",
          "Through buyer finance arrangements on completed transactions",
          "Monthly subscription fees from sellers",
        ],
        correctIndex: 2,
        explanation:
          "iAutoSale earns exclusively from buyer finance arrangements. The seller pays no fee, no commission, and no deductions of any kind. This aligns the company\u2019s incentive with the seller\u2019s \u2014 sell the vehicle at the best price, as quickly as possible.",
      },
      {
        id: "c1-q3",
        question: "What does \u2018consignment\u2019 mean in the iAutoSale model?",
        options: [
          "iAutoSale purchases the vehicle outright from the seller",
          "The seller remains the owner while iAutoSale sells on their behalf",
          "The vehicle is sold at auction to the highest bidder",
          "The seller leases the vehicle to iAutoSale temporarily",
        ],
        correctIndex: 1,
        explanation:
          "Consignment means the seller retains ownership of the vehicle. iAutoSale acts as the seller\u2019s agent \u2014 listing, marketing, and selling the car on their behalf. The seller is not selling to iAutoSale.",
      },
      {
        id: "c1-q4",
        question:
          "How long after a deal closes does the seller receive payment?",
        options: [
          "Within 7 days by cheque",
          "Within 48 hours via Faster Payments",
          "Within 30 days by bank transfer",
          "Immediately upon sale agreement",
        ],
        correctIndex: 1,
        explanation:
          "Once the deal completes, the full sale proceeds are transferred to the seller via Faster Payments within 48 hours. This is a key number you must know without hesitation.",
      },
      {
        id: "c1-q5",
        question:
          "What is the target time from vehicle collection to live listing?",
        options: [
          "Under 48 hours",
          "Under 14 days",
          "Under 7 days",
          "Under 30 days",
        ],
        correctIndex: 2,
        explanation:
          "The target is under 7 days from collection to the vehicle going live on AutoTrader. This includes inspection, reconditioning, professional photography, and listing preparation.",
      },
    ],
  },

  /* ---- Course 2 -------------------------------------------------- */
  {
    id: "course-2",
    number: 2,
    title: "Scope of Your Role",
    description:
      "Learn exactly what your role covers as a sales rep \u2014 from lead management to signed agreements \u2014 and how you are measured day-to-day.",
    videoUrl: "/training/course-2-scope.mp4",
    duration: "14:17",
    sections: [
      {
        title: "Your Role Defined",
        content:
          "Your single output is signed consignment agreements. You own the full sales cycle from first contact to signed agreement: initial outreach, follow-up, presenting the proposition, handling objections, walking sellers through the consignment agreement, and securing the signature. Once the agreement is signed, the operations team takes over \u2014 collection, inspection, reconditioning, listing, buyer management, and payout. You do not manage post-signing stages and should not represent yourself as responsible for them. A signed agreement is an unambiguous, measurable result.",
      },
      {
        title: "Your Working Environment",
        content:
          "The sales team works fully remotely. You need a quiet, professional environment during calling hours, a reliable internet connection, a quality headset, and the CRM open and updated throughout the day. Your leads are pre-loaded into the iAutoSale CRM \u2014 each record contains the seller\u2019s name, contact details, vehicle details, asking price, and AutoTrader listing URL. CRM discipline is non-negotiable: every call outcome logged immediately, every callback booked to a specific time, every objection noted. A half-updated CRM is a half-managed pipeline.",
      },
      {
        title: "A Typical Working Day",
        content:
          "Start of day: log into the CRM, review your lead queue, check callbacks from the previous day, and prioritise your dial order \u2014 callbacks first, then fresh leads. First calling block: work through leads methodically. Mid-morning review: update CRM notes, flag leads for follow-up. Second calling block: continue dialling \u2014 mid-afternoon is often the most productive connect time, so protect it. End of day: CRM fully updated, all calls logged, all callbacks booked, daily numbers submitted. Calling blocks are protected time; admin stays at the edges.",
      },
      {
        title: "How You Are Measured",
        content:
          "Two metrics matter: call volume (input) and conversions (output). Volume tracks dials, connects, and talk time \u2014 it is the discipline metric you can always control. Conversions track signed consignment agreements \u2014 your conversion rate develops over time. Volume is tracked daily; conversions weekly. The highest performers share three traits: product confidence, process discipline, and resilience. Cold outbound has a high rejection rate by nature \u2014 the reps who succeed respond with consistency, not discouragement.",
      },
    ],
    quiz: [
      {
        id: "c2-q1",
        question:
          "At what point does a sales rep\u2019s responsibility on a deal end?",
        options: [
          "After the first phone call with the seller",
          "When the seller verbally agrees to consign",
          "Once the consignment agreement is signed",
          "When the vehicle is collected from the seller",
        ],
        correctIndex: 2,
        explanation:
          "Your responsibility ends when the consignment agreement is signed. At that point, the operations team takes over for collection, inspection, reconditioning, listing, buyer management, and payout. The signed agreement is the defined handover point.",
      },
      {
        id: "c2-q2",
        question:
          "Which of the following is NOT part of a sales rep\u2019s responsibilities?",
        options: [
          "Outbound calling to private sellers",
          "Walking sellers through the consignment agreement",
          "Managing buyer test drives and viewings",
          "Logging every call outcome in the CRM",
        ],
        correctIndex: 2,
        explanation:
          "Buyer management \u2014 including test drives, viewings, and finance \u2014 is handled by the operations team after the consignment agreement is signed. Sales reps own the seller side only: lead identification, calling, proposition, objection handling, and securing the signed agreement.",
      },
      {
        id: "c2-q3",
        question: "Why is CRM discipline described as non-negotiable?",
        options: [
          "Because the CRM automatically generates seller contracts",
          "Because a half-updated CRM is a half-managed pipeline that costs you deals",
          "Because managers cannot see your daily activity otherwise",
          "Because the CRM sends automated messages to sellers",
        ],
        correctIndex: 1,
        explanation:
          "A half-updated CRM means missed callbacks, lost follow-ups, and incomplete pipeline visibility. Your pipeline is only as accurate as your notes. Every call outcome must be logged immediately, not at the end of the day.",
      },
      {
        id: "c2-q4",
        question: "What are the two metrics sales reps are measured on?",
        options: [
          "Customer satisfaction scores and call duration",
          "Call volume and conversions (signed agreements)",
          "Number of emails sent and meetings booked",
          "Lead response time and CRM completeness",
        ],
        correctIndex: 1,
        explanation:
          "Call volume is the input metric (dials, connects, talk time) tracked daily. Conversions \u2014 signed consignment agreements \u2014 are the output metric tracked weekly. Neither alone tells the full story; both matter.",
      },
      {
        id: "c2-q5",
        question:
          "What should a sales rep prioritise at the start of each working day?",
        options: [
          "Reading industry news and market updates",
          "Sending emails to all leads in the pipeline",
          "Callbacks from the previous day, then fresh leads",
          "Updating their personal sales spreadsheet",
        ],
        correctIndex: 2,
        explanation:
          "Start each day by reviewing your lead queue and checking callbacks from the previous day. Callbacks are prioritised first because these are warm leads expecting your call at a specific time. Fresh leads follow after.",
      },
    ],
  },

  /* ---- Course 3 -------------------------------------------------- */
  {
    id: "course-3",
    number: 3,
    title: "Product & Service Knowledge",
    description:
      "Deep-dive into the iAutoSale proposition, the five things we do, the numbers you must know, and how to answer common seller questions with confidence.",
    videoUrl: "/training/course-3-product.mp4",
    duration: "22:45",
    sections: [
      {
        title: "The Core Proposition",
        content:
          "The iAutoSale proposition has four components: (1) Full retail market price \u2014 not trade or wholesale value. (2) We handle everything \u2014 the seller does nothing after signing. (3) Full sale price to the seller \u2014 no fee, no commission, no deductions. (4) iAutoSale earns from buyer finance \u2014 the model is sustainable without charging the seller. Product knowledge is what separates a confident professional from someone reading a script. When you genuinely understand the proposition, sellers can hear it immediately.",
      },
      {
        title: "The Five Things iAutoSale Does",
        content:
          "Five things happen when a seller consigns that they cannot replicate on their own. (1) Retail pricing \u2014 listing prices set from live AutoTrader comparables, Glass\u2019s Guide, and real-time demand data, agreed with the seller before going live. (2) Professional presentation \u2014 minimum 32 professional photos, 360-degree spin viewer, and video walkaround. (3) Maximum reach \u2014 listed on AutoTrader, iAutoSale storefront, and partner channels simultaneously. (4) Full buyer management \u2014 every enquiry, viewing, test drive, negotiation, and piece of paperwork handled. (5) Fast, transparent payout \u2014 full proceeds via Faster Payments within 48 hours, trackable in the seller portal.",
      },
      {
        title: "The Numbers You Must Know",
        content:
          "Five numbers you need without hesitation: \u00a30 \u2014 cost to the seller, no fee, no commission, no deductions. Full retail price \u2014 what the seller receives, not wholesale or trade value. 7 days \u2014 target time from collection to live listing. 48 hours \u2014 target payout time after deal close via Faster Payments. Under 45 days \u2014 target average time on lot before sale (varies by vehicle). The \u00a30 figure is often the most powerful moment on a call \u2014 sellers expect a catch, and there is none. State it plainly and let it land.",
      },
      {
        title: "The Seven Stages in Detail",
        content:
          "Each stage has specific detail you must know. Stage 1 (Offer accepted): consignment agreement states vehicle details, listing price, zero fees, and the seller\u2019s right to withdraw. Stage 2 (Collected): professional transport from the seller\u2019s address. Stage 3 (Inspected): full inspection and HPI check \u2014 outstanding finance must be discharged before listing. Stage 4 (Reconditioned): all costs pre-authorised and itemised, no impact on seller\u2019s net proceeds. Stage 5 (Listed): AI-driven pricing engine monitors the market, no change without seller knowledge. Stage 6 (Sale agreed): iAutoSale manages identity, docs, finance, and a buyer return window. Stage 7 (Paid): full proceeds within 48 hours, confirmed through the portal.",
      },
      {
        title: "Common Seller Questions",
        content:
          "Key questions and how to answer them: \"Why not sell privately?\" \u2014 average private sale takes 6-8 weeks with viewings and negotiations; with iAutoSale you do none of that and still get full retail price. \"What if it doesn\u2019t sell?\" \u2014 you owe nothing, no fees of any kind, vehicle returned on request. \"How is the price decided?\" \u2014 live AutoTrader comparables, Glass\u2019s Guide, and demand data, agreed with you before listing. \"Outstanding finance?\" \u2014 HPI check at intake, payoff coordinated directly with your lender from sale proceeds. \"How long to sell?\" \u2014 target under 45 days, popular models often much faster. If you do not know an answer, say so and follow up the same day.",
      },
    ],
    quiz: [
      {
        id: "c3-q1",
        question:
          "How many professional photographs does each iAutoSale vehicle receive as a minimum?",
        options: ["16", "24", "32", "48"],
        correctIndex: 2,
        explanation:
          "Every vehicle receives a minimum of 32 professional photographs with studio-quality backgrounds, plus a 360-degree exterior spin viewer and a video walkaround. This is a key differentiator from private sale listings.",
      },
      {
        id: "c3-q2",
        question: "What happens if a vehicle does not sell?",
        options: [
          "The seller pays a monthly storage fee",
          "The seller owes nothing \u2014 no fees of any kind",
          "iAutoSale charges a relisting fee",
          "The vehicle is sent to auction automatically",
        ],
        correctIndex: 1,
        explanation:
          "If the vehicle does not sell, the seller owes nothing \u2014 no listing fee, no admin charge, no cost of any kind. The vehicle can be returned on request. iAutoSale only earns when a buyer is successfully matched and financed.",
      },
      {
        id: "c3-q3",
        question:
          "What is the target average time on lot before a vehicle sells?",
        options: [
          "Under 14 days",
          "Under 30 days",
          "Under 45 days",
          "Under 60 days",
        ],
        correctIndex: 2,
        explanation:
          "The target is under 45 days from listing to sale agreed, though this varies by make, model, and market conditions. Popular models like SUVs and family cars often sell significantly faster.",
      },
      {
        id: "c3-q4",
        question:
          "What must happen before any reconditioning costs are incurred?",
        options: [
          "The vehicle must be listed for sale first",
          "The buyer must agree to pay the costs",
          "Every item must be pre-authorised by the seller",
          "The costs must be under a fixed threshold",
        ],
        correctIndex: 2,
        explanation:
          "Every reconditioning item is pre-authorised with the seller before work begins. The seller receives an itemised cost summary. Nothing is spent without their explicit agreement, and reconditioning costs do not affect their net proceeds.",
      },
      {
        id: "c3-q5",
        question:
          "Which data sources are used to set the listing price for a vehicle?",
        options: [
          "The seller\u2019s asking price on AutoTrader only",
          "AutoTrader comparables, Glass\u2019s Guide, and real-time demand signals",
          "A fixed percentage above the dealer trade-in value",
          "The original purchase price minus depreciation",
        ],
        correctIndex: 1,
        explanation:
          "Listing prices are set using live AutoTrader comparables for identical vehicles in the area, Glass\u2019s Guide valuations, and real-time demand signals for the specific make, model, and trim. The price is agreed with the seller before going live.",
      },
    ],
  },

  /* ---- Course 4 -------------------------------------------------- */
  {
    id: "course-4",
    number: 4,
    title: "Cold Calling",
    description:
      "Master the right mindset, the five-part call structure, the word-for-word opener, and how to handle the four most common first responses.",
    videoUrl: "/training/course-4-cold-calling.mp4",
    duration: "20:08",
    sections: [
      {
        title: "The Right Mindset",
        content:
          "The way you think about a cold call is the single biggest determinant of how you sound on one. Most reps frame it as an imposition \u2014 that creates apologetic energy sellers hear immediately. The correct frame: you are not selling, you are informing. The seller has already decided to sell their car (they listed it on AutoTrader). You are offering a better way to do something they are already doing. Rejection is structural in outbound sales \u2014 most calls will not convert, and that is true at every level. Process rejection quickly, adjust if needed, and dial again without carrying the weight of the previous call.",
      },
      {
        title: "The Call Structure",
        content:
          "Every effective cold call follows five parts. (1) Open \u2014 under 20 seconds: introduce yourself, confirm the right person, give a reason to stay, ask for two minutes. (2) Bridge \u2014 1-2 sentences: reference their specific vehicle listing to signal relevance. (3) Proposition \u2014 2-3 sentences: state what iAutoSale does and what it means for the seller simply. (4) Question \u2014 one open question, then silence: let the seller respond fully without filling the gap. (5) Handle and advance \u2014 respond to what they said, move toward the next step (not the close). The proposition comes third deliberately \u2014 the open and bridge earn you the right to be heard.",
      },
      {
        title: "The Opener: Word for Word",
        content:
          "The iAutoSale opener: \"Hi \u2014 is that [SELLER NAME]?\" \u2192 \"My name is [YOUR NAME], I\u2019m calling from iAutoSale.\" \u2192 \"I won\u2019t take up much of your time \u2014\" \u2192 \"I can see you\u2019ve got your [YEAR] [MAKE] [MODEL] listed on AutoTrader,\" \u2192 \"and I wanted to have a quick conversation about an alternative route that might get you a better result.\" \u2192 \"Have you got two minutes?\" Each line works for a reason: confirming the right person, acknowledging their time, referencing their specific vehicle (not a generic pitch), using \"might\" to create curiosity without a hard promise, and asking permission. The whole opener takes under 20 seconds delivered naturally.",
      },
      {
        title: "Handling the First Responses",
        content:
          "Four things happen after the opener. (1) \"Yeah, go on\" \u2014 move into the proposition immediately, keep it to three sentences, then ask an open question like \"have you had any offers yet?\" (2) \"I\u2019m not interested\" \u2014 do not argue; acknowledge it and ask: \"is that because you\u2019ve already decided on a route, or is it more that you haven\u2019t heard what we do yet?\" (3) \"I\u2019ve got a buyer lined up\" \u2014 acknowledge positively, then ask: \"is that fully agreed or still at negotiation stage?\" (4) \"How did you get my number?\" \u2014 answer honestly: \"from your AutoTrader listing \u2014 it\u2019s a public ad.\" Each response is practised, calm, and keeps the door open without pressuring the seller.",
      },
    ],
    quiz: [
      {
        id: "c4-q1",
        question:
          "What is the correct mindset frame for an iAutoSale cold call?",
        options: [
          "You are persuading someone to do something they had not considered",
          "You are informing someone who has already decided to sell about a better route",
          "You are offering a discount on a service to create urgency",
          "You are following up on a referral from another seller",
        ],
        correctIndex: 1,
        explanation:
          "The sellers have already listed their vehicle on AutoTrader \u2014 they have decided to sell. You are not creating demand. You are informing them about a better way to do something they are already doing. This frame eliminates apologetic energy.",
      },
      {
        id: "c4-q2",
        question: "Why does the proposition come third in the call structure?",
        options: [
          "Because sellers need time to relax before hearing a pitch",
          "Because the open and bridge earn you the right to be heard first",
          "Because it is less important than the question stage",
          "Because company policy requires a minimum call duration",
        ],
        correctIndex: 1,
        explanation:
          "The open and bridge earn you the right to be heard. Most cold callers jump straight to the pitch and wonder why people hang up. If you have not given the seller a reason to stay on the call, they will not hear the proposition.",
      },
      {
        id: "c4-q3",
        question:
          "In the opener, why is the word \u2018might\u2019 used in \u2018might get you a better result\u2019?",
        options: [
          "Because iAutoSale cannot guarantee better results than other routes",
          "It creates curiosity without making a hard promise, avoiding a pushy tone",
          "It is a legal requirement to avoid making guarantees",
          "It makes the call sound less rehearsed and more casual",
        ],
        correctIndex: 1,
        explanation:
          "\"Might\" is deliberate \u2014 it creates curiosity without a hard pitch. You are not making a promise, which avoids triggering the seller\u2019s defences. It opens the door to a conversation rather than demanding a commitment.",
      },
      {
        id: "c4-q4",
        question:
          "When a seller says \u2018I\u2019m not really interested\u2019, what should you do?",
        options: [
          "Immediately move into the full proposition to change their mind",
          "End the call politely and move to the next lead",
          "Acknowledge it and ask a clarifying question about whether they have decided on a route",
          "Offer a discount or special promotion to keep them on the line",
        ],
        correctIndex: 2,
        explanation:
          "Do not argue or push. Acknowledge the response, then ask: \"Is that because you\u2019ve already decided on a route, or is it more that you haven\u2019t heard what we do yet?\" \u2018Not interested\u2019 frequently means \u2018I don\u2019t know what you\u2019re offering yet\u2019 \u2014 a very different thing from a genuine no.",
      },
      {
        id: "c4-q5",
        question:
          "What is the purpose of the \u2018question\u2019 stage in the call structure?",
        options: [
          "To gather data for the CRM record",
          "To qualify whether the seller can afford the service",
          "To ask one open question and then listen \u2014 creating dialogue",
          "To confirm the seller\u2019s identity and vehicle details",
        ],
        correctIndex: 2,
        explanation:
          "Ask a single open question to create dialogue, then stop talking. The silence is working \u2014 the seller is forming a response that tells you everything about where the conversation needs to go. Most new reps fill the silence; do not.",
      },
    ],
  },

  /* ---- Course 5 -------------------------------------------------- */
  {
    id: "course-5",
    number: 5,
    title: "Contracts & Negotiation",
    description:
      "Learn to walk sellers confidently through the consignment agreement and handle the most common negotiation scenarios using value-based techniques.",
    videoUrl: "/training/course-5-contracts.mp4",
    duration: "16:50",
    sections: [
      {
        title: "The Contract Is Part of the Sale",
        content:
          "The consignment agreement is not the finish line \u2014 it is part of the sale. How you introduce and explain it determines whether it gets signed quickly with confidence, or whether it triggers doubt that unravels a thirty-minute conversation. Sellers who have been talked through the agreement before they open it sign faster. Sellers who open it cold find things to be uncertain about. Walk every seller through the agreement before you send it, and know it well enough to explain any part in plain language.",
      },
      {
        title: "What the Consignment Agreement Contains",
        content:
          "The agreement covers six areas. (1) The parties \u2014 seller\u2019s and iAutoSale\u2019s details, confirming iAutoSale acts as agent, not purchaser. (2) The vehicle \u2014 registration, make, model, mileage at intake. (3) The listing price \u2014 agreed retail price, circumstances for adjustment, and confirmation the seller is always informed first. (4) Costs and deductions \u2014 confirms zero fees, any reconditioning costs pre-authorised and itemised. (5) The seller\u2019s rights \u2014 right to withdraw before sale completes, Consumer Rights Act 2015 protections. (6) Payment terms \u2014 full proceeds within 48 hours via Faster Payments. If a seller asks about a clause you are not certain of, do not guess \u2014 confirm and follow up.",
      },
      {
        title: "Walking a Seller Through the Agreement",
        content:
          "The walkthrough takes approximately two minutes and should sound natural. Cover: vehicle and personal details, the agreed listing price with the assurance nothing changes without their knowledge, the costs section confirming no fee and no commission, their rights including the right to withdraw under the Consumer Rights Act 2015, and payment terms \u2014 full proceeds within 48 hours via Faster Payments. End with: \"Does any of that raise any questions before I send it over?\" This question is asked before sending, not after \u2014 you want to hear concerns while still on the call, not find out 24 hours later when the seller has stopped picking up.",
      },
      {
        title: "Negotiation: The Core Principle",
        content:
          "One principle governs all iAutoSale negotiation: negotiate on value, not on fee. There is no fee to negotiate \u2014 iAutoSale charges the seller nothing. When a seller raises a concern, bring the conversation back to value: what they gain, what they avoid, and what the alternative actually costs them. The conversation does not have to be about numbers at all. Value-based negotiation keeps the discussion productive and avoids making commitments that cannot be kept.",
      },
      {
        title: "Negotiation Scenarios",
        content:
          "Four common scenarios: (1) \"Listing price is too low\" \u2014 acknowledge the concern, explain the market data rationale (AutoTrader comparables, Glass\u2019s Guide), note that pricing above range extends time on lot, then ask what figure they had in mind. (2) \"Reconditioning costs seem high\" \u2014 refer to the pre-authorisation process, offer to go through the itemised list, be honest about which items are necessary for a quick sale. (3) \"I want to think about it\" \u2014 acknowledge it as reasonable, confirm what specifically they want to think about, and book a specific callback time. (4) \"Can you match what another buyer offered?\" \u2014 redirect to value: iAutoSale achieves full retail price, handles everything, and costs nothing; compare the total outcome, not just the headline number.",
      },
    ],
    quiz: [
      {
        id: "c5-q1",
        question:
          "Why should you walk a seller through the agreement before sending it?",
        options: [
          "Because sellers cannot read the document without guidance",
          "Because it is a legal requirement for consignment agreements",
          "Because sellers who open it cold find things to be uncertain about, which stalls signing",
          "Because it gives you more talk time on the call",
        ],
        correctIndex: 2,
        explanation:
          "Sellers who have been talked through the agreement before they open it sign faster and with more confidence. Sellers who open it cold, without context, find things to be uncertain about \u2014 and uncertainty leads to stalling or not coming back at all.",
      },
      {
        id: "c5-q2",
        question: "How many areas does the consignment agreement cover?",
        options: ["Four", "Five", "Six", "Eight"],
        correctIndex: 2,
        explanation:
          "The agreement covers six areas: the parties, the vehicle, the listing price, costs and deductions, the seller\u2019s rights, and payment terms. You must know all six well enough to explain each in plain language.",
      },
      {
        id: "c5-q3",
        question: "What is the core negotiation principle at iAutoSale?",
        options: [
          "Always offer a small discount to close the deal",
          "Negotiate on value, not on fee",
          "Match any competing offer the seller has received",
          "Never negotiate \u2014 the terms are non-negotiable",
        ],
        correctIndex: 1,
        explanation:
          "iAutoSale charges no fee to the seller, so there is nothing to negotiate on that front. When a seller raises a concern, bring the conversation back to value \u2014 what they gain, what they avoid, and what the alternative actually costs them.",
      },
      {
        id: "c5-q4",
        question:
          "When should you ask \u2018Does any of that raise any questions?\u2019 during the agreement walkthrough?",
        options: [
          "After the seller has had the agreement for 24 hours",
          "Before sending the agreement, while still on the call",
          "Only if the seller specifically asks for clarification",
          "After the agreement has been signed",
        ],
        correctIndex: 1,
        explanation:
          "Ask before sending, not after. You want to hear any concerns while you are still on the call. If you wait, you may find out 24 hours later when the seller has stopped picking up \u2014 and by then the moment has passed.",
      },
      {
        id: "c5-q5",
        question:
          "If a seller says \u2018I think the listing price is too low\u2019, what is the recommended first step?",
        options: [
          "Immediately raise the listing price to match their expectation",
          "Tell them the price is non-negotiable and based on data",
          "Acknowledge the concern, explain the market data rationale, then ask what figure they had in mind",
          "Suggest they try selling privately first and come back later",
        ],
        correctIndex: 2,
        explanation:
          "Acknowledge the concern \u2014 it is a valid question. Explain that the listing price is based on live AutoTrader comparables, Glass\u2019s Guide, and real-time demand data. Then ask what figure they had in mind \u2014 this keeps the conversation open and often reveals the gap is smaller than expected.",
      },
    ],
  },
];

/* ================================================================== */
/*  COURSE PROGRESS                                                    */
/*  Progress is tracked per-user in localStorage at runtime.           */
/*  This export is kept for backwards compatibility only.              */
/* ================================================================== */

export const COURSE_PROGRESS: Record<
  string,
  { completed: boolean; quizScore: number | null; lastAccessed: string }
> = {};
