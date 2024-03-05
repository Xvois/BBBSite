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

            <div className={"w-fit mx-auto"}>
                <div className={"relative"}>
                    <Button asChild variant={"default"} size={"lg"} className={"hover:bg-primary"}>
                        <Link className={"bg-primary"} href={"https://chng.it/d228JWxPRd"}>Sign the petition</Link>
                    </Button>
                    <div className={"absolute -top-10 -left-[5.5em] rotate-2"}>
                        <DrawnOval/>
                    </div>
                </div>
            </div>


            <section className={"w-full space-y-8"} aria-label={"key figures"}>
                <div
                    className={"flex flex-wrap gap-8 justify-around"}>
                    <div className={"w-96 min-w-64 flex-grow border-2 p-8 rounded shadow-lg"}
                         aria-label={"figures for bursary value"}>

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

                    <div className={"w-96 min-w-64 flex-grow border-2 p-8 rounded shadow-lg"}
                         aria-label={"figures for income requirements"}>

                        <div className={"inline-flex align-baseline h-16 text-10"}>
                            <p className={"font-black text-[45px] text-primary"}>56</p>
                            <p className={"font-black text-2xl text-primary"}>th</p>
                        </div>

                        <div className={"relative w-fit text-primary"}>
                            <h3 className={"font-bold text-xl"}>ranked for social mobility</h3>
                        </div>
                        <p>
                            Bath University already ranks worse than 55 other universities for social mobility,
                            including Oxford and Cambridge. This
                            change only exacerbates the issue.
                        </p>

                        <Button className={"mt-4"} variant={"outline"} asChild>
                            <Link href={'/transparency#mobility'}>
                                See the data
                            </Link>
                        </Button>
                    </div>

                    <div className={"w-96 min-w-64 flex-grow border-2 p-8 rounded shadow-lg"}
                         aria-label={"figures for student population"}>

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

const DrawnOval = () => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2200 800' fill='hsl(var(--primary))' width={"350"}>
            <path
                d='M1136 719c-183.3-3.2-366-25-546-59.7a1894.8 1894.8 0 0 1-186.9-44c-52.6-16-105.5-34.8-151.3-66-31.2-23.1-65.8-42.5-91.1-72.8-51.6-56-55.7-137.1-2.2-193.5 61.2-64 150.8-89.7 233.5-113.6 118.3-32.7 240.9-42.7 362-57.7C1083.5 57 1427 73.3 1747 170c-11.7-5.7-5.7-17.6 5.5-12a3350 3350 0 0 1 30.3 24.2c13.2 4.2 26 9.4 39 14.4 95.4 38.6 253.7 112.3 258 230.2-1.9 111-194.4 170.1-282.6 199.2-81.6 24.4-165.4 39.6-248 60.5-135.7 27.7-274.9 34.7-413.2 32.5Zm-61.1-24c133.1 3.5 266.5-2.5 398.9-17.5 51.3-6.4 102.6-13.6 153.4-23.5a770 770 0 0 0 170.4-70c-168.5 51-344.3 73-519.3 85.8-179.1 11-359.2 11.9-538-4 110.9 15.7 222.6 25.8 334.6 29.3Zm-178.5-32.2c191.7 6 384 0 574.3-24.7 124.8-16.3 249.5-39.7 368.5-81.3 95.9-68 162.5-184.4 47-271l-48-40.8c-33.6-13-68.2-23.3-102.8-33.4-3.5 3.5-9.3 1-11.4-3-139-39.9-283.5-53.3-427.5-60.3-247.7-11-496.5 10.7-739.8 58A1909.1 1909.1 0 0 0 388 248c-24.4 8-48.8 16.1-72.5 26-18 11.4-35 24.2-51.4 37.7-38 32.4-76.3 77.4-69.5 130.8 7 14.5 16.7 27.6 27.8 39.3 155.2 149 467.1 171.3 674 181Zm942.2-88.6a638 638 0 0 1-104.4 56c90.5-24.4 295.9-83.4 326.1-179.8 29-120.2-155.9-208-246.8-243.2 11.3 9 22 19.1 33.7 27.6 21.9 8 43 17.7 64.1 27.7 32.3 16 63.5 35.2 89.7 60.2 59.4 54.8 57.6 125.7-8.6 173.8-28.6 22-61.5 37.5-94.4 51.8-19.5 9.3-42 13.2-59.4 25.9ZM254 532.2a640.1 640.1 0 0 0 54.3 27 365.2 365.2 0 0 1-93.3-65c10.8 14.5 23 29.3 39 38Zm1651.3-248c98.3 78 58.8 185-23.5 256.5 206.6-78.5 185.6-195.9-3.3-279.2l26.8 22.7ZM195.5 491.6c-13.3-21.5-16.3-46.8-24-70.4-16-79.6 66.5-128.3 129-155 96.8-59.8 205.1-98.7 315.4-125.7-128.1 17.6-410 59.6-469.4 186.4-29.2 58.5 1.5 126.2 49 164.7Zm-8.8-107.1-.7 3.6c11.5-29.3 32-53.8 55-74.8-24.5 17.2-48.1 41-54.3 71.2ZM397 229.4c-5.3 2.3-10.5 4.8-15.6 7.5 143-43 291-66.3 439.2-83.8a2987.2 2987.2 0 0 1 519.8-14.3c-193.6-22.1-389.2-28-583.5-12.5-45 3.6-88.9 15.6-132.7 25.6A1235.4 1235.4 0 0 0 397 229.4Zm1336.8-31.2c25.6 7 51.1 14.5 76.2 23.2l-34-28c-20-6.9-40-13.6-60.4-19.3a1814 1814 0 0 0-135.3-34.2 2254.7 2254.7 0 0 0-695.7-33.4c196.8-6.7 394 7.8 588.6 37.5 36.4 5.8 72.7 12.1 109 19 50.9 8.8 104.7 12.5 151.6 35.2Z'></path>
        </svg>
    )
}
