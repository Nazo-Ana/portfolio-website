export type ContactPayload = {
  name: string
  email: string
  message: string
}

export type ContactResult = {
  ok: boolean
  message: string
}

export async function submitContactForm(payload: ContactPayload): Promise<ContactResult> {
  await new Promise((resolve) => {
    window.setTimeout(resolve, 650)
  })

  return {
    ok: true,
    message: `Thanks, ${payload.name}. Your message is ready for follow-up.`,
  }
}
