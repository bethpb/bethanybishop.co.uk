import Image from 'next/image';

// Note: all icons
import PencilIcon from '@/assets/pencil.svg';
import GlassesIcon from '@/assets/glasses.svg';
import MagicWandIcon from '@/assets/magic-wand.svg';
import Beth from '@/assets/beth.jpg';
import CircleArrowIcon from '@/assets/circle-arrow.svg';
import EmailIcon from '@/assets/email.svg';
import PlayIcon from '@/assets/play.svg';
import DocumentIcon from '@/assets/document.svg';
import ExternalLinkIcon from '@/assets/external-link.svg';

// Note: all logos
import BritishIceSkatingLogo from '@/assets/logos/british-ice-skating.gif';
import BritishTaekwondoLogo from '@/assets/logos/british-taekwondo.svg';
import BuzzFeedLogo from '@/assets/logos/buzzfeed.svg';
import CarbyonLogo from '@/assets/logos/carbyon.webp';
import LightyearLogo from '@/assets/logos/lightyear.svg';
import NtuLogo from '@/assets/logos/ntu.svg';
import RobinRadarLogo from '@/assets/logos/robin-radar.svg';
import TheUpcomingLogo from '@/assets/logos/the-upcoming.svg';

import LightyearThumbnail from '@/assets/projects/lightyear/thumbnail.jpg';
import LightyearIntro from '@/assets/projects/lightyear/intro.jpg';
import LightyearProductionThumbnail from '@/assets/projects/lightyear/highlights/production.jpg';
import LightyearEfficientDesignThumbnail from '@/assets/projects/lightyear/highlights/efficient-design.jpg';
import LightyearCountdownThumbnail from '@/assets/projects/lightyear/highlights/countdown.jpg';
import LightyearSustainabilityThumbnail from '@/assets/projects/lightyear/highlights/sustainability.jpg';
import LightyearSolarChargingThumbnail from '@/assets/projects/lightyear/highlights/solar-charging.jpg';

import NtuThumbnail from '@/assets/projects/ntu/thumbnail.jpg';
import NtuIntro from '@/assets/projects/ntu/intro.jpg';

import RobinRadarThumbnail from '@/assets/projects/robin-radar/thumbnail.jpg';
import RobinRadarIntro from '@/assets/projects/robin-radar/intro.jpg';

import CarbyonThumbnail from '@/assets/projects/carbyon/thumbnail.jpg';
import CarbyonIntro from '@/assets/projects/carbyon/intro.jpg';

export const HOME_PAGE = {
  metadata: {
    title: 'Bethany Bishop',
    description: 'Copywriting and strategy for fearless brands.',
  },
  hero: {
    title: 'Boring prose has no place here.',
    subtitle: 'Copywriting and strategy for fearless brands.',
    buttons: [
      {
        label: 'See my work',
        href: '#work',
        intent: 'outline',
        icon: <Image src={CircleArrowIcon} alt="" />,
      },
      {
        label: 'Say hello',
        href: '#contact',
        intent: 'primary',
        icon: <Image src={EmailIcon} alt="" />,
      },
    ],
  },
  about: {
    title: (
      <>
        <span className="inline-block">Hiya,</span>
        <br />
        <span className="inline-block">
          I'm <strong>Beth</strong>
        </span>
      </>
    ),
    description: (
      <>
        <p>
          What I do looks a lot like tapping away at a desk. Possibly with a cat
          on my lap, definitely with a cuppa close to hand.
        </p>
        <p>But let me tell you, it's much more than that.</p>
        <p>
          I'm capturing narrative and distilling it. Thoughts thunder down onto
          the keys and gallop across the screen as I trial, tweak, revise and
          revisit. I'm wrangling for the perfect words, corralling them into
          world-class concepts.
        </p>
        <p>
          And besides, it's a <span className="italic">standing</span> desk.
        </p>
        <p>
          Over the years I've helped heaps of exciting projects off the ground
          and into the big bright world. If you're an innovative brand with bold
          ideas, it could be us rolling towards the horizon together.
        </p>
        <p>What do you say, Partner. Want some words? </p>
      </>
    ),
    image: {
      src: Beth,
      alt: 'Beth',
    },
    button: {
      label: `Let's talk, for real!`,
      href: '#contact',
    },
  },
  services: {
    title: 'Your story sets you apart',
    description: (
      <>
        Telling it with impact, clarity and emotion is what makes a brand stand
        up and stand out.
        <br />
        That's where I can help.
      </>
    ),
    items: [
      {
        title: 'Copywriting',
        description: `I can write your website, give your email campaigns a kick or create some stellar micro-copy for your apps and interfaces. I do a mean brochure, too. Whatever your written need, digital or print, I promise authentic writing that people actually want to read. That's harder than it sounds.`,
        icon: PencilIcon,
      },
      {
        title: 'Proofing and editing',
        description: (
          <>
            Ok, you've got the copy, but it's not really singing on the page.
            It's barely humming. The words are there, but not quite{' '}
            <span className="italic">there</span>. Consider me a fresh set of
            eyes. I'll help you level up your content so it's polished, correct
            and harmonising like the Vienna Philharmonic.
          </>
        ),
        icon: GlassesIcon,
      },
      {
        title: 'Branding and tone',
        description: `People don't identify with companies. They identify with brands that speak to who they are, and listen too. Whether you want to finesse your unique tone of voice, inject personality into your products, or set up strategies that breathe life and character into your offering, I've got you.`,
        icon: MagicWandIcon,
      },
    ],
  },
  work: {
    title: 'A closer look at my work',
  },
  brands: [
    {
      name: 'Carbyon',
      logo: CarbyonLogo,
    },
    {
      name: 'BuzzFeed',
      logo: BuzzFeedLogo,
    },
    {
      name: 'Nottingham Trent University',
      logo: NtuLogo,
    },
    {
      name: 'Lightyear',
      logo: LightyearLogo,
    },
    {
      name: 'Robin Radar',
      logo: RobinRadarLogo,
    },
    {
      name: 'British Taekwondo',
      logo: BritishTaekwondoLogo,
    },
    {
      name: 'British Ice Skating',
      logo: BritishIceSkatingLogo,
    },
    {
      name: 'The Upcoming',
      logo: TheUpcomingLogo,
    },
  ],
  contact: {
    title: 'Drop me a line any time',
    description: (
      <>
        Whether you have a question, a project idea, or just want to say hello,
        I'd love to hear from you.
        <br />
        Reach out, let's have a chat
      </>
    ),
  },
} as const;

export const PROJECTS = [
  {
    slug: 'carbyon',
    thumbnail: {
      title: 'Carbyon',
      subtitle: 'Extraordinary employer branding',
      image: {
        src: CarbyonThumbnail,
        alt: 'Carbyon',
      },
      label: 'Read more',
    },
    intro: {
      title: 'Carbyon captures the sky',
      description: (
        <>
          <p>
            Picture a technology that could harness the C02 polluting our
            atmosphere. That it could even transform it into something
            good, like the energy that lights our homes and powers our cars. Machines cleaning our skies. Reversing climate
            change. Powering the world, and empowering society. Well, it’s real, and the laser-focus of a determined team in Eindhoven (NL).
          </p>
          <p>
            Meeting Carbyon meant my first time hearing about Direct Air Capture (DAC). This startup is formed of passionate pioneers,
            all on a mission to tackle climate change. Their work, which
            combines engineering, chemistry and physics, captures the sky.
          </p>
          <p>
            Because the company challenges the status quo, their people must be
            extraordinary. You can imagine how excited I was to help tell some of their stories, creating an interview series that spotlit Carbyon's brilliant characters.
            Aimed at prospective hires, the series gives a true glimpse of what it’s like to thrive in the grey space
            between innovation and imagination. Each represents a unique thread of Carbyon. 
          </p>
          <p>
            I also helped Carbyon perfect the copy on their careers website. I ensured consistent brand tone and punchy prose — that each word measured up to the unique chance, and exhilarating challenge, of joining the company. Supporting employer branding is always a joy, especially when it involves writing exceptional people.
          </p>
        </>
      ),
      image: {
        src: CarbyonIntro,
        alt: 'Carbyon',
      },
      button: {
        label: 'Learn more',
        href: '#screen-recording',
        icon: <Image src={CircleArrowIcon} alt="" />,
      },
    },
    highlights: [
      {
        title: 'Growth that defies reason',
        description: `Meet Carbyon’s Research Associate, Cristhal. She weaves her Guatemalan heritage into a scientific approach every day.`,
        button: {
          label: 'Meet Cristhal',
          href: 'https://careers.carbyon.com/meet-cristhal',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: 'Blue sky thinking',
        description: `Meet Manager Manufacturing Engineering, Bogdan. His work scratches an itch to go where none have been before.`,
        button: {
          label: 'Meet Bogdan',
          href: 'https://careers.carbyon.com/meet-bogdan',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: 'The exception the the rule',
        description: `Meet Modeling Engineer, Luuk. He envisions the bright potential of cause and effect on a huge, global scale.`,
        button: {
          label: 'Meet Luuk',
          href: 'https://careers.carbyon.com/meet-luuk',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: 'The science of humility',
        description: `Meet Research & Development Manager, Cristiana. Although a woman of science and data, instinct guides her every move.`,
        button: {
          label: 'Meet Cristiana',
          href: 'https://careers.carbyon.com/meet-cristiana',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: 'Call of the wild',
        description: `Meet Data Scientist, Girmi. The urge to stray far from the beaten track guides Girmi in life, as well as his work.`,
        button: {
          label: 'Meet Girmi',
          href: 'https://careers.carbyon.com/meet-girmi',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: 'A mission that moves us',
        description: `As well as getting to know the people of Carbyon, I was thrilled to help refine the copy on their careers website.`,
        button: {
          label: ' Read my web copy',
          href: 'https://careers.carbyon.com/the-team',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
    ],
    recordings: {
      desktop: {
        width: 1920,
        height: 1080,
        totalNumberOfFrames: 270,
        framePrefix: '/carbyon/frames/desktop/frame_',
      },
      mobile: {
        width: 390,
        height: 830,
        totalNumberOfFrames: 336,
        framePrefix: '/carbyon/frames/mobile/frame_',
      },
      button: {
        label: 'Visit website',
        href: 'https://careers.carbyon.com',
        icon: <Image src={ExternalLinkIcon} alt="" />,
      },
    },
  },
  {
    slug: 'lightyear',
    thumbnail: {
      title: 'Lightyear Cars',
      subtitle: 'Solar electric mobility',
      image: {
        src: LightyearThumbnail,
        alt: 'Lightyear Cars',
      },
      label: 'Read more',
    },
    intro: {
      title: 'Range gifted by sunlight',
      description: (
        <>
          <p className="italic">
            “At Lightyear, we believe the time has come to engineer a new
            reality. Like our ancestors, we'll break ground. We'll let curiosity
            lead as we forge paths to a more balanced world.
            <br />
            There will be no looking back at the way things should have been,
            only ahead to what could be.“
          </p>
          <p>
            Humans are instinctive travellers. We've wandered nomadically for
            centuries, pressed to conquer the horizon. Lightyear offered a
            product that tapped into human nature, winding back the wheel to
            make our need to move truly sustainable. The world’s first solar
            electric car, Lightyear 0.
          </p>
          <p>
            As Senior Copywriter for the visionary brand, I was determined to
            win belief in it, and do all of its astounding innovation justice.
            It was my role to not only refine but create and protect a powerful,
            incandescent voice for Lightyear. Their solar electric cars flipped
            the script for a cleaner future, so did I.
          </p>
          <p>
            In a vibrant team of creative minds, it was my role to write
            compelling campaigns on every medium. From technical blogs that
            captured the components, testing and innovation of our car, to
            emails, social posts, graphics, brochures, video ad scripts, brand
            guides, a whole new website, and even the unique interface of the
            car itself.
          </p>
          <p>It was quite the ride.</p>
        </>
      ),
      image: {
        src: LightyearIntro,
        alt: 'Lightyear Cars',
      },
      button: {
        label: 'Learn more',
        href: '#screen-recording',
        icon: <Image src={CircleArrowIcon} alt="" />,
      },
    },
    highlights: [
      {
        title: 'Lightyear launch teaser - Countdown to a zero emission future',
        thumbnail: {
          image: {
            src: LightyearCountdownThumbnail,
            alt: 'Lightyear Cars',
          },
          href: '/lightyear/countdown.mp4',
        },
      },
      {
        title:
          'Solar panels on any car — the versatility of Lightyear’s technology',
        description: `Learn how Lightyear's technology can gift any EV with limitless power.`,
        button: {
          label: 'Read my blog',
          href: 'https://lightyear.one/articles/solar-panels-on-any-car-the-versatility-of-lightyear-s-solar-technology',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title:
          'Solar charging explained - Discover solar electric vehicles (SEVs)',
        thumbnail: {
          image: {
            src: LightyearSolarChargingThumbnail,
            alt: 'Solar charging explined - Discover solar electric vehicles (SEVs)',
          },
          href: '/lightyear/solar-charging.mp4',
        },
      },
      {
        title: 'Good for the planet, good for you',
        description: `Head to the homepage for a glimpse at innovation soaked in sunshine.`,
        button: {
          label: 'Read my webpage',
          href: 'https://lightyear.one/',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: 'Sustainable driving explained - Designed for the planet',
        thumbnail: {
          image: {
            src: LightyearSustainabilityThumbnail,
            alt: 'Sustainabile driving explained - Planet-concious design',
          },
          href: '/lightyear/sustainability.mp4',
        },
      },
      {
        title: 'Clean mobility for everyone, everywhere',
        description: `The mission to reverse a lightyear driven on fossil fuels.`,
        button: {
          label: 'Read my webpage',
          href: 'https://lightyear.one/impact',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: 'Efficiency explained - Built for unmatched economy',
        thumbnail: {
          image: {
            src: LightyearEfficientDesignThumbnail,
            alt: 'Efficiency explained - Built for unmatched economy',
          },
          href: '/lightyear/efficient-design-explained.mp4',
        },
      },
      {
        title: 'An automotive switch — Solar electric driving explained',
        description: `Imagine range that expanded with every ray.`,
        button: {
          label: 'Read my blog',
          href: 'https://lightyear.one/articles/an-automotive-switch-solar-technology-will-become-the-norm-for-limitless-electric-driving',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: 'Lightyear 0 production campaign - Production has started',
        thumbnail: {
          image: {
            src: LightyearProductionThumbnail,
            alt: 'Lightyear 0 production campaign - Production has started',
          },
          href: '/lightyear/production.mp4',
        },
      },
      {
        title: '10 things you may not know about solar technology',
        description: `Discover the origins of solar energy as we unpick how the sun gifts power to the earth.`,
        button: {
          label: 'Read my blog',
          href: 'https://lightyear.one/articles/ten-things-you-may-not-know-about-solar-technology',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
    ],
    recordings: {
      desktop: {
        width: 1920,
        height: 1080,
        totalNumberOfFrames: 587,
        framePrefix: '/lightyear/frames/desktop/frame_',
      },
      mobile: {
        width: 390,
        height: 830,
        totalNumberOfFrames: 340,
        framePrefix: '/lightyear/frames/mobile/frame_',
      },
      button: {
        label: 'Visit website',
        href: 'https://lightyear.one/impact',
        icon: <Image src={ExternalLinkIcon} alt="" />,
      },
    },
  },
  // {
  //   slug: 'ntu',
  //   thumbnail: {
  //     title: 'Notts Trent University',
  //     subtitle: 'Inspiring sport in higher education',
  //     image: {
  //       src: NtuThumbnail,
  //       alt: 'Notts Trent University',
  //     },
  //     label: 'Read more',
  //   },
  //   intro: {
  //     title: 'Love sport? Join the club!',
  //     description: (
  //       <>
  //         <p>
  //           Did you know that taking part in fitness and sport could boost your
  //           academic studies? Really! Regular exercise can help reduce stress,
  //           increase your energy levels and – for those lectures – boost
  //           concentration.
  //         </p>
  //         <p>
  //           So, whether you're wanting to hone your skills in a familiar field
  //           or jump feet-first into a whole new ball game, we've got you. With
  //           over 60 sports clubs to try, heaps of fun commitment-free sessions
  //           and outstanding fitness facilities, you can participate at your own
  //           pace.
  //         </p>
  //         <p>
  //           Come along to the Freshers Fair NTU Sport stand to find out more
  //           about the clubs, classes and sessions we know you'll love.
  //         </p>
  //       </>
  //     ),
  //     image: {
  //       src: NtuIntro,
  //       alt: 'Notts Trent University',
  //     },
  //     button: {
  //       label: 'Browse the brochure',
  //       href: '/ntu/brochure.pdf',
  //       icon: <Image src={DocumentIcon} alt="" />,
  //     },
  //   },
  //   highlights: [
  //     {
  //       title: `Student Claire hopes charity challenge will help change the world for disabled skiers and snowboarders`,
  //       description: `NTU student Claire Ryan is pushing 200km to raise money and awareness for Snow Buddies UK, a charity that supports skiers and snowboarders with disabilities.`,
  //       button: {
  //         label: 'Read blog',
  //         href: 'https://www.ntu.ac.uk/about-us/news/news-articles/2019/08/student-claire-hopes-charity-challenge-will-help-change-the-world-for-disabled-skiers-and-snowboarders',
  //         icon: <Image src={ExternalLinkIcon} alt="" />,
  //       },
  //     },
  //     {
  //       title: 'This Girl Can Week returns to NTU',
  //       description: `Trent This Girl Can Week is back, and we can't wait for female students to enjoy all that we have in store!`,
  //       button: {
  //         label: 'Read blog',
  //         href: 'https://www.ntu.ac.uk/about-us/news/news-articles/2018/10/this-girl-can-week-returns-to-ntu',
  //         icon: <Image src={ExternalLinkIcon} alt="" />,
  //       },
  //     },
  //     {
  //       title:
  //         'NTU Welcome world tennis stars to campus for Nature Valley Open',
  //       description: `World tennis stars flock to NTU's Centre after unprecedented summer rainfall puts Nature Valley Open grass pitches out of play this June.`,
  //       button: {
  //         label: 'Read blog',
  //         href: 'https://www.ntu.ac.uk/about-us/news/news-articles/2019/06/ntu-welcome-world-tennis-stars-to-campus-for-nature-valley-open',
  //         icon: <Image src={ExternalLinkIcon} alt="" />,
  //       },
  //     },
  //     {
  //       title: 'Varsity full-time roundup',
  //       description: `With the Varsity 2018 now concluded, we look back on NTU's sporting performances across a very exciting series.`,
  //       button: {
  //         label: 'Read blog',
  //         href: 'https://www.ntu.ac.uk/about-us/news/news-articles/2018/05/varsity-full-time-roundup',
  //         icon: <Image src={ExternalLinkIcon} alt="" />,
  //       },
  //     },
  //   ],
  //   recordings: null,
  // },
  {
    slug: 'robin-radar',
    thumbnail: {
      title: 'Robin Radar',
      subtitle: 'Writing leading B2B technology',
      image: {
        src: RobinRadarThumbnail,
        alt: 'Robin Radar',
      },
      label: 'Read more',
    },
    intro: {
      title: 'Bird or drone, we have you covered',
      description: (
        <>
          <p>
            Robin Radar Systems are experts and technology leaders in the
            detection of small flying objects.
          </p>
          <p>
            Their specialised radar systems give high-quality data, instant
            updates, and the best possible insight to react to threats and
            hazards as they happen. And, excitingly, their technologies are
            truly ahead of the pack.
          </p>
          <p>
            Pioneers in 3D, 360° radar coverage, they’re on a mission to empower
            aviation, defence, security, and ecology teams with a unique view of
            their airspace.
          </p>
          <p>
            Through compelling web copy, insightful blogs, captivating product
            sheets and thought-provoking social media posts, it’s my pleasure
            to help them.
          </p>
          <p>
            Robin is a fantastic example of a B2B technology company with a
            bold, expressive, and human brand. As well as refining their
            authentic and uncomplicated tone of voice, I’m thrilled to bits to
            have helped them weave it through a swish new website and every
            commercial material, from brochures to brand guides.
          </p>
        </>
      ),
      image: {
        src: RobinRadarIntro,
        alt: 'Robin Radar',
      },
      button: {
        label: 'Learn more',
        href: '#screen-recording',
        icon: <Image src={CircleArrowIcon} alt="" />,
      },
    },
    highlights: [
      {
        title: 'IRIS brochure',
        description: `Discover Robin’s small, mighty 3D drone radar`,
        button: {
          label: 'Read my product sheet',
          href: '/robin-radar/iris-brochure.pdf',
          icon: <Image src={DocumentIcon} alt="" />,
        },
      },
      {
        title: 'MAX brochure',
        description: `Discover Robin’s specialised 3D avian radar`,
        button: {
          label: 'Read my brochure',
          href: '/robin-radar/max-brochure.pdf',
          icon: <Image src={DocumentIcon} alt="" />,
        },
      },
      {
        title: 'ELVIRA brochure',
        description: `Discover Robin’s 2D drone radar`,
        button: {
          label: 'Read my brochure',
          href: '/robin-radar/elvira-brochure.pdf',
          icon: <Image src={DocumentIcon} alt="" />,
        },
      },
      {
        title: 'MAX deploys to research australian bats',
        description: `Learn how Robin’s 3D radar is reshaping ecological research on flying fox colonies.`,
        button: {
          label: 'Read my case',
          href: 'https://www.robinradar.com/news-events/max-deploys-in-australia-for-study-on-flying-foxes-with-batonehealth',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: 'World migratory bird day',
        description: `Did you know, specialised avian radar is protecting important migration routes worldwide?`,
        button: {
          label: 'Read my blog',
          href: 'https://www.robinradar.com/blog/world-migratory-bird-day-how-radar-keeps-incredible-avian-journeys-safe-and-clear',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: 'Discover specialised bird radar',
        description: `See how avian radar empowers bird control teams and elevates ecological research.`,
        button: {
          label: 'Read my webpage',
          href: 'https://www.robinradar.com/products/max-radar',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: ' Discover specialised drone radar',
        description: `Learn how CUAS radars help security teams tackle the elusive drone threat.`,
        button: {
          label: 'Read my webpage',
          href: 'https://www.robinradar.com/products/iris-radar',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
    ],
    recordings: {
      desktop: {
        width: 1920,
        height: 1080,
        totalNumberOfFrames: 392,
        framePrefix: '/robin-radar/frames/desktop/frame_',
      },
      mobile: {
        width: 390,
        height: 830,
        totalNumberOfFrames: 676,
        framePrefix: '/robin-radar/frames/mobile/frame_',
      },
      button: {
        label: 'Visit website',
        href: 'https://www.robinradar.com',
        icon: <Image src={ExternalLinkIcon} alt="" />,
      },
    },
  },
] as const;
