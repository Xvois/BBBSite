import {Button} from "@/components/ui/button";
import {Percent} from "lucide-react";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";

export default function About() {
    return (
        <main className="space-y-10">

            <section className={"space-y-8"} aria-label={"heading"}>
                <div>
                    <h1 className={"font-black text-5xl md:text-6xl"}>BUILD BACK BURSARIES</h1>
                    <p>a <a href={'https://www.thesubath.com/bulu/'}
                            className={"font-black text-primary underline decoration-wavy"}>BULU</a> campaign</p>
                </div>
                <Separator/>
                <p aria-label={"opening remarks"}>
                    Since at least 2017, the Bath Bursary has been losing value to inflation. This year marks
                    not only a 20% decrease in the original bursary&apos;s effective value, but new effort from the
                    University
                    to further that trend to a tune of an overall <b>47%</b> decrease since 2017.
                </p>
            </section>

            <section className={"w-full space-y-8"} aria-label={"key figures"}>
                <div
                    className={"flex flex-wrap gap-8 justify-around"}>
                    <div className={"w-96 min-w-64 flex-grow border-2 p-8 rounded shadow-lg"} aria-label={"figures for bursary value"}>

                        <div className={"inline-flex items-baseline h-16 text-primary"}>
                            <p className={"font-black text-[45px]"}>33</p>
                            <Percent className={'w-12 h-12'} aria-label={"percent"}/>
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

                    <div className={"w-96 min-w-64 flex-grow border-2 p-8 rounded shadow-lg"} aria-label={"figures for income requirements"}>

                        <div className={"inline-flex align-baseline h-16 text-10"}>
                            <p className={"font-black text-[45px] text-primary"}>56</p>
                            <p className={"font-black text-2xl text-primary"}>th</p>
                        </div>

                        <div className={"relative w-fit text-primary"}>
                            <h3 className={"font-bold text-xl"}>ranked for social mobility</h3>
                        </div>
                        <p>
                            Bath University already ranks worse than 55 other universities for social mobility, including Oxford and Cambridge. This
                            change only exacerbates the issue.
                        </p>

                        <Button className={"mt-4"} variant={"outline"} asChild>
                            <Link href={'/transparency#mobility'}>
                                See the data
                            </Link>
                        </Button>
                    </div>

                    <div className={"w-96 min-w-64 flex-grow border-2 p-8 rounded shadow-lg"} aria-label={"figures for student population"}>

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

            <section className={"max-w-screen-xl w-full space-y-8"} aria-label={"removing choice"}>
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
            <section className={"max-w-screen-xl w-full space-y-8"} aria-label={"unsustainability"}>
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
                        They must understand that the bursary is a lifeline for many students and that it is
                        unacceptable to cut its value.
                    </p>
                </div>
            </section>
            <section className={"max-w-screen-xl w-full space-y-8"} aria-label={"action"}>
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
                    <Button asChild variant={"default"} className={"hover:bg-primary"}>
                        <Link className={"bg-primary"} href={"https://chng.it/d228JWxPRd"}>Sign the petition</Link>
                    </Button>
                    <Button variant={"secondary"} asChild>
                        <Link href={"/action"}>View the Action Plan</Link>
                    </Button>
                </div>


            </section>
        </main>
    );
}
