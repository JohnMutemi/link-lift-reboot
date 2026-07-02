export type BlogPost = {
    slug: string;
    tag: string;
    date: string;
    title: string;
    excerpt: string;
    content: string[];
  };
  
  export const posts: BlogPost[] = [
    {
      slug: "reefer-logistics-horticulture-exports",
      tag: "Logistics",
      date: "May 12, 2026",
      title: "Why reefer logistics is reshaping East African horticulture exports",
      excerpt:
        "Demand for chilled flowers, avocados and pharma is driving a quiet revolution in how the corridor moves cold cargo.",
      content: [
        "Kenya remains Africa's largest avocado exporter, with annual output exceeding 150,000 metric tonnes and roughly 20,000 tonnes shipped each year to the EU and Middle East. That single commodity has become a useful proxy for a much broader shift: temperature-sensitive cargo, from cut flowers to vaccines, now represents one of the fastest-growing categories moving through the corridor.",
        "The infrastructure is catching up. Investment in cold storage at ports and solar-powered facilities in growing regions has cut spoilage rates for perishables like avocados by as much as 40% in some areas. For exporters, that translates directly into more product reaching market in sellable condition, rather than being written off before it ever leaves the country.",
        "Landlocked neighbours face a tougher equation. Producers in Rwanda, for instance, have had to truck empty reefer containers in and absorb the added cost of routing produce through two borders before it ever reaches the Port of Mombasa. As weekly export volumes climb, the economics start to shift in favour of stationing reefer fleets closer to origin rather than running them empty across the region.",
        "For a haulier, this means equipment planning matters as much as route planning. Matching the right container type, monitoring setup and genset backup to a shipment isn't a back-office detail — it's the difference between a flower order that lands market-fresh in Amsterdam and one that doesn't survive the journey.",
      ],
    },
    {
      slug: "northern-corridor-transit-time",
      tag: "Operations",
      date: "Apr 28, 2026",
      title: "Inside East & Southern corridor trade: cutting transit time Mombasa → Kampala",
      excerpt:
        "How upgraded weighbridges, OSBP processing and predictive dispatch shaved 36 hours off our average run.",
      content: [
        "East & Southern corridor trade continues to grow as a vital artery for regional freight, with more than 35 million metric tonnes of cargo moving each year. For years, though, its biggest bottleneck wasn't the road itself, but what sat on it: dozens of informal checkpoints between Mombasa and the Malaba border.",
        "That's now changing. Reforms announced in April 2026 are cutting the number of police roadblocks on the Mombasa–Malaba route from as many as 22–27 down to fewer than five gazetted stops, the internationally recommended maximum. The stated goal is to bring average transit time down from 76–80 hours to a 36–48 hour target — nearly halving the journey.",
        "Border processing is moving in the same direction. One Stop Border Posts along the corridor allow exit and entry formalities to be handled in a single location instead of two, while upgrades to the Regional Electronic Cargo Tracking System aim to cut emergency response time on flagged shipments to under an hour.",
        "For dispatch planning, the practical effect is less buffer time built into every schedule and tighter, more predictable handover windows at the border. Fewer unscheduled stops also means fewer opportunities for temperature drift on reefer loads — which matters as much for a shipment of avocados as it does for an on-time delivery commitment.",
      ],
    },
    {
      slug: "gensets-explained-cold-chain",
      tag: "Industry",
      date: "Mar 15, 2026",
      title: "Gensets explained: keeping the cold chain alive on long-haul road freight",
      excerpt:
        "A practical breakdown of clip-on vs undermount gensets and why fuel choice matters more than you think.",
      content: [
        "A genset is, at its core, a self-contained diesel generator that powers a reefer container's refrigeration unit whenever shore power isn't available — which, on a long-haul road route, is most of the journey. Without one, a reefer is just an insulated box.",
        "Operators generally choose between three configurations. Clip-on units attach directly to the front of the container and are easy to fit and remove, making them well suited to short stops at ports or during intermodal transfers. Underslung (or undermount) units are anchored beneath the trailer chassis instead, at a typical weight of around 700kg, and tend to suit operations where the same chassis is used across multiple container swaps. On-chassis units sit somewhere between the two, built into the trailer itself.",
        "Fuel consumption is the number that actually drives operating cost. Most gensets burn somewhere in the range of 2 to 4 litres of diesel per hour depending on age, load and ambient temperature, with newer models commonly rated to run continuously for several days between refuels. Engine age and maintenance condition matter here as much as the unit type — an older, poorly maintained genset can burn noticeably more fuel for the same cooling output.",
        "Emissions standards are tightening the field further. Newer units are increasingly built to meet EPA Tier IV and NRMM Stage V requirements, with manufacturers adding digital controllers that track fuel use and temperature in real time and start-stop automation that cuts idle burn. None of this is exciting on its own, but on a multi-day Mombasa run it's the difference between a cargo that arrives at spec and one that doesn't.",
      ],
    },
    {
      slug: "customs-clearance-east-africa-2026",
      tag: "Compliance",
      date: "Feb 02, 2026",
      title: "Customs clearance in East Africa: what every importer should know in 2026",
      excerpt:
        "The new digital filing rules across KRA, URA and RRA — and how to avoid the most common delays.",
      content: [
        "Kenya's Revenue Authority is in the middle of a full overhaul of its customs system, with a target of fully automating cargo operations during 2026. The centrepiece is a single electronic window that lets traders submit import and export documents electronically and links Kenya's customs procedures with other East African Community partner states. KRA reports the system has already cut cargo clearance times by at least 60%.",
        "One change worth flagging for any importer: sea manifests now need to be submitted 48 hours before a vessel docks or departs. Miss that window and you're looking at delays that have nothing to do with the cargo itself — just the paperwork around it. KRA has also begun piloting AI and machine-learning tools to flag inconsistencies in declarations before they become clearance disputes.",
        "Rwanda has taken its own route via the Rwanda Electronic Single Window, which now handles customs declarations entirely online through the Rwanda Revenue Authority. For smaller consignments — goods valued under RWF 500,000 — RRA also offers a mobile-friendly declaration app that lets importers submit details in advance of arriving at the border, with duty and tax notifications sent directly by SMS.",
        "The common thread across the region is digitisation, but each partner state's revenue authority is moving at its own pace and on its own platform. That means the practical advice for 2026 hasn't really changed even as the tools have: file early, keep documentation consistent across every system you touch, and work with a clearing agent who's actively plugged into whichever single window applies to your route.",
      ],
    },
    {
      slug: "meet-the-dispatch-team",
      tag: "People",
      date: "Jan 18, 2026",
      title: "Meet the dispatch team behind Link Freight's 99.8% on-time rate",
      excerpt:
        "A look inside the 24/7 control tower in Nairobi that keeps every container accounted for.",
      content: [
        "Ask anyone on our dispatch floor what the job actually involves, and the honest answer is: a lot of watching, and just enough intervening. The team runs a 24-hour rotation tracking every truck on the road, every border crossing in progress, and every shipment that's due to hand off to a client somewhere down the line.",
        "The tools have changed faster than the job description. Industry-wide, nearly half of fleet managers are now using AI-assisted tools for route optimisation, predictive maintenance and dispatch decisions — and our control tower runs on that same shift, using live tracking data to flag a delay hours before it would otherwise show up as a missed handover.",
        "But the technology is only half the story. The other half is a dispatcher who knows that a particular border crossing tends to back up on a Friday afternoon, or that a specific client needs a call the moment a shipment is running even thirty minutes behind — not an automated notification. That judgment is built over years, not coded into a dashboard.",
        "It's that combination — real-time visibility plus people who've actually driven these routes or sat across the table from the clients on the other end — that keeps the on-time numbers where they are. Behind every container we move is someone making sure it's exactly where it's supposed to be.",
      ],
    },
    {
      slug: "greener-freight-lower-carbon-corridor",
      tag: "Sustainability",
      date: "Dec 10, 2025",
      title: "Greener freight: our first steps toward a lower-carbon corridor",
      excerpt:
        "Route optimisation, fleet renewal and what we're learning about emissions on the Mombasa run.",
      content: [
        "Decarbonising freight gets talked about almost entirely in terms of electric trucks — but for most fleets, including ours, that's the last step, not the first. Industry analysis from 2026 puts it plainly: roughly 70% of achievable emissions reductions come from operational improvements and technology already available today, well before a single electric vehicle enters the picture.",
        "Route optimisation is the clearest example. Software-driven planning that reduces empty miles and improves load matching is now standard practice among the fleets making the most measurable progress on emissions, with some operators cutting empty mileage by single-digit percentages just through smarter backhaul planning — a small-sounding number that adds up fast across thousands of runs a year.",
        "Idle reduction and driver training sit right behind it. Neither requires new capital equipment, just discipline, and both directly cut fuel burn on routes like Mombasa–Nairobi where queuing at ports and border posts has historically meant long stretches of engines running with nothing moving.",
        "Electrification will have its place eventually, but charging infrastructure for heavy trucking is still in its early stages across the region. For now, our approach is the same one the wider industry has landed on: tighten what you can control today — routing, idling, fleet maintenance, fuel-efficient gensets — and treat that as the foundation the next phase gets built on.",
      ],
    },
  ];
  
  export function getPostBySlug(slug: string) {
    return posts.find((p) => p.slug === slug);
  }