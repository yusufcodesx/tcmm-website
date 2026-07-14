import { useState } from "react";

const FAQS = [
    {
        q: "What is the Tripod Cybersecurity Maturity Model (TCMM)?",
        a: "TCMM is a practical framework for assessing and improving an organisation's cybersecurity posture across people, processes and technology.",
    },
    {
        q: "Who should use TCMM?",
        a: "Organisations of any size across Africa looking to identify vulnerabilities, prioritise improvements, and meet compliance expectations.",
    },
    {
        q: "How long does an assessment take?",
        a: "A full assessment typically takes 2–6 weeks depending on scope, but an initial maturity snapshot can be produced in a few days.",
    },
    {
        q: "Is TCMM compliant with international standards?",
        a: "TCMM aligns with common best-practices and international standards such as ISO 27001, and can help organisations prepare for formal certification.",
    },
    {
        q: "Do you provide remediation assistance?",
        a: "Yes — we provide prioritized recommendations and can support implementation through consulting or managed services.",
    },
    {
        q: "How can we get started?",
        a: "Click 'Start Your Cybersecurity Assessment' in the header or contact us through the Contact section to schedule an intake.",
    },
];

export default function TcmmFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="faq" className="bg-white border-t border-[#EDE4D8] py-20">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1C1009] mb-6">Frequently Asked Questions</h2>
                <p className="text-sm text-[#5C4A38] mb-8 max-w-2xl">Answers to common questions about the TCMM assessment and our services.</p>

                <div className="space-y-3">
                    {FAQS.map(({ q, a }, i) => (
                        <div key={q} className="border border-[#EDE4D8] rounded-md overflow-hidden">
                            <button
                                onClick={() => toggle(i)}
                                aria-expanded={openIndex === i}
                                className="w-full text-left px-4 py-3 flex items-center justify-between gap-4 hover:bg-[#FDF6EE]"
                            >
                                <span className="text-sm font-medium text-[#1C1009]">{q}</span>
                                <span className={`text-[#C05621] font-semibold transform transition-transform duration-200 ${openIndex === i ? "rotate-45" : "rotate-0"}`}>
                                    {openIndex === i ? "—" : "+"}
                                </span>
                            </button>

                            <div className={`px-4 pb-4 text-sm text-[#5C4A38] transition-all duration-200 ${openIndex === i ? "block" : "hidden"}`}>
                                <p className="pt-2">{a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
