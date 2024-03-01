import {Button} from "@/components/ui/button";
import {Percent} from "lucide-react";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";

export default function Home() {
    return (
        <main className="flex min-h-screen max-w-screen-lg mx-auto flex-col items-center p-8 lg:p-24 space-y-10">
            <section className={"space-y-8"}>
                <div>
                    <h1 className={"font-black text-6xl"}>BUILD BACK BURSARIES</h1>
                    <p>a <span className={"font-black text-primary"}>BULU</span> campaign</p>
                </div>
                <Separator />
                <p>
                    Bath University has cut the value of the bursary by 20% over the last 5 years. This is not
                    sustainable for students in need. We need to stand together to ensure that the university is held
                    accountable for its actions.
                </p>
            </section>
            <section className={"w-full space-y-8"}>
                <div
                    className={"flex flex-wrap gap-8 justify-around"}>

                    <div className={"w-96 min-w-64 border-2 p-8 rounded shadow-lg"}>

                        <div className={"inline-flex items-baseline h-16 text-primary"}>
                            <p className={"font-black text-[45px]"}>20</p>
                            <Percent className={'w-12 h-12'}/>
                        </div>

                        <div className={"relative w-fit text-primary"}>
                            <h3 className={"font-bold text-xl"}>Decrease in effective value</h3>
                        </div>
                        <p>Over the last 5 years alone the bursary worth has decreased by 20%, crippling students that
                            need it the most.</p>

                        <Button className={"mt-4"} variant={"outline"}>
                            See the data
                        </Button>
                    </div>

                    <div className={"w-96 min-w-64 border-2 p-8 rounded shadow-lg"}>

                        <div className={"inline-flex h-16 items-baseline text-primary"}>
                            <p className={"font-black text-[45px]"}>15</p>
                            <Percent className={'w-12 h-12'}/>
                            <p className={"text-muted-foreground h-fit"}>estimated</p>
                        </div>

                        <div className={"relative w-fit text-primary"}>
                            <h3 className={"font-bold text-xl"}>Increase in applicable students</h3>
                        </div>
                        <p>Over the last 5 years alone the bursary worth has decreased by 20%, crippling students that
                            need it the most.</p>

                        <Button className={"mt-4"} variant={"outline"}>
                            See the data
                        </Button>
                    </div>

                    <div className={"w-96 min-w-64 border-2 p-8 rounded shadow-lg"}>

                        <div className={"inline-flex align-baseline h-16 text-primary"}>
                            <p className={"font-black text-[45px] text-primary"}>20</p>
                            <Percent className={'w-12 h-12 text-primary'}/>
                        </div>

                        <div className={"relative w-fit text-primary"}>
                            <h3 className={"font-bold text-xl"}>Decrease in bursary value</h3>
                        </div>
                        <p>Over the last 5 years alone the bursary worth has decreased by 20%, crippling students that
                            need it the most.</p>

                        <Button className={"mt-4"} variant={"outline"}>
                            See the data
                        </Button>
                    </div>
                </div>
            </section>
            <section className={"max-w-screen-xl w-full space-y-8"}>
                <h2 className={"w-fit mx-auto uppercase font-extrabold text-3xl text-primary"}>They&apos;re removing <span
                    className={"text-4xl"}>choice</span></h2>
                <div>
                    <p>
                        Through diverting cash funds from the bursary into food and drink credits, the university is
                        removing the choice from students on how they spend their money. This is not only unsustainable
                        but also unfair to students who rely on the bursary to make ends meet.
                    </p>
                    <br/>
                    <p>
                        The Student Union at a SUmmit event outlined dishonesty in the university&apos;s approach to the
                        bursary, by forcing students to spend their bursary on food and drink credits that goes directly
                        back into the university&apos;s pocket. They further noted issues with those that have dietary
                        requirements
                        and the lack of variety in affordable food options.
                    </p>
                </div>

            </section>
            <section className={"max-w-screen-xl w-full space-y-8"}>
                <h2 className={"w-fit mx-auto uppercase font-extrabold text-3xl text-primary"}>It is <span
                    className={"text-4xl"}>unsustainable</span> for students</h2>
                <div>
                    <p>
                        Sustainable support does not look like cutting the value of the bursary and forcing students to
                        spend
                        it on food and drink credits. The university needs to be held accountable for its actions and
                        provide sustainable support for students in need.
                    </p>
                    <br/>
                    <p>
                        The university must understand that the bursary is a lifeline for many students and that it is
                        unacceptable to cut its value. The university must provide sustainable support for students in
                        need.
                    </p>
                </div>
            </section>
            <section className={"max-w-screen-xl w-full space-y-8"}>
                <h2 className={"w-fit mx-auto uppercase font-extrabold text-3xl text-primary"}>How to take <span
                    className={"decoration-wavy underline"}>action</span></h2>

                <p>
                    We need your help to make our demands heard. The student body
                    must come together to demand change from the university.
                    We
                    need to stand together to ensure that the university is held
                    accountable for its actions.
                </p>

                <p>
                    View the <Link href={'/action'} className={"underline text-primary font-bold"}>Action Plan</Link>.
                </p>

                <div className={"inline-flex space-x-4"}>
                    <Button>Sign the petition</Button>
                    <Button variant={"secondary"}>Join the cause</Button>
                </div>


            </section>
        </main>
    );
}
