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
        <main>
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

            <div>
                <h2 className={"text-2xl text-primary font-black text-center"}>What you can do</h2>
            </div>

            <div className="relative h-full w-full space-y-10">
                <h2 className={"text-2xl text-primary font-black text-center"}>Timeline</h2>
                <div className="absolute inset-0 flex items-center">
                    <div className="w-2 h-full bg-primary"/>
                </div>

                {events.map((e, i) => {
                    return <Event key={i} e={e}/>
                })}

            </div>
        </main>
    )
}

