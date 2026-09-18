"use client";

import {
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useMemo,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { useForm, type FieldValues, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type Status = "idle" | "submitting" | "success" | "error";

interface FormKitValue<T extends FieldValues> {
  form: UseFormReturn<T>;
  status: Status;
  submitError: string | null;
  submit: (values: T) => Promise<void>;
}

const FormKitContext = createContext<FormKitValue<never> | null>(null);

export interface FormKitProps<T extends z.ZodType> {
  schema: T;
  defaultValues: z.infer<T>;
  onSubmit: (values: z.infer<T>) => Promise<void> | void;
  children: ReactNode;
}

/**
 * Form behavior kit: RHF + zod, submit lifecycle (idle → submitting → success | error).
 * Renders no visual language — the site styles [data-field], [data-status], etc.
 */
export function FormKit<T extends z.ZodType>({
  schema,
  defaultValues,
  onSubmit,
  children,
}: FormKitProps<T>) {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onBlur",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submit = useMemo(
    () =>
      async (values: z.infer<T>) => {
        setStatus("submitting");
        setSubmitError(null);
        try {
          await onSubmit(values);
          setStatus("success");
        } catch (err) {
          setStatus("error");
          setSubmitError(
            err instanceof Error ? err.message : "Something went wrong. Please try again."
          );
        }
      },
    [onSubmit]
  );

  const value = useMemo(() => ({ form, status, submitError, submit }), [form, status, submitError, submit]);

  return (
    <FormKitContext.Provider value={value as FormKitValue<never>}>
      {children}
    </FormKitContext.Provider>
  );
}

export function useFormKit<T extends z.ZodType>() {
  const ctx = useContext(FormKitContext);
  if (!ctx) throw new Error("useFormKit must be used inside <FormKit>");
  return ctx as unknown as FormKitValue<z.infer<T>>;
}

export interface FieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}

/**
 * Accessible field wrapper: label + hint + control + error.
 * Injects id / aria-invalid / aria-describedby / aria-required into the control.
 */
export function Field({ id, label, error, hint, required, children }: FieldProps) {
  const describedBy =
    [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(" ") ||
    undefined;

  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
        "aria-required": required ? true : undefined,
      })
    : children;

  return (
    <div data-field>
      <label htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} data-field-hint>
          {hint}
        </p>
      ) : null}
      {control}
      {error ? (
        <p id={`${id}-error`} role="alert" data-field-error>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export interface SubmitButtonProps {
  children: ReactNode;
  busyLabel?: string;
  disabled?: boolean;
  className?: string;
}

export function SubmitButton({
  children,
  busyLabel = "Sending…",
  disabled,
  className,
}: SubmitButtonProps) {
  const { status } = useFormKit<z.ZodType>();
  const busy = status === "submitting";
  return (
    <button type="submit" className={className} disabled={disabled || busy} data-status={status}>
      {busy ? busyLabel : children}
    </button>
  );
}

export function FormSuccess({ title, body }: { title: string; body?: string }) {
  const { status } = useFormKit<z.ZodType>();
  if (status !== "success") return null;
  return (
    <div role="status" data-form-success>
      <strong>{title}</strong>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

export function FormError({
  fallback = "Something went wrong. Please try again.",
}: {
  fallback?: string;
}) {
  const { status, submitError } = useFormKit<z.ZodType>();
  if (status !== "error") return null;
  return (
    <p role="alert" data-form-error>
      {submitError ?? fallback}
    </p>
  );
}
