import {Button} from "@/components/ui/button";
import {Percent} from "lucide-react";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";

export default function About() {
    return (
        <main className="space-y-10">

            <section className={"space-y-8"}>
                <div>
                    <h1 className={"font-black text-5xl md:text-6xl"}>BUILD BACK BURSARIES</h1>
                    <p>a <a href={'https://www.thesubath.com/bulu/'}
                            className={"font-black text-primary underline decoration-wavy"}>BULU</a> campaign</p>
                </div>
                <Separator/>
                <p>
                    Since at least 2017, the Bath Bursary has been losing value to inflation. This year marks
                    not only a 20% decrease in the original bursary&apos;s effective value, but new effort from the
                    University
                    to further that trend to a tune of an overall <b>47%</b> decrease since 2017.
                </p>
            </section>

            <section className={"w-full space-y-8"}>
                <div
                    className={"flex flex-wrap gap-8 justify-around"}>
                    <div className={"w-96 min-w-64 flex-grow border-2 p-8 rounded shadow-lg"}>

                        <div className={"inline-flex items-baseline h-16 text-primary"}>
                            <p className={"font-black text-[45px]"}>33</p>
                            <Percent className={'w-12 h-12'}/>
                        </div>

                        <div className={"relative w-fit text-primary"}>
                            <h3 className={"font-bold text-xl"}>Decrease in value from 2023</h3>
                        </div>
                        <p>With this change the university is <b>eroding support</b> from those of us that need it the
                            most.</p>

                        <Button className={"mt-4"} variant={"outline"} asChild>
                            <Link href={'/transparency#value'}>
                                See the data
                            </Link>
                        </Button>
                    </div>

                    <div className={"w-96 min-w-64 flex-grow border-2 p-8 rounded shadow-lg"}>

                        <div className={"inline-flex align-baseline h-16 text-primary"}>
                            <p className={"font-black text-[45px] text-primary"}>20</p>
                            <Percent className={'w-12 h-12 text-primary'}/>
                        </div>

                        <div className={"relative w-fit text-primary"}>
                            <h3 className={"font-bold text-xl"}>Increase in income requirements</h3>
                        </div>
                        <p>
                            The University has <b>increased</b> income requirements to £30,000 despite touting that
                            these efforts are to increase accessibility.
                        </p>

                        <Button className={"mt-4"} variant={"outline"} asChild>
                            <Link href={'/transparency#income'}>
                                See the data
                            </Link>
                        </Button>
                    </div>

                    <div className={"w-96 min-w-64 flex-grow border-2 p-8 rounded shadow-lg"}>

                        <div className={"inline-flex h-16 items-baseline text-primary"}>
                            <p className={"font-black text-[45px]"}>20,470</p>
                        </div>

                        <div className={"relative w-fit text-primary"}>
                            <h3 className={"font-bold text-xl"}>of us effected</h3>
                        </div>
                        <p>The university <b>does not</b> publish figures on bursary usage, however with a record
                            number of us attending the university and a cost of living crisis the bursary is more
                            important
                            than ever.
                            <br/>
                            <br/>
                            This affects all of us.
                        </p>

                        <Button className={"mt-4"} variant={"outline"} asChild>
                            <Link href={'/transparency#enrollment'}>
                                See the data
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className={"max-w-screen-xl w-full space-y-8"}>
                <h2 className={"md:text-center uppercase font-extrabold text-3xl text-primary"}>They&apos;re
                    removing <span
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
                <h2 className={"md:text-center  uppercase font-extrabold text-3xl text-primary"}>It is <span
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
                <h2 className={"md:text-center  uppercase font-extrabold text-3xl text-primary"}>How to take <span
                    className={"decoration-wavy underline"}>action</span></h2>

                <p>
                    We need your help to make our demands heard. The student body
                    must come together to demand change from the university.
                    We
                    need to stand together to ensure that the university is held
                    accountable for its actions.
                </p>

                <div className={"flex flex-col space-y-4 w-fit mx-auto"}>
                    <Button asChild>
                        <Link href={"https://chng.it/d228JWxPRd"}>Sign the petition</Link>
                    </Button>
                    <Button variant={"secondary"} asChild>
                        <Link href={"/action"}>View the Action Plan</Link>
                    </Button>
                </div>


            </section>
        </main>
    );
}
