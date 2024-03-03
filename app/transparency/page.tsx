import {Separator} from "@/components/ui/separator";

export default function Transparency() {
    return (
        <main className={"space-y-8"}>
            <section className={"space-y-8"}>
                <div>
                    <h1 className={"font-black text-4xl md:text-6xl"}>Transparency</h1>
                </div>
                <Separator/>
                <p>
                    In our efforts to be as transparent and honest as possible we provide here our methods
                    and sources for our data and analysis.
                </p>
            </section>
            <section className={"space-y-4"}>
                <h2 className={"text-primary font-black text-2xl md:text-3xl md:text-center"}>Opening remarks</h2>
                <div>
                    <q className={"text-muted-foreground md:text-xl"}>Since at least 2017, the Bath Bursary [...]</q>
                    <p>
                        The data for the value of the bursary comes from the wayback machine, a service that archives
                        websites. The earliest data found using the current URL is from 2017. This means we can only
                        assert
                        changes in the bursary value from 2017 onwards.
                    </p>
                </div>
                <div>
                    <q className={"text-muted-foreground md:text-xl"}>
                        This year marks not only a 20% decrease in the bursary&apos;s effective value [...]
                    </q>
                    <p>
                        The 20% decrease in value is calculated by comparing the value of the bursary in 2017 to the
                        value
                        adjusted for inflation as of March 2024, following the old bursary value of £3000 cash.
                        <br/>
                        Inflation is calculated using the <a
                        className={"text-primary underline decoration-wavy font-bold"}
                        href={'https://www.bankofengland.co.uk/monetary-policy/inflation/inflation-calculator'}>Bank
                        of England calculator</a>.
                    </p>
                </div>

                <div>
                    <q className={"text-muted-foreground md:text-xl"}>[...] overall 47% decrease since 2017.</q>
                    <p>
                        This value is calculated following the same method as the 20% decrease, but using the new
                        bursary
                        value of £1000 cash and £1000 food and drink credits for 2nd and 3rd year students, which are
                        weighted equally. However, it is
                        important to note that food and drink credits do not have the same purchasing power as cash.
                    </p>
                </div>

            </section>
            <section className={"space-y-4"}>
                <h2 className={"text-primary font-black text-2xl md:text-3xl md:text-center"}>Key figures</h2>
                <div id={'value'}>
                    <q className={"text-muted-foreground md:text-xl"}>33% decrease since 2023</q>
                    <p>
                        The Bath Bursary value has dropped for £3000 to £2000. The £2000 figure comes from the <a
                        className={"text-primary underline decoration-wavy font-bold"}
                        href={'https://www.bath.ac.uk/campaigns/the-bath-bursary/'}>University&apos;s website</a>.
                        The £3000 figure can be seen in <a
                        className={"text-primary underline decoration-wavy font-bold"}
                        href={'https://web.archive.org/web/20230725173228/https://www.bath.ac.uk/campaigns/the-bath-bursary/'}>archives
                        of the same page</a> from 2023.
                    </p>
                </div>
                <div id={'income'}>
                    <q className={"text-muted-foreground md:text-xl"}>20% increase in income requirements</q>
                    <p>
                        The Bath Bursary income requirements has increased from an income assessment of £25,000 to
                        £30,000. The £30,000 figure comes from the <a
                        className={"text-primary underline decoration-wavy font-bold"}
                        href={'https://www.bath.ac.uk/campaigns/the-bath-bursary/'}>University&apos;s website</a>.
                        The £25,000 figure can be seen in <a
                        className={"text-primary underline decoration-wavy font-bold"}
                        href={'https://web.archive.org/web/20230725173228/https://www.bath.ac.uk/campaigns/the-bath-bursary/'}>archives
                        of the same page</a> from 2023.
                    </p>
                </div>
                <div id={'enrollment'}>
                    <q className={"text-muted-foreground md:text-xl"}>20,470 of us effected</q>
                    <p>
                        The bursary changes does not only affect the students that are currently using it, it sets
                        a precedent for other bursaries and support schemes. The figure for the number of us attending
                        the University of Bath comes from the <a
                        className={"text-primary underline decoration-wavy font-bold"}
                        href={"https://www.bath.ac.uk/publications/student-numbers/attachments/student-numbers-1-december-2023.pdf"}>University&apos;s
                        enrollment statistics from Dec 2023</a>.
                    </p>
                </div>
            </section>
        </main>
    )
}