"use server";

export type ConsultationState = {
  status: "idle" | "error" | "success";
  errors?: {
    name?: string;
    phone?: string;
    pincode?: string;
  };
  // Sent back so the form can refill itself — React resets uncontrolled
  // inputs once an action runs.
  values?: {
    name: string;
    phone: string;
    pincode: string;
  };
};

export async function requestConsultation(
  _prevState: ConsultationState,
  formData: FormData,
): Promise<ConsultationState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const pincode = String(formData.get("pincode") ?? "").trim();

  const errors: NonNullable<ConsultationState["errors"]> = {};
  if (name.length < 2) errors.name = "Tell us who we are calling";
  if (phone.replace(/\D/g, "").length < 10)
    errors.phone = "Enter a 10-digit phone number";
  if (!/^\d{6}$/.test(pincode)) errors.pincode = "Enter a 6-digit pin code";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values: { name, phone, pincode } };
  }

  // PLACEHOLDER — the lead is validated but not delivered anywhere yet.
  // Forward name, phone, pincode and the WhatsApp opt-in to the CRM or mailer here.

  return { status: "success" };
}
