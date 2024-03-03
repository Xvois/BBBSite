import {Separator} from "@/components/ui/separator";

type Event = {
    title: string,
    date: string,
    description: string
    achieved?: boolean
}

type EventProps = {
    e: Event
}

const Event = ({e}: EventProps) => {
    return (
        <div className={`relative grid gap-4`}>
            <div className="flex space-x-6">
                <div className="flex items-center">
                    <div className={`w-4 h-4 flex-shrink-0 rounded-full bg-background border-4 border-primary -ml-1`}/>
                    <div className={`w-16 ml-4 text-sm ${e.achieved ? "opacity-35" : "opacity-100"}`}>
                        <div className="font-semibold">{e.title}</div>
                        <div className="leading-none font-bold text-primary">{e.date}</div>
                    </div>
                </div>
                <Separator orientation={"vertical"} className={`${e.achieved ? "opacity-35" : "opacity-100"}`}/>
                <div className={`grid gap-2 items-center ${e.achieved ? "opacity-35" : "opacity-100"}`}>
                    <p className="text-sm">
                        {e.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function ActionPlan() {

    const events: Event[] = [
        {
            title: "SU Candidates",
            date: "March",
            description: "We will ask SU candidates about what they will do about the bursary cutbacks.",
            achieved: true
        },
        {
            title: "University Council Meeting",
            date: "May",
            description: "Present a petition to the University Council to reverse the bursary cutbacks.",
            achieved: false
        },
        {
            title: "Open Day",
            date: "June",
            description: "Leafleting, distruptiveness, leaving signs, info and messaging on campus.",
            achieved: false
        }
    ]

    return (
        <main className="space-y-10">
            <section className={"space-y-8"}>
                <div>
                    <h1 className={"font-black text-6xl"}> The <span
                        className={"underline decoration-wavy decoration-primary"}>Action Plan</span></h1>
                </div>
                <Separator/>
                <p>
                    We are building a plan to fight for fairer access to education at Bath University. We will
                    be asking SU candidates about what they will do about the bursary cutbacks, presenting a
                    petition to the University Council to reverse the bursary cutbacks and leafleting, disruptiveness,
                    leaving signs, info and messaging on campus.
                </p>
            </section>

            <section className={"space-y-8"}>
                <h2 className={"text-2xl text-primary font-black text-center"}>What you can do</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <span className={"font-bold"}>Encourage others to sign the petition.</span>
                        <p className={"text-sm text-muted-foreground"}>
                            The more people that sign, the more likely the University will listen.
                        </p>
                    </li>
                    <li>
                        <span className={"font-bold"}>Leafleting and posters.</span>
                        <p className={"text-sm text-muted-foreground"}>
                            We need to get the word out to as many people as possible.
                        </p>
                    </li>
                    <li>
                        <span className={"font-bold"}>Mass emailing.</span>
                        <p className={"text-sm text-muted-foreground"}>
                            We need to get the word out to as many people as possible.
                        </p>
                    </li>
                    <li>
                        <span className={"font-bold"}>Reach out to societies and clubs.</span>
                        <p className={"text-sm text-muted-foreground"}>
                            We need to get the word out to as many people as possible.
                        </p>
                    </li>
                    <li>
                        <span className={"font-bold"}>Freedom of Information requests.</span>
                        <ul className="list-[circle] pl-5">
                            <li>
                                How many students receive the Bath Bursary?
                                <p className={"text-sm text-muted-foreground"}>
                                    We have the right to know how many students will be affected by the cutbacks.
                                </p>
                            </li>
                            <li >
                                How much money does the university spend per year in total on scholarships?
                                <p className={"text-sm text-muted-foreground"}>
                                    We need to know how much money the university has to support students.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section className="relative h-full w-full space-y-8">
                <h2 className={"text-2xl text-primary font-black text-center"}>Timeline</h2>
                <div className="absolute inset-0 flex items-center">
                    <div className="w-2 h-full bg-primary"/>
                </div>

                {events.map((e, i) => {
                    return <Event key={i} e={e}/>
                })}

            </section>
        </main>
    )
}

