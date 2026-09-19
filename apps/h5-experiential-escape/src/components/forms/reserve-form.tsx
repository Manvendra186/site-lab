"use client";

import { useState } from "react";
import { z } from "zod";
import {
  Field,
  FormError,
  FormKit,
  FormSuccess,
  SubmitButton,
  useFormKit,
  useFormKitState,
} from "@site-lab/shared";
import { STAYS } from "@/data/stays";
import { RESERVE } from "@/data/content";
import { cx } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please tell us your name."),
  email: z.string().email("Please tell us a valid email."),
  arrival: z.string().min(1, "Please choose an arrival date."),
  departure: z.string().min(1, "Please choose a departure date."),
  guests: z.coerce.number().int().min(1, "At least one guest.").max(6, "Up to six guests."),
  stay: z.string().min(1, "Please choose a stay."),
  message: z.string().optional(),
});

type Values = z.infer<typeof schema>;

const defaultValues: Values = {
  name: "",
  email: "",
  arrival: "",
  departure: "",
  guests: 2,
  stay: STAYS[0].slug,
  message: "",
};

/**
 * The reserve form — the H5 signature.
 * RHF + zod, with a submit lifecycle (idle → submitting → success | error).
 * This is a demonstration: nothing is sent or stored.
 */
export function ReserveForm() {
  const [submitted, setSubmitted] = useState<Values | null>(null);

  const onSubmit = async (values: Values) => {
    // Demonstration only — simulate a short network round-trip.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(values);
  };

  return (
    <FormKit schema={schema} defaultValues={defaultValues} onSubmit={onSubmit}>
      <ReserveFormFields />
      {submitted ? (
        <FormSuccess
          title="Thank you — we have your request."
          body="We will reply within one working day. (This is a demonstration; nothing was sent or stored.)"
        />
      ) : null}
      <FormError />
    </FormKit>
  );
}

function ReserveFormFields() {
  const { form, submit } = useFormKit<typeof schema>();
  const state = useFormKitState<typeof schema>();

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit((values) => submit(values))}
      className="grid gap-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field
          id="name"
          label="Name"
          required
          error={state.errors.name?.message}
        >
          <input
            type="text"
            autoComplete="name"
            className={inputClass}
            {...form.register("name")}
          />
        </Field>

        <Field
          id="email"
          label="Email"
          required
          error={state.errors.email?.message}
        >
          <input
            type="email"
            autoComplete="email"
            className={inputClass}
            {...form.register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Field
          id="arrival"
          label="Arrival"
          required
          error={state.errors.arrival?.message}
        >
          <input type="date" className={inputClass} {...form.register("arrival")} />
        </Field>

        <Field
          id="departure"
          label="Departure"
          required
          error={state.errors.departure?.message}
        >
          <input type="date" className={inputClass} {...form.register("departure")} />
        </Field>

        <Field
          id="guests"
          label="Guests"
          required
          error={state.errors.guests?.message}
        >
          <input
            type="number"
            min={1}
            max={6}
            className={inputClass}
            {...form.register("guests")}
          />
        </Field>
      </div>

      <Field
        id="stay"
        label="Stay"
        required
        error={state.errors.stay?.message}
      >
        <select className={inputClass} {...form.register("stay")}>
          {STAYS.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name} — {s.rate}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id="message"
        label="Anything else"
        hint="A preference, a question, a passage you would like."
        error={state.errors.message?.message}
      >
        <textarea
          rows={4}
          className={cx(inputClass, "resize-y")}
          {...form.register("message")}
        />
      </Field>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-md text-xs leading-relaxed text-slate/60">{RESERVE.demoNote}</p>
        <SubmitButton className="bg-sky px-8 py-3 text-sm font-medium tracking-wide text-ice hover:bg-sky-deep">
          Send request
        </SubmitButton>
      </div>
    </form>
  );
}

const inputClass =
  "w-full border border-stone bg-ice px-4 py-3 text-sm text-slate outline-none transition-colors duration-200 placeholder:text-slate/40 focus:border-sky";