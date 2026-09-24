"use client";

import { useActionState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { IconBrandWhatsapp, IconCircleCheck } from "@tabler/icons-react";
import { requestConsultation, type ConsultationState } from "@/app/actions";

const initialState: ConsultationState = { status: "idle" };

const fields = [
  {
    name: "name",
    label: "Full name",
    placeholder: "Full Name",
    type: "text",
    autoComplete: "name",
    inputMode: "text",
  },
  {
    name: "phone",
    label: "Phone number",
    placeholder: "Phone Number",
    type: "tel",
    autoComplete: "tel",
    inputMode: "tel",
  },
  {
    name: "pincode",
    label: "Pin code",
    placeholder: "Pin code",
    type: "text",
    autoComplete: "postal-code",
    inputMode: "numeric",
  },
] as const;

export function ConsultationBand() {
  const reduceMotion = useReducedMotion();
  const [state, formAction, pending] = useActionState(
    requestConsultation,
    initialState,
  );

  return (
    <section className="w-full bg-background-light py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <motion.div
          className="relative isolate overflow-hidden rounded-3xl"
          initial={{
            opacity: 0,
            transform: reduceMotion ? "translateY(0px)" : "translateY(24px)",
          }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <Image
            src="/hero/sofa.jpg"
            alt="Leather sofa sets finished on our factory floor"
            fill
            sizes="(min-width: 1440px) 1392px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/80 via-ink-deep/20 to-transparent" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-ink-deep/55 to-transparent md:block" />

          <div className="relative grid gap-10 p-5 md:grid-cols-[minmax(0,440px)_1fr] md:p-10 lg:p-14">
            <div className="rounded-2xl bg-background-light p-7 shadow-[0_18px_50px_rgba(34,30,26,0.18)] md:p-9">
              {state.status === "success" ? (
                <div aria-live="polite">
                  <IconCircleCheck
                    size={40}
                    stroke={1.5}
                    className="text-primary-text-dark"
                  />
                  <h2 className="mt-4 font-heading text-[30px] leading-[1.1] tracking-[-0.01em] text-primary-text-dark">
                    Request received
                  </h2>
                  <p className="mt-3 font-sans text-base text-secondary-text-dark">
                    Our team will call you on the number you shared within one
                    working day, with sizes, fabric options and a price.
                  </p>
                </div>
              ) : (
                <>
                  <p className="font-heading text-[26px] leading-[1.15] text-primary-text-dark">
                    Design your
                  </p>
                  <h2 className="font-heading text-[30px] font-bold leading-[1.1] tracking-[-0.01em] text-primary-text-dark md:text-[34px]">
                    Perfect Sitting Space
                  </h2>
                  <p className="mt-2 font-sans text-base text-secondary-text-dark">
                    Work 1:1 with the team that builds it — frame, fabric and
                    fit.
                  </p>

                  <hr className="mt-6 w-28 border-t border-borders-light" />

                  <form action={formAction} className="mt-6">
                    <div className="space-y-4">
                      {fields.map((field) => {
                        const error = state.errors?.[field.name];
                        return (
                          <div key={field.name}>
                            <label htmlFor={field.name} className="sr-only">
                              {field.label}
                            </label>
                            <input
                              id={field.name}
                              name={field.name}
                              type={field.type}
                              inputMode={field.inputMode}
                              autoComplete={field.autoComplete}
                              placeholder={field.placeholder}
                              defaultValue={state.values?.[field.name]}
                              required
                              aria-invalid={error ? true : undefined}
                              aria-describedby={
                                error ? `${field.name}-error` : undefined
                              }
                              className="h-13 w-full rounded-xl border border-borders-light bg-background-light px-4 font-sans text-base text-primary-text-dark outline-none transition-colors duration-150 ease placeholder:text-secondary-text-dark/70 focus:border-primary-text-dark aria-invalid:border-destructive"
                            />
                            {error ? (
                              <p
                                id={`${field.name}-error`}
                                className="mt-1.5 font-sans text-sm text-destructive"
                              >
                                {error}
                              </p>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>

                    <label className="mt-5 flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        name="whatsapp"
                        defaultChecked
                        className="h-5 w-5 shrink-0 rounded border-borders-light accent-brand"
                      />
                      <IconBrandWhatsapp
                        size={20}
                        stroke={1.75}
                        className="text-[#25D366]"
                      />
                      <span className="font-sans text-base text-primary-text-dark">
                        Send me updates on WhatsApp
                      </span>
                    </label>

                    <p className="mt-5 text-center font-sans text-xs text-secondary-text-dark">
                      By continuing, I agree to the{" "}
                      <Link
                        href="#terms"
                        className="text-primary-text-dark underline underline-offset-2"
                      >
                        Terms of Use
                      </Link>{" "}
                      &{" "}
                      <Link
                        href="#privacy"
                        className="text-primary-text-dark underline underline-offset-2"
                      >
                        Privacy Policy
                      </Link>
                    </p>

                    <button
                      type="submit"
                      disabled={pending}
                      className="mt-4 h-14 w-full rounded-full bg-brand font-sans text-base font-semibold uppercase tracking-[0.08em] text-primary-text-dark transition-colors duration-150 ease hover:bg-brand/90 disabled:opacity-60"
                    >
                      {pending ? "Sending…" : "Book a free consultation"}
                    </button>
                  </form>
                </>
              )}
            </div>

            <div className="flex items-end">
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-primary-text-light">
                From our factory to your floor
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
