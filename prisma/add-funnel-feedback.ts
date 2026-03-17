import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

interface Patch {
  lesson: number;
  after: string;
  insert: string;
}

const patches: Patch[] = [
  // LESSON 2 — Add "The Complete Journey" section after "How Everything Connects"
  {
    lesson: 2,
    after: "How Everything Connects",
    insert: `

Before we move on, let's zoom out and look at the full journey someone takes through your system. This is your marketing funnel — and if you've never thought about it this way before, this is the mental model that changes everything.

**Step 1: Stranger.** They don't know you exist. They're scrolling LinkedIn, checking email, browsing a website. They have a problem but no solution.

**Step 2: Visitor.** Something caught their attention — an ad, a post, a cold email. They clicked. Now they're on your landing page. They're curious but skeptical.

**Step 3: Lead.** They signed up for your free platform. They gave you their name and email. They're in your system now. The nurture begins.

**Step 4: Engaged Lead.** They're going through your content. Completing lessons. Opening emails. Coming back to the platform. Trust is building. They're starting to think "this person knows what they're talking about."

**Step 5: Qualified Lead.** They've consumed enough to understand the problem and believe you can solve it. The booking invitation feels natural, not pushy. They book a call.

**Step 6: Client.** The call confirms what they already believe. They buy.

**Step 7: Advocate.** They got results. They leave a review. They tell people about you. They become a source of referrals and social proof.

That last step — advocate — is the one everyone forgets. But it's the most powerful part of the system because it feeds the top of the funnel. Reviews become landing page testimonials. Referrals become new leads. The system compounds.

This entire course teaches you how to build steps 2 through 7. Traffic (step 1) is just pointing people at the machine.

`,
  },

  // LESSON 11 — Add "The Full Nurture Journey" section after "Why This Matters for Your Close Rate"
  {
    lesson: 11,
    after: "Why This Matters for Your Close Rate",
    insert: `

## The Full Nurture Journey — Including the Part Everyone Skips

Most people think nurture ends when someone books a call. It doesn't.

Here's the complete nurture journey:

**Pre-conversion nurture** — what we've been talking about. Emails that teach, build trust, and move leads toward booking. This is the obvious part.

**Post-conversion nurture** — following up after they become a client. Checking in. Delivering value. Making sure they're getting results. This is how you turn clients into repeat buyers.

**Feedback nurture** — asking for reviews, testimonials, and referrals. This is the part everyone skips — and it's the most valuable.

Think about it. A genuine review from a real person who went through your system is worth more than any landing page copy you could write. It's social proof. It's credibility. It's the thing that makes the next skeptical visitor think "okay, this might actually be legit."

This platform has a built-in feedback system. When someone finishes all 28 lessons, they're asked to leave a review. Rating plus written feedback. And they can opt in to let you use it as a testimonial.

That review goes straight to your admin dashboard. You can see it, read it, and use it in your marketing.

The feedback request is also part of the automated nurture sequence. When someone completes the course, they get an email that says "take 30 seconds and leave your feedback." No chasing. No manual follow-up. The system handles it.

When you build your own Client Engine, you should do the same thing. Ask for feedback at the moment of highest satisfaction — right after they finish your content or get a result from your service.

Don't wait. Don't "plan to do it later." Build it into the system from day one.

`,
  },

  // LESSON 27 — Add section about using feedback data
  {
    lesson: 27,
    after: "This is the optimization loop",
    insert: `

## Don't Forget Feedback

One metric people rarely track: what completers actually say.

If people finish your course and leave reviews, read them. Every single one.

5-star reviews with specific feedback ("the recruiter example made everything click") tell you what to emphasize in your marketing and content.

3-star reviews with criticism ("I got lost in Module 3") tell you exactly what to fix.

1-star reviews tell you your targeting is off — the wrong people are signing up.

Feedback is the cheapest form of market research. You're literally getting people to tell you how to improve your system. Use it.

And the good reviews? Put them on your landing page. Use them in your outreach. Share them in your content. Social proof is the fastest way to increase your signup rate — and you don't have to write a word of it.

`,
  },
];

async function main() {
  console.log(`Applying ${patches.length} patches...\n`);

  for (const patch of patches) {
    const lesson = await prisma.lesson.findUnique({
      where: { order: patch.lesson },
    });

    if (!lesson) {
      console.log(`  ✗ Lesson ${patch.lesson} not found`);
      continue;
    }

    const idx = lesson.content.toLowerCase().indexOf(patch.after.toLowerCase());
    if (idx === -1) {
      console.log(`  ✗ Lesson ${patch.lesson}: couldn't find "${patch.after.substring(0, 40)}..."`);
      continue;
    }

    const afterIdx = lesson.content.indexOf("\n\n", idx);
    const insertPoint = afterIdx !== -1 ? afterIdx : lesson.content.length;

    const updated =
      lesson.content.slice(0, insertPoint) +
      patch.insert +
      lesson.content.slice(insertPoint);

    await prisma.lesson.update({
      where: { order: patch.lesson },
      data: { content: updated },
    });

    console.log(`  ✓ Lesson ${patch.lesson}: inserted after "${patch.after.substring(0, 40)}..."`);
  }

  console.log("\nDone!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
