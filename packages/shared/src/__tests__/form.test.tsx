import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { z } from "zod";
import {
  Field,
  FormError,
  FormKit,
  FormSuccess,
  SubmitButton,
  useFormKit,
  useFormKitState,
} from "../form";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
});

type Values = z.infer<typeof schema>;

function Fields() {
  const { form, submit } = useFormKit<typeof schema>();
  const { errors } = useFormKitState<typeof schema>();
  return (
    <form onSubmit={form.handleSubmit((v) => submit(v))} noValidate>
      <Field id="name" label="Name" required error={errors.name?.message}>
        <input type="text" {...form.register("name")} />
      </Field>
      <Field id="email" label="Email" required error={errors.email?.message}>
        <input type="email" {...form.register("email")} />
      </Field>
      <SubmitButton>Send</SubmitButton>
      <FormSuccess title="Sent!" />
      <FormError />
    </form>
  );
}

function renderKit(
  onSubmit: (values: Values) => Promise<void> | void,
  defaultValues: Values = { name: "", email: "" }
) {
  return render(
    <FormKit schema={schema} defaultValues={defaultValues} onSubmit={onSubmit}>
      <Fields />
    </FormKit>
  );
}

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/Name/), "Asha");
  await user.type(screen.getByLabelText(/Email/), "asha@example.com");
}

describe("FormKit submit lifecycle", () => {
  it("shows validation errors when submitting an invalid form", async () => {
    const user = userEvent.setup();
    renderKit(async () => {});
    await user.click(screen.getByRole("button", { name: "Send" }));
    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(await screen.findByText("Enter a valid email")).toBeInTheDocument();
  });

  it("reaches the success state on a valid submit and calls onSubmit once", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn(async () => {});
    renderKit(onSubmit);
    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "Send" }));
    expect(await screen.findByRole("status")).toHaveTextContent("Sent!");
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("reaches the error state and surfaces the message when onSubmit throws", async () => {
    const user = userEvent.setup();
    renderKit(async () => {
      throw new Error("Network down");
    });
    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "Send" }));
    expect(await screen.findByText("Network down")).toBeInTheDocument();
  });

  it("falls back to a generic message when onSubmit throws a non-Error", async () => {
    const user = userEvent.setup();
    renderKit(async () => {
      throw "boom";
    });
    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "Send" }));
    expect(await screen.findByText("Something went wrong. Please try again.")).toBeInTheDocument();
  });

  it("shows the busy label and disables the button while submitting", async () => {
    const user = userEvent.setup();
    let release!: () => void;
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    renderKit(async () => {
      await gate;
    });
    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "Send" }));
    const busy = screen.getByRole("button", { name: "Sending…" });
    expect(busy).toBeDisabled();
    release();
    await screen.findByRole("status");
  });
});

describe("Field", () => {
  it("wires aria-invalid, aria-required and the error into aria-describedby", () => {
    render(
      <Field id="email" label="Email" required error="Enter a valid email">
        <input type="email" />
      </Field>
    );
    const input = screen.getByLabelText(/Email/);
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-required", "true");
    expect(input).toHaveAttribute("aria-describedby", "email-error");
    expect(screen.getByRole("alert")).toHaveTextContent("Enter a valid email");
  });

  it("points aria-describedby at the hint when there is no error", () => {
    render(
      <Field id="notes" label="Notes" hint="Optional.">
        <textarea />
      </Field>
    );
    const input = screen.getByLabelText(/Notes/);
    expect(input).toHaveAttribute("aria-describedby", "notes-hint");
    expect(input).not.toHaveAttribute("aria-invalid");
  });

  it("lists both hint and error in aria-describedby", () => {
    render(
      <Field id="notes" label="Notes" hint="Optional." error="Too long">
        <textarea />
      </Field>
    );
    const input = screen.getByLabelText(/Notes/);
    expect(input).toHaveAttribute("aria-describedby", "notes-hint notes-error");
  });
});

describe("useFormKit", () => {
  it("throws when used outside a FormKit", () => {
    function Bad() {
      useFormKit<z.ZodType>();
      return null;
    }
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<Bad />)).toThrow(/must be used inside/);
    spy.mockRestore();
  });
});
