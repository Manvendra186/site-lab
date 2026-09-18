"use client";

import {
  Field,
  FormError,
  FormKit,
  FormSuccess,
  SubmitButton,
  useFormKit,
  useFormKitState,
} from "@site-lab/shared";
import { z } from "zod";
import { ROOMS } from "@/data/rooms";

const schema = z.object({
  name: z.string().min(1, "Please tell us your name."),
  email: z.string().email("Please enter a valid email address."),
  arrival: z.string().min(1, "Please choose an arrival date."),
  departure: z.string().min(1, "Please choose a departure date."),
  guests: z.string().min(1, "Please tell us how many of you there are."),
  room: z.string().optional(),
  notes: z.string().optional(),
});

type Values = z.infer<typeof schema>;

function ReserveFields() {
  const { form, submit } = useFormKit<typeof schema>();
  const { errors } = useFormKitState<typeof schema>();
  return (
    <form className="grid gap-8" onSubmit={form.handleSubmit((v) => submit(v))} noValidate>
      <div className="grid gap-8 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name?.message}>
          <input type="text" placeholder="Your name" {...form.register("name")} />
        </Field>
        <Field id="email" label="Email" required error={errors.email?.message}>
          <input type="email" placeholder="you@example.com" {...form.register("email")} />
        </Field>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <Field id="arrival" label="Arrival" required error={errors.arrival?.message}>
          <input type="date" {...form.register("arrival")} />
        </Field>
        <Field id="departure" label="Departure" required error={errors.departure?.message}>
          <input type="date" {...form.register("departure")} />
        </Field>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <Field id="guests" label="Guests" required error={errors.guests?.message}>
          <select {...form.register("guests")}>
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
          </select>
        </Field>
        <Field id="room" label="Room preference" hint="Optional — we will do our best.">
          <select {...form.register("room")}>
            <option value="">No preference</option>
            {ROOMS.map((r) => (
              <option key={r.slug} value={r.slug}>
                {r.name}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field id="notes" label="Notes" hint="Anything we should know. Optional.">
        <textarea
          rows={4}
          placeholder="Arrival time, dietary needs, the kind of quiet you are after."
          {...form.register("notes")}
        />
      </Field>
      <FormError />
      <SubmitButton>Request to reserve</SubmitButton>
      <FormSuccess
        title="Thank you — we have your request."
        body="This is a demonstration; nothing was sent or stored. For a real stay we would reply within one working day."
      />
    </form>
  );
}

export function ReserveForm() {
  return (
    <FormKit
      schema={schema}
      defaultValues={
        {
          name: "",
          email: "",
          arrival: "",
          departure: "",
          guests: "2",
          room: "",
          notes: "",
        } satisfies Values
      }
      onSubmit={async () => {
        // Demo only — no data is sent or stored.
        await new Promise((resolve) => setTimeout(resolve, 600));
      }}
    >
      <ReserveFields />
    </FormKit>
  );
}
