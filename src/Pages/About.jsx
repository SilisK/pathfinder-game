import { useEffect } from "react";
import github_icon from "../assets/gizmos/github-icon.png";
import linkedin_icon from "../assets/gizmos/linkedin-icon.png";

const team_members = [
  {
    name: "Berlin Rivas",
    avatarClassName: "berlin-avatar",
    github: "https://github.com/BerlinRivas",
    linkedin: "https://www.linkedin.com/in/berlinrivas",
  },
  {
    name: "Frantz-Sebastien Mathias",
    avatarClassName: "frantz-avatar",
    github: "https://github.com/Frantz-Sebastien",
    linkedin: "https://www.linkedin.com/in/fsmathias/",
  },
  {
    name: "Wai Leong Chong",
    avatarClassName: "wai-avatar",
    github: "https://github.com/waiLeongChong",
    linkedin: "https://www.linkedin.com/in/wai-leong-chong/",
  },
  {
    name: "Silis Kleemoff",
    avatarClassName: "silis-avatar",
    github: "https://github.com/KleemoffDeveloper",
    linkedin: "https://www.linkedin.com/in/silis-kleemoff/",
  },
];

function About() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="grid place-items-center py-24 text-white min-h-screen">
      <div className="overflow-hidden rounded-3xl w-11/12 z-10">
        <h2 className="p-4 text-2xl tracking-wider pb-4">
          What is <span className="text-blue-300">PATHFINDER</span> Exactly?
        </h2>
        <p className="p-4 leading-relaxed text-base">
          Welcome to Pathfinder, a gaming web app where ChatGPT and Dall-E team
          up to craft engaging story-telling adventures! Say goodbye to
          predictable game scenarios. With the magic of AI, every choice you
          make shapes the direction of your unique story.
        </p>
      </div>
      <div className="overflow-hidden rounded-3xl w-11/12 mb-24 mt-20 z-10">
        <h2 className="p-4 text-2xl tracking-wider pb-4">
          The <span className="text-blue-300">FUTURE</span> of Gaming.
        </h2>
        <p className="p-4 leading-relaxed text-base">
          At Pathfinder, we're leading the way in revolutionizing storytelling
          in gaming. We imagine a future where narratives completely transform
          player involvement. Using the flexibility of ChatGPT, we empower
          gamers to co-create their own adventures. Get ready for a new era of
          personalized storytelling that breaks free from the constraints of
          traditional video game narratives.
        </p>
      </div>

      <div className="w-full z-10">
        <h2 className="text-3xl text-center tracking-wider mb-8 text-primary">
          MEET THE TEAM
        </h2>
        <div className="grid sm:grid-flow-col sm:overflow-x-scroll px-5 gap-12">
          {team_members.map((member, i) => (
            <div className="flex flex-col items-center" key={i}>
              <div
                className={
                  "team-member-banner rounded overflow-hidden  " +
                  member.avatarClassName
                }
              >
                <div className="team-member-name py-3 text-center w-full bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-sm">
                  <p className="uppercase text-base">{member.name}</p>
                </div>
              </div>
              <section className="flex justify-evenly w-4/6 my-2">
                <a
                  className="small-gizmo bg-white rounded-full"
                  href={member.github}
                  target="_blank"
                >
                  <img src={github_icon} />
                </a>
                <a
                  className="small-gizmo bg-white rounded-full"
                  href={member.linkedin}
                  target="_blank"
                >
                  <img src={linkedin_icon} />
                </a>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
